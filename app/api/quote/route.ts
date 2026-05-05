import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { quoteSchema } from "@/lib/schemas/quote";
import { rateLimit } from "@/lib/ratelimit";
import { env } from "@/lib/env";
import { site } from "@/data/site";

const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  // CSRF / origin guard — same-origin only
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== req.headers.get("host")) {
    return NextResponse.json({ ok: false, error: "Bad origin" }, { status: 400 });
  }

  // Rate limit (5 req / 10 min / IP)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  const rl = rateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please call us." },
      { status: 429 },
    );
  }

  // Parse + validate
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot — if filled, silently accept (don't tip the bot off)
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  // Optional Turnstile verification
  if (env.TURNSTILE_SECRET_KEY) {
    if (!data.turnstileToken) {
      return NextResponse.json(
        { ok: false, error: "Please complete the verification." },
        { status: 400 },
      );
    }
    try {
      const verify = await fetch(TURNSTILE_VERIFY, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: data.turnstileToken,
          remoteip: ip,
        }),
      });
      const result = (await verify.json()) as { success: boolean };
      if (!result.success) {
        return NextResponse.json(
          { ok: false, error: "Verification failed. Please try again." },
          { status: 400 },
        );
      }
    } catch (err) {
      console.error("[quote] Turnstile verify error", err);
      return NextResponse.json(
        { ok: false, error: "Verification error. Please call us instead." },
        { status: 502 },
      );
    }
  }

  // Send email
  if (!env.RESEND_API_KEY) {
    console.warn(
      "[quote] RESEND_API_KEY missing — accepting submission but skipping send",
      sanitize(data),
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const recipients = env.QUOTE_TO_EMAIL.split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const resend = new Resend(env.RESEND_API_KEY);
    await resend.emails.send({
      from: `${site.name} <${env.QUOTE_FROM_EMAIL}>`,
      to: recipients,
      replyTo: data.email,
      subject: `Quote request — ${data.company} (${data.urgency})`,
      text: renderText(data),
      html: renderHtml(data),
    });

    console.log(
      `[quote] sent ok ip=${ip} company=${data.company} urgency=${data.urgency}`,
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote] Resend send error", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send right now. Please call us." },
      { status: 502 },
    );
  }
}

function sanitize(d: ReturnType<typeof quoteSchema.parse>) {
  return {
    name: d.name,
    company: d.company,
    urgency: d.urgency,
  };
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderText(d: ReturnType<typeof quoteSchema.parse>) {
  return `New quote request — Saw Service 3G

Name:     ${d.name}
Company:  ${d.company}
Email:    ${d.email}
Phone:    ${d.phone}
Saw:      ${d.saw}
Location: ${d.location}
Urgency:  ${d.urgency}

Message:
${d.message}
`;
}

function renderHtml(d: ReturnType<typeof quoteSchema.parse>) {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 14px 6px 0;color:#666;font-size:13px;">${k}</td><td style="padding:6px 0;color:#111;font-weight:600;font-size:14px;">${escape(v)}</td></tr>`;
  return `<!doctype html><html><body style="font-family:system-ui,-apple-system,sans-serif;color:#111;background:#fafafa;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #eee;border-radius:12px;padding:28px;">
    <p style="margin:0;color:#ea580c;font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:700;">New quote request</p>
    <h1 style="margin:8px 0 22px;font-size:22px;">${escape(d.company)}</h1>
    <table style="border-collapse:collapse;width:100%;">
      ${row("Name", d.name)}
      ${row("Email", d.email)}
      ${row("Phone", d.phone)}
      ${row("Saw", d.saw)}
      ${row("Location", d.location)}
      ${row("Urgency", d.urgency)}
    </table>
    <p style="margin:18px 0 6px;color:#666;font-size:13px;">Message</p>
    <p style="margin:0;white-space:pre-wrap;line-height:1.55;">${escape(d.message)}</p>
  </div>
</body></html>`;
}

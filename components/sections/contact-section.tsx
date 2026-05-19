import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";

/**
 * ContactSection
 *
 * Replaces the previous <QuoteForm /> on the homepage. The owner prefers
 * to quote by phone or on-site — never via web form — so this section
 * removes the form entirely and surfaces direct-contact channels:
 * phone + email per crew member, hours, and shop address.
 *
 * Section id="contact" — all internal CTAs that previously pointed to
 * `#quote` now point to `#contact`.
 */
export function ContactSection() {
  const [kaylen, mason] = site.contacts;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-white/[0.06] bg-ink-950/60 py-24 md:py-32"
    >
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <p className="eyebrow">Contact us</p>
          <h2
            id="contact-heading"
            className="h-display mt-4 text-4xl text-white sm:text-5xl md:text-6xl"
          >
            Call or message.
            <br />
            <span className="text-spark-500">We&rsquo;ll take it from there.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-300">
            Quotes happen by phone or on-site — bring us the brand, model,
            symptom, and how urgent it is, and we&rsquo;ll give you a straight
            answer.
          </p>

          <a
            href={site.phone.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-spark"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone.display}
          </a>

          <div className="mt-10 grid gap-4 rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6 sm:grid-cols-2">
            <ContactDetail
              Icon={Clock}
              label="Hours"
              lines={[site.hours.weekdays, site.hours.note]}
            />
            <ContactDetail
              Icon={MapPin}
              label="Where we&rsquo;re based"
              lines={[
                `${site.address.streetAddress}`,
                `${site.address.locality}, ${site.address.state} ${site.address.postalCode}`,
                `${site.address.primaryRadiusMiles}-mile primary radius`,
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            <ContactCard
              name={kaylen.name}
              role={kaylen.role}
              phoneDisplay={kaylen.phoneDisplay}
              phoneHref={kaylen.phoneHref}
              emailDisplay={kaylen.emailDisplay}
              emailHref={kaylen.emailHref}
              accent
            />
            <ContactCard
              name={mason.name}
              role={mason.role}
              phoneDisplay={mason.phoneDisplay}
              phoneHref={mason.phoneHref}
              emailDisplay={mason.emailDisplay}
              emailHref={mason.emailHref}
            />

            <Link
              href="#quote"
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-spark-300 transition-colors hover:text-spark-200 focus-visible:outline-none focus-visible:underline"
            >
              Or send us a message
              <ArrowRight
                className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  name,
  role,
  phoneDisplay,
  phoneHref,
  emailDisplay,
  emailHref,
  accent,
}: {
  name: string;
  role: string;
  phoneDisplay: string;
  phoneHref: string;
  emailDisplay: string;
  emailHref: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        accent
          ? "rounded-2xl border border-spark-500/30 bg-gradient-to-br from-ink-900/80 to-ink-900/40 p-6 shadow-[0_18px_40px_-20px_rgba(249,115,22,0.25)]"
          : "rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6"
      }
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-display text-2xl font-bold text-white">{name}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
          {accent ? "Owner" : "Service lead"}
        </p>
      </div>
      <p className="mt-1 text-sm text-ink-300">{role}</p>

      <div className="mt-5 grid gap-3">
        <a
          href={phoneHref}
          className="group inline-flex items-center gap-3 rounded-lg bg-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.08]"
        >
          <Phone className="h-4 w-4 text-spark-400" aria-hidden />
          <span className="font-display text-lg font-semibold text-white">
            {phoneDisplay}
          </span>
        </a>
        <a
          href={emailHref}
          className="group inline-flex items-center gap-3 rounded-lg bg-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.08]"
        >
          <Mail className="h-4 w-4 text-spark-400" aria-hidden />
          <span className="break-all font-mono text-sm text-ink-100">
            {emailDisplay}
          </span>
        </a>
      </div>
    </div>
  );
}

function ContactDetail({
  Icon,
  label,
  lines,
}: {
  Icon: typeof Phone;
  label: string;
  lines: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-spark-400" aria-hidden />
        <p
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400"
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </div>
      <div className="mt-2 space-y-0.5">
        {lines.map((line, i) => (
          <p key={i} className="text-sm text-ink-200">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

/**
 * Standalone in-process test driver for `/api/quote`'s POST handler.
 *
 * Runs the Route Handler directly (no running server) so we can verify the
 * origin guard against six combinations of Origin / Referer / Host without
 * touching the dev server the frontend agent is using.
 *
 * Run with: npx tsx scripts/test-quote-route.ts
 */

import { NextRequest } from "next/server";
import { POST } from "../app/api/quote/route";

type Case = {
  label: string;
  headers: Record<string, string>;
  body: unknown;
  expectStatus: number;
};

const validBody = {
  name: "Test User",
  company: "Test Co",
  email: "test@example.com",
  phone: "555-555-5555",
  saw: "Hyd-Mech S-20",
  location: "Houston, TX",
  urgency: "this_week",
  message: "This is a valid quote-request test payload.",
  website: "",
  consent: true,
};

const cases: Case[] = [
  {
    label: "no Origin / no Referer (must reject)",
    headers: { host: "localhost:3100" },
    body: {},
    expectStatus: 400,
  },
  {
    label: "empty Origin header (must reject)",
    headers: { host: "localhost:3100", origin: "" },
    body: {},
    expectStatus: 400,
  },
  {
    label: "bad Origin (cross-host, must reject)",
    headers: { host: "localhost:3100", origin: "https://evil.com" },
    body: {},
    expectStatus: 400,
  },
  {
    label: "good Origin + empty body (must 422 zod fail)",
    headers: {
      host: "localhost:3100",
      origin: "http://localhost:3100",
      "content-type": "application/json",
    },
    body: {},
    expectStatus: 422,
  },
  {
    label: "good Referer (no Origin) + empty body (must 422 zod fail)",
    headers: {
      host: "localhost:3100",
      referer: "http://localhost:3100/contact",
      "content-type": "application/json",
    },
    body: {},
    expectStatus: 422,
  },
  {
    label: "good Origin + valid body (must 200; no RESEND key => accept-noop)",
    headers: {
      host: "localhost:3100",
      origin: "http://localhost:3100",
      "content-type": "application/json",
      "x-forwarded-for": "10.0.0.99",
    },
    body: validBody,
    expectStatus: 200,
  },
];

async function run() {
  let passed = 0;
  let failed = 0;

  for (const c of cases) {
    const req = new NextRequest("http://localhost:3100/api/quote", {
      method: "POST",
      headers: c.headers,
      body: JSON.stringify(c.body),
    });

    let status: number;
    try {
      const res = await POST(req);
      status = res.status;
    } catch (err) {
      console.error(`[FAIL] ${c.label} — threw: ${(err as Error).message}`);
      failed += 1;
      continue;
    }

    const ok = status === c.expectStatus;
    const tag = ok ? "PASS" : "FAIL";
    if (ok) passed += 1;
    else failed += 1;
    console.log(
      `[${tag}] ${c.label} — got ${status}, expected ${c.expectStatus}`,
    );
  }

  console.log(`\n${passed} passed / ${failed} failed`);
  if (failed > 0) process.exit(1);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

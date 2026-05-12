/**
 * Standalone verifier for the CSP header config in `next.config.ts`.
 * Imports the config module directly and asserts:
 *   - 'unsafe-eval' is gone from script-src
 *   - 'unsafe-inline' is still present (required by Next hydration + JSON-LD)
 *   - GA + tag-manager origins are reachable for the gtag snippet
 *   - resend.com is still in connect-src
 *
 * Run with: npx tsx scripts/test-csp-headers.ts
 */

import config from "../next.config";

async function run() {
  if (!config.headers) {
    console.error("[FAIL] no headers() in config");
    process.exit(1);
  }
  const headerRoutes = await config.headers();
  const all = headerRoutes.flatMap((r) => r.headers);
  const csp = all.find((h) => h.key === "Content-Security-Policy");
  if (!csp) {
    console.error("[FAIL] no CSP header set");
    process.exit(1);
  }

  const value = csp.value;
  console.log("CSP =>", value);
  console.log("");

  const assertions: Array<[string, boolean]> = [
    ["script-src has no 'unsafe-eval'", !/'unsafe-eval'/.test(value)],
    ["script-src has 'unsafe-inline'", /'unsafe-inline'/.test(value)],
    [
      "script-src allows googletagmanager.com",
      /script-src[^;]*www\.googletagmanager\.com/.test(value),
    ],
    [
      "connect-src allows google-analytics",
      /connect-src[^;]*google-analytics\.com/.test(value),
    ],
    [
      "connect-src allows api.resend.com",
      /connect-src[^;]*api\.resend\.com/.test(value),
    ],
    ["frame-ancestors 'none' present", /frame-ancestors 'none'/.test(value)],
  ];

  let failed = 0;
  for (const [label, pass] of assertions) {
    console.log(`[${pass ? "PASS" : "FAIL"}] ${label}`);
    if (!pass) failed += 1;
  }
  if (failed > 0) process.exit(1);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

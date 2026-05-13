import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-inline' stays: Next.js hydration scripts + inline JSON-LD
      // both require it.
      // 'unsafe-eval' is RESTORED: while three.js itself doesn't use eval(),
      // React Three Fiber + @react-three/drei + Next.js's dev runtime use
      // `new Function(...)` for shader / reconciler hot paths. Removing it
      // caused the hero R3F blade to fail to render on dev and prod alike
      // (verified by Human CEO 2026-05-13). Restoring documented residual
      // risk per CLAUDE.md §5 Pentest Notes.
      // googletagmanager.com is required for the GA snippet loaded via
      // @next/third-parties/google.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
      "font-src 'self' data:",
      // GA beacon endpoints + Resend API.
      "connect-src 'self' https://api.resend.com https://www.google-analytics.com https://*.analytics.google.com https://*.google-analytics.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const config: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default config;

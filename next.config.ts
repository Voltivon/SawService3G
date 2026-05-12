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
      // both require it. Removing 'unsafe-eval' — React Three Fiber /
      // three.js do not use Function/eval in production builds and Next
      // emits an eval-free runtime. If R3F regresses, restore 'unsafe-eval'
      // and document the reason here.
      // googletagmanager.com is required for the GA snippet loaded via
      // @next/third-parties/google.
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
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

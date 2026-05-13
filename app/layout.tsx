import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import {
  localBusinessJsonLd,
  faqJsonLd,
  servicesJsonLd,
  websiteJsonLd,
  reviewJsonLd,
  organizationCustomersJsonLd,
  safeJsonLd,
} from "@/lib/jsonld";

// Google Analytics 4 measurement ID.
// Update here AND in CLAUDE.md §4 + agent docs if the property changes.
const GA_ID = "G-XDWNTPSF57";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Industrial Band Saw Repair · Houston, TX | ${site.name}`,
    template: `%s · ${site.name}`,
  },
  description: `Authorized Hyd-Mech dealer. 25 years, 3rd-gen family-owned. Mobile industrial band saw repair, anchoring & maintenance from Spring, TX. Call ${site.phone.display}.`,
  applicationName: site.name,
  // All 16 phrases below have measurable US monthly volume per DataForSEO
  // (dataforseo_labs_google_keyword_overview, 2026-05-12). Ordered by impact
  // on this niche: brand-cluster head terms first, generic service second,
  // long-tail parts/welding third. Replaced 10 sub-floor phrases from the
  // prior list with brand-cluster winners.
  keywords: [
    "hyd-mech band saw",       // 480/mo · HIGH · transactional
    "saw service",             // 260/mo · LOW (KD 3) · commercial
    "saw repair near me",      // 210/mo · LOW (KD 16) · commercial
    "band saw repair",         //  90/mo · LOW (KD 12) · transactional
    "band saw repair near me", //  90/mo · LOW (KD 16) · transactional
    "band saw service",        //  30/mo · LOW (KD 3) · commercial
    "hem saw",                 // 1300/mo · KD 4 · transactional
    "metal cutting band saw",  // 2900/mo · HIGH · transactional
    "band saw blade welding",  // 720/mo · HIGH · transactional
    "behringer saw",           // 480/mo · LOW (KD 7) · transactional
    "marvel band saw",         // 390/mo · HIGH · transactional
    "amada saw",               // 320/mo · HIGH · navigational
    "amada band saw",          // 210/mo · HIGH · transactional
    "hem bandsaw",             // 170/mo · KD 12 · transactional
    "hem saw parts",           // 110/mo · LOW · transactional
    "tsune saw",               // 110/mo · LOW (KD 22) · navigational
  ],
  openGraph: {
    type: "website",
    title: `Industrial Band Saw Repair · Houston, TX | ${site.name}`,
    description: `Mobile industrial band saw repair, anchoring & maintenance across Houston & surrounding states. 25 years. Any saw. Any shop.`,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Industrial Band Saw Repair, Houston TX`,
    description: `Mobile, on-site industrial band saw repair, anchoring & maintenance. 25 yrs. Houston + surrounding states.`,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#050403",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        {/* Google tag (gtag.js) — placed immediately after <head> opens per
            Google's spec. Inline (not next/script) so the <script> tags
            appear in the server-rendered HTML, which is required for
            Google's tag detector + crawlers that don't execute JS, AND
            ensures the tag fires on every page load even if React
            hydration fails. CSP allows this: 'unsafe-inline' in script-src
            + googletagmanager.com whitelisted in script-src/img-src,
            google-analytics.com in connect-src/img-src. */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
      </head>
      <body className="bg-metal">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(localBusinessJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteJsonLd()) }}
        />
        {servicesJsonLd().map((s, i) => (
          <script
            key={`svc-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(s) }}
          />
        ))}
        {reviewJsonLd().map((r, i) => (
          <script
            key={`rev-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(r) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(organizationCustomersJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd()) }}
        />
      </body>
    </html>
  );
}

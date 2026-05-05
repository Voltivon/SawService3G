import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import {
  localBusinessJsonLd,
  faqJsonLd,
  servicesJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";

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
  description: `Mobile industrial band saw repair, anchoring & maintenance across Houston, TX & surrounding states. 20+ yrs. Marvel, HEM, Amada, Hyd-Mech & more. Call ${site.phone.display}.`,
  applicationName: site.name,
  keywords: [
    "industrial band saw repair",
    "metal band saw repair Houston",
    "band saw repair Houston",
    "mobile band saw repair Texas",
    "band saw anchoring",
    "band saw relocation",
    "Marvel band saw repair",
    "HEM Saw service",
    "Amada saw repair",
    "Hyd-Mech repair",
    "Behringer saw repair",
    "Tsune saw repair",
    "preventive maintenance saw",
    "metal fabrication saw service Houston",
    "saw blade tracking repair",
    "saw drive system repair",
  ],
  openGraph: {
    type: "website",
    title: `Industrial Band Saw Repair · Houston, TX | ${site.name}`,
    description: `Mobile industrial band saw repair, anchoring & maintenance across Houston & surrounding states. 20+ years. Any saw. Any shop.`,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Industrial Band Saw Repair, Houston TX`,
    description: `Mobile, on-site industrial band saw repair, anchoring & maintenance. 20+ yrs. Houston + surrounding states.`,
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
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        {servicesJsonLd().map((s, i) => (
          <script
            key={`svc-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
        />
      </body>
    </html>
  );
}

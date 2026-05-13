import type { Metadata } from "next";
import { LocationPage } from "@/components/sub-page/location-page";
import { katyConfig } from "@/data/service-area";
import { site } from "@/data/site";

const ROUTE = "/service-area/katy-tx";

export const metadata: Metadata = {
  title: { absolute: katyConfig.meta.title },
  description: katyConfig.meta.description,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: katyConfig.meta.title,
    description:
      katyConfig.meta.ogDescription ?? katyConfig.meta.description,
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: katyConfig.meta.title,
    description:
      katyConfig.meta.twitterDescription ?? katyConfig.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocationPage city={katyConfig} />;
}

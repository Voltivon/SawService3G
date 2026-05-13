import type { Metadata } from "next";
import { LocationPage } from "@/components/sub-page/location-page";
import { houstonConfig } from "@/data/service-area";
import { site } from "@/data/site";

const ROUTE = "/service-area/houston-tx";

export const metadata: Metadata = {
  title: { absolute: houstonConfig.meta.title },
  description: houstonConfig.meta.description,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: houstonConfig.meta.title,
    description:
      houstonConfig.meta.ogDescription ?? houstonConfig.meta.description,
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: houstonConfig.meta.title,
    description:
      houstonConfig.meta.twitterDescription ?? houstonConfig.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocationPage city={houstonConfig} />;
}

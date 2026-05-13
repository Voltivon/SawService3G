import type { Metadata } from "next";
import { LocationPage } from "@/components/sub-page/location-page";
import { cypressConfig } from "@/data/service-area";
import { site } from "@/data/site";

const ROUTE = "/service-area/cypress-tx";

export const metadata: Metadata = {
  title: { absolute: cypressConfig.meta.title },
  description: cypressConfig.meta.description,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: cypressConfig.meta.title,
    description:
      cypressConfig.meta.ogDescription ?? cypressConfig.meta.description,
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: cypressConfig.meta.title,
    description:
      cypressConfig.meta.twitterDescription ?? cypressConfig.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocationPage city={cypressConfig} />;
}

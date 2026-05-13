import type { Metadata } from "next";
import { LocationPage } from "@/components/sub-page/location-page";
import { conroeConfig } from "@/data/service-area";
import { site } from "@/data/site";

const ROUTE = "/service-area/conroe-tx";

export const metadata: Metadata = {
  title: { absolute: conroeConfig.meta.title },
  description: conroeConfig.meta.description,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: conroeConfig.meta.title,
    description:
      conroeConfig.meta.ogDescription ?? conroeConfig.meta.description,
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: conroeConfig.meta.title,
    description:
      conroeConfig.meta.twitterDescription ?? conroeConfig.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocationPage city={conroeConfig} />;
}

import type { Metadata } from "next";
import { LocationPage } from "@/components/sub-page/location-page";
import { theWoodlandsConfig } from "@/data/service-area";
import { site } from "@/data/site";

const ROUTE = "/service-area/the-woodlands-tx";

export const metadata: Metadata = {
  title: { absolute: theWoodlandsConfig.meta.title },
  description: theWoodlandsConfig.meta.description,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: theWoodlandsConfig.meta.title,
    description:
      theWoodlandsConfig.meta.ogDescription ??
      theWoodlandsConfig.meta.description,
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: theWoodlandsConfig.meta.title,
    description:
      theWoodlandsConfig.meta.twitterDescription ??
      theWoodlandsConfig.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocationPage city={theWoodlandsConfig} />;
}

import type { Metadata } from "next";
import { LocationPage } from "@/components/sub-page/location-page";
import { springConfig } from "@/data/service-area";
import { site } from "@/data/site";

const ROUTE = "/service-area/spring-tx";

export const metadata: Metadata = {
  title: { absolute: springConfig.meta.title },
  description: springConfig.meta.description,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: springConfig.meta.title,
    description:
      springConfig.meta.ogDescription ?? springConfig.meta.description,
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: springConfig.meta.title,
    description:
      springConfig.meta.twitterDescription ?? springConfig.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocationPage city={springConfig} />;
}

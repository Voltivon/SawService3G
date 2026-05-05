import { site } from "@/data/site";
import { faq } from "@/data/faq";
import { coverage } from "@/data/coverage";
import { services } from "@/data/services";

const LB_ID = `${site.url}/#localbusiness`;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": LB_ID,
    name: site.name,
    legalName: site.name,
    description: site.description,
    slogan: site.tagline,
    telephone: site.phone.display,
    email: site.email.display,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    priceRange: "$$",
    foundingDate: String(site.founded),
    knowsAbout: [
      "industrial band saw repair",
      "band saw anchoring",
      "band saw relocation",
      "preventive maintenance",
      "metal fabrication saw service",
      "blade tracking",
      "saw hydraulic repair",
      "saw drive system repair",
    ],
    contactPoint: site.contacts.map((c) => ({
      "@type": "ContactPoint",
      contactType: "service",
      name: c.name,
      telephone: c.phoneDisplay,
      email: c.emailDisplay,
      areaServed: "US-TX",
      availableLanguage: ["English"],
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    areaServed: coverage.map((s) => ({
      "@type": "State",
      name: s.name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Band Saw Services",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.blurb,
        },
      })),
    },
  };
}

export function servicesJsonLd() {
  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/#service-${s.slug}`,
    name: s.title,
    description: s.blurb,
    serviceType: s.title,
    provider: { "@id": LB_ID },
    areaServed: coverage.map((c) => ({ "@type": "State", name: c.name })),
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Metal fabrication shops, machine shops, steel service centers, oil & gas, manufacturing facilities",
    },
  }));
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": LB_ID },
    inLanguage: "en-US",
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

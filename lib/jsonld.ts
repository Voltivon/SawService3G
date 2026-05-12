import { site } from "@/data/site";
import { faq } from "@/data/faq";
import { coverage } from "@/data/coverage";
import { services } from "@/data/services";
import { customers } from "@/data/customers";
import { team } from "@/data/team";
import { testimonials } from "@/data/testimonials";
import { brands } from "@/data/brands";

const LB_ID = `${site.url}/#localbusiness`;

export function localBusinessJsonLd() {
  const dealerBrands = brands.filter((b) => b.authorized).map((b) => b.name);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": LB_ID,
    name: site.name,
    alternateName: ["Saw Service 3G LLC", "SS3G"],
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
      "metal band saw repair",
      "band saw anchoring",
      "band saw relocation",
      "preventive maintenance",
      "metal fabrication saw service",
      "blade tracking",
      "saw hydraulic repair",
      "saw drive system repair",
      "Hyd-Mech band saws",
    ],
    award: dealerBrands.map((b) => `Authorized ${b} Dealer`),
    employee: team.map((t) => ({
      "@type": "Person",
      name: t.name,
      jobTitle: t.role,
      description: t.bio,
    })),
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
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.locality,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.address.geo.lat,
        longitude: site.address.geo.lng,
      },
      geoRadius: `${site.address.primaryRadiusMiles} mi`,
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
    paymentAccepted: ["ACH", "Check", "Invoice (Net 30)"],
    currenciesAccepted: "USD",
    hasCredential: dealerBrands.map((b) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Authorized Dealer",
      recognizedBy: { "@type": "Organization", name: b },
    })),
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
    aggregateRating: undefined, // populate once we have real Google review data
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
        "Metal fabrication shops, machine shops, steel service centers, oil & gas, manufacturing facilities, CNC shops",
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

export function reviewJsonLd() {
  return testimonials.map((t, i) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${site.url}/#review-${i + 1}`,
    itemReviewed: { "@id": LB_ID },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: t.attribution,
      ...(t.attributionRole && { jobTitle: t.attributionRole }),
    },
  }));
}

export function organizationCustomersJsonLd() {
  // Lists real B2B customer relationships as Organization entities to enrich
  // semantic graph. Publish only after written permission.
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.url}/#customers`,
    name: "Trusted by — Saw Service 3G customers",
    itemListElement: customers.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Organization", name: c.name },
    })),
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

export const site = {
  name: "Saw Service 3G",
  tagline: "We come to you. Any saw. Any shop.",
  description:
    "25 years of mobile, on-site industrial band saw repair, anchoring, and preventive maintenance across the Greater Houston Area and surrounding states. Third-generation family-owned. Authorized Hyd-Mech dealer.",
  phone: {
    display: "(281) 704-5589",
    href: "tel:+12817045589",
  },
  email: {
    display: "kaylensaws@yahoo.com",
    href: "mailto:kaylensaws@yahoo.com",
  },
  contacts: [
    {
      name: "Kaylen",
      role: "Owner — 3rd Generation",
      phoneDisplay: "(281) 704-5589",
      phoneHref: "tel:+12817045589",
      emailDisplay: "kaylensaws@yahoo.com",
      emailHref: "mailto:kaylensaws@yahoo.com",
    },
    {
      name: "Mason",
      role: "Service Lead",
      phoneDisplay: "(713) 857-2882",
      phoneHref: "tel:+17138572882",
      emailDisplay: "sawserviceray@gmail.com",
      emailHref: "mailto:sawserviceray@gmail.com",
    },
  ],
  hours: {
    weekdays: "Mon – Fri · 8:00 AM – 5:00 PM",
    note: "Come-early / stay-late and weekends available — time-and-a-half for extended hours and weekend calls",
  },
  address: {
    streetAddress: "6822 Ambler Drive",
    locality: "Spring",
    region: "Greater Houston Area",
    state: "TX",
    postalCode: "77379",
    serviceArea: "Greater Houston + surrounding states",
    primaryRadiusMiles: 100,
    geo: { lat: 30.0799, lng: -95.4172 },
  },
  // Started in 2001 by Kaylen's father, "DoAll Dave"; Kaylen joined in 2019
  // and took over in 2024. Third generation overall (grandfather → father →
  // Kaylen) — hence "3G".
  founded: 2001,
  url: "https://sawservice3g.com",
  authorizedDealer: ["Hyd-Mech"] as const,
  generation: "3rd",
} as const;

export type Site = typeof site;

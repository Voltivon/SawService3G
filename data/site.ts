export const site = {
  name: "Saw Service 3G",
  tagline: "We come to you. Any saw. Any shop.",
  description:
    "20+ years of mobile, on-site industrial band saw repair, anchoring, relocation, and preventive maintenance across the Greater Houston Area and surrounding states.",
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
      phoneDisplay: "(281) 704-5589",
      phoneHref: "tel:+12817045589",
      emailDisplay: "kaylensaws@yahoo.com",
      emailHref: "mailto:kaylensaws@yahoo.com",
    },
    {
      name: "Ray",
      phoneDisplay: "(713) 857-2882",
      phoneHref: "tel:+17138572882",
      emailDisplay: "sawserviceray@gmail.com",
      emailHref: "mailto:sawserviceray@gmail.com",
    },
  ],
  hours: {
    weekdays: "Mon – Fri · 8:00 AM – 5:00 PM",
    note: "Early starts and late stays available on request",
  },
  address: {
    region: "Greater Houston Area",
    state: "TX",
    serviceArea: "Greater Houston + surrounding states",
    geo: { lat: 29.7604, lng: -95.3698 },
  },
  founded: 2005,
  url: "https://sawservice3g.com",
} as const;

export type Site = typeof site;

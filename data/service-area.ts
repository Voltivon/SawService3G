/**
 * Service-area city configurations.
 *
 * Each entry drives one page under `app/service-area/<slug>/page.tsx`. The
 * shared `LocationPage` component (in `components/sub-page/location-page.tsx`)
 * consumes one of these configs and renders the full page. Per-page metadata
 * (title, description, OG/Twitter) lives on the page file itself so the
 * `Metadata` export stays a static literal — Next.js requires that.
 *
 * SEO honesty notes (CLAUDE.md §4):
 *  - All drive-time figures are "typical" with a range; never an SLA.
 *  - "Same-day response" → "same-day when possible" / "subject to schedule".
 *  - Customer facility names are never listed — "references on request".
 *  - JLH service capability mentioned only on the Cypress brief, which the
 *    SEO Agent's dispatch note flagged as owner-confirmed for this dispatch.
 *    If owner-verification needs softening before launch, swap to
 *    `brandEmphasis` minus "JLH".
 */

export type CityFaq = { q: string; a: string };

export type CityConfig = {
  /** URL slug, e.g. "houston-tx". Forms `/service-area/<slug>`. */
  slug: string;
  /** City label only, e.g. "Houston". Used in copy and JSON-LD. */
  city: string;
  /** "City, TX" or "City, Texas". Used in display and breadcrumb. */
  cityFull: string;
  /** True only for Spring — swaps hero copy + adds "Our Shop" section. */
  isHomeCity?: boolean;

  /** Plain-language drive description, e.g. "~25-40 min via I-45N". */
  driveTime: string;
  /** Optional short subhead under the drive-time section (e.g. shortest-drive angle). */
  driveTimeAngle?: string;

  /**
   * 2–3 sentence paragraph for the "<City>'s industrial context" H2 section.
   * Hand-tuned per brief. Plain string — kept short so it survives a re-edit.
   */
  industrialContext: string;

  /** 3–4 FAQ entries verbatim from the brief. */
  faq: CityFaq[];

  /**
   * Optional emphasis for the "saws we service" copy. When set, this list is
   * shown verbatim in addition to the standard authorized-Hyd-Mech badge.
   * Used for Cypress (JLH callout) and any future city-specific brand
   * priorities. Honesty: only list brands the owner has confirmed we service.
   */
  brandEmphasis?: string[];

  /**
   * Per-page meta block. Kept here so the SEO Agent's exact strings flow
   * through to `<Metadata>` without rewriting on the page file. Each page's
   * `export const metadata` consumes these.
   */
  meta: {
    /** ≤60 char title tag (with brand suffix). */
    title: string;
    /** 140–160 char description. */
    description: string;
    /** og:description (may differ slightly from meta description). */
    ogDescription?: string;
    /** Twitter description (short). */
    twitterDescription?: string;
  };
};

// --- Configs (one per brief) ----------------------------------------------

export const springConfig: CityConfig = {
  slug: "spring-tx",
  city: "Spring",
  cityFull: "Spring, Texas",
  isHomeCity: true,
  driveTime: "We're based right here — minutes from FM 1960, FM 2920, and Hardy Toll Rd.",
  driveTimeAngle: "Same-day local response (subject to schedule).",
  industrialContext:
    "Spring sits at the north edge of Harris County where the FM 1960 and FM 2920 light-fab corridor meets the Hardy Toll Road industrial parks. The base is machine shops, structural-steel sub-fab for oil & gas, and the tubular operations that overlap into the Conroe-Willis corridor a few miles north. It's a quiet but dense industrial pocket — and it's our home.",
  faq: [
    {
      q: "Where is Saw Service 3G located?",
      a: "Right here in Spring, TX. Our shop is the operational base for mobile service across Harris and Montgomery County and the 100-mile primary radius around it.",
    },
    {
      q: "Can you respond same-day in Spring?",
      a: "Almost always — we're local. Same-day when possible; if the schedule is full we book the next available window.",
    },
    {
      q: "Which Spring-area facilities do you already service?",
      a: "Light-industrial machine shops, fab shops, and tubular operations across FM 1960, FM 2920, and Hardy Toll Rd. Specific customer references available on request (with their permission).",
    },
    {
      q: "Is your service area limited to Spring?",
      a: "No. Spring is the home base; the 100-mile primary radius covers Houston (all quadrants), Katy, Cypress, The Woodlands, Conroe, Sugar Land, Pearland, Pasadena, and Baytown.",
    },
  ],
  meta: {
    title: "Band Saw Repair in Spring, TX | Saw Service 3G",
    description:
      "Spring, TX-based industrial band saw repair — on-site service for Hyd-Mech and all major brands. 3rd-generation, 25 yrs. Call (281) 704-5589.",
    ogDescription:
      "Spring, TX-based industrial band saw repair. Authorized Hyd-Mech dealer. 3rd-generation, 25 years on Harris County saws.",
    twitterDescription:
      "Spring, TX-based industrial band saw repair. Authorized Hyd-Mech dealer.",
  },
};

export const houstonConfig: CityConfig = {
  slug: "houston-tx",
  city: "Houston",
  cityFull: "Houston, Texas",
  driveTime:
    "Typical Spring → Houston run is ~25–40 min for inside-the-Loop. Ship Channel, Pasadena, and Deer Park land closer to 45–60 min depending on time of day.",
  industrialContext:
    "Houston's industrial footprint is the largest in our service area: Ship Channel petrochemical fabrication, the NW Houston machine-shop corridor, structural-steel work along Hwy 290 and I-10, and oilfield-services tubular shops clustered through NW Industrial. Most of our Houston accounts sit in one of these four bands — and they're the ones whose saws we already know.",
  faq: [
    {
      q: "How long does it take you to get from Spring to Houston?",
      a: "Most inside-the-Loop runs are 25–40 min from our Spring shop. Ship Channel, Pasadena, and Deer Park land closer to 45–60 min. These are typical drive times, not SLAs.",
    },
    {
      q: "Which Houston facilities do you already service?",
      a: "Industrial fabricators, machine shops, steel service centers, and oilfield-services tubular shops across Harris County. Specific customer references available on request (with their permission).",
    },
    {
      q: "Do you do emergency calls in Houston?",
      a: "Yes — same-day when possible. If a tech is already in your corridor we can often reroute the same shift. Time-and-a-half applies for evenings, weekends, and extended hours.",
    },
    {
      q: "What's your service-area boundary from Spring, TX?",
      a: "100-mile primary radius covering Houston (all quadrants), Katy, Cypress, The Woodlands, Conroe, Sugar Land, Pearland, and Pasadena/Baytown.",
    },
  ],
  meta: {
    title: "Band Saw Repair in Houston, TX | Saw Service 3G",
    description:
      "Mobile industrial band saw repair across Houston, TX — anchoring, drive systems, hydraulics, PM. Authorized Hyd-Mech dealer. Call (281) 704-5589.",
    ogDescription:
      "Mobile industrial band saw repair across Houston, TX. Authorized Hyd-Mech dealer. 3rd-generation Texas business based in Spring, TX.",
    twitterDescription:
      "Mobile industrial band saw repair across Houston, TX. Authorized Hyd-Mech dealer.",
  },
};

export const katyConfig: CityConfig = {
  slug: "katy-tx",
  city: "Katy",
  cityFull: "Katy, Texas",
  driveTime:
    "Typical Spring → Katy run is ~50–65 min via Beltway 8 and the Grand Parkway. If a tech is already west of Houston we can often route through Katy the same shift.",
  industrialContext:
    "Katy's industrial base wraps the Grand Parkway corridor and the Energy Corridor's western edge: metal-building manufacturers strung along I-10 West, oilfield-services packaging and fab work in Cane Island and Pin Oak, and a steady set of machine shops servicing the energy upstream chain. Our trips out are usually one of these three.",
  faq: [
    {
      q: "How long does it take you to reach Katy from Spring?",
      a: "Typically 50–65 min via Beltway 8 and the Grand Parkway. These are typical drive times based on midday traffic — peak hours can push it longer.",
    },
    {
      q: "Which Katy facilities do you already service?",
      a: "Oilfield-services packaging shops, metal-building manufacturers, and machine shops across Grand Pkwy and I-10W. Specific customer references available on request (with their permission).",
    },
    {
      q: "Do you do emergency calls in Katy?",
      a: "Yes — same-day when possible. If a tech is already in West Houston we can often route through Katy the same shift.",
    },
    {
      q: "Is Katy inside your primary service area?",
      a: "Yes. Katy sits well inside the 100-mile primary radius from our Spring shop.",
    },
  ],
  meta: {
    title: "Band Saw Repair in Katy, TX | Saw Service 3G",
    description:
      "Mobile industrial band saw repair across Katy, TX — Grand Pkwy machine shops, fab, oilfield services. Authorized Hyd-Mech dealer. (281) 704-5589.",
    ogDescription:
      "Mobile industrial band saw repair across Katy, TX. Authorized Hyd-Mech dealer. 3rd-generation Texas business based in Spring, TX.",
    twitterDescription:
      "Mobile industrial band saw repair across Katy, TX. Authorized Hyd-Mech dealer.",
  },
};

export const cypressConfig: CityConfig = {
  slug: "cypress-tx",
  city: "Cypress",
  cityFull: "Cypress, Texas",
  driveTime:
    "Typical Spring → Cypress run is ~30–40 min via Hwy 249, Beltway 8, or 290 — corridor-dependent.",
  industrialContext:
    "Cypress sits on the Hwy 290 industrial corridor with strong representation from steel service centers, NW Houston packaging and structural fab, and machine shops along Fairbanks–North Houston. It's also where band-saw OEM JLH Saws is headquartered — they build saws, we service the saws our customers run, including JLH equipment installed alongside Hyd-Mech, DoAll, Marvel, Wells, HE&M, and Kalamazoo lines.",
  brandEmphasis: [
    "Hyd-Mech (authorized)",
    "JLH",
    "DoAll",
    "Marvel",
    "Wells",
    "HE&M",
    "Kalamazoo",
  ],
  faq: [
    {
      q: "How long does it take you to reach Cypress from Spring?",
      a: "About 30–40 min depending on the corridor — Hwy 249, Beltway 8, or 290. Typical drive time, not an SLA.",
    },
    {
      q: "Which Cypress facilities do you already service?",
      a: "Steel service centers, packaging-fab shops, and machine shops along Hwy 290, FM 529, and Fairbanks–North Houston. Specific customer references available on request (with their permission).",
    },
    {
      q: "Do you service JLH-brand band saws?",
      a: "Yes. JLH is headquartered in Cypress; we service their saws on-site alongside Hyd-Mech (where we're the authorized dealer), DoAll, Marvel, Wells, HE&M, Kalamazoo, and other major brands.",
    },
    {
      q: "Do you do emergency calls in Cypress?",
      a: "Yes — same-day when possible. Cypress is well inside the 100-mile primary radius.",
    },
  ],
  meta: {
    title: "Band Saw Repair in Cypress, TX | Saw Service 3G",
    description:
      "Mobile industrial band saw repair in Cypress, TX — service for all major brands. Authorized Hyd-Mech dealer. 25 yrs. Call (281) 704-5589.",
    ogDescription:
      "Mobile industrial band saw repair in Cypress, TX. Authorized Hyd-Mech dealer; we also service JLH, DoAll, Marvel, Wells, HE&M, and Kalamazoo saws.",
    twitterDescription:
      "Mobile industrial band saw repair in Cypress, TX. Authorized Hyd-Mech dealer.",
  },
};

export const theWoodlandsConfig: CityConfig = {
  slug: "the-woodlands-tx",
  city: "The Woodlands",
  cityFull: "The Woodlands, Texas",
  driveTime:
    "Typical Spring → The Woodlands run is ~15–25 min via I-45N — one of the shortest drives in our service area.",
  driveTimeAngle:
    "Closest corridor to our shop outside Spring itself.",
  industrialContext:
    "The Woodlands' industrial base hugs the Hwy 242 / I-45N / Research Forest corridor: energy-sector machine shops, modular-building fabrication, and distribution-center maintenance. Town Center has adjacent light-industrial pockets, and the Conroe-Willis tubular operations a few miles north add to our addressable base on the same trip.",
  faq: [
    {
      q: "How long does it take you to reach The Woodlands from Spring?",
      a: "About 15–25 min via I-45N — one of the shortest drives in our service area.",
    },
    {
      q: "Which Woodlands facilities do you already service?",
      a: "Energy-sector machine shops, modular-building fabrication, and distribution-center maintenance across Hwy 242 and Research Forest. Specific customer references available on request (with their permission).",
    },
    {
      q: "Do you do emergency calls in The Woodlands?",
      a: "Yes — same-day when possible. The Woodlands is our closest corridor outside Spring itself.",
    },
    {
      q: "What's your typical response window for north Houston?",
      a: "Spring, Conroe, and The Woodlands are our three closest corridors — most jobs in this band are same-day or next business day, subject to schedule.",
    },
  ],
  meta: {
    title: "Band Saw Repair in The Woodlands, TX | Saw Service 3G",
    description:
      "Mobile industrial band saw repair in The Woodlands, TX — service for energy-sector machine shops & fab. Authorized Hyd-Mech dealer. (281) 704-5589.",
    ogDescription:
      "Mobile industrial band saw repair in The Woodlands, TX. Authorized Hyd-Mech dealer. ~15–25 min from our Spring shop.",
    twitterDescription:
      "Mobile industrial band saw repair in The Woodlands, TX. Authorized Hyd-Mech dealer.",
  },
};

export const conroeConfig: CityConfig = {
  slug: "conroe-tx",
  city: "Conroe",
  cityFull: "Conroe, Texas",
  driveTime:
    "Typical Spring → Conroe run is ~25–35 min via I-45N. One of our closest corridors after The Woodlands.",
  industrialContext:
    "Conroe's industrial base runs along I-45N: oilfield-services tubular shops, structural-steel and energy fab through the Conroe-Willis corridor, aviation MRO adjacent to Lone Star Executive Airport, and light-industrial machine shops on Loop 336 and SH-242 east-side. The tubular and energy-fab work is a fit for our Hyd-Mech and HE&M capability.",
  faq: [
    {
      q: "How long does it take you to reach Conroe from Spring?",
      a: "About 25–35 min via I-45N. One of our closest corridors after The Woodlands.",
    },
    {
      q: "Which Conroe facilities do you already service?",
      a: "Oilfield-services tubular, structural-steel fab, and light-industrial machine shops across I-45N, Loop 336, and SH-242. Specific customer references available on request (with their permission).",
    },
    {
      q: "Do you do emergency calls in Conroe?",
      a: "Yes — same-day when possible. Conroe sits well inside the 100-mile primary radius from our Spring shop.",
    },
    {
      q: "Do you service the Conroe-Willis tubular and oilfield-services shops?",
      a: "Yes. The I-45N corridor between Conroe and Willis is a strong segment of our customer base — energy-sector tubular and structural-steel work is a direct fit for our Hyd-Mech and HE&M capability.",
    },
  ],
  meta: {
    title: "Band Saw Repair in Conroe, TX | Saw Service 3G",
    description:
      "Mobile industrial band saw repair in Conroe, TX — oilfield-services tubular, fab shops, machine shops. Authorized Hyd-Mech dealer. (281) 704-5589.",
    ogDescription:
      "Mobile industrial band saw repair in Conroe, TX. Authorized Hyd-Mech dealer. Conroe-Willis tubular and energy-fab corridor.",
    twitterDescription:
      "Mobile industrial band saw repair in Conroe, TX. Authorized Hyd-Mech dealer.",
  },
};

/**
 * Stable, deterministic ordering — used by the cross-link footer and by any
 * future sitemap generation. The order is geographic (north→south,
 * then west) so the cross-link block reads naturally.
 */
export const serviceAreaCities: CityConfig[] = [
  springConfig,
  theWoodlandsConfig,
  conroeConfig,
  cypressConfig,
  houstonConfig,
  katyConfig,
];

/** Lookup helper for page files that prefer to import by slug. */
export function cityBySlug(slug: string): CityConfig | undefined {
  return serviceAreaCities.find((c) => c.slug === slug);
}

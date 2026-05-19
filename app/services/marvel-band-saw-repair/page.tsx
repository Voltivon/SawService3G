import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Wrench,
  Gauge,
  Droplets,
  CircuitBoard,
  Disc3,
  Hammer,
  Compass,
} from "lucide-react";
import { site } from "@/data/site";
import { coverage } from "@/data/coverage";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { ClickToCallFab } from "@/components/click-to-call-fab";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Breadcrumbs } from "@/components/sub-page/breadcrumbs";
import { PageHero } from "@/components/sub-page/page-hero";
import { BrandCityMatrix } from "@/components/seo/brand-city-matrix";
import { FailureModesByModel } from "@/components/seo/failure-modes-by-model";
import { safeJsonLd } from "@/lib/jsonld";

const ROUTE = "/services/marvel-band-saw-repair";
const TITLE_TAG = "Marvel Band Saw Repair Houston | Saw Service 3G";
const META_DESC =
  "Houston Marvel band saw repair: Series 8 Mark II/III/IV, Series 81, Premium and Spartan. Decades servicing Marvel saws on site across Texas. Call today.";

export const metadata: Metadata = {
  title: { absolute: TITLE_TAG },
  description: META_DESC,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: "Marvel Band Saw Repair Houston | Every Series, On-Site",
    description:
      "On-site Marvel band saw repair across Houston: Series 8 Mark II/III/IV, Series 81, Premium, Spartan. Decades of experience.",
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvel Band Saw Repair Houston | Every Marvel Series",
    description:
      "Decades servicing Marvel saws on site across Houston & Texas. Every Series 8 through Premium.",
  },
  robots: { index: true, follow: true },
};

// Repair scope mirrors the technician's workbook — generic terms, no
// fabricated part numbers.
const repairAreas: { icon: typeof Wrench; title: string; body: string }[] = [
  {
    icon: Wrench,
    title: "Mechanical",
    body:
      "Guide arms, blade guides, drive belts, tensioners, bearings, chip brushes. Geometry restored so the cut is square again.",
  },
  {
    icon: Compass,
    title: "Feed Worm Gear & Down-Feed",
    body:
      "Marvel's signature feed worm gear assembly — wear inspection, replacement, and re-shimming. Down-feed pressure dialed before sign-off.",
  },
  {
    icon: Droplets,
    title: "Hydraulic",
    body:
      "Power-vise, blade-tension, down-feed, and clamp circuits. Cylinder, hose, valve, and pump diagnosis on your floor.",
  },
  {
    icon: CircuitBoard,
    title: "Electrical & Controls",
    body:
      "Drives, motor starters, contactors, limit switches, prox sensors, blade-break detection. End-to-end wiring sanity check.",
  },
  {
    icon: Disc3,
    title: "Blade Tracking & Tension",
    body:
      "Tracking arms, tension calibration, wheel alignment. Keeps the blade from wandering or fatiguing prematurely.",
  },
  {
    icon: Gauge,
    title: "Coolant & Chip Management",
    body:
      "Coolant pump, lines, nozzles, mix ratio, chip brush. Cooler blades cut faster and last longer.",
  },
  {
    icon: Hammer,
    title: "Calibration & Alignment",
    body:
      "Head/vise squareness, blade-to-vise relationship, miter angle reset. Verified on a test cut before we leave.",
  },
];

const models: { name: string; family: string }[] = [
  { name: "Series 8 Mark II", family: "Vertical · Tilt-frame" },
  { name: "Series 8 Mark III", family: "Vertical · Tilt-frame" },
  { name: "Series 8 Mark IV", family: "Vertical · Tilt-frame" },
  { name: "Series 81", family: "Vertical · Production" },
  { name: "Series 15A9", family: "Vertical · Heavy-section" },
  { name: "Premium 15A", family: "Vertical · Premium line" },
  { name: "Spartan", family: "Vertical · Workhorse" },
  { name: "Marvel Verticals", family: "Legacy verticals" },
];

const commonIssues: { title: string; body: string }[] = [
  {
    title: "Feed worm gear failing",
    body:
      "The hallmark Marvel wear point. Worm and wheel run dry, chips embed in the lube path, the cut starts drifting and the feed rate gets unpredictable. We inspect, replace, and reset the lubrication schedule.",
  },
  {
    title: "Hydraulic down-feed creeping",
    body:
      "Down-feed pressure walks out of tune over time — pump drift, cylinder seal wear, or a partially clogged orifice. We meter-test the circuit and bring it back to spec.",
  },
  {
    title: "Blade tracking off",
    body:
      "Guide-bearing wear or a misaligned tracking arm. Blade walks on the wheel, cut goes out of square, blade life collapses. Tracking is reset and verified under load.",
  },
  {
    title: "Coolant flow & mix issues",
    body:
      "Weak coolant flow, wrong mix ratio, or nozzle wear shortens blade life on tough material like Inconel. We rebuild the coolant side end-to-end.",
  },
];

const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Phone diagnosis",
    body:
      "Call (281) 704-5589. We listen for symptoms, Marvel model, and urgency — and tell you straight if it's a field fix or a factory-line problem.",
  },
  {
    step: "02",
    title: "Schedule & dispatch",
    body:
      "We confirm a window that fits your floor. Most Greater Houston calls are on-site within 72 hours; urgent breakdowns get prioritized.",
  },
  {
    step: "03",
    title: "On-site repair",
    body:
      "Technician arrives with tools and common Marvel wear parts. We diagnose, quote, then fix — on your floor, not in a shop bay.",
  },
  {
    step: "04",
    title: "Test cut & sign-off",
    body:
      "Saw runs a verified test cut before we leave. Invoice goes out after the work is done right. Net 30 ACH or check.",
  },
];

const reasons: { title: string; body: string }[] = [
  {
    title: "Decades on the Amada-Marvel platform",
    body:
      "Marvel has been Amada-owned since 1996, manufactured in Oshkosh WI. Our crew has 25 years of field hours across the same fleets — Series 8, Series 81, Premium and Spartan.",
  },
  {
    title: "Third-generation Houston shop",
    body:
      "Saw Service 3G is the third generation of one Greater Houston metals family. Your Marvel has probably already been serviced by us — or by Kaylen's father.",
  },
  {
    title: "We come to you",
    body:
      "Fully mobile. Your saw stays bolted to your floor; our truck shows up. 100-mile primary radius with surrounding-state coverage for larger jobs.",
  },
];

const faqItems: { q: string; a: string }[] = [
  {
    q: "Are you an authorized Marvel dealer?",
    a: "No. Amada Marvel, Inc. (Oshkosh, WI) is the OEM. Saw Service 3G is an independent shop with decades of experience servicing Marvel band saws across Greater Houston. We work from the technical knowledge built over 25 years on the Amada-Marvel platform — not a dealer certificate.",
  },
  {
    q: "Which Marvel models do you repair?",
    a: "Series 8 Mark II, III, and IV; Series 81; Series 15A9; Premium 15A; Spartan; and legacy Marvel verticals. If your model isn't listed, call (281) 704-5589 with model and serial — we have almost certainly worked on it.",
  },
  {
    q: "Why is my Marvel feed worm gear failing?",
    a: "The feed worm gear is the most common Marvel wear point. Three drivers in our experience: lubrication that has thinned or contaminated with chips, worm-wheel wear from running dry, and feed-rate settings that pushed the saw past its cut-speed window. We inspect on-site, replace if needed, and re-shim before sign-off.",
  },
  {
    q: "How fast can you respond in Houston?",
    a: "Most Greater Houston customers see a technician on-site within 72 hours of the call, often sooner for existing accounts and emergency breakdowns. Time-and-a-half applies for evenings, weekends, and extended hours.",
  },
  {
    q: "Who makes Marvel band saws?",
    a: "Marvel is manufactured by AMADA MARVEL, INC. at 3501 Marvel Drive, Oshkosh, Wisconsin. Amada has owned Marvel since 1996 — the same Oshkosh plant produces both Amada and Marvel saws, which is why our cross-brand expertise transfers cleanly.",
  },
];

// ---------- JSON-LD payloads (page-scoped) ----------

const LB_ID = `${site.url}/#localbusiness`;
const PAGE_URL = `${site.url}${ROUTE}`;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Marvel Band Saw Repair",
  serviceType: "Band saw repair",
  description:
    "On-site repair, calibration, and preventive maintenance for Marvel band saws across the Greater Houston Area and surrounding states.",
  provider: { "@id": LB_ID },
  brand: { "@type": "Brand", name: "Marvel" },
  areaServed: [
    { "@type": "City", name: "Houston" },
    ...coverage.map((c) => ({ "@type": "State" as const, name: c.name })),
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Metal fabrication shops, machine shops, steel service centers, oil & gas, manufacturing facilities, CNC shops",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marvel repair scope",
    itemListElement: repairAreas.map((r, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: r.title,
        description: r.body,
      },
    })),
  },
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${site.url}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Marvel Band Saw Repair",
      item: PAGE_URL,
    },
  ],
};

// -----------------------------------------------------

export default function MarvelBandSawRepairPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Marvel Band Saw Repair" },
          ]}
        />

        <PageHero
          eyebrow="Marvel Service · Independent Shop"
          title={
            <>
              Marvel Band Saw Repair in Houston
              <span className="block text-spark-500">
                Every Marvel Series, On-Site
              </span>
            </>
          }
          lede={
            <>
              On-site Marvel band saw repair from a Houston shop with decades
              on the Amada-Marvel platform. We service every Marvel series we
              come across — Series 8 Mark II/III/IV, Series 81, Series 15A9,
              Premium 15A, Spartan, and the legacy verticals — across Greater
              Houston and surrounding states. Feed worm gears, hydraulics,
              tracking, controls, and calibration. Billed only after the saw
              cuts square again.
            </>
          }
        >
          <Magnetic>
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-spark"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone.display}
            </a>
          </Magnetic>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-ghost"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </PageHero>

        {/* H2 #1 — Lead block / AI Overview target */}
        <section
          aria-labelledby="lead-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">Marvel service in Houston</p>
              <h2
                id="lead-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Marvel band saw repair, done on-site across Houston.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  Marvel verticals — the tilt-frame Series 8, the heavier
                  Series 81 and 15A9, and the Premium and Spartan lines — are
                  built for structural cutting in fabrication shops, steel
                  service centers, and oil &amp; gas yards. When a Marvel
                  goes down, the wrong fix is faster than no fix: a
                  mis-shimmed feed worm gear chews itself, a sticky down-feed
                  walks the cut out of square, and out-of-spec tracking burns
                  blades you just changed.
                </p>
                <p>
                  Saw Service 3G is a Houston-based independent shop. We are
                  not an authorized Marvel dealer — Amada Marvel, Inc. in
                  Oshkosh, Wisconsin is the OEM. What we bring is 25 years
                  and three generations of field hours on Marvel saws, plus
                  cross-brand experience on the wider Amada-Marvel platform.
                  When Series 8 owners call, the guy on the other end has
                  almost certainly already cracked open the same head
                  casting.
                </p>
                <p>
                  Our crew works mobile, so the saw stays bolted to your
                  floor and the truck comes to you. We diagnose, quote, fix,
                  and verify on a real test cut before we leave — and the
                  invoice waits until you have a saw cutting square.
                </p>
                <p>
                  A lot of the Marvel verticals we touch are running up in{" "}
                  <Link
                    href="/service-area/the-woodlands-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    The Woodlands
                  </Link>
                  ,{" "}
                  <Link
                    href="/service-area/conroe-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Conroe
                  </Link>
                  , and the energy-fab shops across north{" "}
                  <Link
                    href="/service-area/houston-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Houston
                  </Link>{" "}
                  — the corridor where structural and oilfield work keeps
                  Series 8s and 15A9s busy. If the blade gives up mid-job we
                  can also{" "}
                  <Link
                    href="/services/band-saw-blade-welding"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    weld a replacement blade
                  </Link>{" "}
                  on the truck before we leave.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #2 — Repairs we perform */}
        <section
          aria-labelledby="repairs-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Scope of work</p>
              <h2
                id="repairs-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Marvel repairs we perform.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Every system on the saw, diagnosed and repaired on your
                floor. We bring tools and the common Marvel wear parts; you
                keep your throughput.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {repairAreas.map((r, i) => (
                <Reveal
                  key={r.title}
                  delay={i * 0.04}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 p-6 transition-colors hover:border-spark-500/40"
                >
                  <r.icon className="h-7 w-7 text-spark-400" aria-hidden />
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-white">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {r.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* H2 #3 — Models we service */}
        <section
          aria-labelledby="models-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Model coverage</p>
              <h2
                id="models-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Marvel models we service.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Every major Marvel series, from the Series 8 Mark family up
                through Premium and the heavier Series 15A9. Don&rsquo;t see
                your model? Call — we&rsquo;ve probably seen it anyway.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul
                role="list"
                className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
              >
                {models.map((m) => (
                  <li
                    key={m.name}
                    className="flex items-baseline justify-between gap-3 rounded-xl border border-white/[0.06] bg-ink-900/40 px-5 py-4 transition-colors hover:border-spark-500/30"
                  >
                    <div>
                      <p className="font-display text-lg font-bold tracking-tight text-white">
                        {m.name}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                        {m.family}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Brand × city matrix — 6 city cards linking to each service-area page */}
        <BrandCityMatrix
          mode="cities-for-brand"
          brandSlug="marvel"
          brandLabel="Marvel"
        />

        {/* Failure modes by model — structured per-series symptom catalog */}
        <FailureModesByModel
          brandSlug="marvel"
          heading="Common Marvel failure modes we see in the field"
          lede="Decades on the Marvel platform — Series 8 verticals through Premium 15A heavy-section units. These are the symptoms operators call us about most, with the causes our crew looks at first."
        />

        {/* H2 #4 — Common issues */}
        <section
          aria-labelledby="issues-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Marvel-specific issues</p>
              <h2
                id="issues-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Common Marvel issues we fix.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Four patterns we see on Marvel verticals more than any
                others. Each one is diagnosable on a single visit.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
              {commonIssues.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 0.05}
                  className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6"
                >
                  <h3 className="font-display text-xl font-bold tracking-tight text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {c.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* H2 #5 — Process */}
        <section
          aria-labelledby="process-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">How it works</p>
              <h2
                id="process-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                From call to cutting again.
              </h2>
            </Reveal>
            <ol className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((p, i) => (
                <Reveal
                  key={p.step}
                  delay={i * 0.05}
                  className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6"
                >
                  <li>
                    <p className="font-mono text-xs tracking-[0.22em] text-spark-400">
                      {p.step}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      {p.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* H2 #6 — Service area */}
        <section
          aria-labelledby="area-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <p className="eyebrow">Service area</p>
              <h2
                id="area-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Houston, Texas &amp; surrounding states.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-300 md:text-lg">
                Based in Spring, TX (north Greater Houston) with a 100-mile
                primary radius covering Harris, Fort Bend, Brazoria,
                Galveston, Montgomery, Liberty, and Walker counties. We also
                roll into Louisiana, Oklahoma, Arkansas, New Mexico, and
                Mississippi for larger Marvel jobs and existing accounts.
              </p>
              <Link
                href="/#coverage"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
              >
                See full coverage map
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {coverage.map((s) => (
                  <div
                    key={s.code}
                    className={`rounded-lg border px-4 py-3 ${
                      s.primary
                        ? "border-spark-500/40 bg-spark-500/10 text-white"
                        : "border-white/[0.06] bg-ink-900/40 text-ink-200"
                    }`}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                      {s.code}
                    </p>
                    <p className="mt-1 font-display text-base font-bold">
                      {s.name}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #7 — Why owners choose us */}
        <section
          aria-labelledby="why-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">The difference</p>
              <h2
                id="why-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Why Marvel owners choose Saw Service 3G.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
              {reasons.map((r, i) => (
                <Reveal
                  key={r.title}
                  delay={i * 0.05}
                  className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6"
                >
                  <h3 className="font-display text-xl font-bold tracking-tight text-white">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {r.body}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-2xl text-sm text-ink-400">
                Looking for a different brand?{" "}
                <Link
                  href="/services/hyd-mech-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  See our Hyd-Mech band saw repair page
                </Link>{" "}
                — the only brand we hold authorized-dealer status for.
              </p>
            </Reveal>
          </div>
        </section>

        {/* H2 #8 — FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <Reveal>
              <p className="eyebrow">Common questions</p>
              <h2
                id="faq-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Marvel repair — owner FAQ.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Five questions we hear most often before a Marvel repair
                call.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul
                role="list"
                className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-ink-900/40"
              >
                {faqItems.map((f, i) => (
                  <li key={i} className="px-6 py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-base font-semibold text-white md:text-lg">
                        <span>{f.q}</span>
                        <span
                          aria-hidden
                          className="mt-1 inline-block h-5 w-5 shrink-0 rounded-full border border-spark-500/50 text-center font-mono text-xs leading-[18px] text-spark-300 transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-ink-300 md:text-base">
                        {f.a}
                      </p>
                    </details>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* H2 #9 — CTA */}
        <section
          aria-labelledby="cta-heading"
          className="relative border-t border-white/[0.06] bg-ink-950/60 py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Next step</p>
              <h2
                id="cta-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Get an estimate. Call us anytime.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink-300">
                Phone is fastest. Tell us the Marvel model, what the saw is
                doing, and the city — we&rsquo;ll quote the visit and the
                work before we roll.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a
                    href={site.phone.href}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-spark"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    Call {site.phone.display}
                  </a>
                </Magnetic>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-ghost"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ClickToCallFab />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
    </>
  );
}

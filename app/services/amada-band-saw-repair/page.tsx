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

const ROUTE = "/services/amada-band-saw-repair";
const TITLE_TAG = "Amada Band Saw Repair Houston | Saw Service 3G";
const META_DESC =
  "Houston Amada band saw repair: HFA-400/700/1000, HA-250, PCSAW. Decades on the Amada-Marvel platform — on-site service across Texas. Call us.";

export const metadata: Metadata = {
  title: { absolute: TITLE_TAG },
  description: META_DESC,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: "Amada Band Saw Repair Houston | HFA, HA & PCSAW",
    description:
      "On-site Amada bandsaw repair across Houston: HFA-400/700, HA-250 and PCSAW lines. Decades on the Amada-Marvel platform.",
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amada Band Saw Repair Houston | HFA, HA & PCSAW",
    description:
      "Decades servicing Amada bandsaws — HFA, HA, PCSAW. On-site across Houston & Texas.",
  },
  robots: { index: true, follow: true },
};

const repairAreas: { icon: typeof Wrench; title: string; body: string }[] = [
  {
    icon: Wrench,
    title: "Mechanical",
    body:
      "Guide arms, blade guides, drive belts, bearings, chip brushes, gearbox seals. Geometry restored on the floor so the cut is square again.",
  },
  {
    icon: Droplets,
    title: "Hydraulic",
    body:
      "HFA power-vise, down-feed, blade-tension, and clamp circuits. Cylinder, hose, valve, and pump diagnosis on the floor.",
  },
  {
    icon: CircuitBoard,
    title: "Controls & NC",
    body:
      "Drives, contactors, prox sensors, limit switches, HFA control board faults, NC program reset and re-load on Amada production saws.",
  },
  {
    icon: Disc3,
    title: "Blade Tracking & Tension",
    body:
      "Tracking arms, tension calibration, wheel alignment. Stops the blade from wandering or fatiguing prematurely on the HFA carbide lines.",
  },
  {
    icon: Gauge,
    title: "Coolant & Chip Management",
    body:
      "Coolant pump (HA-250 included), lines, nozzles, mix ratio, chip brush, chip-conveyor service. Cooler blades cut faster and last longer.",
  },
  {
    icon: Hammer,
    title: "Calibration & Alignment",
    body:
      "Head/vise squareness, blade-to-vise relationship, miter angle reset on dual-mitre HFAs. Verified on a test cut before we leave.",
  },
];

const models: { name: string; family: string }[] = [
  { name: "HFA-250", family: "HFA · Horizontal automatic" },
  { name: "HFA-400", family: "HFA · Horizontal automatic" },
  { name: "HFA-700", family: "HFA · Heavy horizontal" },
  { name: "HFA-1000W", family: "HFA · Wide-capacity production" },
  { name: "HA-250", family: "HA · Semi-automatic horizontal" },
  { name: "HA-400", family: "HA · Semi-automatic horizontal" },
  { name: "PCSAW", family: "PCSAW · Horizontal cold saw lines" },
  { name: "Amada Verticals", family: "Vertical band saws" },
  { name: "Legacy Amada", family: "Older Amada machines" },
];

const commonIssues: { title: string; body: string }[] = [
  {
    title: "HFA hydraulic drift",
    body:
      "Down-feed and vise pressure walks out of tune on HFA-400/700/1000 over time — pump drift, seal wear, or metering orifice partial-block. We meter-test the circuit and reset it.",
  },
  {
    title: "HA-250 coolant pump failure",
    body:
      "The HA-250's coolant pump is the most common HA wear point. Weak flow, intermittent operation, or wrong mix ratio shortens blade life. We rebuild or replace and reset the mix.",
  },
  {
    title: "Control board faults",
    body:
      "Amada HFA control boards throw faults when contactors age, prox sensors drift, or wiring loosens. We work the fault back to a root cause, not a guess.",
  },
  {
    title: "NC program reset",
    body:
      "Power events and battery loss wipe NC program parameters on automatic Amada saws. We re-load the parameter set and verify a clean production cycle before sign-off.",
  },
];

const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Phone diagnosis",
    body:
      "Call (281) 704-5589. We listen for symptoms, Amada model (HFA, HA, or PCSAW), and urgency — and tell you straight if it's a field fix.",
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
      "Technician arrives with tools and common Amada wear parts. We diagnose, quote, then fix on your floor.",
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
      "Amada has owned Marvel since 1996 — the same Oshkosh WI plant produces both. Our 25 years on the Amada-Marvel platform transfers cleanly across HFA, HA, and PCSAW lines.",
  },
  {
    title: "Houston local response",
    body:
      "Amada Machine Tools America dispatches from Schaumburg, IL. We're an hour from your shop, not a day. Existing accounts get prioritized scheduling.",
  },
  {
    title: "We come to you",
    body:
      "Fully mobile. Your Amada stays bolted to your floor; our truck shows up. 100-mile primary radius with surrounding-state coverage for larger jobs.",
  },
];

const faqItems: { q: string; a: string }[] = [
  {
    q: "Are you an authorized Amada dealer?",
    a: "No. Amada Machine Tools America, Inc. (Schaumburg, IL — 847-285-4800) is the US OEM arm and dispatches its own service. Saw Service 3G is an independent Houston shop with decades servicing Amada band saws across HFA, HA, and PCSAW lines.",
  },
  {
    q: "Where are Amada saws manufactured?",
    a: "Amada band saws are manufactured by AMADA MARVEL, INC. at 3501 Marvel Drive, Oshkosh, Wisconsin — the same plant that produces Marvel saws since Amada acquired Marvel in 1996. The global parent is AMADA MACHINERY CO., LTD (Japan).",
  },
  {
    q: "Which Amada models do you repair?",
    a: "HFA-250, HFA-400, HFA-700, and HFA-1000W horizontal automatics; HA-250 and HA-400 semi-automatics; PCSAW horizontal cold saw lines; Amada verticals; and legacy Amada equipment. Call with model and serial if your unit isn't listed.",
  },
  {
    q: "Why is my Amada HFA not cutting straight?",
    a: "Three usual suspects on HFA-400/700/1000: blade-guide wear (carbide inserts or roller bearings out of spec), guide-arm geometry drifted out of alignment, or hydraulic down-feed pressure running uneven and pushing the blade past its cut rate. We diagnose all three on-site before quoting.",
  },
  {
    q: "How fast can you respond in Houston?",
    a: "Most Greater Houston customers see a technician on-site within 72 hours of the call, often sooner for existing accounts and emergency breakdowns. Time-and-a-half applies for evenings, weekends, and extended hours.",
  },
];

// ---------- JSON-LD payloads (page-scoped) ----------

const LB_ID = `${site.url}/#localbusiness`;
const PAGE_URL = `${site.url}${ROUTE}`;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Amada Band Saw Repair",
  serviceType: "Band saw repair",
  description:
    "On-site repair, calibration, and preventive maintenance for Amada band saws (HFA, HA, PCSAW lines) across the Greater Houston Area and surrounding states.",
  provider: { "@id": LB_ID },
  brand: { "@type": "Brand", name: "Amada" },
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
    name: "Amada repair scope",
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
      name: "Amada Band Saw Repair",
      item: PAGE_URL,
    },
  ],
};

// -----------------------------------------------------

export default function AmadaBandSawRepairPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Amada Band Saw Repair" },
          ]}
        />

        <PageHero
          eyebrow="Amada Service · Independent Shop"
          title={
            <>
              Amada Band Saw Repair in Houston
              <span className="block text-spark-500">
                Every HFA, HA and PCSAW Line
              </span>
            </>
          }
          lede={
            <>
              On-site Amada band saw repair from a Houston shop with decades
              on the Amada-Marvel platform. We service the full industrial
              range — HFA-250/400/700/1000W horizontal automatics, HA-250/400
              semi-automatics, PCSAW cold saw lines, and Amada verticals —
              across Greater Houston and surrounding states. Hydraulics,
              controls, NC, blade tracking, calibration. Billed only after
              the saw cuts square again.
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
            href="/#quote"
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
              <p className="eyebrow">Amada service in Houston</p>
              <h2
                id="lead-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Amada band saw repair &mdash; on-site across Houston.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  Amada&rsquo;s HFA, HA, and PCSAW lines anchor production
                  cutting in fabrication shops, steel service centers, and
                  oil &amp; gas yards across the Gulf Coast. When an Amada
                  goes down on a production line, the wrong fix is faster
                  than no fix: a mis-tuned down-feed walks the cut, a
                  control fault chased to the wrong root cause cycles back
                  in a week, and out-of-spec tracking burns carbide blades
                  you just changed.
                </p>
                <p>
                  Saw Service 3G is a Houston-based independent shop. We are
                  not an authorized Amada dealer &mdash; Amada Machine Tools
                  America, Inc. (Schaumburg, IL) is the OEM arm. What we
                  bring is 25 years of field hours on Amada and Marvel saws,
                  both built at the same Oshkosh, WI plant since 1996. The
                  cross-brand experience travels: the head castings, guide
                  geometry, and hydraulic logic share DNA across the
                  platform.
                </p>
                <p>
                  Our crew works mobile, so the saw stays bolted to your
                  floor and the truck comes to you. We diagnose, quote, fix,
                  and verify on a real test cut before we leave &mdash; and
                  the invoice waits until you have a saw cutting square.
                </p>
                <p>
                  Most of the Amada HFAs we touch are running in{" "}
                  <Link
                    href="/service-area/houston-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Houston
                  </Link>
                  &rsquo;s steel-service and structural-fab corridor, out in{" "}
                  <Link
                    href="/service-area/cypress-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Cypress
                  </Link>{" "}
                  along Hwy 290, and around our home shop in{" "}
                  <Link
                    href="/service-area/spring-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Spring
                  </Link>
                  &rsquo;s FM 1960 / FM 2920 light-fab pocket. If a blade
                  fails mid-job we can also{" "}
                  <Link
                    href="/services/band-saw-blade-welding"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    weld a replacement blade
                  </Link>{" "}
                  on the truck the same visit.
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
                Amada repairs we perform.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Every system on the saw, diagnosed and repaired on your
                floor. We bring tools and common Amada wear parts; you keep
                your throughput.
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
                Amada models we service.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                The full HFA, HA, and PCSAW industrial range plus legacy
                machines. Don&rsquo;t see your model? Call &mdash;
                we&rsquo;ve probably seen it anyway.
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
          brandSlug="amada"
          brandLabel="Amada"
        />

        {/* Failure modes by model — structured per-series symptom catalog */}
        <FailureModesByModel
          brandSlug="amada"
          heading="Common Amada failure modes we see in the field"
          lede="HFA-Series automatics, HA-Series semi-automatics, PCSAW carbide cold-saw lines, and legacy Amada units. These are the symptoms our crew diagnoses most often, organized by series."
        />

        {/* H2 #4 — Common issues */}
        <section
          aria-labelledby="issues-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Amada-specific issues</p>
              <h2
                id="issues-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Common Amada issues we fix.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Four patterns we see on Amada machines more than any others.
                Each is diagnosable in a single field visit.
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
                Based in Spring, TX with a 100-mile primary radius covering
                Harris, Fort Bend, Brazoria, Galveston, Montgomery, Liberty,
                and Walker counties. We also roll into Louisiana, Oklahoma,
                Arkansas, New Mexico, and Mississippi for larger Amada jobs
                and existing accounts.
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
                Why Amada owners choose Saw Service 3G.
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
                Same Oshkosh plant builds both lines &mdash; see our{" "}
                <Link
                  href="/services/marvel-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Marvel band saw repair page
                </Link>
                {" "}or the{" "}
                <Link
                  href="/services/hyd-mech-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Hyd-Mech band saw repair page
                </Link>
                .
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
                Amada repair &mdash; owner FAQ.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Five questions we hear most often before an Amada repair
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
                Phone is fastest. Tell us the Amada model, what the saw is
                doing, and the city &mdash; we&rsquo;ll quote the visit and
                the work before we roll.
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
                  href="/#quote"
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

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
  MapPin,
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

const ROUTE = "/services/hem-saw-repair";
const TITLE_TAG = "HEM Saw Repair Houston | HE&M Bandsaw Service · 3G";
const META_DESC =
  "Houston HEM (HE&M) saw repair: H-Series, V-Series, Saber, NG and DC. On-site service across Texas with decades on HE&M Saw platforms. Call today.";

export const metadata: Metadata = {
  title: { absolute: TITLE_TAG },
  description: META_DESC,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: "HEM (HE&M) Saw Repair Houston | Local HE&M Service",
    description:
      "Local HEM saw repair across Houston: H, V, Saber, NG and DC lines. Decades on HE&M platforms. Faster than Pryor, OK dispatch.",
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HEM (HE&M) Saw Repair Houston | Local Service",
    description:
      "Local HE&M Saw repair in Houston — H, V, Saber, NG and DC. Decades on the platform.",
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
      "Power-vise, blade-tension, down-feed, and clamp circuits on H- and V-Series. Cylinder, hose, valve, and pump diagnosis on-site.",
  },
  {
    icon: CircuitBoard,
    title: "Electrical & NG Controls",
    body:
      "Drives, motor starters, contactors, prox sensors, limit switches, NG-Series control faults, and blade-break detection — wired end-to-end.",
  },
  {
    icon: Disc3,
    title: "Blade Tracking & Tension",
    body:
      "Tracking arms, tension calibration, wheel alignment — the most common cause of an HE&M cutting crooked. Reset and verified.",
  },
  {
    icon: Gauge,
    title: "Coolant & Chip Management",
    body:
      "Coolant pump, lines, nozzles, mix ratio, chip brush. Cooler blades cut faster and last longer on tough alloys.",
  },
  {
    icon: Hammer,
    title: "Calibration & Alignment",
    body:
      "Head/vise squareness, blade-to-vise relationship, miter angle reset on dual-mitre HE&Ms. Verified on a test cut before we leave.",
  },
];

// HE&M model coverage — H, V, Saber, NG, and DC families.
const models: { name: string; family: string }[] = [
  { name: "H90A", family: "H-Series · Pivot horizontal" },
  { name: "H105A", family: "H-Series · Pivot horizontal" },
  { name: "H130A", family: "H-Series · Pivot horizontal" },
  { name: "V100LA-3", family: "V-Series · Vertical tilt-frame" },
  { name: "V125LM", family: "V-Series · Vertical tilt-frame" },
  { name: "V140LA", family: "V-Series · Vertical tilt-frame" },
  { name: "Saber 360", family: "Saber · Mitre" },
  { name: "Saber 600", family: "Saber · Mitre" },
  { name: "NG120XL", family: "NG-Series · Production" },
  { name: "NG160", family: "NG-Series · Production" },
  { name: "DC Series", family: "DC · Dual column" },
  { name: "Legacy HE&M", family: "Older HE&M Saw machines" },
];

const commonIssues: { title: string; body: string }[] = [
  {
    title: "V-Series cutting crooked",
    body:
      "Blade tracking drifts on V100/V125/V140 verticals — guide-bearing wear, tension loss, or a tracking arm out of spec. We reset the geometry and verify under load.",
  },
  {
    title: "H-Series hydraulic drift",
    body:
      "On H90A/H105A/H130A horizontal pivots, the down-feed and vise circuits walk out of tune. Cylinder seal wear or a partially blocked metering orifice — we meter-test and bring it back.",
  },
  {
    title: "NG control faults",
    body:
      "The NG line's electronic controls throw faults when contactors age, sensors drift, or wiring loosens. We work the fault codes back to a root cause, not a guess.",
  },
  {
    title: "Drive belt wear",
    body:
      "Slipping belts, glazed pulleys, and out-of-tension drives slow the cut and load the motor. Routine on older HE&M machines — replaced and re-tensioned on-site.",
  },
];

const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Phone diagnosis",
    body:
      "Call (281) 704-5589. We listen for symptoms, HE&M model (H, V, Saber, NG, or DC), and urgency — and tell you straight if it's a field fix.",
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
      "Technician arrives with tools and common HE&M wear parts. We diagnose, quote, then fix on your floor — not in a shop bay across the country.",
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
    title: "Decades on HE&M platforms",
    body:
      "Our crew has 25 years of field hours on H, V, Saber, NG, and DC machines. The third-generation team has watched these fleets cut everything from structural to Inconel.",
  },
  {
    title: "Local beats 500 miles",
    body:
      "HE&M's own service dispatches from Pryor, OK — about 530 miles from Houston. Saw Service 3G is in Spring, TX. When the saw is down, that distance is a week of throughput.",
  },
  {
    title: "We come to you",
    body:
      "Fully mobile. Your HE&M stays bolted to your floor; our truck shows up. 100-mile primary radius with surrounding-state coverage for larger jobs.",
  },
];

const faqItems: { q: string; a: string }[] = [
  {
    q: "Are you an authorized HE&M Saw dealer?",
    a: "No. HE&M Saw, Inc. (Pryor, OK) is the OEM and dispatches its own service team from Pryor. Saw Service 3G is an independent Houston shop with decades of experience servicing HE&M band saws — H-Series, V-Series, Saber, NG, and DC. We work from the technical depth built over 25 years on the platform.",
  },
  {
    q: "Which HEM models do you repair?",
    a: "H-Series H90A / H105A / H130A horizontal pivots; V-Series V100LA-3 / V125LM / V140LA verticals; Saber 360 and Saber 600 mitre saws; NG120XL and NG160 production lines; DC dual-column machines; and legacy HE&M equipment. Call (281) 704-5589 with model and serial if your unit isn't listed.",
  },
  {
    q: "Where are HEM saws made?",
    a: "HE&M Saw, Inc. manufactures in Pryor, Oklahoma. The company was founded in 1989 and operates as a US-owned saw manufacturer. Spelling note: \"HEM\" and \"HE&M\" refer to the same brand — the ampersand is the official spelling.",
  },
  {
    q: "My HE&M NG isn't cutting straight — what's wrong?",
    a: "On NG-Series production saws, three usual suspects: blade tracking drifted out of alignment, guide bearings worn out of spec, or tension that has crept low. We check all three in one visit, reset the geometry, and verify under a live test cut before sign-off.",
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
  name: "HE&M Saw Repair",
  alternateName: ["HEM Saw Repair", "HE&M Band Saw Repair"],
  serviceType: "Band saw repair",
  description:
    "On-site repair, calibration, and preventive maintenance for HE&M (HEM) Saw band saws across the Greater Houston Area and surrounding states.",
  provider: { "@id": LB_ID },
  brand: { "@type": "Brand", name: "HE&M Saw" },
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
    name: "HE&M repair scope",
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
      name: "HEM Saw Repair",
      item: PAGE_URL,
    },
  ],
};

// -----------------------------------------------------

export default function HemSawRepairPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "HEM Saw Repair" },
          ]}
        />

        <PageHero
          eyebrow="HE&M Service · Houston Local"
          title={
            <>
              HEM Saw Repair in Houston
              <span className="block text-spark-500">
                Local HE&amp;M Service, On-Site
              </span>
            </>
          }
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/50 bg-spark-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-spark-300">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Local beats 500 miles to Pryor, OK
            </span>
          }
          lede={
            <>
              On-site HEM (HE&amp;M) saw repair from a Houston shop with
              decades on the platform. We service every HE&amp;M line we come
              across — H-Series horizontal pivots, V-Series verticals, Saber
              mitre saws, NG-Series production, and DC dual-column —
              across Greater Houston and surrounding states. Hydraulics,
              tracking, NG controls, drive systems, and calibration. Billed
              only after the saw cuts square again.
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
              <p className="eyebrow">HE&amp;M service in Houston</p>
              <h2
                id="lead-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                HEM band saw repair &mdash; on-site, across Houston.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  HE&amp;M Saw (sometimes typed &ldquo;HEM&rdquo; without the
                  ampersand) builds horizontal pivot, vertical tilt-frame,
                  Saber mitre, NG production, and DC dual-column band saws
                  from Pryor, Oklahoma. The line shows up in fabrication
                  shops, steel service centers, and structural cutting
                  operations across the Gulf Coast.
                </p>
                <p>
                  Saw Service 3G is a Houston-based independent shop. We are
                  not an authorized HE&amp;M Saw dealer &mdash; HE&amp;M
                  dispatches its own service team from Pryor, about 530
                  miles north of Houston. What we bring is 25 years of field
                  hours on H, V, Saber, NG, and DC machines, and a
                  third-generation crew that has serviced the same fleets
                  long enough to know the wear patterns by ear.
                </p>
                <p>
                  Our crew works mobile, so the saw stays bolted to your
                  floor and the truck comes to you. We diagnose, quote, fix,
                  and verify on a real test cut before we leave &mdash; and
                  the invoice waits until you have a saw cutting square.
                </p>
                <p>
                  HE&amp;M work tends to cluster where structural and tubular
                  fab live &mdash;{" "}
                  <Link
                    href="/service-area/houston-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Houston
                  </Link>
                  &rsquo;s NW machine-shop corridor, the I-45N{" "}
                  <Link
                    href="/service-area/conroe-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Conroe
                  </Link>
                  -Willis oilfield tubular run, and the Grand Pkwy energy
                  packaging shops out in{" "}
                  <Link
                    href="/service-area/katy-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Katy
                  </Link>
                  . If a blade snaps mid-job we can also{" "}
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
                HE&amp;M repairs we perform.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Every system on the saw, diagnosed and repaired on your
                floor. We bring tools and common HE&amp;M wear parts; you
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
                HE&amp;M models we service.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                The full HE&amp;M Saw range: H, V, Saber, NG, DC, and the
                older models still pulling shifts.
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
          brandSlug="hem"
          brandLabel="HEM"
        />

        {/* Failure modes by model — structured per-series symptom catalog */}
        <FailureModesByModel
          brandSlug="hem"
          heading="Common HE&M failure modes we see in the field"
          lede="HE&M horizontal pivots, V-Series verticals, Saber mitres, NG production lines, DC dual-columns. These are the issues we diagnose most often across the HE&M lineup, grouped by series."
        />

        {/* H2 #4 — Common issues */}
        <section
          aria-labelledby="issues-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">HE&amp;M-specific issues</p>
              <h2
                id="issues-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Common HE&amp;M issues we fix.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Four wear patterns we see on HE&amp;M machines more than any
                others. Each is diagnosable in a single field visit.
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

        {/* H2 #6 — Service area / why local beats Pryor */}
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
                Why local beats Pryor: service area &amp; response.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-300 md:text-lg">
                Based in Spring, TX with a 100-mile primary radius covering
                Harris, Fort Bend, Brazoria, Galveston, Montgomery, Liberty,
                and Walker counties. We also roll into Louisiana, Oklahoma,
                Arkansas, New Mexico, and Mississippi for larger HE&amp;M
                jobs and existing accounts. HE&amp;M&rsquo;s own dispatch
                ships from Pryor, OK &mdash; we&rsquo;re an hour from your
                shop, not a day-and-a-half.
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
                Why HEM owners choose Saw Service 3G.
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
                Run a mixed fleet?{" "}
                <Link
                  href="/services/hyd-mech-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Hyd-Mech band saw repair
                </Link>
                {" "}and{" "}
                <Link
                  href="/services/marvel-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Marvel band saw repair
                </Link>
                {" "}are sibling pages.
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
                HEM repair &mdash; owner FAQ.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Five questions we hear most often before an HE&amp;M repair
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
                Phone is fastest. Tell us the HE&amp;M model, what the saw
                is doing, and the city &mdash; we&rsquo;ll quote the visit
                and the work before we roll.
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

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
  Clock,
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
import { safeJsonLd } from "@/lib/jsonld";

const ROUTE = "/services/tsune-band-saw-repair";
const TITLE_TAG = "Tsune Saw Repair Houston | Carbide Circular & Band";
const META_DESC =
  "Houston Tsune saw repair: FA-250/300A/500A carbide circular saws, FMB band saws and MCS automatics. Decades of high-precision saw experience. Call us.";

export const metadata: Metadata = {
  title: { absolute: TITLE_TAG },
  description: META_DESC,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: "Tsune Saw Repair Houston | Carbide & Band Saws",
    description:
      "On-site Tsune saw service across Houston: FA-250/300A/500A carbide circular saws, FMB band saws, MCS automatics. Decades experienced.",
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsune Saw Repair Houston | Carbide Circular & Band",
    description:
      "On-site Tsune saw service in Houston — FA carbide circular, FMB band, MCS / NHC automatics.",
  },
  robots: { index: true, follow: true },
};

const repairAreas: { icon: typeof Wrench; title: string; body: string }[] = [
  {
    icon: Wrench,
    title: "Mechanical",
    body:
      "Carbide blade arbor assemblies, guides, bearings, gearbox seals, FMB band drive components. Geometry restored on the floor.",
  },
  {
    icon: Disc3,
    title: "Carbide Blade Alignment",
    body:
      "FA-series carbide circular blade alignment to the arbor and clamp face — tight tolerances are the whole point of a Tsune cut.",
  },
  {
    icon: Droplets,
    title: "Hydraulic Vise & Clamp",
    body:
      "Power-clamp, vise positioning, and hydraulic feed circuits on FA, FMB, and MCS lines. Cylinder, hose, valve, and pump diagnosis.",
  },
  {
    icon: CircuitBoard,
    title: "Servo & PLC Controls",
    body:
      "Servo positioning faults, MCS / NHC automation logic, PLC inputs, prox sensors, control-panel diagnostics.",
  },
  {
    icon: Gauge,
    title: "Coolant & Mist",
    body:
      "Coolant pump, lines, nozzles, mist systems, and mix ratio. Carbide blades on hard alloys live or die by coolant.",
  },
  {
    icon: Hammer,
    title: "Calibration & Squareness",
    body:
      "Head/vise squareness, blade-to-vise relationship, miter angle reset. Verified on a test cut before we leave.",
  },
];

const models: { name: string; family: string }[] = [
  { name: "FA-250", family: "FA · Carbide circular cold saw" },
  { name: "FA-300A", family: "FA · Carbide circular cold saw" },
  { name: "FA-500A", family: "FA · Carbide circular cold saw" },
  { name: "FMB Series", family: "FMB · Band saws" },
  { name: "MCS Series", family: "MCS · Fully automatic systems" },
  { name: "NHC Series", family: "NHC · Fully automatic systems" },
  { name: "Legacy Tsune", family: "Older Tsune machinery" },
];

const commonIssues: { title: string; body: string }[] = [
  {
    title: "Carbide blade alignment off",
    body:
      "Tsune FA-series carbide cuts live in microns. Arbor wear, clamp-face contamination, or a bent spindle puts the blade out of true and the cut goes from precision to scrap. We inspect, align, and verify on a test piece.",
  },
  {
    title: "Hydraulic vise pressure drift",
    body:
      "Vise positioning and clamp force walk out of tune over time — seal wear, fluid contamination, or a valve sticking. We meter-test the circuit and reset clamp force.",
  },
  {
    title: "Servo positioning faults",
    body:
      "MCS / NHC automation faults when servo drives lose tuning, encoders drift, or position feedback loops break. We read the fault, scope the circuit, and trace to root cause.",
  },
  {
    title: "Coolant or mist degradation",
    body:
      "Tsune cuts at high feed rates &mdash; coolant pump wear, nozzle clogging, or wrong mist ratio shortens carbide tooth life dramatically. We rebuild the coolant side end-to-end.",
  },
];

const legacyNotes: { title: string; body: string }[] = [
  {
    title: "Older Tsune machines we still service",
    body:
      "Legacy FA-series carbide circular saws and older FMB band saws are common in shops that bought Tsune in the 1990s and 2000s. The machines outlast spare parts inventory, but the platform repays patient diagnosis.",
  },
  {
    title: "Parts strategy on legacy units",
    body:
      "Where OEM parts are no longer stocked, we work the spec back to dimensional equivalents from our parts network &mdash; bearings, seals, hoses, and electricals are usually sourceable. We document substitutions so your records stay clean.",
  },
  {
    title: "Cross-platform expertise transfers",
    body:
      "The mechanical logic on legacy Tsune carbide circular saws overlaps with current high-precision platforms. Decades of field hours on the family means we're not relearning the saw on your time.",
  },
];

const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Phone diagnosis",
    body:
      "Call (281) 801-5612. We listen for symptoms, Tsune model (FA, FMB, MCS, or NHC), and urgency &mdash; and tell you straight if it's a field fix.",
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
      "Technician arrives with tools and common Tsune wear parts. We diagnose, quote, then fix on your floor.",
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
    title: "High-precision saw experience",
    body:
      "Tsune's specialty is carbide circular cold saws &mdash; tight-tolerance, high-feed-rate cutting that punishes alignment errors. Our crew has decades on the high-precision side of the trade.",
  },
  {
    title: "Houston local response",
    body:
      "Tsune America Inc. (Wood Dale, IL) is the US arm. We're an hour from your shop, not a day. Existing accounts get prioritized scheduling.",
  },
  {
    title: "We come to you",
    body:
      "Fully mobile. Your Tsune stays bolted to your floor; our truck shows up. 100-mile primary radius with surrounding-state coverage for larger jobs.",
  },
];

const faqItems: { q: string; a: string }[] = [
  {
    q: "Are you an authorized Tsune dealer?",
    a: "No. Tsune America Inc. (Wood Dale, IL) is the US OEM arm of Tsune Seiki Co., Ltd (Japan). Saw Service 3G is an independent Houston shop experienced with Tsune machinery — we work from technical depth built over decades on high-precision metal-cutting equipment, not a dealer certificate.",
  },
  {
    q: "What does Tsune make?",
    a: "Tsune Seiki Co., Ltd specializes in high-precision metal-cutting machinery — primarily carbide circular cold saws (FA-series: FA-250, FA-300A, FA-500A), band saws (FMB series), and fully automatic systems (NHC and MCS). The carbide circular line is what most owners think of when they say \"Tsune.\"",
  },
  {
    q: "Which Tsune models do you repair?",
    a: "FA-250, FA-300A, and FA-500A carbide circular cold saws; FMB band saws; MCS and NHC fully-automatic systems; and legacy Tsune machinery. Call (281) 801-5612 with model and serial if your unit isn't listed.",
  },
  {
    q: "Can you service older Tsune machines?",
    a: "Yes. Legacy Tsune carbide circular saws and older FMB band saws are still on plenty of Texas shop floors. The machines outlast spare-parts inventory but reward patient diagnosis. Where OEM parts aren't stocked, we source dimensional equivalents and document the substitutions.",
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
  name: "Tsune Saw Repair",
  alternateName: ["Tsune Band Saw Repair", "Tsune Carbide Circular Saw Repair"],
  serviceType: "Saw repair",
  description:
    "On-site repair, calibration, and preventive maintenance for Tsune carbide circular cold saws, FMB band saws, and MCS / NHC automatic systems across the Greater Houston Area and surrounding states.",
  provider: { "@id": LB_ID },
  brand: { "@type": "Brand", name: "Tsune" },
  areaServed: [
    { "@type": "City", name: "Houston" },
    ...coverage.map((c) => ({ "@type": "State" as const, name: c.name })),
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Metal fabrication shops, machine shops, steel service centers, oil & gas, manufacturing facilities, CNC shops, precision metal cutting",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tsune repair scope",
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
      name: "Tsune Saw Repair",
      item: PAGE_URL,
    },
  ],
};

// -----------------------------------------------------

export default function TsuneSawRepairPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Tsune Saw Repair" },
          ]}
        />

        <PageHero
          eyebrow="Tsune Service · Independent Shop"
          title={
            <>
              Tsune Saw Repair in Houston
              <span className="block text-spark-500">
                Carbide Circular Saws and Band Saws
              </span>
            </>
          }
          lede={
            <>
              On-site Tsune saw repair from a Houston shop with decades of
              high-precision saw experience. Tsune Seiki&rsquo;s flagship
              is carbide circular cold saws &mdash; the FA-series &mdash;
              alongside FMB band saws and MCS / NHC fully-automatic
              systems. We service the line we come across across Greater
              Houston and surrounding states. Carbide alignment, hydraulic
              vise, servo positioning, coolant. Billed only after the saw
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
            href="/#quote"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-ghost"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </PageHero>

        {/* H2 #1 — Lead block / Tsune specialty context */}
        <section
          aria-labelledby="lead-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">Tsune service in Houston</p>
              <h2
                id="lead-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Tsune saw repair &mdash; on-site across Houston.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  Quick context if you&rsquo;re newer to the brand:{" "}
                  <strong className="text-white">
                    Tsune Seiki Co., Ltd (Japan) is best known for
                    high-precision carbide circular cold saws
                  </strong>{" "}
                  &mdash; the FA-250, FA-300A, and FA-500A &mdash; not
                  traditional band saws. Tsune also builds FMB band saws
                  and MCS / NHC fully-automatic systems, but the carbide
                  circular line is what most owners think of when they say
                  &ldquo;Tsune.&rdquo; We service both saw types.
                </p>
                <p>
                  Tsune machines anchor precision production work in
                  fabrication shops, automotive component manufacturers,
                  and oil &amp; gas operations &mdash; anywhere the cut
                  needs to come off the saw within microns. When a Tsune
                  goes down, the wrong fix is faster than no fix: a
                  carbide blade out of alignment with the arbor scraps
                  parts faster than a band saw cutting crooked.
                </p>
                <p>
                  Saw Service 3G is a Houston-based independent shop. We
                  are not an authorized Tsune dealer &mdash; Tsune America
                  Inc. (Wood Dale, IL) is the US OEM arm of the Japanese
                  parent. What we bring is decades of high-precision saw
                  experience on the FA-series and FMB platforms. Mobile,
                  on your floor, verified test cut before sign-off.
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
                Tsune repairs we perform.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Every system on the saw, diagnosed and repaired on your
                floor. We bring tools and common Tsune wear parts; you keep
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
                Tsune models we service.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                FA-series carbide circular cold saws, FMB band saws, and
                MCS / NHC automatic systems &mdash; plus legacy Tsune
                machinery.
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

        {/* H2 #4 — Common issues */}
        <section
          aria-labelledby="issues-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Tsune-specific issues</p>
              <h2
                id="issues-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Common Tsune issues we fix.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Four patterns we see on Tsune machines more than any
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

        {/* H2 #5 — Older / legacy Tsune machines */}
        <section
          aria-labelledby="legacy-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Legacy service</p>
              <h2
                id="legacy-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Older Tsune machines: legacy service.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Tsune saws built in the 1990s and 2000s are still earning
                their keep on plenty of Texas shop floors. Here&rsquo;s
                how we keep them running.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
              {legacyNotes.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 0.05}
                  className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6"
                >
                  <Clock className="h-6 w-6 text-spark-400" aria-hidden />
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {c.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* H2 #6 — Process */}
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

        {/* H2 #7 — Service area */}
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
                Harris, Fort Bend, Brazoria, Galveston, Montgomery,
                Liberty, and Walker counties. We also roll into Louisiana,
                Oklahoma, Arkansas, New Mexico, and Mississippi for larger
                Tsune jobs and existing accounts.
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

        {/* H2 #8 — Why owners choose us */}
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
                Why Tsune owners choose Saw Service 3G.
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
                Mixed precision fleet?{" "}
                <Link
                  href="/services/behringer-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Behringer band saw repair
                </Link>
                {" "}and{" "}
                <Link
                  href="/services/hyd-mech-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Hyd-Mech band saw repair
                </Link>
                {" "}are sibling pages.
              </p>
            </Reveal>
          </div>
        </section>

        {/* H2 #9 — FAQ */}
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
                Tsune repair &mdash; owner FAQ.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Five questions we hear most often before a Tsune repair
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

        {/* H2 #10 — CTA */}
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
                Get an estimate &mdash; call or request a quote.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink-300">
                Phone is fastest. Tell us the Tsune model, what the saw is
                doing, and the city &mdash; we&rsquo;ll quote the visit
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
                  href="/#quote"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-ghost"
                >
                  Request a Quote
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

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
  AlertTriangle,
  Factory,
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

const ROUTE = "/services/behringer-band-saw-repair";
const TITLE_TAG = "Behringer Band Saw Repair Houston | Saw Service 3G";
const META_DESC =
  "Houston Behringer band saw repair: HBP, HBE, HBM and HCS lines. Decades servicing Behringer industrial saws on site across Texas. Call today.";

export const metadata: Metadata = {
  title: { absolute: TITLE_TAG },
  description: META_DESC,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: "Behringer Band Saw Repair Houston | HBP, HBE, HCS",
    description:
      "On-site Behringer bandsaw repair across Houston: HBP-310/410/530A, HBE-320, HCS cold saws. Decades on Behringer platforms.",
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behringer Band Saw Repair Houston | HBP, HBE, HCS",
    description:
      "On-site Behringer industrial saw repair across Houston & Texas. HBP, HBE, HBM, LPS, HCS.",
  },
  robots: { index: true, follow: true },
};

const repairAreas: { icon: typeof Wrench; title: string; body: string }[] = [
  {
    icon: Wrench,
    title: "Mechanical",
    body:
      "Carbide guide arms, blade guides, drive belts, bearings, chip brushes, gearbox seals on HBP / HBE / HBM platforms.",
  },
  {
    icon: Droplets,
    title: "Hydraulic Clamping",
    body:
      "HBP power-clamp, vise, down-feed, blade-tension circuits. Cylinder, hose, valve, and pump diagnosis on the floor.",
  },
  {
    icon: CircuitBoard,
    title: "Controls & PLC",
    body:
      "Drives, contactors, prox sensors, LPS automation logic, PLC inputs, and Behringer fault-code interpretation.",
  },
  {
    icon: Disc3,
    title: "Blade Tracking & Tension",
    body:
      "HBE / HBP tracking arms, tension calibration, wheel alignment — the most common cause of an out-of-square cut on a Behringer.",
  },
  {
    icon: Gauge,
    title: "HCS Coolant & Chip Management",
    body:
      "HCS circular cold-saw coolant pumps, lines, nozzles, mix ratio; chip-conveyor service across the line.",
  },
  {
    icon: Hammer,
    title: "Calibration & Alignment",
    body:
      "Head/vise squareness, blade-to-vise relationship, miter angle reset. Verified on a test cut before we leave.",
  },
];

const models: { name: string; family: string }[] = [
  { name: "HBP-310", family: "HBP · Horizontal production" },
  { name: "HBP-410", family: "HBP · Horizontal production" },
  { name: "HBP-420", family: "HBP · Horizontal production" },
  { name: "HBP-530A", family: "HBP · Heavy production" },
  { name: "HBE-261A", family: "HBE · Manual / semi-auto" },
  { name: "HBE-320", family: "HBE · Manual / semi-auto" },
  { name: "HBM Series", family: "HBM · Mitre saws" },
  { name: "LPS Series", family: "LPS · Fully automatic" },
  { name: "HCS Series", family: "HCS · Carbide circular cold saws" },
  { name: "Legacy Behringer", family: "Older Behringer machines" },
];

const commonIssues: { title: string; body: string }[] = [
  {
    title: "HBP hydraulic clamping faults",
    body:
      "HBP-310/410/530A clamping circuits develop pressure drift or intermittent engagement — cylinder seal wear, contaminated fluid, or a valve sticking. We meter-test, replace, and verify clamp force.",
  },
  {
    title: "Control panel / PLC errors",
    body:
      "Behringer fault codes throw on the panel when sensors drift, contactors age, or PLC inputs lose continuity. We read the code, trace the circuit, and fix the root cause — not the symptom.",
  },
  {
    title: "HBE blade tracking off",
    body:
      "HBE-261A and HBE-320 tracking drifts with guide-bearing wear or tension loss. Cut goes out of square, blade life collapses. Tracking is reset and verified under load.",
  },
  {
    title: "HCS coolant degradation",
    body:
      "HCS carbide cold saws are punishing on coolant — pump wear, nozzle clogging, or wrong mix ratio shortens carbide tooth life. We rebuild the coolant side end-to-end.",
  },
];

// Fault-code reference list (informational note — captures the
// "Behringer saw fault codes pdf" related-search intent without
// reproducing copyrighted documentation).
const faultCodeNotes: { title: string; body: string }[] = [
  {
    title: "We work from Behringer technical documentation",
    body:
      "Behringer publishes fault-code references and electrical schematics in the OEM service manuals. We work from the same technical documentation when we diagnose — not from a forum-thread guess.",
  },
  {
    title: "Code, then circuit, then root cause",
    body:
      "A fault code is the start of the diagnosis, not the end. We read the code, scope the circuit, and isolate whether the fault is a sensor, contactor, wire run, or a downstream mechanical issue — then quote the fix accordingly.",
  },
  {
    title: "Don't have your manual?",
    body:
      "Behringer Saws Inc. (Morgantown, PA) is the US arm and can provide a manual reprint. When we visit, we bring the schematics relevant to your line so the fault doesn't have to wait on a PDF download.",
  },
];

const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Phone diagnosis",
    body:
      "Call (281) 801-5612. We listen for symptoms, Behringer model (HBP, HBE, HBM, LPS, or HCS), and urgency — and tell you straight if it's a field fix.",
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
      "Technician arrives with tools and common Behringer wear parts. We diagnose, quote, then fix on your floor.",
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
    title: "Decades on Behringer platforms",
    body:
      "Our crew has 25 years of field hours on HBP, HBE, HBM, LPS, and HCS lines. Behringer's German engineering rewards crews who know the platform — guessing on a Behringer is expensive.",
  },
  {
    title: "Houston local response",
    body:
      "Behringer Saws Inc. (Morgantown, PA) is the US arm. We're an hour from your shop, not a day. Existing accounts get prioritized scheduling.",
  },
  {
    title: "We come to you",
    body:
      "Fully mobile. Your Behringer stays bolted to your floor; our truck shows up. 100-mile primary radius with surrounding-state coverage for larger jobs.",
  },
];

const faqItems: { q: string; a: string }[] = [
  {
    q: "Are you an authorized Behringer dealer?",
    a: "No. Behringer Saws Inc. (Morgantown, PA) is the US OEM arm of Behringer GmbH (Kirchardt, Germany). Saw Service 3G is an independent Houston shop with decades of experience servicing Behringer industrial band and cold saws across the Gulf Coast.",
  },
  {
    q: "Which Behringer models do you repair?",
    a: "HBP-310, HBP-410, HBP-420, and HBP-530A horizontal production saws; HBE-261A and HBE-320 manual/semi-automatic; HBM mitre saws; LPS fully automatic lines; HCS carbide circular cold saws; and legacy Behringer equipment. Call (281) 801-5612 with model and serial.",
  },
  {
    q: "Where are Behringer saws made?",
    a: "Behringer GmbH manufactures industrial band and cold saws in Kirchardt, Germany — the company was founded in 1919. US assembly and service is handled through Behringer Saws Inc. in Morgantown, Pennsylvania. (Note: this is Behringer GmbH industrial machinery, not Behringer audio equipment.)",
  },
  {
    q: "Do you have Behringer fault code references?",
    a: "Yes. We work from Behringer's published technical documentation — service manuals, electrical schematics, and fault-code references — when troubleshooting. A fault code is the start of the diagnosis, not the end; we trace it to a root cause before quoting the fix.",
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
  name: "Behringer Band Saw Repair",
  serviceType: "Band saw repair",
  description:
    "On-site repair, calibration, and preventive maintenance for Behringer industrial band saws and HCS cold saws across the Greater Houston Area and surrounding states.",
  provider: { "@id": LB_ID },
  brand: { "@type": "Brand", name: "Behringer" },
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
    name: "Behringer repair scope",
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
      name: "Behringer Band Saw Repair",
      item: PAGE_URL,
    },
  ],
};

// -----------------------------------------------------

export default function BehringerBandSawRepairPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Behringer Band Saw Repair" },
          ]}
        />

        <PageHero
          eyebrow="Behringer Industrial Saws · Houston"
          title={
            <>
              Behringer Band Saw Repair in Houston
              <span className="block text-spark-500">
                HBP, HBE and HCS Service
              </span>
            </>
          }
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/50 bg-spark-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-spark-300">
              <Factory className="h-3.5 w-3.5" aria-hidden />
              Behringer GmbH industrial saws &mdash; not audio equipment
            </span>
          }
          lede={
            <>
              On-site Behringer industrial band saw and cold saw repair from
              a Houston shop with decades on Behringer platforms. We
              service the full line we come across &mdash; HBP-310/410/420/530A
              horizontal production, HBE-261A/320 manual and semi-automatic,
              HBM mitre saws, LPS automation, and HCS carbide circular cold
              saws &mdash; across Greater Houston and surrounding states.
              Hydraulics, PLC controls, fault-code diagnosis, calibration.
              Billed only after the saw cuts square again.
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

        {/* H2 #1 — Lead block / AI Overview target / disambiguation */}
        <section
          aria-labelledby="lead-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">Behringer industrial saws</p>
              <h2
                id="lead-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Behringer band saw repair &mdash; on-site across Houston.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  <strong className="text-white">First, the
                  disambiguation:</strong> this page is about{" "}
                  <em className="not-italic text-white">
                    Behringer GmbH industrial band saws and HCS carbide
                    circular cold saws
                  </em>{" "}
                  &mdash; the German metal-cutting machinery line from
                  Kirchardt. It is not Behringer audio equipment (mixers,
                  amplifiers). The two share a brand name and nothing else.
                </p>
                <p>
                  Behringer&rsquo;s HBP horizontal production saws, HBE
                  manual/semi-automatic lines, HBM mitre saws, LPS
                  automation, and HCS carbide circular cold saws anchor
                  precision production cutting in fabrication shops, steel
                  service centers, and oil &amp; gas operations across the
                  Gulf Coast. The German engineering rewards crews who know
                  the platform &mdash; guessing on a Behringer hydraulic
                  circuit or PLC fault tends to be expensive.
                </p>
                <p>
                  Saw Service 3G is a Houston-based independent shop. We
                  are not an authorized Behringer dealer &mdash; Behringer
                  Saws Inc. (Morgantown, PA) is the US OEM arm. What we
                  bring is 25 years of field hours on Behringer industrial
                  saws, and a third-generation crew that has serviced the
                  same fleets long enough to read fault codes back to root
                  causes. Mobile, on your floor, verified test cut before
                  sign-off.
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
                Behringer repairs we perform.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Every system on the saw, diagnosed and repaired on your
                floor. We bring tools and common Behringer wear parts; you
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
                Behringer models we service.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                The full Behringer industrial range: HBP, HBE, HBM, LPS,
                HCS, and legacy equipment.
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
              <p className="eyebrow">Behringer-specific issues</p>
              <h2
                id="issues-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Common Behringer issues we fix.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Four patterns we see on Behringer machines more than any
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

        {/* H2 #5 — Fault codes / troubleshooting notes */}
        <section
          aria-labelledby="faultcodes-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Fault codes &amp; documentation</p>
              <h2
                id="faultcodes-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Behringer fault codes &amp; troubleshooting notes.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Behringer&rsquo;s panel fault codes are a strong starting
                point &mdash; here&rsquo;s how we work them.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
              {faultCodeNotes.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 0.05}
                  className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6"
                >
                  <AlertTriangle
                    className="h-6 w-6 text-spark-400"
                    aria-hidden
                  />
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
                Harris, Fort Bend, Brazoria, Galveston, Montgomery, Liberty,
                and Walker counties. We also roll into Louisiana, Oklahoma,
                Arkansas, New Mexico, and Mississippi for larger Behringer
                jobs and existing accounts.
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
                Why Behringer owners choose Saw Service 3G.
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
                Mixed European / North American fleet? See our{" "}
                <Link
                  href="/services/hyd-mech-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Hyd-Mech band saw repair page
                </Link>
                {" "}or{" "}
                <Link
                  href="/services/hem-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  HEM saw repair page
                </Link>
                .
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
                Behringer repair &mdash; owner FAQ.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Five questions we hear most often before a Behringer repair
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
                Phone is fastest. Tell us the Behringer model, what the saw
                is doing (and any fault codes on the panel), and the city
                &mdash; we&rsquo;ll quote the visit and the work before we
                roll.
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

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
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

const ROUTE = "/services/hyd-mech-band-saw-repair";
const TITLE_TAG =
  "Hyd-Mech Band Saw Repair Houston | Saw Service 3G";
const META_DESC =
  "Authorized Hyd-Mech dealer providing on-site band saw repair across Houston and Texas. S-Series, DM, V-Series, H-Series. Call for same-day service.";

export const metadata: Metadata = {
  title: { absolute: TITLE_TAG },
  description: META_DESC,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: "Hyd-Mech Band Saw Repair Houston | Authorized Dealer",
    description:
      "On-site Hyd-Mech band saw repair from a factory-authorized Texas dealer. Drive systems, hydraulics, blade tracking, controls.",
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyd-Mech Band Saw Repair Houston | Authorized Dealer",
    description:
      "Authorized Hyd-Mech dealer. On-site repair across Houston & Texas.",
  },
  robots: { index: true, follow: true },
};

// Component groupings the field crew actually works on. Names are generic
// (per CLAUDE.md §4 honesty rule) — no fabricated part numbers.
const repairAreas: {
  icon: typeof Wrench;
  title: string;
  body: string;
}[] = [
  {
    icon: Wrench,
    title: "Mechanical",
    body:
      "Guide arms, blade guides, drive belts, tensioners, bearings, chip brushes. Set-up restored to factory geometry so the cut is square again.",
  },
  {
    icon: Droplets,
    title: "Hydraulic",
    body:
      "Power-vise, blade-tension, down-feed, and clamp circuits. Cylinder, hose, valve, and pump diagnosis and replacement on the floor.",
  },
  {
    icon: CircuitBoard,
    title: "Electrical & Controls",
    body:
      "Drives, motor starters, contactors, limit switches, prox sensors, PLC inputs, blade-break detection. Wiring sanity-checked end-to-end.",
  },
  {
    icon: Disc3,
    title: "Blade Tracking & Tension",
    body:
      "Tracking arms, tension gauge calibration, wheel alignment. Stops the blade from wandering or fatiguing prematurely.",
  },
  {
    icon: Gauge,
    title: "Coolant & Chip Management",
    body:
      "Coolant pump, lines, nozzles, mix ratio, chip brush, and chip-conveyor service. Cooler blades cut faster and last longer.",
  },
  {
    icon: Hammer,
    title: "Calibration & Alignment",
    body:
      "Head/vise squareness, blade-to-vise relationship, miter angle reset. Verified on a test cut before we leave.",
  },
];

// Model coverage — the full Hyd-Mech industrial range we work on. S-20A
// carries an anchor link to the dedicated resource page (Brief 3).
const models: { name: string; family: string; resourceHref?: string }[] = [
  { name: "S-20", family: "S-Series · Horizontal pivot" },
  {
    name: "S-20A",
    family: "S-Series · Horizontal pivot",
    resourceHref: "/resources/hyd-mech-s-20a-parts-list",
  },
  { name: "S-23A", family: "S-Series · Horizontal pivot" },
  { name: "DM-10", family: "DM-Series · Dual mitre" },
  { name: "DM-12", family: "DM-Series · Dual mitre" },
  { name: "V-18", family: "V-Series · Vertical" },
  { name: "V-25", family: "V-Series · Vertical" },
  { name: "M-16A", family: "M-Series · Manual" },
  { name: "M-20A", family: "M-Series · Manual" },
  { name: "H-14A", family: "H-Series · Production" },
  { name: "H-18A", family: "H-Series · Production" },
  { name: "H-22A", family: "H-Series · Production" },
  { name: "H-26/44", family: "H-Series · Production" },
];

const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Phone diagnosis",
    body:
      "Call (281) 704-5589. We listen for symptoms, model, and urgency — and tell you straight if it's a field fix or a factory-line problem.",
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
      "Technician arrives with tools, common Hyd-Mech wear parts, and OEM access. We diagnose, quote, then fix — on your floor, not in a shop bay.",
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
    title: "Authorized Hyd-Mech dealer",
    body:
      "Factory authorization means direct access to OEM parts channels, technical bulletins, and current schematics — not a guess from a forum thread.",
  },
  {
    title: "25 years, third generation",
    body:
      "Saw Service 3G is the third generation of one Greater Houston metals family. Your saw has probably already been serviced by us — or by Kaylen's father.",
  },
  {
    title: "We come to you",
    body:
      "Fully mobile. Your saw stays bolted to your floor; our truck shows up. 100-mile primary radius with surrounding-state coverage for larger jobs.",
  },
];

const faqItems: { q: string; a: string }[] = [
  {
    q: "Are you an authorized Hyd-Mech dealer?",
    a: "Yes. Saw Service 3G is a factory-authorized Hyd-Mech dealer in Texas. That gives us direct access to OEM parts channels, current technical bulletins, and the engineering documentation we need to repair every model in the Hyd-Mech line correctly — not by trial and error.",
  },
  {
    q: "Which Hyd-Mech models do you repair?",
    a: "The full industrial range: S-20, S-20A, S-23A, DM-10, DM-12, V-18, V-25, M-16A, M-20A, H-14A, H-18A, H-22A, and H-26/44. Older or unlisted Hyd-Mech models too — call (281) 704-5589 with your model and serial and we'll confirm.",
  },
  {
    q: "Why is my Hyd-Mech band saw not cutting straight?",
    a: "Three usual suspects in our experience: blade-guide wear (carbide inserts or roller bearings out of spec), guide-arm geometry drifted out of alignment, or hydraulic down-feed running uneven — pushing the blade past its cut rate. We diagnose all three on-site before quoting.",
  },
  {
    q: "How fast can you respond in Houston?",
    a: "Most Greater Houston customers see a technician on-site within 72 hours of the call, often sooner for existing accounts and emergency breakdowns. Time-and-a-half applies for evenings, weekends, and extended hours.",
  },
  {
    q: "Where are Hyd-Mech saws made?",
    a: "Hyd-Mech manufactures in Woodstock, Ontario (Canada) and operates a North American support facility in Conway, Arkansas. As an authorized US dealer we work directly with that support chain for parts and engineering questions.",
  },
];

// ---------- JSON-LD payloads (page-scoped) ----------

const LB_ID = `${site.url}/#localbusiness`;
const PAGE_URL = `${site.url}${ROUTE}`;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Hyd-Mech Band Saw Repair",
  serviceType: "Band saw repair and maintenance",
  description:
    "On-site repair, calibration, and preventive maintenance for Hyd-Mech industrial band saws across the Greater Houston Area and surrounding states.",
  provider: { "@id": LB_ID },
  brand: { "@type": "Brand", name: "Hyd-Mech" },
  areaServed: [
    { "@type": "City", name: "Houston" },
    ...coverage.map((c) => ({ "@type": "State" as const, name: c.name })),
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Industrial fabricators, machine shops, steel service centers, oil & gas, manufacturing facilities",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hyd-Mech repair scope",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: site.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${site.url}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hyd-Mech Band Saw Repair",
      item: PAGE_URL,
    },
  ],
};

// -----------------------------------------------------

export default function HydMechBandSawRepairPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Hyd-Mech Band Saw Repair" },
          ]}
        />

        <PageHero
          eyebrow="Hyd-Mech Service · Authorized Dealer"
          title={
            <>
              Hyd-Mech Band Saw Repair in Houston
              <span className="block text-spark-500">
                Authorized Dealer Service
              </span>
            </>
          }
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/50 bg-spark-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-spark-300">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
              Factory-Authorized Hyd-Mech Dealer
            </span>
          }
          lede={
            <>
              On-site Hyd-Mech band saw repair from a factory-authorized
              Texas dealer. We service every model in the line — S-Series,
              DM-Series, V-Series, M-Series, H-Series — across Greater
              Houston and surrounding states. Drive systems, hydraulics,
              controls, blade tracking, calibration, and PM. Billed only
              after the saw cuts square again.
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

        {/* H2 #1 — Authorized dealer trust block */}
        <section
          aria-labelledby="dealer-trust-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">Why authorized matters</p>
              <h2
                id="dealer-trust-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Authorized Hyd-Mech Dealer — what that means for your saw.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  Hyd-Mech builds horizontal pivot, dual-mitre, and
                  high-production band saws used in fabrication, steel
                  service centers, and structural cutting from Woodstock,
                  Ontario and Conway, Arkansas. When a Hyd-Mech goes down,
                  the wrong fix is faster than no fix — wrong tracking
                  setup chews carbide blades, mis-routed hydraulics walks
                  cylinders out of tune, and out-of-spec guide arms put
                  side-load on the head casting.
                </p>
                <p>
                  Saw Service 3G is a factory-authorized Hyd-Mech dealer.
                  That title is more than a logo on a sticker. It means we
                  pull from OEM parts channels, read the same technical
                  bulletins Hyd-Mech publishes for warranty work, and have
                  the engineering documentation to set a saw back to spec
                  rather than approximate it. If your saw is still under
                  warranty, dealer service keeps that warranty intact.
                </p>
                <p>
                  Our crew has 25 years of field hours on Hyd-Mech S, DM, V,
                  and H series saws. The third-generation team has watched
                  the same fleets cut through everything from 1018 round
                  stock to Inconel and titanium. Authorization is the
                  paperwork; experience is what gets the saw cutting square
                  before you reload.
                </p>
                <p>
                  Most of our Hyd-Mech work happens out in{" "}
                  <Link
                    href="/service-area/houston-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Houston
                  </Link>
                  ,{" "}
                  <Link
                    href="/service-area/katy-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Katy
                  </Link>
                  , and{" "}
                  <Link
                    href="/service-area/cypress-tx"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Cypress
                  </Link>{" "}
                  &mdash; three corridors with dense fabrication and
                  machine-shop activity. If a blade gives up mid-job, we can
                  also{" "}
                  <Link
                    href="/services/band-saw-blade-welding"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    weld a replacement blade
                  </Link>{" "}
                  on the truck and have you cutting again the same visit.
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
                Hyd-Mech repairs we perform.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Every system on the saw, diagnosed and repaired on your
                floor. We bring the tools, common wear parts, and OEM
                access — you keep your throughput.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {repairAreas.map((r, i) => (
                <Reveal
                  key={r.title}
                  delay={i * 0.04}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 p-6 transition-colors hover:border-spark-500/40"
                >
                  <r.icon
                    className="h-7 w-7 text-spark-400"
                    aria-hidden
                  />
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
                Hyd-Mech models we service.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                If it&rsquo;s wearing the Hyd-Mech badge, we work on it.
                Don&rsquo;t see your model? Call — we&rsquo;ve probably
                seen it anyway.
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
                    {m.resourceHref && (
                      <Link
                        href={m.resourceHref}
                        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-spark-500/40 bg-spark-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-spark-300 hover:bg-spark-500/15"
                      >
                        Reference
                        <ArrowRight className="h-3 w-3" aria-hidden />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-2xl text-sm text-ink-400">
                Looking for a brand overview?{" "}
                <Link
                  href="/brands/hyd-mech"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  See our Hyd-Mech dealer page
                </Link>{" "}
                for sales, parts, and the rest of the lineup.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Brand × city matrix — 6 city cards linking to each service-area page */}
        <BrandCityMatrix
          mode="cities-for-brand"
          brandSlug="hyd-mech"
          brandLabel="Hyd-Mech"
        />

        {/* Failure modes by model — structured per-series symptom catalog */}
        <FailureModesByModel
          brandSlug="hyd-mech"
          heading="Common Hyd-Mech failure modes we see in the field"
          lede="Twenty-five years of authorized-dealer service on the Hyd-Mech line — these are the issues we diagnose most often, grouped by model series. Symptoms are operator-facing; common causes are what we look at first."
        />

        {/* H2 #4 — Process */}
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

        {/* H2 #5 — Service area */}
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
                Houston, Texas &amp; beyond.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-300 md:text-lg">
                We&rsquo;re based in Spring, TX (north Greater Houston) with
                a 100-mile primary radius covering Harris, Fort Bend,
                Brazoria, Galveston, Montgomery, Liberty, and Walker
                counties. We also roll into Louisiana, Oklahoma, Arkansas,
                New Mexico, and Mississippi for larger jobs and existing
                Hyd-Mech accounts.
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

        {/* H2 #6 — Why owners choose us */}
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
                Why Hyd-Mech owners choose Saw Service 3G.
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
                Mixed fleet? We also service{" "}
                <Link
                  href="/services/hem-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  HEM saws
                </Link>
                {" "}and{" "}
                <Link
                  href="/services/marvel-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Marvel band saws
                </Link>
                {" "}on the same visit &mdash; same crew, same truck.
              </p>
            </Reveal>
          </div>
        </section>

        {/* H2 #7 — FAQ */}
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
                Hyd-Mech repair — owner FAQ.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Five questions we hear most often before a Hyd-Mech repair
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

        {/* H2 #8 — CTA */}
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
                Phone is fastest. Tell us the model, what the saw is doing,
                and the city — we&rsquo;ll quote the visit and the work
                before we roll.
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

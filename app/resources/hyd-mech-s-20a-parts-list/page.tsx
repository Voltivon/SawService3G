import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, Info } from "lucide-react";
import { site } from "@/data/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { ClickToCallFab } from "@/components/click-to-call-fab";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Breadcrumbs } from "@/components/sub-page/breadcrumbs";
import { PageHero } from "@/components/sub-page/page-hero";
import { safeJsonLd } from "@/lib/jsonld";

const ROUTE = "/resources/hyd-mech-s-20a-parts-list";
const TITLE_TAG =
  "Hyd-Mech S-20A Parts & Service Reference | Saw Service 3G";
const META_DESC =
  "A practical Hyd-Mech S-20A parts and service reference — top wear items, failure symptoms, and when to DIY vs. call a Texas-authorized tech.";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

export const metadata: Metadata = {
  title: { absolute: TITLE_TAG },
  description: META_DESC,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "article",
    title: "Hyd-Mech S-20A Parts & Service Reference | Saw Service 3G",
    description:
      "Wear parts, failure symptoms, service intervals, and a DIY-vs-tech decision tree for the Hyd-Mech S-20A — from an authorized dealer.",
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
    publishedTime: `${PUBLISHED}T00:00:00.000Z`,
    modifiedTime: `${MODIFIED}T00:00:00.000Z`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyd-Mech S-20A Parts & Service Reference",
    description:
      "Wear parts, failure symptoms, and a DIY-vs-tech decision tree from an authorized Hyd-Mech dealer.",
  },
  robots: { index: true, follow: true },
};

// CATEGORY names only — per CLAUDE.md §4 honesty rule. The brief explicitly
// forbids publishing OEM part numbers without verified current-database
// access. Owners get to a real number through the quote form or by calling.
const wearParts: { name: string; body: string }[] = [
  {
    name: "Carbide blade-guide inserts",
    body:
      "The pair of side carbides that ride against the blade just above and below the cut. Worn carbides are the single most common cause of an S-20A drifting off square. Replaceable on the floor.",
  },
  {
    name: "Roller guide bearings",
    body:
      "The back-up rollers behind the carbides. When they get notchy or seized, they let the blade wander vertically — usually shows up as a wavy finish on heavy stock.",
  },
  {
    name: "Hydraulic filter element",
    body:
      "Cleans the hydraulic fluid that runs the vise, blade tension, and down-feed circuit. Saturating it starves the cylinders; intermittent clamp issues are an early symptom.",
  },
  {
    name: "Drive belt(s)",
    body:
      "The belt(s) between motor and gearbox. Glazing, cracking, or stretch shows up as a saw that loses cut speed under load, especially on harder alloys.",
  },
  {
    name: "Chip brush",
    body:
      "The rotating brush that sweeps chips off the blade after each pass. A worn brush packs chips into the gullets — your blade life drops fast and the cut quality goes with it.",
  },
];

const symptoms: { dt: string; dd: string }[] = [
  {
    dt: "Saw is drifting off square",
    dd: "Start with the carbide blade-guide inserts and the back-up rollers; check guide-arm position before assuming the blade is bad.",
  },
  {
    dt: "Vise won't clamp / clamp pressure drops mid-cut",
    dd: "Likely the hydraulic circuit — filter element, then valves and cylinder seals. Confirm fluid level first.",
  },
  {
    dt: "Down-feed is jumpy or stalls",
    dd: "Down-feed regulator and damper cylinder before anything else. Could also be a sticky valve.",
  },
  {
    dt: "Cut quality went bad fast (waves, rough finish)",
    dd: "Chip brush, then guide bearings, then blade tension. Blade-to-vise geometry is the deeper check.",
  },
  {
    dt: "Saw won't start / contactor chatters",
    dd: "Electrical — start with the motor starter and overload, then E-stop and limit-switch circuit. PLC inputs last.",
  },
];

// Hedged intervals. Per brief: "Typical usage tier → likely service window —
// confirm against your manual." No fabricated numbers.
const intervals: { interval: string; tasks: string }[] = [
  {
    interval: "Each shift / daily",
    tasks:
      "Check coolant level and mix, inspect chip brush contact, listen for unusual drive noise.",
  },
  {
    interval: "Weekly",
    tasks:
      "Clean chips and coolant residue from guide arm and bed, check blade tension reading at known load.",
  },
  {
    interval: "Monthly (typical)",
    tasks:
      "Visual hydraulic check (leaks, hose chafing), inspect carbide guide wear, verify squareness on a test cut.",
  },
  {
    interval: "Per manufacturer schedule",
    tasks:
      "Hydraulic filter change, gearbox oil check, drive-belt inspection, and electrical-cabinet cleaning. Confirm interval against your S-20A Series II or Series III manual.",
  },
];

const faqItems: { q: string; a: string }[] = [
  {
    q: "How often should I change the hydraulic filter on a Hyd-Mech S-20A?",
    a: "Refer to the schedule in your S-20A service manual — the OEM interval depends on hydraulic-fluid type, ambient temperature, and duty cycle. As a typical guideline, shops running daily production replace the filter once per year minimum and inspect it quarterly; lighter-duty shops can often go longer. If the filter is loaded, the saw will tell you with intermittent clamp or down-feed behavior first.",
  },
  {
    q: "What's the difference between S-20A Series II and Series III?",
    a: "Series II and Series III S-20As share the same overall geometry, but Series III machines (later production runs) ship with updated hydraulic packaging, revised guide-arm hardware, and a refreshed control package. Most field repairs cross over between the two series, but parts must be matched to the saw's serial number — call us with the serial off the data plate and we'll confirm before any part order.",
  },
  {
    q: "Can I replace S-20A blade guides myself?",
    a: "If you're comfortable with the geometry — yes. Carbide blade-guide inserts and the back-up rollers are designed to be replaceable; the catch is setting them to the correct clearance against the blade and verifying the guide arm is still in factory position. If the saw drifts again after the swap, that's the guide-arm geometry, not the inserts. We can do both in one visit.",
  },
  {
    q: "Where can I get OEM Hyd-Mech S-20A parts in Texas?",
    a: "Through us. Saw Service 3G is an authorized Hyd-Mech dealer in Texas; we source OEM S-20A parts directly through Hyd-Mech as part of a service job. We don't run a retail parts counter, but if you need a specific component for a self-service repair we can serial-match it and quote it. Call (281) 704-5589.",
  },
];

// ---------- JSON-LD payloads (page-scoped) ----------

const LB_ID = `${site.url}/#localbusiness`;
const PAGE_URL = `${site.url}${ROUTE}`;

const techArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${PAGE_URL}#article`,
  headline: "Hyd-Mech S-20A Parts & Service Reference",
  description: META_DESC,
  proficiencyLevel: "Expert",
  dependencies: "Hyd-Mech S-20A band saw",
  about: {
    "@type": "Product",
    name: "Hyd-Mech S-20A Horizontal Pivot Band Saw",
    brand: { "@type": "Brand", name: "Hyd-Mech" },
  },
  author: { "@id": LB_ID },
  publisher: { "@id": LB_ID },
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  inLanguage: "en-US",
  mainEntityOfPage: PAGE_URL,
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
      name: "Resources",
      item: `${site.url}/resources/hyd-mech-s-20a-parts-list`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hyd-Mech S-20A Parts & Service Reference",
      item: PAGE_URL,
    },
  ],
};

// -----------------------------------------------------

export default function HydMechS20AReferencePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources" },
            { label: "Hyd-Mech S-20A Parts & Service Reference" },
          ]}
        />

        <PageHero
          eyebrow="Resource · Hyd-Mech S-20A"
          title={<>Hyd-Mech S-20A Parts &amp; Service Reference</>}
          lede={
            <>
              A plain-English reference for owners of the Hyd-Mech S-20A
              horizontal pivot band saw — the wear parts that fail most
              often, what the symptoms usually mean, when to swap one
              yourself, and when to call a tech. Written by an{" "}
              <Link
                href="/brands/hyd-mech"
                className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
              >
                authorized Hyd-Mech dealer
              </Link>{" "}
              with 25 years on Greater Houston shop floors.
            </>
          }
        >
          <Link
            href="/services/hyd-mech-band-saw-repair"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-spark"
          >
            Get S-20A Service
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Magnetic>
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-ghost"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone.display}
            </a>
          </Magnetic>
        </PageHero>

        {/* Honesty notice */}
        <Reveal>
          <div className="container-x">
            <aside
              role="note"
              className="flex gap-4 rounded-2xl border border-spark-500/20 bg-spark-500/[0.04] p-5 text-sm text-ink-200"
            >
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-spark-400"
                aria-hidden
              />
              <p>
                <span className="font-semibold text-white">
                  About this reference:
                </span>{" "}
                The information below uses generic component names rather
                than OEM part numbers. For a specific part number against
                your serial, call us or request a quote — we&rsquo;ll
                serial-match it through Hyd-Mech.
              </p>
            </aside>
          </div>
        </Reveal>

        {/* H2 #1 — About the S-20A */}
        <section
          aria-labelledby="about-heading"
          className="relative py-16 md:py-20"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">About the model</p>
              <h2
                id="about-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                About the Hyd-Mech S-20A.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  The Hyd-Mech S-20A is a horizontal pivot semi-automatic
                  band saw — a workhorse for Greater Houston fab shops,
                  machine shops, and steel service centers. The S-20A
                  shipped in Series II and Series III variants over the
                  years; geometry stayed largely the same while hydraulics,
                  guide hardware, and controls evolved between revisions.
                </p>
                <p>
                  The good news for owners: it&rsquo;s a thoroughly
                  rebuildable saw. Almost everything that wears out is
                  replaceable on the shop floor without pulling the saw out
                  of production. The trick is knowing which symptom points
                  at which component — and where the line is between
                  &ldquo;swap it yourself&rdquo; and &ldquo;call a
                  tech.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #2 — Top wear parts */}
        <section
          aria-labelledby="wear-parts-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Wear parts</p>
              <h2
                id="wear-parts-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Top 5 wear parts on the S-20A.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                In rough order of how often we replace them in the field.
                Component categories — not part numbers; serial-match
                before you order.
              </p>
            </Reveal>
            <ol className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
              {wearParts.map((p, i) => (
                <Reveal
                  key={p.name}
                  delay={i * 0.04}
                  className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6"
                >
                  <li>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs tracking-[0.22em] text-spark-400">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-lg font-bold tracking-tight text-white">
                        {p.name}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-300">
                      {p.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* H2 #3 — Symptoms */}
        <section
          aria-labelledby="symptoms-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Diagnose by symptom</p>
              <h2
                id="symptoms-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Common failure symptoms — and what they usually mean.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Starting points only. Real diagnosis happens with the saw
                in front of you. If two of these symptoms compound, skip
                to the decision tree.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-12 divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-ink-900/40">
                {symptoms.map((s, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 gap-3 px-6 py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-8"
                  >
                    <dt className="font-display text-base font-bold text-white md:text-lg">
                      {s.dt}
                    </dt>
                    <dd className="text-sm leading-relaxed text-ink-300 md:text-base">
                      {s.dd}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* H2 #4 — DIY vs call a tech */}
        <section
          aria-labelledby="decision-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Decision tree</p>
              <h2
                id="decision-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                DIY vs. call a tech.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Honest framing from a service shop: not every job is worth
                a service call, and not every job is safe as a self-repair.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
              <Reveal className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
                  DIY-friendly
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-200">
                  <li>Carbide blade-guide inserts (if you have spec)</li>
                  <li>Chip brush replacement and alignment</li>
                  <li>Coolant top-up, mix adjustment, nozzle cleaning</li>
                  <li>Routine cleaning of bed, vise jaws, and guide arm</li>
                  <li>Visual hydraulic walk-around</li>
                </ul>
              </Reveal>
              <Reveal
                delay={0.05}
                className="rounded-2xl border border-spark-500/30 bg-spark-500/[0.04] p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
                  Call a tech
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-200">
                  <li>Recurring drift after a guide swap (geometry)</li>
                  <li>Hydraulic leaks, slow clamp, jumpy down-feed</li>
                  <li>Drive issues — belts, gearbox, motor</li>
                  <li>Electrical — contactor chatter, prox sensor errors</li>
                  <li>
                    Any time the saw is under warranty or PM contract
                  </li>
                </ul>
                <Link
                  href="/services/hyd-mech-band-saw-repair"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Book Hyd-Mech repair
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* H2 #5 — Service intervals */}
        <section
          aria-labelledby="intervals-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Service intervals</p>
              <h2
                id="intervals-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                S-20A service interval reference.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Typical service buckets — not OEM-warrantied values.
                Always cross-check against your S-20A Series II or III
                manual, which ships with the model-specific schedule.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/40">
                <table className="w-full text-left text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-white/[0.06] bg-ink-950/40">
                      <th
                        scope="col"
                        className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-spark-400"
                      >
                        Interval (typical)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-spark-400"
                      >
                        Tasks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {intervals.map((row) => (
                      <tr key={row.interval}>
                        <th
                          scope="row"
                          className="px-6 py-4 align-top font-display font-bold text-white"
                        >
                          {row.interval}
                        </th>
                        <td className="px-6 py-4 align-top text-ink-300">
                          {row.tasks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #6 — Official resources */}
        <section
          aria-labelledby="official-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Official resources</p>
              <h2
                id="official-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Hyd-Mech&rsquo;s own S-20A documentation.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Two outbound links — the OEM product page and the support
                portal. For anything serial-specific, those are the
                authoritative sources.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
                <a
                  href="https://hydmech.com/products/band-saws-horitzontal-pivot-s-20a/"
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6 transition-colors hover:border-spark-500/40"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
                      OEM product page
                    </p>
                    <p className="mt-2 font-display text-base font-bold text-white">
                      Hyd-Mech S-20A on hydmech.com
                    </p>
                    <p className="mt-1 text-sm text-ink-400">
                      Specs, capacities, factory documentation entry point.
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-spark-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
                <a
                  href="https://hydmech.com/support/"
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6 transition-colors hover:border-spark-500/40"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
                      OEM support
                    </p>
                    <p className="mt-2 font-display text-base font-bold text-white">
                      Hyd-Mech parts &amp; support portal
                    </p>
                    <p className="mt-1 text-sm text-ink-400">
                      Manuals, parts lookup, and warranty resources.
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-spark-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </div>
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
              <p className="eyebrow">Owner FAQ</p>
              <h2
                id="faq-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                S-20A owner FAQ.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Four questions we hear most often before an S-20A service
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
              <p className="eyebrow">Need hands-on help?</p>
              <h2
                id="cta-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Need hands-on help with your S-20A?
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink-300">
                We&rsquo;re an authorized Hyd-Mech dealer based in Spring,
                TX. Call us or request a quote — we&rsquo;ll get a tech to
                your floor, usually within 72 hours.
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
                  href="/services/hyd-mech-band-saw-repair"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-ghost"
                >
                  Hyd-Mech Service Page
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(techArticleJsonLd) }}
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

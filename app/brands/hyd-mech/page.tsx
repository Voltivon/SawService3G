import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { ClickToCallFab } from "@/components/click-to-call-fab";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Breadcrumbs } from "@/components/sub-page/breadcrumbs";
import { PageHero } from "@/components/sub-page/page-hero";
import { safeJsonLd } from "@/lib/jsonld";

const ROUTE = "/brands/hyd-mech";
const TITLE_TAG = "Authorized Hyd-Mech Dealer in Texas | Saw Service 3G";
const META_DESC =
  "Saw Service 3G is an authorized Hyd-Mech dealer in Texas. Sales, parts access, on-site service for S-Series, DM, V-Series, H-Series, and CSNC saws.";

export const metadata: Metadata = {
  title: { absolute: TITLE_TAG },
  description: META_DESC,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: "Authorized Hyd-Mech Dealer in Texas | Saw Service 3G",
    description:
      "Authorized Hyd-Mech dealer covering Houston and Texas. Every model serviced. Sales, parts, on-site repair.",
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Authorized Hyd-Mech Dealer | Saw Service 3G",
    description:
      "Authorized Hyd-Mech dealer covering Houston and Texas. Sales, parts, on-site service.",
  },
  robots: { index: true, follow: true },
};

// Model index — full Hyd-Mech industrial range. Anchor links only on models
// that have dedicated resource pages (currently S-20A). Per brief: do NOT
// link out to hydmech.com from this list — dilutes the authority signal.
const modelIndex: {
  family: string;
  blurb: string;
  models: { name: string; resourceHref?: string }[];
}[] = [
  {
    family: "S-Series — Horizontal Pivot",
    blurb:
      "Workhorse semi-auto and auto horizontal pivot saws. The shop-floor backbone.",
    models: [
      { name: "S-20" },
      {
        name: "S-20A",
        resourceHref: "/resources/hyd-mech-s-20a-parts-list",
      },
      { name: "S-23A" },
    ],
  },
  {
    family: "DM-Series — Dual Mitre",
    blurb:
      "Dual-mitre production saws for structural and mitered cutting.",
    models: [{ name: "DM-10" }, { name: "DM-12" }],
  },
  {
    family: "V-Series — Vertical",
    blurb:
      "Vertical band saws for plate cutting and irregular profiles.",
    models: [{ name: "V-18" }, { name: "V-25" }],
  },
  {
    family: "M-Series — Manual",
    blurb:
      "Manual horizontal saws for shops that want simple, durable, repairable.",
    models: [{ name: "M-16A" }, { name: "M-20A" }],
  },
  {
    family: "H-Series — Production",
    blurb:
      "Heavy-duty production horizontals for high-throughput operations.",
    models: [
      { name: "H-14A" },
      { name: "H-18A" },
      { name: "H-22A" },
      { name: "H-26/44" },
    ],
  },
];

// ---------- JSON-LD payloads (page-scoped) ----------

const LB_ID = `${site.url}/#localbusiness`;
const PAGE_URL = `${site.url}${ROUTE}`;
const BRAND_ID = `${PAGE_URL}#brand`;

const brandJsonLd = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": BRAND_ID,
  name: "Hyd-Mech",
  alternateName: ["HYDMECH", "Hyd Mech", "Hydmech"],
  description:
    "Hyd-Mech is a North American manufacturer of industrial band saws — horizontal pivot, dual-mitre, vertical, and production-class models — built in Woodstock, Ontario and supported from Conway, Arkansas.",
  url: PAGE_URL,
};

const orgBrandJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${PAGE_URL}#dealer-org`,
  name: site.name,
  url: site.url,
  brand: { "@id": BRAND_ID },
  // Mention of the local business as the same legal entity:
  sameAs: [LB_ID],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Authorized Dealer",
    recognizedBy: {
      "@type": "Organization",
      name: "Hyd-Mech",
    },
  },
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
      name: "Brands",
      item: `${site.url}/#brands`,
    },
    { "@type": "ListItem", position: 3, name: "Hyd-Mech", item: PAGE_URL },
  ],
};

// -----------------------------------------------------

export default function HydMechBrandPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Brands", href: "/#brands" },
            { label: "Hyd-Mech" },
          ]}
        />

        <PageHero
          eyebrow="Brand · Authorized Dealer"
          title={
            <>
              Authorized Hyd-Mech Dealer
              <span className="block text-spark-500">
                Sales, Parts &amp; On-Site Service
              </span>
            </>
          }
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/50 bg-spark-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-spark-300">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
              Factory-Authorized · Hyd-Mech
            </span>
          }
          lede={
            <>
              Saw Service 3G is an authorized Hyd-Mech dealer in Texas.
              We&rsquo;ve been servicing Hyd-Mech band saws across the
              Greater Houston Area for 25 years — from manual S-Series
              workhorses to H-Series production saws — and we cover every
              model in the current lineup for parts, service, and sales.
            </>
          }
        >
          <Link
            href="/services/hyd-mech-band-saw-repair"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-spark"
          >
            See Hyd-Mech Repair Service
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

        {/* H2 #1 — Why authorized matters */}
        <section
          aria-labelledby="why-authorized-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">Why it matters</p>
              <h2
                id="why-authorized-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Authorized Hyd-Mech Dealer — why it matters.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  &ldquo;Authorized&rdquo; isn&rsquo;t marketing. It is a
                  direct line to OEM parts, factory technical bulletins,
                  and the engineering schematics that ship with each
                  Hyd-Mech model. When we put hands on a Hyd-Mech band saw
                  on your floor, we&rsquo;re working from the same docs
                  Hyd-Mech publishes for warranty repair — not a forum
                  guess.
                </p>
                <p>
                  We service it after the sale, too. Hyd-Mech builds saws
                  meant to run for decades; the dealer relationship is
                  what keeps them running for those decades. Anchoring,
                  alignment, hydraulic rebuilds, drive overhauls, and
                  scheduled preventive maintenance — all of it covered
                  under one authorized roof.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #2 — Models we cover (model index) */}
        <section
          aria-labelledby="models-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Model index</p>
              <h2
                id="models-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Hyd-Mech models we cover.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Every series in the current Hyd-Mech industrial lineup. The
                S-20A links through to a parts &amp; service reference;
                more model pages follow as we publish them.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
              {modelIndex.map((g, i) => (
                <Reveal
                  key={g.family}
                  delay={i * 0.04}
                  className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6"
                >
                  <h3 className="font-display text-xl font-bold tracking-tight text-white">
                    {g.family}
                  </h3>
                  <p className="mt-2 text-sm text-ink-300">{g.blurb}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {g.models.map((m) => (
                      <div
                        key={m.name}
                        className="rounded-lg border border-white/[0.06] bg-ink-950/40 px-3 py-2"
                      >
                        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                          Model
                        </dt>
                        <dd className="mt-0.5 font-display text-sm font-bold text-white">
                          {m.resourceHref ? (
                            <Link
                              href={m.resourceHref}
                              className="text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                            >
                              {m.name}
                            </Link>
                          ) : (
                            m.name
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* H2 #3 — Why Hyd-Mech and why service with us */}
        <section
          aria-labelledby="why-hydmech-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">Brand &amp; service fit</p>
              <h2
                id="why-hydmech-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Why Hyd-Mech — and why service with us.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  Hyd-Mech band saws earn their place on the shop floor
                  through a deliberately rebuildable design: standard
                  hydraulic components, a serviceable drive package, blade
                  guides that can be reset to spec, and a control system
                  that&rsquo;s straightforward to troubleshoot. The result
                  is a fleet of saws that, with the right service partner,
                  keeps cutting square long past warranty.
                </p>
                <p>
                  Saw Service 3G is that partner in Texas. Three generations
                  of our family have worked on Hyd-Mech equipment — from
                  early S-series horizontals on independent fab-shop floors
                  to current production H-series saws in steel service
                  centers. Authorization is the paperwork; field hours are
                  what get a Hyd-Mech back in cycle on a same-week visit.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #4 — Parts access */}
        <section
          aria-labelledby="parts-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">Parts access</p>
              <h2
                id="parts-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Hyd-Mech parts, sourced direct.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                We don&rsquo;t run a retail parts counter — we source
                Hyd-Mech parts as part of a service job, through the OEM
                channels our dealer status unlocks. For owners who want to
                self-service a specific component, we&rsquo;ll point you to
                the right Hyd-Mech support resource and confirm the part
                fits your serial.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
                  Honest about what we do
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-200">
                  <li className="flex gap-3">
                    <BadgeCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-spark-400"
                      aria-hidden
                    />
                    OEM Hyd-Mech parts sourced as part of a service visit.
                  </li>
                  <li className="flex gap-3">
                    <BadgeCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-spark-400"
                      aria-hidden
                    />
                    Common wear items carried on the truck for first-visit
                    fixes.
                  </li>
                  <li className="flex gap-3">
                    <BadgeCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-spark-400"
                      aria-hidden
                    />
                    Serial-matched cross-reference before any part order.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #5 — Need Hyd-Mech repair (funnel into Brief 1) */}
        <section
          aria-labelledby="repair-funnel-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Service hub</p>
              <h2
                id="repair-funnel-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Need Hyd-Mech repair?
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Drive, hydraulics, controls, tracking — most Hyd-Mech
                breakdowns are repairable on your floor in a single visit.
                Our dedicated service page covers scope, models, process,
                and FAQ.
              </p>
              <Link
                href="/services/hyd-mech-band-saw-repair"
                className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-spark"
              >
                Hyd-Mech Band Saw Repair
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* H2 #6 — Service area */}
        <section
          aria-labelledby="area-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <p className="eyebrow">Service area</p>
              <h2
                id="area-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Houston, Texas — and surrounding states.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-300 md:text-lg">
                We roll out of Spring, TX with a 100-mile primary radius
                covering the Greater Houston Area. Hyd-Mech accounts
                across Louisiana, Oklahoma, Arkansas, New Mexico, and
                Mississippi are also on the schedule for larger jobs.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
                  Coverage details
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-200">
                  See the full coverage map for cities served and primary
                  radius.
                </p>
                <Link
                  href="/#coverage"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  View coverage map
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #7 — Quote */}
        <section
          aria-labelledby="quote-cta-heading"
          className="relative border-t border-white/[0.06] bg-ink-950/60 py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Contact us</p>
              <h2
                id="quote-cta-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Hyd-Mech sales or service quote.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink-300">
                Looking for a new Hyd-Mech, or service on the one you own?
                Phone&rsquo;s fastest. Online form works too.
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(brandJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(orgBrandJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
    </>
  );
}

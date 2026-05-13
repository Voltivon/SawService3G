import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CircuitBoard,
  Disc3,
  Droplets,
  Gauge,
  Hammer,
  MapPin,
  Phone,
  Truck,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { brands } from "@/data/brands";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { ClickToCallFab } from "@/components/click-to-call-fab";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Breadcrumbs } from "@/components/sub-page/breadcrumbs";
import { PageHero } from "@/components/sub-page/page-hero";
import { safeJsonLd } from "@/lib/jsonld";
import {
  type CityConfig,
  serviceAreaCities,
} from "@/data/service-area";

// Shared trust + repair-scope copy. Identical across all 6 location pages by
// design — the "what we service" / "why us" / "process" blocks are the same
// business no matter which city the visitor lives in. Only the city-context
// section, the FAQ block, and the hero copy vary.

type RepairArea = {
  icon: typeof Wrench;
  title: string;
  body: string;
};

const repairAreas: RepairArea[] = [
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

const trustPillars: { title: string; body: string }[] = [
  {
    title: "Authorized Hyd-Mech dealer",
    body:
      "Factory authorization gives us direct OEM parts access, current technical bulletins, and the engineering documentation we need to set a saw to spec — not approximate it.",
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
  {
    title: "Billed after the saw cuts square",
    body:
      "Verified test cut before we leave. Invoice goes out after the work is done right — Net 30 ACH or check.",
  },
];

// Standard brands list — augmented per-city when the brief calls for it
// (Cypress emphasizes JLH service alongside the standard list).
const standardBrands = brands.map((b) => b.name);

// --- JSON-LD builders -----------------------------------------------------

const LB_ID = `${site.url}/#localbusiness`;

function buildServiceJsonLd(city: CityConfig, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Industrial Band Saw Repair — ${city.city}, TX`,
    serviceType: "Band saw repair and maintenance",
    description: `On-site industrial band saw repair, calibration, and preventive maintenance for ${city.cityFull} and the surrounding North Houston corridor. Authorized Hyd-Mech dealer.`,
    provider: { "@id": LB_ID },
    brand: { "@type": "Brand", name: "Hyd-Mech" },
    areaServed: {
      "@type": "City",
      name: city.city,
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Industrial fabricators, machine shops, steel service centers, oil & gas, manufacturing facilities, CNC shops",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Band saw repair scope — ${city.city}`,
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
}

function buildFaqJsonLd(city: CityConfig, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: city.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function buildBreadcrumbJsonLd(city: CityConfig, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
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
        name: "Service Area",
        item: `${site.url}/#coverage`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${city.city}, TX`,
        item: pageUrl,
      },
    ],
  };
}

// --- Component ------------------------------------------------------------

export function LocationPage({ city }: { city: CityConfig }) {
  const pageUrl = `${site.url}/service-area/${city.slug}`;

  const serviceJsonLd = buildServiceJsonLd(city, pageUrl);
  const faqJsonLd = buildFaqJsonLd(city, pageUrl);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(city, pageUrl);

  // City-specific brands list. Cypress + future custom emphasis cities get
  // their owner-confirmed list; everyone else gets the standard data/brands.
  const brandList = city.brandEmphasis ?? standardBrands;

  // Hero copy varies for the home city.
  const heroEyebrow = city.isHomeCity
    ? "Service Area · Home City"
    : `Service Area · ${city.city}, TX`;

  const heroTitle = city.isHomeCity ? (
    <>
      Industrial Band Saw Repair
      <span className="block text-spark-500">
        Spring, Texas — Our Home City
      </span>
    </>
  ) : (
    <>
      Industrial Band Saw Repair
      <span className="block text-spark-500">{city.city}, Texas</span>
    </>
  );

  const heroLede = city.isHomeCity ? (
    <>
      Our shop is in Spring, TX — 6822 Ambler Drive. Same-day local response
      (subject to schedule), authorized Hyd-Mech dealer, and 25 years of field
      hours on the saws running across Harris and Montgomery County. If you&rsquo;re
      in Spring, you&rsquo;re our home base.
    </>
  ) : (
    <>
      Mobile industrial band saw repair from our Spring, TX shop into{" "}
      {city.cityFull}. Drive systems, hydraulics, controls, blade tracking,
      calibration, and PM — billed only after the saw cuts square again.
      Authorized Hyd-Mech dealer.
    </>
  );

  // Cross-link footer excludes the current city.
  const otherCities = serviceAreaCities.filter((c) => c.slug !== city.slug);

  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Service Area", href: "/#coverage" },
            { label: `${city.city}, TX` },
          ]}
        />

        <PageHero
          eyebrow={heroEyebrow}
          title={heroTitle}
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/50 bg-spark-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-spark-300">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
              Factory-Authorized Hyd-Mech Dealer
            </span>
          }
          lede={heroLede}
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

        {/* H2 #1a — Home-city anchor (Spring only) */}
        {city.isHomeCity && (
          <section
            aria-labelledby="home-shop-heading"
            className="relative border-t border-white/[0.06] py-20 md:py-28"
          >
            <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
              <Reveal>
                <p className="eyebrow">Our shop is here</p>
                <h2
                  id="home-shop-heading"
                  className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                  style={{ overflowWrap: "break-word" }}
                >
                  Our shop is in Spring, TX.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                  <p>
                    Saw Service 3G operates out of {site.address.streetAddress},{" "}
                    {site.address.locality}, TX {site.address.postalCode}. That
                    address is the operational base for every truck we put on
                    the road. Spring is not a marketing description on this page
                    — it&rsquo;s where the trucks load up at 7:00 AM and where
                    they roll back in at the end of the shift.
                  </p>
                  <p>
                    For Spring-area customers, that means same-day local
                    response is the default (subject to schedule), not the
                    exception. We&rsquo;re a short drive from the FM 1960, FM
                    2920, and Hardy Toll Road industrial pockets. If a saw goes
                    down in Spring, we&rsquo;re usually the closest qualified
                    industrial band-saw service to your floor.
                  </p>
                  <p className="flex flex-wrap items-center gap-2 text-sm text-ink-400">
                    <MapPin
                      className="h-4 w-4 text-spark-400"
                      aria-hidden
                    />
                    {site.address.streetAddress}, {site.address.locality}, {site.address.state}{" "}
                    {site.address.postalCode}
                  </p>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* H2 #1 (satellite) / #2 (home) — Saws we service */}
        <section
          aria-labelledby="saws-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Coverage</p>
              <h2
                id="saws-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Industrial saws we service in {city.city}.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Authorized Hyd-Mech dealer plus on-site service for every other
                industrial brand running on {city.city}-area floors. Every
                system on the saw, diagnosed and repaired on your floor.
              </p>
            </Reveal>

            {/* Brand chips */}
            <Reveal delay={0.1}>
              <ul
                role="list"
                className="mt-10 flex flex-wrap gap-2"
              >
                {brandList.map((b) => {
                  const authorized = /authorized/i.test(b);
                  return (
                    <li
                      key={b}
                      className={
                        authorized
                          ? "rounded-full border border-spark-500/50 bg-spark-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-spark-300"
                          : "rounded-full border border-white/[0.08] bg-ink-900/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-300"
                      }
                    >
                      {b}
                    </li>
                  );
                })}
                {!city.brandEmphasis && (
                  <li className="rounded-full border border-white/[0.06] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                    + many more
                  </li>
                )}
              </ul>
            </Reveal>

            {/* Repair scope grid */}
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

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-sm text-ink-400">
                Hyd-Mech owner?{" "}
                <Link
                  href="/services/hyd-mech-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  See the authorized-dealer service page
                </Link>{" "}
                for the full Hyd-Mech model list and repair scope.
              </p>
            </Reveal>
          </div>
        </section>

        {/* H2 #2 (satellite) / #3 (home) — Drive time / same-day */}
        <section
          aria-labelledby="drive-time-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">
                {city.isHomeCity ? "Same-day local response" : "Drive time & dispatch"}
              </p>
              <h2
                id="drive-time-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                {city.isHomeCity ? (
                  <>Same-day local response — Spring &amp; North Houston.</>
                ) : (
                  <>From Spring to {city.city} — drive time &amp; availability.</>
                )}
              </h2>
              {city.driveTimeAngle && (
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-spark-300">
                  {city.driveTimeAngle}
                </p>
              )}
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p className="flex items-start gap-3">
                  <Truck
                    className="mt-1 h-5 w-5 shrink-0 text-spark-400"
                    aria-hidden
                  />
                  <span>{city.driveTime}</span>
                </p>
                <p>
                  Same-day calls are routed when our schedule allows. If a tech
                  is already in your corridor we can often re-route the same
                  shift. We never promise a hard SLA we can&rsquo;t back — but
                  we&rsquo;ll tell you on the phone what the realistic window
                  looks like before we roll a truck.
                </p>
                <p className="text-sm text-ink-400">
                  Time-and-a-half applies for evenings, weekends, and extended
                  hours.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #3 (satellite) / #4 (home) — Industrial context */}
        <section
          aria-labelledby="context-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <Reveal>
              <p className="eyebrow">Industrial base</p>
              <h2
                id="context-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                {city.city}&rsquo;s industrial context.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-ink-300 md:text-lg">
                {city.industrialContext}
              </p>
            </Reveal>
          </div>
        </section>

        {/* H2 #4 (satellite) / #5 (home) — Why Saw Service 3G */}
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
                Why {city.city} owners choose Saw Service 3G.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              {trustPillars.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 0.05}
                  className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6"
                >
                  <h3 className="font-display text-lg font-bold tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* H2 #5 (satellite) / #6 (home) — FAQ */}
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
                {city.city} band saw repair — FAQ.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul
                role="list"
                className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-ink-900/40"
              >
                {city.faq.map((f, i) => (
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

        {/* H2 — Other cities cross-link */}
        <section
          aria-labelledby="cross-link-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-24"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">More service-area pages</p>
              <h2
                id="cross-link-heading"
                className="h-display mt-4 text-2xl text-white sm:text-3xl md:text-4xl"
              >
                Other cities we serve.
              </h2>
              <p className="mt-4 text-base text-ink-300">
                The 100-mile primary radius covers the entire Greater Houston
                area. Each city below has its own service-area page.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
              >
                {otherCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/service-area/${c.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-ink-900/40 px-5 py-4 transition-colors hover:border-spark-500/40"
                    >
                      <div>
                        <p className="font-display text-base font-bold text-white">
                          {c.city}, TX
                        </p>
                        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                          Service area
                        </p>
                      </div>
                      <ArrowRight
                        className="h-4 w-4 text-spark-400 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* H2 — CTA */}
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
                {city.isHomeCity ? (
                  <>Call us — we&rsquo;re minutes away.</>
                ) : (
                  <>Get a quote for {city.city}.</>
                )}
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink-300">
                Phone is fastest. Tell us the brand, the model, what the saw is
                doing, and your {city.city} address — we&rsquo;ll quote the
                visit and the work before we roll.
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
    </>
  );
}

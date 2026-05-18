import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Phone,
  Scissors,
  Flame,
  Thermometer,
  Disc3,
  Ruler,
  Layers,
  MapPin,
} from "lucide-react";
import { site } from "@/data/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { ClickToCallFab } from "@/components/click-to-call-fab";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Breadcrumbs } from "@/components/sub-page/breadcrumbs";
import { PageHero } from "@/components/sub-page/page-hero";
import { safeJsonLd } from "@/lib/jsonld";

const ROUTE = "/services/band-saw-blade-welding";
const TITLE_TAG = "Band Saw Blade Welding in Houston | Saw Service 3G";
const META_DESC =
  "In-shop band saw blade welding across Greater Houston. Weld-to-length, annealed and ground. Bi-metal, carbon, carbide-tipped. Call (281) 704-5589.";

export const metadata: Metadata = {
  title: { absolute: TITLE_TAG },
  description: META_DESC,
  alternates: { canonical: ROUTE },
  openGraph: {
    type: "website",
    title: TITLE_TAG,
    description:
      "Weld-to-length band saw blades from a Spring TX shop. Bi-metal, carbon, carbide-tipped — welded, annealed, and ground. Mobile service across Greater Houston.",
    url: `${site.url}${ROUTE}`,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_TAG,
    description:
      "Weld-to-length band saw blades from a Spring TX shop. Bi-metal, carbon, carbide-tipped — welded, annealed, and ground. Mobile service across Greater Houston.",
  },
  robots: { index: true, follow: true },
};

// Materials we weld — hedged on max width / gauge per brief. No specific
// part numbers, no per-weld pricing.
const blades: { icon: typeof Layers; title: string; body: string }[] = [
  {
    icon: Layers,
    title: "Bi-metal",
    body:
      "The standard for general industrial cutting — bi-metal blades are the bulk of what passes across the welder. Carbon backing, high-speed-steel tooth edge, flexible enough to take a clean weld and stay true in the cut.",
  },
  {
    icon: Disc3,
    title: "Carbon",
    body:
      "Carbon-steel blades for lighter-duty work, wood-cutting verticals, and older horizontal saws. Welds cleanly with the right anneal cycle; we set the welder for the gauge before the joint goes in.",
  },
  {
    icon: Flame,
    title: "Carbide-tipped",
    body:
      "We weld the carbon or bi-metal backing of carbide-tipped blades. The carbide teeth themselves are brazed to the backing at the factory — joining the band into a loop doesn't touch them. Damaged carbide teeth are a re-tooth job, not a weld.",
  },
  {
    icon: Ruler,
    title: "Stainless-cutting blades",
    body:
      "M42 cobalt and stainless-rated bi-metal blades for cutting 304, 316, duplex, and Inconel. Same weld process; the difference is in feed, coolant, and tooth pitch — ask us if your stainless cuts are dragging.",
  },
];

// Process steps — the four-stage industrial flash-butt sequence.
const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Cut & square the ends",
    body:
      "Both blade ends are sheared square. Out-of-square ends are the number-one cause of weld failure — if the faces don't meet flat, the upset bead carries the misalignment into the joint and the blade tracks crooked.",
  },
  {
    step: "02",
    title: "Flash-butt weld",
    body:
      "The blade ends are clamped against each other in the welder, current is run through the joint, and the resistance heats the steel until the faces fuse. The same flash-butt method blade manufacturers use to make endless-loop blades from coil stock.",
  },
  {
    step: "03",
    title: "Anneal the joint",
    body:
      "The fresh weld is hard and brittle — it'll crack in service if it doesn't get relieved. The welder's anneal cycle re-heats the joint to draw the hardness back down and put the steel in a state the saw can flex without fatiguing.",
  },
  {
    step: "04",
    title: "Grind flush",
    body:
      "Welding upsets a small bead on both faces of the blade. Ground flat, the joint passes through the saw's guides cleanly. Skipped, the joint binds, deflects, or wears the carbide inserts prematurely. Grinding is non-negotiable.",
  },
];

// Blade brands we work with — framed as service, NEVER authorized.
const brandsWorkedWith: { name: string; note: string }[] = [
  { name: "Lenox", note: "Bi-metal, carbide, M42" },
  { name: "Starrett", note: "Bi-metal, carbon" },
  { name: "Bahco", note: "Bi-metal, sandflex" },
  { name: "Simonds", note: "Bi-metal, carbon" },
  { name: "Morse", note: "Bi-metal" },
  { name: "Other industrial", note: "If the stock cuts, we can weld it" },
];

const cities: { name: string; href: string; note: string }[] = [
  {
    name: "Houston",
    href: "/service-area/houston-tx",
    note: "Drop-off or pickup as part of a service call",
  },
  {
    name: "Katy",
    href: "/service-area/katy-tx",
    note: "Inside the truck radius — pickup available",
  },
  {
    name: "Cypress",
    href: "/service-area/cypress-tx",
    note: "Inside the truck radius — pickup available",
  },
  {
    name: "Conroe",
    href: "/service-area/conroe-tx",
    note: "Up I-45 from the shop — quick turnaround",
  },
  {
    name: "The Woodlands",
    href: "/service-area/the-woodlands-tx",
    note: "Ten minutes from the shop — same-day in most cases",
  },
  {
    name: "Spring TX shop",
    href: "/service-area/spring-tx",
    note: "Walk in or schedule a drop-off",
  },
];

const faqItems: { q: string; a: string }[] = [
  {
    q: "Can a band saw blade be welded?",
    a: "Yes. A broken or worn band saw blade can be welded back together using flash-butt welding — the same method blade manufacturers use to make endless-loop blades from coil stock. After welding, the joint is annealed to relieve stress and then ground flush so it passes through the saw's guides without catching.",
  },
  {
    q: "How does a band saw blade welder work?",
    a: "A blade welder is a resistance-welding machine. The two ends of the blade are clamped square against each other and pressed together while an electrical current passes through the joint. The resistance generates enough heat to melt the metal, the ends fuse into a single continuous loop, and the joint is then annealed and ground before the blade goes back on the saw.",
  },
  {
    q: "Why does a band saw blade need to be ground after welding?",
    a: "The weld leaves a small bead of upset material on both faces of the blade. If you don't grind that bead flush, the joint won't pass cleanly through the saw's blade guides — it'll either bind, deflect, or wear the guides prematurely. Grinding the joint flat is non-negotiable for an in-service blade.",
  },
  {
    q: "Do you weld carbide-tipped band saw blades?",
    a: "Yes — we weld the carbon or bi-metal backing of carbide-tipped blades. The carbide teeth themselves are brazed to the backing by the blade manufacturer and aren't affected by joining the band into a loop. If the carbide teeth themselves are damaged, that's a re-tooth job rather than a weld — ask us and we'll tell you which one your blade needs.",
  },
  {
    q: "Can you weld a band saw blade for me near Houston or Katy?",
    a: "Yes. The welder lives in our Spring TX shop just north of Houston. Drop off your blade or schedule a pickup as part of a service call across Greater Houston — Houston, Katy, Cypress, Conroe, Spring, The Woodlands. Call (281) 704-5589 to set it up.",
  },
];

// ---------- JSON-LD payloads (page-scoped) ----------

const LB_ID = `${site.url}/#localbusiness`;
const PAGE_URL = `${site.url}${ROUTE}`;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Band Saw Blade Welding",
  serviceType: "Band Saw Blade Welding",
  description:
    "In-shop band saw blade welding across Greater Houston. Weld-to-length endless-loop blades — bi-metal, carbon, carbide-tipped, and stainless-cutting stock. Every joint is flash-butt welded, annealed, and ground flush before it leaves the shop.",
  provider: { "@id": LB_ID },
  areaServed: [
    { "@type": "City", name: "Houston, TX" },
    { "@type": "City", name: "Spring, TX" },
    { "@type": "City", name: "Katy, TX" },
    { "@type": "City", name: "Cypress, TX" },
    { "@type": "City", name: "Conroe, TX" },
    { "@type": "City", name: "The Woodlands, TX" },
    { "@type": "AdministrativeArea", name: "Greater Houston Area" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Metal fabrication shops, machine shops, steel service centers, oil & gas, manufacturing facilities, CNC shops",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      description: "Quoted per blade after assessment — call for pricing",
    },
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
      name: "Band Saw Blade Welding",
      item: PAGE_URL,
    },
  ],
};

// -----------------------------------------------------

export default function BandSawBladeWeldingPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Band Saw Blade Welding" },
          ]}
        />

        <PageHero
          eyebrow="Band Saw Blade Welding · Spring, TX Shop"
          title={
            <>
              Band Saw Blade Welding in Houston
              <span className="block text-spark-500">
                Weld-to-Length, Annealed and Ground
              </span>
            </>
          }
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/50 bg-spark-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-spark-300">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
              In-shop flash-butt welder &mdash; Spring, TX
            </span>
          }
          lede={
            <>
              In-shop band saw blade welding from a Spring, TX shop on the
              north side of Houston. Bring us coil stock or a broken loop;
              we weld it to your length, anneal the joint, grind it flush,
              and hand back a blade that runs through the guides like the
              factory put it together. Bi-metal, carbon, carbide-tipped, and
              stainless-cutting blades &mdash; quoted per blade.
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

        {/* H2 #1 — Lead block + featured-snippet target */}
        <section
          aria-labelledby="lead-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">Welded, annealed, ground</p>
              <h2
                id="lead-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Band Saw Blade Welding &mdash; Custom Lengths, Welded
                In-Shop.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  <strong className="text-white">
                    Yes, a band saw blade can be welded.
                  </strong>{" "}
                  A broken or worn blade is rejoined with flash-butt welding
                  &mdash; the same resistance-welding method blade
                  manufacturers use to turn coil stock into endless-loop
                  blades in the first place. Two ends, clamped square,
                  pressed together while current passes through the joint
                  until the steel fuses. Then the joint is annealed to
                  relieve hardness and ground flush so it passes through the
                  saw&rsquo;s guides without catching. Done right, the weld
                  isn&rsquo;t a weak link &mdash; it&rsquo;s just another
                  inch of blade.
                </p>
                <p>
                  We do that work in-shop in Spring, TX, on the north side of
                  Houston. The welder is a heavy industrial flash-butt unit
                  that doesn&rsquo;t roll in the truck &mdash; the blade
                  comes to us. Most customers either drop off the coil and
                  pick up the welded loop, or hand us the broken blade as
                  part of a scheduled service call elsewhere on the floor.
                  Either way, the joint is welded, annealed, and ground
                  before it leaves; we don&rsquo;t hand back a finished blade
                  with a raw weld on it.
                </p>
                <p>
                  Pricing is quoted per blade after a quick look at the gauge
                  and material &mdash; bi-metal is one number, carbide-tipped
                  is another, and rush jobs through the weekend are quoted
                  separately. We&rsquo;re straight on cost: see the{" "}
                  <Link
                    href="/#faq"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    pricing FAQ on the homepage
                  </Link>{" "}
                  for how we handle quotes, or{" "}
                  <Link
                    href="/#quote"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    request a quote
                  </Link>{" "}
                  with the blade length, width, and brand and we&rsquo;ll get
                  back to you the same day.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #2 — What we weld */}
        <section
          aria-labelledby="materials-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Materials &amp; sizes</p>
              <h2
                id="materials-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                What we weld &mdash; blade materials &amp; sizes.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                The blade welder handles the bulk of common industrial
                widths and gauges. Heavier or thinner than typical? Call us
                with the spec before you order coil &mdash; we&rsquo;ll
                confirm before you spend the money.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {blades.map((b, i) => (
                <Reveal
                  key={b.title}
                  delay={i * 0.04}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 p-6 transition-colors hover:border-spark-500/40"
                >
                  <b.icon
                    className="h-7 w-7 text-spark-400"
                    aria-hidden
                  />
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {b.body}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-sm text-ink-400">
                Typical blade life varies with material, feed rate, and
                coolant condition &mdash; ask us for an on-site assessment
                if you&rsquo;re burning through blades faster than you used
                to. The weld is rarely the failure point; the saw setup
                usually is. Pair blade welding with{" "}
                <Link
                  href="/services/hyd-mech-band-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Hyd-Mech band saw repair
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/hem-saw-repair"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  HEM saw repair
                </Link>{" "}
                when the underlying cause is guide wear, tracking drift, or
                coolant degradation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* H2 #3 — Process */}
        <section
          aria-labelledby="process-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">How a blade gets welded</p>
              <h2
                id="process-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Our welding process &mdash; cut, weld, anneal, grind.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Four stages, each non-negotiable. Skip any of them and the
                joint fails on the first heavy cut.
              </p>
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
            <Reveal delay={0.25}>
              <div className="mt-12 max-w-3xl rounded-2xl border border-spark-500/30 bg-spark-500/[0.04] p-6">
                <div className="flex items-start gap-4">
                  <Thermometer
                    className="mt-1 h-6 w-6 shrink-0 text-spark-400"
                    aria-hidden
                  />
                  <div>
                    <p className="font-display text-base font-bold text-white">
                      Why the anneal step matters.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      A flash-butt weld leaves the joint hard and brittle.
                      Without an anneal cycle, the steel cracks the first
                      time it wraps around the saw&rsquo;s drive wheel under
                      tension. Forum threads and home-shop builds skip this
                      step constantly &mdash; it&rsquo;s why DIY band-saw
                      welds fail. Every blade we weld gets the anneal, then
                      the grind. No shortcuts.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #4 — Weld-to-length / broken blade repair */}
        <section
          aria-labelledby="repair-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <p className="eyebrow">Broken or worn blades</p>
              <h2
                id="repair-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Weld-to-length: replacing a broken or worn blade.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  Two common paths land a blade on the welder. First, a blade
                  snaps in service &mdash; usually from a guide problem, a
                  feed-rate problem, or a coolant problem the saw was already
                  telegraphing for weeks. If the break is clean and the rest
                  of the band is in good shape, we can weld it back together,
                  anneal, grind, and put it back on the saw the same day.
                  Quick fix, quoted per blade.
                </p>
                <p>
                  Second, we cut coil stock to length and weld it into a
                  custom endless-loop blade. Give us the saw model, the
                  blade length and width, the tooth pitch, and we&rsquo;ll
                  quote the welded blade. One-off lengths usually run faster
                  through us than through a national supplier.
                </p>
                <p>
                  If the blade is breaking in the same place repeatedly, the
                  weld isn&rsquo;t the problem &mdash; the saw is. Persistent
                  blade breakage points back to guide wear, tracking out of
                  spec, or feed pressure climbing past what the blade can
                  handle. Pair this with a service call on the saw itself
                  and we&rsquo;ll fix the root cause instead of replacing
                  blades on a loop. See our{" "}
                  <Link
                    href="/services/behringer-band-saw-repair"
                    className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                  >
                    Behringer band saw repair
                  </Link>{" "}
                  page for that workflow on an HBP or HBE.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* H2 #5 — Blade brands we work with */}
        <section
          aria-labelledby="brands-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Brand coverage</p>
              <h2
                id="brands-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
              >
                Blade brands we work with.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Blade brand doesn&rsquo;t change the weld &mdash; the
                material and gauge do. These are the brands we weld for
                customers most often. None of these are partnerships or
                authorized arrangements; they&rsquo;re simply the blades
                we service, stocked in the shops we run service calls into.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul
                role="list"
                className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
              >
                {brandsWorkedWith.map((b) => (
                  <li
                    key={b.name}
                    className="flex items-baseline justify-between gap-3 rounded-xl border border-white/[0.06] bg-ink-900/40 px-5 py-4 transition-colors hover:border-spark-500/30"
                  >
                    <div>
                      <p className="font-display text-lg font-bold tracking-tight text-white">
                        {b.name}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                        {b.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-2xl text-sm text-ink-400">
                Got coil stock from a supplier not on this list? Bring it.
                Bi-metal is bi-metal; carbon is carbon. If the welder can
                clamp it, we can weld it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* H2 #6 — Drop-off / mobile service / geo */}
        <section
          aria-labelledby="area-heading"
          className="relative border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <Reveal>
              <p className="eyebrow">Drop-off &amp; pickup</p>
              <h2
                id="area-heading"
                className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: "break-word" }}
              >
                Drop-off &amp; mobile service across Greater Houston.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-300 md:text-lg">
                The welder lives in our{" "}
                <Link
                  href="/service-area/spring-tx"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  Spring TX shop
                </Link>{" "}
                &mdash; it&rsquo;s an industrial flash-butt unit, not a
                truck-mounted machine. But the truck is mobile, and pickups
                across Greater Houston are on the table as part of a
                service call. We cover{" "}
                <Link
                  href="/service-area/houston-tx"
                  className="font-semibold text-spark-300 underline decoration-spark-500/50 underline-offset-4 hover:text-spark-200"
                >
                  band saw repair in Houston
                </Link>{" "}
                and the surrounding suburbs five days a week; tack a blade
                pickup or drop-off onto the visit and it&rsquo;s welded
                before we&rsquo;re back through your door.
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
              <ul role="list" className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {cities.map((c) => (
                  <li
                    key={c.name}
                    className="rounded-xl border border-white/[0.06] bg-ink-900/40 px-5 py-4 transition-colors hover:border-spark-500/30"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-spark-400"
                        aria-hidden
                      />
                      <div>
                        <Link
                          href={c.href}
                          className="font-display text-base font-bold tracking-tight text-white hover:text-spark-300"
                        >
                          {c.name}
                        </Link>
                        <p className="mt-1 text-xs leading-relaxed text-ink-300">
                          {c.note}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
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
                Frequently asked questions.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Five questions we hear most often about band saw blade
                welding. The first one&rsquo;s open by default &mdash;
                it&rsquo;s the one everyone asks.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul
                role="list"
                className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-ink-900/40"
              >
                {faqItems.map((f, i) => (
                  <li key={i} className="px-6 py-5">
                    <details className="group" open={i === 0}>
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

        {/* H2 #8 — Final CTA */}
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
                Get a custom blade welded.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ink-300">
                Phone is fastest. Tell us the blade length, width, and
                material &mdash; or what saw it&rsquo;s going on &mdash;
                and we&rsquo;ll quote the weld before you hand it over.
                Drop-off, pickup as part of a service call, or coil-stock
                weld-to-length, all from the Spring TX shop.
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
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-ghost"
                >
                  Contact us
                  <Scissors className="h-4 w-4" aria-hidden />
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

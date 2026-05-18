import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";
import { serviceAreaCities, type CityConfig } from "@/data/service-area";
import { Reveal } from "@/components/motion/reveal";

// ---------------------------------------------------------------------------
// BrandCityMatrix
//
// Shared cross-link section used on:
//   - LocationPage (mode="brands-in-city") — renders the 6 brand service pages
//     we maintain as cards, linking out from the city the visitor is on.
//   - Each brand service page (mode="cities-for-brand") — renders the 6
//     service-area city pages as cards, linking out from the brand the
//     visitor is on.
//
// Anchor text discipline (per the 2026-05-17 backlink audit):
//   - Brand cards use brand-name + repair label only (e.g. "Hyd-Mech Band Saw
//     Repair", "HEM Saw Repair"). No "Hyd-Mech repair in Katy"
//     exact-match-keyword variants — over-optimization risk.
//   - City cards use the city name only ("Houston", "Katy", "Cypress",
//     "The Woodlands", "Conroe", "Spring").
//
// Hyd-Mech is the one factory-authorized brand on the site, so the
// brands-in-city mode highlights the Hyd-Mech card with the spark-orange
// accent treatment (bullet dot + spark-300 text), matching the pattern used
// in the desktop nav's mega-menu "By Brand" list.
// ---------------------------------------------------------------------------

// Mapping from the canonical `brands` array (which is wider than the service
// pages we actually maintain — it includes Continental, Nishijimax, Spartan
// that don't have their own routes yet) to the 6 brand service pages we
// publish. We key by the `name` field in data/brands.ts so the `authorized`
// flag flows through automatically.
type BrandLink = { name: string; slug: string; label: string };

const BRAND_LINKS: BrandLink[] = [
  {
    name: "Hyd-Mech",
    slug: "hyd-mech-band-saw-repair",
    label: "Hyd-Mech Band Saw Repair",
  },
  { name: "HEM Saw", slug: "hem-saw-repair", label: "HEM Saw Repair" },
  {
    name: "Marvel",
    slug: "marvel-band-saw-repair",
    label: "Marvel Band Saw Repair",
  },
  {
    name: "Amada",
    slug: "amada-band-saw-repair",
    label: "Amada Band Saw Repair",
  },
  {
    name: "Behringer",
    slug: "behringer-band-saw-repair",
    label: "Behringer Band Saw Repair",
  },
  {
    name: "Tsune",
    slug: "tsune-band-saw-repair",
    label: "Tsune Band Saw Repair",
  },
];

// Look up the `authorized` flag from data/brands.ts (single source of truth)
// without re-declaring it here.
function isAuthorized(name: string): boolean {
  return brands.find((b) => b.name === name)?.authorized === true;
}

type Props =
  | { mode: "brands-in-city"; city: CityConfig }
  | { mode: "cities-for-brand"; brandSlug: string; brandLabel: string };

export function BrandCityMatrix(props: Props) {
  if (props.mode === "brands-in-city") {
    const { city } = props;

    return (
      <section
        aria-labelledby="brand-matrix-heading"
        className="relative border-t border-white/[0.06] py-20 md:py-24"
      >
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Brand coverage</p>
            <h2
              id="brand-matrix-heading"
              className="h-display mt-4 text-2xl text-white sm:text-3xl md:text-4xl"
              style={{ overflowWrap: "break-word" }}
            >
              Brands we service in {city.cityFull}.
            </h2>
            <p className="mt-4 text-base text-ink-300">
              On-site repair for the major industrial band saw lines running
              on {city.city}-area floors. Pick the brand you run for the full
              repair scope, model list, and FAQ.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul
              role="list"
              className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
            >
              {BRAND_LINKS.map((b) => {
                const authorized = isAuthorized(b.name);
                return (
                  <li key={b.slug}>
                    <Link
                      href={`/services/${b.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-ink-900/40 px-5 py-4 transition-colors hover:border-spark-500/40"
                    >
                      <div>
                        <p
                          className={
                            authorized
                              ? "flex items-center gap-2 font-display text-base font-bold text-spark-300"
                              : "font-display text-base font-bold text-white"
                          }
                        >
                          {authorized && (
                            <span
                              aria-hidden
                              className="inline-block h-1.5 w-1.5 rounded-full bg-spark-500 shadow-[0_0_8px_var(--color-spark-500)]"
                            />
                          )}
                          {b.label}
                        </p>
                        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                          {authorized ? "Authorized Dealer" : "Independent service"}
                        </p>
                      </div>
                      <ArrowRight
                        className="h-4 w-4 text-spark-400 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>
    );
  }

  // mode === "cities-for-brand"
  const { brandLabel } = props;

  return (
    <section
      aria-labelledby="city-matrix-heading"
      className="relative border-t border-white/[0.06] py-20 md:py-24"
    >
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Cities we cover</p>
          <h2
            id="city-matrix-heading"
            className="h-display mt-4 text-2xl text-white sm:text-3xl md:text-4xl"
            style={{ overflowWrap: "break-word" }}
          >
            Cities we cover for {brandLabel} repair.
          </h2>
          <p className="mt-4 text-base text-ink-300">
            Mobile {brandLabel} service from our Spring, TX shop across the
            Greater Houston corridor. Each city below has its own
            service-area page with drive-time notes and local industrial
            context.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
          >
            {serviceAreaCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-area/${c.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-ink-900/40 px-5 py-4 transition-colors hover:border-spark-500/40"
                >
                  <div>
                    <p className="font-display text-base font-bold text-white">
                      {c.city}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                      {c.isHomeCity ? "Home shop · Spring, TX" : "Service area"}
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
  );
}

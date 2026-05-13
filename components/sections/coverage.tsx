import Link from "next/link";
import { coverage, citiesServed } from "@/data/coverage";

// Cities with dedicated /service-area pages — kept here (not in data/coverage)
// so the marketing-copy city list and the routed-page set can diverge if
// future cities get pages without being added to the prose list, or vice versa.
const cityRoutes: Record<string, string> = {
  Houston: "/service-area/houston-tx",
  Spring: "/service-area/spring-tx",
  Katy: "/service-area/katy-tx",
  Cypress: "/service-area/cypress-tx",
  "The Woodlands": "/service-area/the-woodlands-tx",
  Conroe: "/service-area/conroe-tx",
};
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/services";

export function Coverage() {
  return (
    <section
      id="coverage"
      aria-labelledby="coverage-heading"
      className="relative border-t border-white/[0.06] py-24 md:py-32"
    >
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="coverage-heading"
            eyebrow="Coverage"
            title={
              <>
                Houston-based.{" "}
                <span className="text-spark-500">Multi-state on call.</span>
              </>
            }
            lede="We roll out of the Greater Houston Area and serve customers across Texas plus surrounding states. If your facility runs an industrial saw, we can probably get to it."
          />

          <Reveal delay={0.15} className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
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
          </Reveal>

          <Reveal delay={0.2} className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
              Greater Houston cities served
            </p>
            <ul
              role="list"
              className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-relaxed text-ink-300"
            >
              {citiesServed.map((c, i) => {
                const href = cityRoutes[c];
                return (
                  <li key={c}>
                    {href ? (
                      <Link
                        href={href}
                        className="text-spark-300 underline-offset-4 hover:text-spark-200 hover:underline"
                      >
                        {c}
                      </Link>
                    ) : (
                      <span className="text-ink-200">{c}</span>
                    )}
                    {i < citiesServed.length - 1 && (
                      <span className="text-ink-500"> · </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              — and surrounding metros
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <CoverageMap />
        </Reveal>
      </div>
    </section>
  );
}

function CoverageMap() {
  // Approximate Houston pin coordinates (within the 600x400 SVG box).
  const pin = { x: 412, y: 282 };

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/40 p-6">
      <svg
        viewBox="0 0 600 400"
        className="h-full w-full"
        aria-label="Saw Service 3G coverage map — Texas and surrounding states"
      >
        {/* Decorative grid */}
        <defs>
          <pattern id="cov-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
          <radialGradient id="cov-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="400" fill="url(#cov-grid)" />

        {/* Stylized state shapes — schematic, not geographically accurate */}
        <g
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        >
          {/* New Mexico */}
          <path d="M120,160 L260,160 L260,330 L150,330 L120,300 Z" />
          {/* Oklahoma */}
          <path d="M260,140 L470,140 L470,220 L260,220 Z" />
          {/* Arkansas */}
          <path d="M470,140 L560,140 L560,260 L470,260 Z" />
          {/* Louisiana */}
          <path d="M470,260 L560,260 L560,360 L460,370 L460,300 Z" />
          {/* Mississippi (small slice) */}
          <path d="M560,260 L595,260 L595,360 L560,360 Z" />
          {/* Texas */}
          <path
            d="M260,220 L470,220 L470,260 L460,300 L460,370 L390,365 L350,335 L300,360 L260,330 Z"
            fill="rgba(249,115,22,0.10)"
            stroke="rgba(249,115,22,0.5)"
          />
        </g>

        {/* Glow over Houston */}
        <circle cx={pin.x} cy={pin.y} r="120" fill="url(#cov-glow)" />

        {/* Houston pin */}
        <g transform={`translate(${pin.x} ${pin.y})`}>
          <circle r="22" fill="rgba(249,115,22,0.18)" />
          <circle r="9" fill="#fb923c" />
          <circle r="3.5" fill="#0c0a09" />
        </g>

        {/* Labels */}
        <g
          fontFamily="ui-sans-serif, system-ui"
          fontSize="11"
          fontWeight="700"
          fill="#a8a29e"
          letterSpacing="2"
        >
          <text x="180" y="270" textAnchor="middle">
            NEW MEXICO
          </text>
          <text x="365" y="183" textAnchor="middle">
            OKLAHOMA
          </text>
          <text x="515" y="200" textAnchor="middle">
            ARKANSAS
          </text>
          <text x="510" y="320" textAnchor="middle">
            LOUISIANA
          </text>
          <text x="365" y="285" textAnchor="middle" fill="#fdba74">
            TEXAS
          </text>
          <text x={pin.x} y={pin.y - 32} textAnchor="middle" fill="#fff">
            HOUSTON
          </text>
        </g>
      </svg>

      {/* Pulse rings overlay (CSS, in DOM coords matching the pin) */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          left: `${(pin.x / 600) * 100}%`,
          top: `${(pin.y / 400) * 100}%`,
          width: 12,
          height: 12,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative h-full w-full">
          <span className="pulse-ring" />
          <span className="pulse-ring delay-1" />
          <span className="pulse-ring delay-2" />
        </div>
      </div>
    </div>
  );
}

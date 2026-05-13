import Link from "next/link";
import { brands, brandsExtra, type Brand } from "@/data/brands";
import { Reveal } from "@/components/motion/reveal";

type RowItem = Brand | { name: string; extra: true };

export function BrandsMarquee() {
  const row1: RowItem[] = [...brands, { name: brandsExtra, extra: true }];
  const row2: RowItem[] = [...brands].reverse();

  return (
    <section
      id="brands"
      aria-labelledby="brands-heading"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="container-x">
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow">Brands serviced</p>
          <h2
            id="brands-heading"
            className="h-display mt-4 max-w-3xl text-4xl text-white sm:text-5xl md:text-6xl"
          >
            25 years of saws.{" "}
            <span className="text-ink-300">All brands. All shops.</span>
          </h2>
          <Link
            href="/brands/hyd-mech"
            className="mt-4 inline-flex max-w-xl items-center gap-2 rounded-full border border-spark-500/40 bg-spark-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-spark-300 transition-colors hover:border-spark-500/60 hover:bg-spark-500/15 hover:text-spark-200"
          >
            Authorized Hyd-Mech Dealer
            <span aria-hidden className="text-spark-400">
              &rarr;
            </span>
          </Link>
        </Reveal>
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <MarqueeRow items={row1} className="marquee-track" />
        <MarqueeRow items={row2} className="marquee-track-rev mt-3" muted />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  className,
  muted = false,
}: {
  items: RowItem[];
  className: string;
  muted?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${className}`}>
        {doubled.map((b, i) => {
          const authorized = "authorized" in b && b.authorized;
          return (
            <span
              key={`${b.name}-${i}`}
              className={`relative inline-flex items-center whitespace-nowrap rounded-full border px-6 py-3 font-display text-2xl font-bold tracking-tight md:text-3xl ${
                authorized
                  ? "border-spark-500/50 bg-spark-500/10 text-white"
                  : muted
                    ? "border-white/[0.06] bg-transparent text-ink-300"
                    : "border-white/[0.06] bg-ink-900/40 text-white"
              }`}
            >
              {b.name}
              {authorized && (
                <span className="ml-3 rounded-full bg-spark-500/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-spark-300">
                  Authorized Dealer
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

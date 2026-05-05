import { brands, brandsExtra } from "@/data/brands";
import { Reveal } from "@/components/motion/reveal";

export function BrandsMarquee() {
  const row1 = [...brands, brandsExtra];
  const row2 = [...brands].reverse();

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
            Two decades of saws.{" "}
            <span className="text-ink-300">All brands. All shops.</span>
          </h2>
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
  items: string[];
  className: string;
  muted?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${className}`}>
        {doubled.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className={`whitespace-nowrap rounded-full border border-white/[0.06] px-6 py-3 font-display text-2xl font-bold tracking-tight md:text-3xl ${
              muted
                ? "bg-transparent text-ink-300"
                : "bg-ink-900/40 text-white"
            }`}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

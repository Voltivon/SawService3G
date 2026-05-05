import { stats } from "@/data/stats";
import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";

export function TrustStrip() {
  return (
    <section
      id="trust"
      aria-label="Saw Service 3G by the numbers"
      className="relative border-y border-white/[0.06] bg-ink-950/40"
    >
      <div className="container-x grid grid-cols-2 gap-px bg-white/[0.04] md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.06}
            className="bg-ink-950/80 p-6 md:p-8"
          >
            <p className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold text-ink-100">
              {s.label}
            </p>
            {s.sub && (
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                {s.sub}
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { customers } from "@/data/customers";
import { Reveal } from "@/components/motion/reveal";

export function TrustedBy() {
  if (customers.length === 0) return null;

  return (
    <section
      id="trusted-by"
      aria-labelledby="trusted-heading"
      className="relative border-t border-white/[0.06] bg-ink-950/40 py-16 md:py-20"
    >
      <div className="container-x">
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow">Trusted by</p>
          <h2
            id="trusted-heading"
            className="h-display mt-4 max-w-3xl text-3xl text-white sm:text-4xl md:text-5xl"
          >
            Greater Houston metals shops
            <br className="hidden sm:inline" />{" "}
            <span className="text-ink-300">keep us on speed dial.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <ul
            aria-label="Selected customers"
            className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5"
          >
            {customers.map((c) => (
              <li
                key={c.name}
                className="group rounded-xl border border-white/[0.06] bg-ink-900/40 px-4 py-5 text-center transition-colors hover:border-spark-500/40 hover:bg-ink-900/70"
              >
                <p className="font-display text-sm font-bold tracking-tight text-white md:text-base">
                  {c.name}
                </p>
                {c.category && (
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                    {c.category}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
          Steel · Tube &amp; Pipe · Fab · CNC
        </p>
      </div>
    </section>
  );
}

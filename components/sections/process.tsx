import { processSteps } from "@/data/process-steps";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/services";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-t border-white/[0.06] bg-ink-950/60 py-24 md:py-32"
    >
      <div className="container-x">
        <SectionHeading
          id="process-heading"
          eyebrow="How it works"
          title={
            <>
              Four steps. <span className="text-spark-500">Zero guesswork.</span>
            </>
          }
          lede="Every job follows the same disciplined arc. We diagnose on-site before we touch a wrench, document the work, and bill after we&rsquo;ve verified it."
        />

        <ol className="relative mt-16 grid gap-px bg-white/[0.06] md:grid-cols-4">
          <div
            aria-hidden
            className="absolute inset-x-6 top-12 hidden h-px bg-gradient-to-r from-spark-500/0 via-spark-500/60 to-spark-500/0 md:block"
          />
          {processSteps.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className="relative bg-ink-950 p-8"
            >
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-spark-400">
                Step 0{step.n}
              </span>
              <div className="mt-3 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-spark-500 font-display text-sm font-extrabold text-ink-950">
                  {step.n}
                </span>
                <step.Icon className="h-5 w-5 text-ink-300" aria-hidden />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {step.blurb}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

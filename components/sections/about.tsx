import { team, legacy } from "@/data/team";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/services";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-t border-white/[0.06] py-24 md:py-32"
    >
      <div className="container-x">
        <SectionHeading
          id="about-heading"
          eyebrow="Three generations on the saws"
          title={
            <>
              Family-owned.{" "}
              <span className="text-spark-500">Saw-floor raised.</span>
            </>
          }
          lede={`The "3G" stands for three generations — going back to ${legacy.founderNickname}, ${legacy.founderRole}. Saw Service 3G carries that 25-year body of work forward.`}
        />

        <div className="mt-14 grid gap-3 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 0.08}
              className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-7"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
                {m.role}
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-white">
                {m.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-200 md:text-base">
                {m.bio}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="rounded-2xl border border-spark-500/30 bg-spark-500/[0.06] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
              The legacy
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-100 md:text-lg">
              People in the Greater Houston metals industry know{" "}
              <span className="font-semibold text-white">
                "{legacy.founderNickname}"
              </span>{" "}
              — Kaylen&rsquo;s father — because he&rsquo;s serviced most of
              the saws our customers still run today. Saw Service 3G is the
              third generation keeping that work going, one shop floor at a
              time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

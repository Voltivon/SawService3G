import { services } from "@/data/services";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-24 md:py-32"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          id="services-heading"
          title={
            <>
              Service that finds you,
              <br className="hidden sm:inline" /> not the other way around.
            </>
          }
          lede="Mobile, on-site work across the saw's full lifecycle — from anchoring to preventive maintenance to emergency repair, billed only after the job is verified done."
        />

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 0.04}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 p-6 transition-colors hover:border-spark-500/40",
                s.span === "wide"
                  ? "sm:col-span-3 md:col-span-4"
                  : "sm:col-span-3 md:col-span-2",
                s.span === "tall" && "md:row-span-2",
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-spark-500/0 blur-3xl transition-all duration-500 group-hover:bg-spark-500/20"
              />
              <div className="relative">
                <s.Icon
                  className="h-7 w-7 text-spark-400 transition-transform duration-500 group-hover:rotate-[8deg]"
                  aria-hidden
                />
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {s.blurb}
                </p>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-6 bottom-4 h-px origin-left scale-x-0 bg-gradient-to-r from-spark-500 via-spark-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  id,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className="h-display mt-4 text-4xl text-white sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      {lede && <p className="mt-5 text-lg text-ink-300 md:text-xl">{lede}</p>}
    </Reveal>
  );
}

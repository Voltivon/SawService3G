import { Award, Truck, Cog, Receipt } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/services";

const pillars = [
  {
    Icon: Award,
    title: "20+ Years In",
    blurb:
      "Two decades of band saws, brand to brand. Pattern recognition you can&rsquo;t fake.",
  },
  {
    Icon: Truck,
    title: "Mobile / On-Site",
    blurb:
      "We come to you. No shipping, no downtime spent waiting for a saw to ride a flatbed.",
  },
  {
    Icon: Cog,
    title: "Multi-Brand Expertise",
    blurb:
      "Continental, Marvel, Tsune, HEM, Behringer, Hyd-Mech, Amada, and many more.",
  },
  {
    Icon: Receipt,
    title: "Billed After Service",
    blurb:
      "Quoted up front, invoiced after the work is verified done. No surprises.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="relative py-24 md:py-32"
    >
      <div className="container-x">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Saw Service 3G"
          title={
            <>
              Built around the way{" "}
              <span className="text-spark-500">shops actually run.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className="rounded-2xl border border-white/[0.06] bg-ink-900/50 p-7"
            >
              <p.Icon className="h-7 w-7 text-spark-400" aria-hidden />
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {p.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-ink-300"
                dangerouslySetInnerHTML={{ __html: p.blurb }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Award, Truck, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/services";

const pillars = [
  {
    Icon: Users,
    title: "3rd Generation",
    blurb:
      "25 years and three generations on the same band saws. Kaylen, Mason, and the legacy of &ldquo;DoAll Dave&rdquo; behind every job.",
  },
  {
    Icon: ShieldCheck,
    title: "Authorized Hyd-Mech Dealer",
    blurb:
      "Factory-backed for Hyd-Mech parts, service, and warranty work. Plus deep expertise across Marvel, HEM, Amada, Behringer, and more.",
  },
  {
    Icon: Truck,
    title: "Mobile / On-Site",
    blurb:
      "We come to you. 100-mile primary radius from Spring, TX — and we&rsquo;ll travel farther for the right customer.",
  },
  {
    Icon: Award,
    title: "Billed After Service",
    blurb:
      "Hourly with a 2–3 hour minimum plus travel. Quoted up front, invoiced after the work is verified done. Net 30 ACH.",
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

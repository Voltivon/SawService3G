import { Siren, Phone, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";

export function EmergencyBand() {
  return (
    <section
      id="emergency"
      aria-labelledby="emergency-heading"
      className="relative isolate overflow-hidden py-20 md:py-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 360px at 50% 50%, rgba(239,68,68,0.18), transparent 60%), linear-gradient(180deg, rgba(249,115,22,0.10), rgba(220,38,38,0.10))",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spark-500/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember-500/60 to-transparent"
      />

      <div className="container-x">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Siren
            aria-hidden
            className="h-10 w-10 text-spark-400 md:h-12 md:w-12"
          />
          <p className="eyebrow mt-4">Saw down?</p>
          <h2
            id="emergency-heading"
            className="h-display mt-3 text-4xl text-white sm:text-5xl md:text-6xl"
          >
            We come early. <br className="sm:hidden" />
            <span className="text-spark-500">We stay late.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-200 md:text-xl">
            When a saw goes down and a line is waiting, the cost is in
            minutes, not hours. Call us &mdash; we&rsquo;ll roll as fast as we
            can.
          </p>

          <div className="mt-9 grid w-full max-w-3xl gap-3 sm:grid-cols-2">
            {site.contacts.map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/[0.08] bg-ink-900/40 p-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
                  Reach {c.name}
                </p>
                <a
                  href={c.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-lg font-bold btn-spark"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {c.phoneDisplay}
                </a>
                <a
                  href={c.emailHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink-200 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-spark-400" aria-hidden />
                  {c.emailDisplay}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-ink-300">
            {site.hours.weekdays} &nbsp;&middot;&nbsp; {site.hours.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

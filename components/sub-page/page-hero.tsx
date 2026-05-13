import { Reveal } from "@/components/motion/reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  /** Optional inline pill (e.g., "Authorized Dealer"). */
  badge?: React.ReactNode;
  children?: React.ReactNode;
};

/**
 * Standard sub-page hero. Provides a single H1 per page, the eyebrow line,
 * an optional dealer badge, lede paragraph, and a slot for CTA buttons.
 *
 * Lower `clamp()` minimums than the homepage hero are used here to avoid the
 * long-word-overflow bug on ≤480 px viewports (see CLAUDE.md §10).
 */
export function PageHero({ eyebrow, title, lede, badge, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid opacity-[0.4]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 480px at 80% -10%, rgba(249,115,22,0.18), transparent 60%), radial-gradient(700px 420px at 10% 110%, rgba(234,88,12,0.10), transparent 60%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container-x">
        <Reveal>
          <p className="eyebrow dot-spark inline-flex items-center">
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            className="h-display mt-5 max-w-4xl text-white"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4.75rem)",
              overflowWrap: "break-word",
            }}
          >
            {title}
          </h1>
        </Reveal>

        {badge && (
          <Reveal delay={0.1}>
            <div className="mt-5">{badge}</div>
          </Reveal>
        )}

        {lede && (
          <Reveal delay={0.12}>
            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 md:text-xl">
              {lede}
            </div>
          </Reveal>
        )}

        {children && (
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/motion/reveal";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-20 md:py-24"
    >
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">In their words</p>
          <h2 id="testimonials-heading" className="sr-only">
            Customer testimonials
          </h2>

          <figure className="mt-8 rounded-3xl border border-white/[0.06] bg-ink-900/40 p-8 md:p-12">
            <Quote
              aria-hidden
              className="mx-auto h-8 w-8 text-spark-500"
            />
            <blockquote className="mt-5">
              <p className="h-display text-2xl text-white md:text-3xl">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
              {testimonials[0].attribution}
              {testimonials[0].attributionRole && (
                <span className="text-ink-400">
                  {" "}
                  &middot; {testimonials[0].attributionRole}
                </span>
              )}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

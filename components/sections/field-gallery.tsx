"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { shopImages } from "@/data/images";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/services";
import { cn } from "@/lib/utils";

type Slide = { caption: string; alt: string };

// Captions are short on-screen labels; alts are SEO-rich, descriptive strings
// that name the action, brand class, and location context. We vary brand
// mentions (Marvel, HEM, Hyd-Mech), service types (anchor, repair, PM, drive
// system, blade tracking), and location anchors (Houston, Spring TX) to avoid
// alt-text spam.
const slides: Slide[] = [
  {
    caption: "On-site service — Greater Houston",
    alt: "Mobile industrial band saw repair on-site at a Greater Houston metal fabrication shop · Saw Service 3G",
  },
  {
    caption: "Field diagnosis under load",
    alt: "Band saw drive system field diagnosis under cutting load · Spring, TX mobile saw service",
  },
  {
    caption: "Drive system in the shop",
    alt: "Industrial band saw drive system on-site service · Greater Houston · Saw Service 3G",
  },
  {
    caption: "Anchored, leveled, verified",
    alt: "Authorized Hyd-Mech dealer technician anchoring and leveling a metal band saw · Spring, TX",
  },
  {
    caption: "Pulley & wheel service",
    alt: "Marvel band saw wheel and pulley service during a Houston-area mobile repair call",
  },
  {
    caption: "Drive box rebuild",
    alt: "Industrial band saw drive box rebuild — mechanical and hydraulic repair · Saw Service 3G",
  },
  {
    caption: "Hardware swap",
    alt: "Worn hardware replacement on a metal-cutting band saw at a Houston steel service center",
  },
  {
    caption: "Senior tech on site",
    alt: "Senior technician assessing a large HEM band saw motor on a customer site · Greater Houston",
  },
  {
    caption: "Multi-site service call",
    alt: "Mobile metal-cutting saw preventive maintenance · Greater Houston steel service center",
  },
  {
    caption: "Large saw service",
    alt: "Scheduled service on a large industrial vertical band saw · Texas metal fabricator",
  },
  {
    caption: "Drive train teardown",
    alt: "Two-tech drive train teardown on an industrial band saw · Houston shop floor",
  },
  {
    caption: "Maintenance round",
    alt: "Industrial band saw preventive maintenance and blade tracking check · Texas metal fab facility",
  },
];

export function FieldGallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = shopImages.length;

  const go = useCallback(
    (next: number) => {
      if (total === 0) return;
      const wrapped = (next + total) % total;
      setDirection(wrapped > index ? 1 : -1);
      setIndex(wrapped);
    },
    [index, total],
  );

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).tagName === "INPUT") return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (total === 0) return null;

  const active = shopImages[index];
  const slide = slides[index] ?? { caption: active.alt, alt: active.alt };
  const activeCaption = slide.caption;
  const activeAlt = slide.alt;

  return (
    <section
      id="field"
      aria-labelledby="field-heading"
      aria-roledescription="carousel"
      className="relative py-24 md:py-32"
    >
      <div className="container-x">
        <SectionHeading
          id="field-heading"
          eyebrow="From the field"
          title={
            <>
              Real shops. Real saws.{" "}
              <span className="text-spark-500">Real work.</span>
            </>
          }
          lede="Not stock photos. These are jobs from across our service area &mdash; on-site, in-shop, in the middle of the work."
        />

        <Reveal className="mx-auto mt-12 max-w-2xl">
          <div className="relative">
            {/* Stage — uniform aspect for both orientations.
                object-contain ensures the subject is never cropped — portrait
                phone shots letterbox left/right against the dark stage bg. */}
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-950 aspect-[4/3] sm:aspect-[3/2]"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}: ${activeCaption}`}
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={active.slug}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`/images/shop/${active.slug}-1600.webp`}
                    alt={activeAlt}
                    fill
                    sizes="(min-width: 1280px) 1100px, 100vw"
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom gradient + caption */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                <p className="font-display text-base font-semibold text-white drop-shadow-sm sm:text-lg">
                  {activeCaption}
                </p>
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-300"
                  aria-live="polite"
                >
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
              </div>

              {/* Prev / next */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="pointer-events-auto absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink-950/60 text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-ink-950/85 hover:ring-spark-500/60 sm:left-5 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="pointer-events-auto absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink-950/60 text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-ink-950/85 hover:ring-spark-500/60 sm:right-5 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div
              role="tablist"
              aria-label="Choose photo"
              className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]"
            >
              {shopImages.map((img, i) => {
                const isActive = i === index;
                return (
                  <button
                    type="button"
                    key={img.slug}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show photo ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={cn(
                      "relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border transition-all sm:h-[72px] sm:w-24",
                      isActive
                        ? "border-spark-500/80 ring-2 ring-spark-500/40"
                        : "border-white/[0.06] opacity-60 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={`/images/shop/${img.slug}-640.webp`}
                      alt={`Photo ${i + 1}: ${slides[i]?.caption ?? "Saw Service 3G on-site"}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {/* Progress dots — secondary indicator + scroll hint on small screens */}
            <div className="mt-4 flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
              <span>← / → to navigate</span>
              <span>{total} jobs · one team · 25 years</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

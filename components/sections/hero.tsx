"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { Magnetic } from "@/components/motion/magnetic";

const HeroCanvas = dynamic(
  () => import("./hero-canvas").then((m) => m.HeroCanvas),
  { ssr: false, loading: () => <HeroPoster /> },
);

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Hero copy is rendered as plain, fully-visible HTML during SSR and the first
 * client paint. After mount we swap to a framer-motion variant that runs the
 * original entrance animation (fade-up). This avoids the framer-motion
 * `initial={{ opacity: 0 }}` -> baked `style="opacity:0"` bug that left the
 * entire hero invisible on production (React 19 + framer-motion 11). See
 * `components/motion/reveal.tsx` for the same pattern.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-mount or reduced motion: plain visible HTML, no transforms, no opacity.
  const animate = mounted && !reduce;

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:min-h-[92vh] md:pt-44 md:pb-32">
      {/* 3D / animated backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.6]" />
        <HeroCanvas />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container-x">
        {animate ? (
          <motion.p
            className="eyebrow dot-spark inline-flex items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            25 Years &middot; 3rd Generation &middot; Authorized Hyd-Mech Dealer
          </motion.p>
        ) : (
          <p className="eyebrow dot-spark inline-flex items-center">
            25 Years &middot; 3rd Generation &middot; Authorized Hyd-Mech Dealer
          </p>
        )}

        {animate ? (
          <motion.h1
            className="h-display mt-6 max-w-5xl text-5xl text-white sm:text-6xl md:text-7xl lg:text-[88px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
          >
            We come to you.
            <br />
            <span className="text-spark-500">Any saw.</span>{" "}
            <span className="text-ink-200">Any shop.</span>
          </motion.h1>
        ) : (
          <h1 className="h-display mt-6 max-w-5xl text-5xl text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            We come to you.
            <br />
            <span className="text-spark-500">Any saw.</span>{" "}
            <span className="text-ink-200">Any shop.</span>
          </h1>
        )}

        {animate ? (
          <motion.p
            className="mt-7 max-w-xl text-lg text-ink-300 md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            Mobile industrial band saw repair, anchoring, relocation, and
            preventive maintenance — for metal fabrication shops, machine shops,
            and steel service centers across the Greater Houston Area and
            surrounding states. Billed after the work is done right.
          </motion.p>
        ) : (
          <p className="mt-7 max-w-xl text-lg text-ink-300 md:text-xl">
            Mobile industrial band saw repair, anchoring, relocation, and
            preventive maintenance — for metal fabrication shops, machine shops,
            and steel service centers across the Greater Houston Area and
            surrounding states. Billed after the work is done right.
          </p>
        )}

        {animate ? (
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
          >
            <HeroCtas />
          </motion.div>
        ) : (
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <HeroCtas />
          </div>
        )}

        {/* Hero footer line */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/[0.06] pt-6 text-xs uppercase tracking-[0.18em] text-ink-400 sm:grid-cols-4">
          <span className="font-mono">Marvel</span>
          <span className="font-mono">HEM Saw</span>
          <span className="font-mono">Amada</span>
          <span className="font-mono text-spark-400">+ More</span>
        </div>
      </div>
    </section>
  );
}

function HeroCtas() {
  return (
    <>
      <Magnetic>
        <a
          href={site.phone.href}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-spark"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call {site.phone.display}
        </a>
      </Magnetic>
      <a
        href="#quote"
        className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold btn-ghost"
      >
        Get a Quote
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </>
  );
}

function HeroPoster() {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 500px at 70% 40%, rgba(249,115,22,0.25), transparent 60%), radial-gradient(600px 400px at 25% 70%, rgba(234,88,12,0.18), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-50" />
    </div>
  );
}

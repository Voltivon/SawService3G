"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { videos, shopImages } from "@/data/images";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function VideoShowcase() {
  const video = videos[0];
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !el.paused) el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!video) return null;

  const poster = shopImages[0]
    ? `/images/shop/${shopImages[0].slug}-1024.webp`
    : undefined;

  const togglePlay = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
      setStarted(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="watch"
      aria-labelledby="watch-heading"
      className="relative border-t border-white/[0.06] bg-ink-950/60 py-20 md:py-24"
    >
      <div className="container-x grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        <Reveal>
          <p className="eyebrow">Watch us work</p>
          <h2
            id="watch-heading"
            className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
          >
            In the field.{" "}
            <span className="text-spark-500">In real time.</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-ink-300">
            A short clip from a recent on-site service. The kind of work we do,
            the way we do it.
          </p>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
            Recorded on-site &middot; Sound on for full effect
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative isolate mx-auto max-w-md overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-950 shadow-[0_30px_80px_-20px_rgba(249,115,22,0.25)] lg:max-w-none">
            <video
              ref={ref}
              src={video.src}
              poster={poster}
              preload="none"
              playsInline
              controls={started}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              className="block aspect-video h-auto w-full bg-black object-cover"
            />

            {!started && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Play video"
                className="group absolute inset-0 grid place-items-center bg-gradient-to-t from-ink-950/55 via-ink-950/10 to-ink-950/25 transition hover:from-ink-950/35"
              >
                <span
                  aria-hidden
                  className="grid h-14 w-14 place-items-center rounded-full bg-spark-500 text-ink-950 shadow-[0_15px_45px_-10px_rgba(249,115,22,0.7)] ring-1 ring-white/30 transition group-hover:scale-110 sm:h-16 sm:w-16"
                >
                  <Play className="h-5 w-5 translate-x-0.5 fill-current sm:h-6 sm:w-6" />
                </span>
                <span className="sr-only">Play</span>
              </button>
            )}

            {started && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause video" : "Play video"}
                className={cn(
                  "absolute right-3 top-3 hidden rounded-full bg-ink-950/70 p-2 text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-ink-950/90",
                  "md:inline-flex",
                )}
              >
                {playing ? (
                  <Pause className="h-3.5 w-3.5" aria-hidden />
                ) : (
                  <Play className="h-3.5 w-3.5" aria-hidden />
                )}
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

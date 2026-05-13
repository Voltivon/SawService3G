"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  /** Stagger delay in seconds before the tween starts. */
  delay?: number;
};

/**
 * Counts up from 0 to `to` over `duration` seconds. Above-the-fold safe — the
 * tween starts on mount, not on intersection, so the value is never stuck at 0
 * when the element is already in view at first paint. SSR renders the final
 * value (with `suffix`) so no-JS / pre-hydration shows the real number.
 *
 * Only `<Counter>` is used in `components/sections/trust-strip.tsx` — confirmed
 * via grep before simplification.
 */
export function Counter({ to, duration = 1.4, suffix = "", delay = 0 }: Props) {
  const reduce = useReducedMotion();
  // Pre-mount SSR shows the final value, so the page is meaningful with JS
  // disabled. After mount we drop back to 0 and tween up — unless the user
  // prefers reduced motion, in which case we stay on the final value.
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    setValue(0);
    let frame = 0;
    let cancelled = false;
    const startAfter = setTimeout(() => {
      if (cancelled) return;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / (duration * 1000));
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(to * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      cancelled = true;
      clearTimeout(startAfter);
      cancelAnimationFrame(frame);
    };
  }, [to, duration, delay, reduce]);

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

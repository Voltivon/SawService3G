"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { useEffect, useState } from "react";
import { fadeUp } from "@/lib/motion";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
};

// Props that exist on framer-motion's <motion.div> but not on a plain <div>.
// Stripped before we fall back to a native element so React does not warn
// about unknown DOM attributes.
const MOTION_ONLY_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "variants",
  "transition",
  "viewport",
  "whileHover",
  "whileTap",
  "whileInView",
  "whileFocus",
  "whileDrag",
  "drag",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "dragSnapToOrigin",
  "dragTransition",
  "dragDirectionLock",
  "dragListener",
  "dragControls",
  "dragPropagation",
  "layout",
  "layoutId",
  "layoutDependency",
  "layoutScroll",
  "layoutRoot",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onHoverStart",
  "onHoverEnd",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onDirectionLock",
  "onViewportEnter",
  "onViewportLeave",
  "transformTemplate",
  "custom",
]);

function stripMotionProps(props: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(props)) {
    if (!MOTION_ONLY_PROPS.has(key)) out[key] = props[key];
  }
  return out;
}

/**
 * Reveal animates children into view on scroll, with two important guarantees:
 *
 * 1. SSR / no-JS / pre-hydration HTML never contains `opacity:0`. The first
 *    paint shows content. This avoids the entire site rendering blank when
 *    JS is slow, disabled, or errors out during hydration.
 * 2. `prefers-reduced-motion: reduce` skips animation entirely — children
 *    render in a plain <div> with no transform/opacity styles.
 *
 * Pattern: render a plain <div> during SSR and the first client render. After
 * mount (when we know JS is alive and motion is allowed), swap to the
 * animated <motion.div>. Because we don't pass `initial="hidden"` before
 * mount, the rendered HTML stays visible at all times.
 */
export function Reveal({ delay = 0, children, ...rest }: Props) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (reduce || !mounted) {
    const divProps = stripMotionProps(
      rest as Record<string, unknown>,
    ) as React.HTMLAttributes<HTMLDivElement>;
    return <div {...divProps}>{children as React.ReactNode}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

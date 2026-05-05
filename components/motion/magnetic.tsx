"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = React.PropsWithChildren<{
  className?: string;
  strength?: number;
}>;

export function Magnetic({ children, className, strength = 24 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.4 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce ? undefined : { x, y }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        mx.set(px * strength);
        my.set(py * strength);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

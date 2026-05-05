"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ delay = 0, children, ...rest }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionDivider() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="container-max py-8">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left"
      />
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Single element that eases up into place the first time it is scrolled to. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Grid whose children arrive in a staggered wave — the "Stagger List (Standard)"
 * motion recommendation, expressed with Framer Motion variants.
 */
export function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ shown: { transition: { staggerChildren: 0.06 } } }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.96 },
                shown: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.4, ease: EASE }}
              className="h-full"
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

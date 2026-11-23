"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/utils";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

interface SplitTextProps {
  children: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  highlightWord?: string;
  highlightClassName?: string;
}

export function SplitText({
  children,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.05,
  highlightWord,
  highlightClassName = "text-[var(--primary)]",
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{children}</span>;
  }

  const words = children.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordChild: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn("inline-block", className)}
    >
      {words.map((word, idx) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().replace(/[^a-z0-9]/g, "") ===
            highlightWord.toLowerCase().replace(/[^a-z0-9]/g, "");

        return (
          <motion.span
            key={`${word}-${idx}`}
            variants={wordChild}
            className={cn(
              "inline-block mr-[0.28em] last:mr-0",
              wordClassName,
              isHighlight && highlightClassName
            )}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

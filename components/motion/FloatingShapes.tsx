"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils";

export function FloatingOrb({
  className,
  color = "primary",
  size = 360,
}: {
  className?: string;
  color?: "primary" | "secondary" | "success" | "cyan" | "royal" | "warm";
  size?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  const colorStyles = {
    primary: "bg-[var(--brand-royal)]/20 blur-[120px]",
    secondary: "bg-[var(--brand-cyan)]/20 blur-[110px]",
    cyan: "bg-[var(--brand-cyan)]/25 blur-[120px]",
    royal: "bg-[var(--brand-royal)]/25 blur-[120px]",
    success: "bg-[var(--success)]/15 blur-[110px]",
    warm: "bg-gradient-to-br from-[var(--brand-royal)]/25 via-[var(--brand-cyan)]/20 to-transparent blur-[130px]",
  };

  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden="true"
        style={{ width: size, height: size }}
        className={cn("pointer-events-none absolute rounded-full", colorStyles[color], className)}
      />
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ width: size, height: size }}
      animate={{
        scale: [1, 1.12, 1],
        x: [0, 15, 0],
        y: [0, -18, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn("pointer-events-none absolute rounded-full", colorStyles[color], className)}
    />
  );
}

export function FloatingRing({
  className,
  size = 120,
  color = "var(--brand-cyan)",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden="true"
        style={{ width: size, height: size, borderColor: color }}
        className={cn("pointer-events-none absolute rounded-full border-2 opacity-25", className)}
      />
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ width: size, height: size, borderColor: color }}
      animate={{
        rotate: [0, 360],
        y: [0, -12, 0],
      }}
      transition={{
        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={cn("pointer-events-none absolute rounded-full border-2 opacity-30", className)}
    />
  );
}

export function DotGridPattern({
  className,
  opacity = 0.08,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="dot-grid-tech"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid-tech)" />
    </svg>
  );
}

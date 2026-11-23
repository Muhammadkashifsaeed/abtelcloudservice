"use client";

import React from "react";
import { motion, useReducedMotion, type TargetAndTransition, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "blur-in";

export interface RevealProps extends Omit<HTMLMotionProps<"div">, "children" | "transition"> {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  amount?: number | "some" | "all";
  once?: boolean;
  className?: string;
  as?: React.ElementType;
}

const variantsMap: Record<RevealVariant, { hidden: TargetAndTransition; visible: TargetAndTransition }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 45, filter: "blur(3px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40, filter: "blur(3px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -60, filter: "blur(3px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 60, filter: "blur(3px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.93, filter: "blur(4px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(12px)", y: 25 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export const LUXURY_MOTION_EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.75,
  amount = 0.12,
  once = true,
  className,
  as: Component = "div",
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  const selectedVariants = variantsMap[variant];

  return (
    <motion.div
      initial={selectedVariants.hidden}
      whileInView={selectedVariants.visible}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: LUXURY_MOTION_EASE,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

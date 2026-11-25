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

// Crisp, refined offsets: balanced travel distance without blurry text rasterization
const variantsMap: Record<RevealVariant, { hidden: TargetAndTransition; visible: TargetAndTransition }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 44, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -64, scale: 0.985 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 64, scale: 0.985 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

// Agency luxury cubic-bezier: quick initial acceleration with buttery-smooth deceleration
export const LUXURY_MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.55,
  amount = 0.14,
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
      viewport={{
        once,
        amount,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: LUXURY_MOTION_EASE,
      }}
      style={{ willChange: "transform, opacity" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

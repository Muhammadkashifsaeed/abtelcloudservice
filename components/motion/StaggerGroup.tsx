"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/utils";
import { LUXURY_MOTION_EASE } from "./Reveal";

interface StaggerGroupProps {
  children: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
  id?: string;
}

const containerVariants = (stagger: number, delayChildren: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delayChildren,
    },
  },
});

export function StaggerGroup({
  children,
  stagger = 0.08,
  delayChildren = 0.04,
  className,
  once = true,
  id,
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      variants={containerVariants(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12, margin: "0px 0px -30px 0px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

export function StaggerItem({
  children,
  className,
  yOffset = 20,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: LUXURY_MOTION_EASE,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      style={{ willChange: "transform, opacity" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

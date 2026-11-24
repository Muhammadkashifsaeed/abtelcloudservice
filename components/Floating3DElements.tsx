"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils";

interface Floating3DRingProps {
  size?: number;
  className?: string;
  duration?: number;
  color?: string;
  reverse?: boolean;
}

/**
 * 3D Rotating Gyroscope Ring with depth perspective
 */
export function Floating3DRing({
  size = 280,
  className,
  duration = 24,
  color = "rgba(0, 212, 255, 0.4)",
  reverse = false,
}: Floating3DRingProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={cn(
        "pointer-events-none absolute [perspective:800px] [transform-style:preserve-3d]",
        className
      )}
    >
      {/* Outer Gyro Ring */}
      <motion.div
        animate={{
          rotateX: [25, 75, 25],
          rotateY: reverse ? [360, 0] : [0, 360],
          rotateZ: [0, 45, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "100%",
          height: "100%",
          borderColor: color,
        }}
        className="rounded-full border-[1.5px] border-dashed [transform-style:preserve-3d] shadow-[0_0_24px_rgba(0,212,255,0.25)]"
      />

      {/* Inner Concentric Ring */}
      <motion.div
        animate={{
          rotateX: [65, 15, 65],
          rotateY: reverse ? [0, 360] : [360, 0],
          rotateZ: [45, 0, 45],
        }}
        transition={{
          duration: duration * 0.75,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "75%",
          height: "75%",
          top: "12.5%",
          left: "12.5%",
          borderColor: "rgba(56, 152, 208, 0.35)",
        }}
        className="absolute rounded-full border border-dotted [transform-style:preserve-3d]"
      />
    </div>
  );
}

interface Floating3DCubeProps {
  size?: number;
  className?: string;
  duration?: number;
}

/**
 * 3D Isometric Rotating Floating Tech Cube
 */
export function Floating3DCube({
  size = 54,
  className,
  duration = 18,
}: Floating3DCubeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  const half = size / 2;

  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={cn(
        "pointer-events-none absolute [perspective:1000px] [transform-style:preserve-3d]",
        className
      )}
    >
      <motion.div
        animate={{
          rotateX: [15, 375],
          rotateY: [25, 385],
          rotateZ: [10, 370],
          y: [-6, 6, -6],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: size, height: size }}
        className="relative [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div
          style={{ transform: `translateZ(${half}px)` }}
          className="absolute inset-0 rounded-lg border border-[var(--brand-lime)]/40 bg-gradient-to-br from-[var(--brand-lime)]/10 to-transparent backdrop-blur-[2px] shadow-[0_0_12px_rgba(255, 94, 20,0.2)]"
        />
        {/* Back */}
        <div
          style={{ transform: `rotateY(180deg) translateZ(${half}px)` }}
          className="absolute inset-0 rounded-lg border border-emerald-400/40 bg-gradient-to-br from-emerald-400/10 to-transparent backdrop-blur-[2px]"
        />
        {/* Right */}
        <div
          style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}
          className="absolute inset-0 rounded-lg border border-[var(--brand-lime)]/30 bg-gradient-to-br from-[var(--brand-lime)]/05 to-transparent backdrop-blur-[2px]"
        />
        {/* Left */}
        <div
          style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }}
          className="absolute inset-0 rounded-lg border border-emerald-400/30 bg-gradient-to-br from-emerald-400/05 to-transparent backdrop-blur-[2px]"
        />
        {/* Top */}
        <div
          style={{ transform: `rotateX(90deg) translateZ(${half}px)` }}
          className="absolute inset-0 rounded-lg border border-[var(--brand-lime)]/40 bg-gradient-to-br from-[var(--brand-lime)]/15 to-transparent backdrop-blur-[2px]"
        />
        {/* Bottom */}
        <div
          style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }}
          className="absolute inset-0 rounded-lg border border-black/50 bg-black/20"
        />
      </motion.div>
    </div>
  );
}

interface FloatingTechSphereProps {
  size?: number;
  className?: string;
  glowColor?: string;
  duration?: number;
}

/**
 * 3D Luminous Floating Glass Sphere
 */
export function FloatingTechSphere({
  size = 60,
  className,
  glowColor = "#FF5E14",
  duration = 6,
}: FloatingTechSphereProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [-8, 8, -8],
              scale: [1, 1.05, 1],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
      className={cn(
        "pointer-events-none absolute rounded-full border border-white/20 bg-gradient-to-br from-white/30 via-transparent to-black/30 backdrop-blur-md",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-full blur-[8px] opacity-60"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${glowColor}, transparent 65%)`,
        }}
      />
      <div className="absolute top-[15%] left-[20%] h-[30%] w-[35%] rounded-full bg-white/60 blur-[2px]" />
    </motion.div>
  );
}

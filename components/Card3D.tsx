"use client";

import React, { useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/utils";

interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default: 8)
  scaleOnHover?: number; // Scale factor on hover (default: 1.02)
  glareOpacity?: number; // Maximum glare opacity (default: 0.15)
  glareColor?: string; // Glare gradient center color
  borderGlowColor?: string; // Ambient border glow color
  enableGlare?: boolean;
  disabled?: boolean;
}

export function Card3D({
  children,
  className,
  containerClassName,
  maxTilt = 8,
  scaleOnHover = 1.02,
  glareOpacity = 0.14,
  glareColor = "rgba(56, 152, 208, 0.45)",
  borderGlowColor = "rgba(0, 212, 255, 0.35)",
  enableGlare = true,
  disabled = false,
  ...props
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Normalized mouse position from center: -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural tactile feel
  const springConfig = { stiffness: 280, damping: 22, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotations based on mouse position
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Specular glare position (percentage across card)
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || prefersReducedMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [disabled, prefersReducedMotion, mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled || prefersReducedMotion) return;
    setIsHovered(true);
  }, [disabled, prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const shouldAnimate3D = !disabled && !prefersReducedMotion;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative [perspective:1200px] w-full", containerClassName)}
      {...props}
    >
      <motion.div
        style={
          shouldAnimate3D
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        animate={
          shouldAnimate3D && isHovered
            ? { scale: scaleOnHover, z: 20 }
            : { scale: 1, z: 0 }
        }
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "relative w-full h-full transition-shadow duration-300 [transform-style:preserve-3d]",
          className
        )}
      >
        {/* Ambient Specular Glare Follower - Behind text with mix-blend-overlay to prevent blurring */}
        {enableGlare && shouldAnimate3D && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-[inherit] z-10 mix-blend-overlay transition-opacity duration-300"
            style={{
              opacity: isHovered ? Math.min(glareOpacity, 0.08) : 0,
              background: `radial-gradient(circle 380px at ${glareX} ${glareY}, ${glareColor}, transparent 80%)`,
            }}
          />
        )}

        {/* Ambient 3D Depth Glow on Hover */}
        {shouldAnimate3D && (
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute -inset-1 rounded-[inherit] -z-10 opacity-0 blur-lg transition-opacity duration-500",
              isHovered && "opacity-90"
            )}
            style={{
              background: `radial-gradient(circle at center, ${borderGlowColor}, transparent 70%)`,
            }}
          />
        )}

        {/* Card Content with 3D Child Preservation - Always sharp and clear above glare */}
        <div className="relative z-20 w-full h-full [transform-style:preserve-3d]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

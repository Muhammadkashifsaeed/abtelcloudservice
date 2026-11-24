"use client";

import React from "react";
import { cn } from "@/utils";

interface CurvedUnderlineProps {
  className?: string;
  color?: string;
}

export function CurvedUnderline({
  className,
  color = "#0E4739",
}: CurvedUnderlineProps) {
  return (
    <svg
      className={cn(
        "absolute -bottom-2 sm:-bottom-2.5 left-0 h-3 w-full overflow-visible pointer-events-none drop-shadow-[0_2px_8px_rgba(14, 71, 57,0.7)]",
        className
      )}
      viewBox="0 0 240 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Soft Glow Under-stroke for Depth & Branding Radiance */}
      <path
        d="M 3 10 C 65 3.5, 175 3.5, 237 10"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Crisp High-Contrast Bold Main Stroke */}
      <path
        d="M 3 10 C 65 3.5, 175 3.5, 237 10"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

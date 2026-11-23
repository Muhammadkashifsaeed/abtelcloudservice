"use client";

import React from "react";
import { cn } from "@/utils";

interface CurvedUnderlineProps {
  className?: string;
  color?: string;
}

export function CurvedUnderline({
  className,
  color = "#22C7F2",
}: CurvedUnderlineProps) {
  return (
    <svg
      className={cn(
        "absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full overflow-visible pointer-events-none drop-shadow-[0_2px_8px_rgba(34,199,242,0.65)]",
        className
      )}
      viewBox="0 0 240 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 3 9.5 C 65 3, 175 3, 237 9.5"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

"use client";

import React from "react";
import { cn } from "@/utils";

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  gap?: string;
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  className,
  speed = "normal",
  gap = "gap-8",
}: MarqueeProps) {
  const speedClass =
    speed === "slow"
      ? "duration-[50s]"
      : speed === "fast"
      ? "duration-[22s]"
      : "duration-[34s]";

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden select-none",
        pauseOnHover && "marquee-pause",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center py-3",
          gap,
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          speedClass
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center py-3",
          gap,
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          speedClass
        )}
      >
        {children}
      </div>
    </div>
  );
}

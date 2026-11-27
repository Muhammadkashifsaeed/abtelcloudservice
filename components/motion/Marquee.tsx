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
  const durationSeconds = speed === "slow" ? 40 : speed === "fast" ? 16 : 26;

  const copyClassName = cn(
    "flex shrink-0 items-center py-3 pr-8 will-change-transform",
    gap
  );

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden select-none",
        pauseOnHover && "marquee-pause",
        className
      )}
    >
      {/* Single animated track holding two identical copies → seamless -50% loop */}
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        <div className={copyClassName}>{children}</div>
        <div aria-hidden="true" className={copyClassName}>
          {children}
        </div>
      </div>
    </div>
  );
}
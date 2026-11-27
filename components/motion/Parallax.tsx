"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

export interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Parallax strength. Positive = moves slower (deeper). 0.2 is subtle. */
  amount?: number;
  /** Axis of movement. */
  axis?: "y" | "x";
  /** Scale up slightly to avoid edge gaps while translating. */
  overscan?: number;
}

/**
 * Subtle scroll parallax via GSAP ScrollTrigger + scrub.
 * Disabled entirely on touch/small screens and reduced-motion for
 * smooth mobile performance. Transform only.
 */
export function Parallax({
  children,
  className,
  amount = 0.18,
  axis = "y",
  overscan = 1.12,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    // Only run parallax on pointer: fine + wider viewports
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = amount * 160;
      gsap.fromTo(
        el,
        { [axis]: -distance / 2, scale: overscan },
        {
          [axis]: distance / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, [amount, axis, overscan]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
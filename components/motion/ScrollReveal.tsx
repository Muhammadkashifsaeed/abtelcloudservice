"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

export type ScrollRevealDirection = "up" | "down" | "left" | "right" | "scale" | "blur";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Travel direction of the reveal. */
  direction?: ScrollRevealDirection;
  /** Stagger children matching `selector` (e.g. "[data-reveal-item]"). */
  stagger?: number;
  /** Delay before the reveal starts (seconds). */
  delay?: number;
  /** Duration of each element's reveal (seconds). */
  duration?: number;
  /** ScrollTrigger start position. */
  start?: string;
  /** Play once (default) or every time it enters. */
  once?: boolean;
  /** Extra travel distance in px. */
  distance?: number;
  as?: React.ElementType;
}

const fromVars: Record<ScrollRevealDirection, gsap.TweenVars> = {
  up: { y: 40, opacity: 0 },
  down: { y: -40, opacity: 0 },
  left: { x: -56, opacity: 0 },
  right: { x: 56, opacity: 0 },
  scale: { scale: 0.94, opacity: 0 },
  blur: { filter: "blur(10px)", y: 24, opacity: 0 },
};

/**
 * Section-by-section scroll reveal powered by GSAP ScrollTrigger.
 * Transform + opacity only (GPU-friendly). Respects reduced-motion
 * and dials down travel/stagger on small screens.
 */
export function ScrollReveal({
  children,
  className,
  direction = "up",
  stagger = 0.08,
  delay = 0,
  duration = 0.7,
  start = "top 82%",
  once = true,
  distance,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduce: "(prefers-reduced-motion: reduce)",
        mobile: "(max-width: 767px)",
        desktop: "(min-width: 768px)",
      },
      (ctx) => {
        const { reduce, mobile } = ctx.conditions as {
          reduce: boolean;
          mobile: boolean;
          desktop: boolean;
        };

        if (reduce) {
          gsap.set(el, { clearProps: "all" });
          return;
        }

        const targets = el.querySelectorAll("[data-reveal-item]");
        const items = targets.length ? targets : [el];
        const dist = distance ?? (mobile ? 24 : 44);

        const from = { ...fromVars[direction] };
        if (direction === "up" || direction === "down") from.y = direction === "up" ? dist : -dist;
        if (direction === "left" || direction === "right") from.x = direction === "left" ? -dist : dist;

        gsap.fromTo(
          items,
          { ...from },
          {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: mobile ? duration * 0.8 : duration,
            delay,
            stagger: mobile ? stagger * 0.6 : stagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start,
              once,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
          }
        );
      }
    );

    return () => mm.revert();
  }, [direction, stagger, delay, duration, start, once, distance]);

  return (
    <Component ref={ref as React.Ref<HTMLElement>} className={cn(className)}>
      {children}
    </Component>
  );
}
"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

export interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Reveal style. */
  variant?: "clip-up" | "clip-left" | "scale" | "blur";
  delay?: number;
  duration?: number;
  start?: string;
}

/**
 * Cinematic image transition on scroll: clip-path wipe + inner scale
 * settle. Transform/clip only, GPU-friendly. Reduced-motion safe.
 */
export function ImageReveal({
  children,
  className,
  variant = "clip-up",
  delay = 0,
  duration = 0.9,
  start = "top 85%",
}: ImageRevealProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        reduce: "(prefers-reduced-motion: reduce)",
        mobile: "(max-width: 767px)",
        desktop: "(min-width: 768px)",
      },
      (ctx) => {
        const { reduce } = ctx.conditions as {
          reduce: boolean;
          mobile: boolean;
          desktop: boolean;
        };
        if (reduce) return;

        const clipFrom: Record<string, string> = {
          "clip-up": "inset(100% 0% 0% 0%)",
          "clip-left": "inset(0% 100% 0% 0%)",
          scale: "inset(0% 0% 0% 0%)",
          blur: "inset(0% 0% 0% 0%)",
        };

        const tl = gsap.timeline({
          scrollTrigger: { trigger: wrap, start, once: true },
          delay,
        });

        if (variant === "scale" || variant === "blur") {
          tl.fromTo(
            wrap,
            { opacity: 0, scale: variant === "scale" ? 0.94 : 1, filter: variant === "blur" ? "blur(12px)" : "blur(0px)" },
            { opacity: 1, scale: 1, filter: "blur(0px)", duration, ease: "power3.out" }
          );
        } else {
          tl.fromTo(
            wrap,
            { clipPath: clipFrom[variant] },
            { clipPath: "inset(0% 0% 0% 0%)", duration, ease: "power3.inOut" }
          );
        }

        tl.fromTo(
          inner,
          { scale: 1.18 },
          { scale: 1, duration: duration * 1.15, ease: "power3.out" },
          "<0.05"
        );
      }
    );

    return () => mm.revert();
  }, [variant, delay, duration, start]);

  return (
    <div ref={wrapRef} className={cn("overflow-hidden will-change-[clip-path,transform]", className)}>
      <div ref={innerRef} className="relative h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
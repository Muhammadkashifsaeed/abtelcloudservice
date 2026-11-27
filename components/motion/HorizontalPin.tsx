"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

export interface HorizontalPinProps {
  children: React.ReactNode;
  className?: string;
  /** Scroll length multiplier relative to viewport (e.g. 1 = one screen of travel). */
  length?: number;
  /** Section aria-label. */
  label?: string;
}

/**
 * Pinned horizontal scroll. The section pins while its track translates
 * left, turning vertical scroll into horizontal movement. Desktop +
 * no-reduced-motion only; on mobile/reduced it degrades to a normal
 * vertical stack (track wraps).
 */
export function HorizontalPin({ children, className, length = 1, label }: HorizontalPinProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const getDistance = () => Math.max(0, track.scrollWidth - wrap.offsetWidth);

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${getDistance() + window.innerHeight * (length - 1)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform" });
      };
    });

    return () => mm.revert();
  }, [length]);

  return (
    <div ref={wrapRef} className={cn("relative w-full overflow-hidden", className)} aria-label={label}>
      <div
        ref={trackRef}
        className="flex w-max flex-col gap-6 md:w-max md:flex-row md:items-stretch md:gap-6 md:px-[max(1.5rem,calc((100vw-1320px)/2))]"
      >
        {children}
      </div>
    </div>
  );
}
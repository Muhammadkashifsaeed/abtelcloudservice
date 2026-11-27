"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

export interface StaggerTextRevealProps {
  children: string;
  className?: string;
  /** Split granularity. */
  by?: "words" | "chars" | "lines";
  /** Stagger between units (seconds). */
  stagger?: number;
  delay?: number;
  duration?: number;
  start?: string;
  /** Optional class applied to a matched word for accent styling. */
  highlightWord?: string;
  highlightClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Staggered text reveal (words / chars / lines) on scroll, GSAP-driven.
 * Each unit rises + fades with a soft mask. Transform + opacity only.
 * Reduced-motion renders plain text; mobile uses a gentler stagger.
 */
export function StaggerTextReveal({
  children,
  className,
  by = "words",
  stagger = 0.045,
  delay = 0,
  duration = 0.6,
  start = "top 85%",
  highlightWord,
  highlightClassName = "text-[#E11D48]",
  as: Tag = "h2",
}: StaggerTextRevealProps) {
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
        if (reduce) return;

        const units = el.querySelectorAll("[data-text-unit]");
        gsap.fromTo(
          units,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: mobile ? duration * 0.8 : duration,
            delay,
            stagger: mobile ? stagger * 0.7 : stagger,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start, once: true },
          }
        );
      }
    );

    return () => mm.revert();
  }, [stagger, delay, duration, start]);

  const clean = (w: string) => w.toLowerCase().replace(/[^a-z0-9]/g, "");

  const renderUnit = (text: string, key: number) => {
    const isHi = highlightWord && clean(text) === clean(highlightWord);
    return (
      <span
        key={key}
        className="inline-block overflow-hidden align-bottom"
        style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
      >
        <span
          data-text-unit
          className={cn("inline-block will-change-transform", isHi && highlightClassName)}
        >
          {text}
        </span>
      </span>
    );
  };

  let content: React.ReactNode;
  if (by === "chars") {
    content = children.split(" ").map((word, wi) => (
      <span key={wi} className="inline-block mr-[0.25em] last:mr-0">
        {word.split("").map((ch, ci) => renderUnit(ch, ci))}
      </span>
    ));
  } else if (by === "lines") {
    content = children.split("\n").map((line, li) => (
      <span key={li} className="block">
        {renderUnit(line, li)}
      </span>
    ));
  } else {
    content = children.split(" ").map((word, wi) => (
      <React.Fragment key={wi}>{renderUnit(word, wi)}{" "}</React.Fragment>
    ));
  }

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={cn(className)}>
      {content}
    </Tag>
  );
}
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollProps {
  children: React.ReactNode;
  enabled?: boolean;
}

/**
 * Smooth scrolling (Lenis) driven by GSAP's ticker and synced with
 * ScrollTrigger. A single RAF/ticker loop keeps scroll, triggers and
 * parallax perfectly in phase — no jitter, no double loops.
 */
export function SmoothScroll({ children, enabled = true }: SmoothScrollProps) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Reset scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Recalculate trigger positions for the new page
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 60);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Avoid jumpy recalcs when mobile browser chrome resizes the viewport
    ScrollTrigger.config({ ignoreMobileResize: true });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!enabled || prefersReducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
    });

    lenisRef.current = lenis;

    // Keep ScrollTrigger aware of Lenis scroll position
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's single ticker (perfectly synced, one loop)
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Recalculate once layout settles
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 120);

    // Recalculate after fonts/images finish loading (prevents pin drift)
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.clearTimeout(refreshId);
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled]);

  return <>{children}</>;
}
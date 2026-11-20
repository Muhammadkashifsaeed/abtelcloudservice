"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "default" | "interactive" | "heading" | "input";
type CursorSurface = "light" | "dark" | "accent";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
  color: string;
}

function parseRgb(color: string): [number, number, number, number] | null {
  const match = color.match(
    /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?\s*\)/
  );
  if (!match) return null;
  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);
  const a = match[4] !== undefined ? Number(match[4]) : 1;
  return [r, g, b, a];
}

function detectSurface(target: Element): CursorSurface {
  let el: Element | null = target;
  let depth = 0;

  while (el && el !== document.documentElement && depth < 12) {
    const style = window.getComputedStyle(el);
    const parsed = parseRgb(style.backgroundColor);

    if (parsed && parsed[3] > 0.35) {
      const [r, g, b] = parsed;
      // Bright cyan / turquoise solid buttons
      if (b > 190 && g > 165 && r < 95) {
        return "accent";
      }
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance < 145 ? "dark" : "light";
    }

    const className = typeof el.className === "string" ? el.className : "";
    if (
      className.includes("bg-[#246BFD]") ||
      className.includes("from-[#246BFD]") ||
      className.includes("to-[#00D4FF]") ||
      className.includes("bg-[#00D4FF]")
    ) {
      return "accent";
    }

    if (
      el.tagName === "HEADER" ||
      el.tagName === "FOOTER" ||
      className.includes("bg-[#0A0E33]") ||
      className.includes("bg-[#0B0E2E]") ||
      className.includes("bg-[#121752]") ||
      className.includes("bg-slate-900")
    ) {
      return "dark";
    }

    el = el.parentElement;
    depth += 1;
  }

  return "light";
}

// Cohesive Royal-Blue / Cyan / White Color Palette matching Abtel Cloud Services
const SURFACE_PALETTE: Record<
  CursorSurface,
  {
    ringBorder: string;
    ringBorderActive: string;
    ringBgDefault: string;
    ringBgInteractive: string;
    ringBgHeading: string;
    ringShadow: string;
    haloBg: string;
    dotBg: string;
    dotShadow: string;
    rippleColor: string;
  }
> = {
  light: {
    ringBorder: "rgba(36, 107, 253, 0.72)",
    ringBorderActive: "rgba(0, 212, 255, 0.98)",
    ringBgDefault: "rgba(36, 107, 253, 0.05)",
    ringBgInteractive: "rgba(0, 212, 255, 0.14)",
    ringBgHeading: "rgba(36, 107, 253, 0.08)",
    ringShadow: "0 0 24px rgba(36, 107, 253, 0.28), 0 0 10px rgba(0, 212, 255, 0.2)",
    haloBg: "rgba(0, 212, 255, 0.22)",
    dotBg: "#246BFD",
    dotShadow: "0 0 12px rgba(36, 107, 253, 0.75)",
    rippleColor: "rgba(36, 107, 253, 0.55)",
  },
  dark: {
    ringBorder: "rgba(0, 212, 255, 0.85)",
    ringBorderActive: "rgba(0, 235, 255, 1)",
    ringBgDefault: "rgba(0, 212, 255, 0.08)",
    ringBgInteractive: "rgba(0, 212, 255, 0.2)",
    ringBgHeading: "rgba(0, 212, 255, 0.16)",
    ringShadow: "0 0 28px rgba(0, 212, 255, 0.45), 0 0 14px rgba(36, 107, 253, 0.35)",
    haloBg: "rgba(0, 212, 255, 0.28)",
    dotBg: "#00D4FF",
    dotShadow: "0 0 14px rgba(0, 212, 255, 0.95)",
    rippleColor: "rgba(0, 212, 255, 0.65)",
  },
  accent: {
    ringBorder: "rgba(255, 255, 255, 0.94)",
    ringBorderActive: "rgba(255, 255, 255, 1)",
    ringBgDefault: "rgba(255, 255, 255, 0.12)",
    ringBgInteractive: "rgba(255, 255, 255, 0.24)",
    ringBgHeading: "rgba(255, 255, 255, 0.22)",
    ringShadow: "0 0 26px rgba(255, 255, 255, 0.55)",
    haloBg: "rgba(255, 255, 255, 0.32)",
    dotBg: "#FFFFFF",
    dotShadow: "0 0 14px rgba(255, 255, 255, 0.95)",
    rippleColor: "rgba(255, 255, 255, 0.75)",
  },
};

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [surface, setSurface] = useState<CursorSurface>("light");
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  const rippleIdRef = useRef(0);
  const surfaceRef = useRef<CursorSurface>("light");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Silky 3-layer spring physics: snappy core dot, fluid trailing ring, soft ambient halo aura
  const dotX = useSpring(mouseX, { stiffness: 780, damping: 40, mass: 0.22 });
  const dotY = useSpring(mouseY, { stiffness: 780, damping: 40, mass: 0.22 });
  const ringX = useSpring(mouseX, { stiffness: 290, damping: 25, mass: 0.48 });
  const ringY = useSpring(mouseY, { stiffness: 290, damping: 25, mass: 0.48 });
  const haloX = useSpring(mouseX, { stiffness: 140, damping: 22, mass: 0.82 });
  const haloY = useSpring(mouseY, { stiffness: 140, damping: 22, mass: 0.82 });

  useEffect(() => {
    // Touch & Mobile detection: strictly enable only on desktop devices with mouse / fine pointer
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isFinePointer || !canHover || isTouch || prefersReducedMotion) {
      return;
    }

    const enableTimer = window.setTimeout(() => {
      setEnabled(true);
    }, 0);
    document.body.classList.add("custom-cursor-active");

    const detectMode = (target: Element): CursorMode => {
      if (target.closest("input, textarea, select")) {
        return "input";
      }
      if (target.closest("h1, h2, h3, h4, [data-cursor='heading']")) {
        return "heading";
      }
      if (
        target.closest(
          "a, button, [role='button'], label, [data-cursor='grow'], .btn-cut"
        )
      ) {
        return "interactive";
      }
      return "default";
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);

      if (event.target instanceof Element) {
        const nextMode = detectMode(event.target);
        const nextSurface = detectSurface(event.target);
        surfaceRef.current = nextSurface;
        setMode(nextMode);
        setSurface(nextSurface);
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      setIsPressed(true);
      const id = ++rippleIdRef.current;
      const color = SURFACE_PALETTE[surfaceRef.current].rippleColor;

      setRipples((prev) => [
        ...prev.slice(-3),
        { id, x: event.clientX, y: event.clientY, color },
      ]);

      window.setTimeout(() => {
        setRipples((prev) => prev.filter((item) => item.id !== id));
      }, 450);
    };

    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.clearTimeout(enableTimer);
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  const palette = SURFACE_PALETTE[surface];

  // Dynamic Sizing based on element interaction
  const ringSize =
    mode === "heading"
      ? 74
      : mode === "interactive"
        ? 58
        : mode === "input"
          ? 24
          : 30;

  const haloSize =
    mode === "heading"
      ? 100
      : mode === "interactive"
        ? 82
        : mode === "input"
          ? 0
          : 46;

  const dotWidth =
    mode === "input" ? 2 : mode === "heading" ? 9 : mode === "interactive" ? 5.5 : 7;
  const dotHeight = mode === "input" ? 20 : dotWidth;
  const pressScale = isPressed ? 0.82 : 1;

  const ringBg =
    mode === "heading"
      ? palette.ringBgHeading
      : mode === "interactive"
        ? palette.ringBgInteractive
        : palette.ringBgDefault;

  return (
    <>
      {/* Click Ripple Shockwave Burst */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            aria-hidden="true"
            initial={{
              width: 14,
              height: 14,
              opacity: 0.85,
              scale: 1,
            }}
            animate={{
              width: 72,
              height: 72,
              opacity: 0,
              scale: 1.2,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: "-50%",
              translateY: "-50%",
              borderColor: ripple.color,
            }}
            className="pointer-events-none fixed z-[9996] rounded-full border-2"
          />
        ))}
      </AnimatePresence>

      {/* Soft Ambient Trailing Glow Halo Aura */}
      <motion.div
        aria-hidden="true"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: haloSize,
          height: haloSize,
          opacity: visible && mode !== "input" ? (mode === "default" ? 0.35 : 0.68) : 0,
          backgroundColor: palette.haloBg,
        }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 26,
          opacity: { duration: 0.22 },
          backgroundColor: { duration: 0.25 },
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full blur-[14px]"
      />

      {/* Main Fluid Precision Ring (Expands & Glows on Hover) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? (mode === "input" ? 0.4 : 1) : 0,
          scale: pressScale,
          backgroundColor: ringBg,
          borderColor:
            mode === "default" ? palette.ringBorder : palette.ringBorderActive,
          boxShadow: palette.ringShadow,
        }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 26,
          opacity: { duration: 0.16 },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 },
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border-[1.75px] backdrop-blur-[2px]"
      />

      {/* Crisp Center Core Dot (Morphs into Sleek Caret in Inputs) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: dotWidth,
          height: dotHeight,
          opacity: visible ? 1 : 0,
          scale: isPressed ? 1.35 : mode === "interactive" ? 0.8 : 1,
          backgroundColor: palette.dotBg,
          boxShadow: palette.dotShadow,
        }}
        transition={{
          type: "spring",
          stiffness: 580,
          damping: 34,
          opacity: { duration: 0.14 },
          backgroundColor: { duration: 0.18 },
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
      />
    </>
  );
}

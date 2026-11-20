"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

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
      className.includes("bg-[#3D30BA]") ||
      className.includes("bg-[#2B237F]") ||
      className.includes("bg-slate-900")
    ) {
      return "dark";
    }

    el = el.parentElement;
    depth += 1;
  }

  return "light";
}

// Crisp High-Contrast Color Palette (Zero Blur, Transparent Ring Center so Text is 100% Sharp)
const SURFACE_PALETTE: Record<
  CursorSurface,
  {
    ringBorder: string;
    dotBg: string;
    rippleColor: string;
  }
> = {
  light: {
    ringBorder: "rgba(36, 107, 253, 0.85)",
    dotBg: "#246BFD",
    rippleColor: "rgba(36, 107, 253, 0.45)",
  },
  dark: {
    ringBorder: "rgba(0, 212, 255, 0.95)",
    dotBg: "#00D4FF",
    rippleColor: "rgba(0, 212, 255, 0.55)",
  },
  accent: {
    ringBorder: "rgba(255, 255, 255, 0.98)",
    dotBg: "#FFFFFF",
    rippleColor: "rgba(255, 255, 255, 0.65)",
  },
};

// Fixed Constant Sizing Across the Entire Website (Comfortably Sized & Distinct)
const CONSTANT_RING_SIZE = 34;
const CONSTANT_DOT_SIZE = 7.5;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [surface, setSurface] = useState<CursorSurface>("light");
  const [isOverInput, setIsOverInput] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  const rippleIdRef = useRef(0);
  const surfaceRef = useRef<CursorSurface>("light");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy, silky spring physics without trailing blur
  const dotX = useSpring(mouseX, { stiffness: 850, damping: 42, mass: 0.18 });
  const dotY = useSpring(mouseY, { stiffness: 850, damping: 42, mass: 0.18 });
  const ringX = useSpring(mouseX, { stiffness: 420, damping: 30, mass: 0.35 });
  const ringY = useSpring(mouseY, { stiffness: 420, damping: 30, mass: 0.35 });

  useEffect(() => {
    // Enable exclusively for fine-pointer desktop mice; disabled on touch/mobile
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

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);

      if (event.target instanceof Element) {
        // Over text inputs, hide custom cursor so native browser I-beam text caret is used
        const overInput = Boolean(event.target.closest("input, textarea, select"));
        setIsOverInput(overInput);

        const nextSurface = detectSurface(event.target);
        surfaceRef.current = nextSurface;
        setSurface(nextSurface);
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      setIsPressed(true);
      const id = ++rippleIdRef.current;
      const color = SURFACE_PALETTE[surfaceRef.current].rippleColor;

      setRipples((prev) => [
        ...prev.slice(-2),
        { id, x: event.clientX, y: event.clientY, color },
      ]);

      window.setTimeout(() => {
        setRipples((prev) => prev.filter((item) => item.id !== id));
      }, 400);
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
  const isCursorHidden = !visible || isOverInput;

  return (
    <>
      {/* Click Ripple Effect */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            aria-hidden="true"
            initial={{
              width: 10,
              height: 10,
              opacity: 0.8,
              scale: 1,
            }}
            animate={{
              width: 48,
              height: 48,
              opacity: 0,
              scale: 1.15,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Outer Precision Ring – Constant 34px Size, Thick 2.25px Border, 100% Transparent Center (Zero Blur over Text) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: CONSTANT_RING_SIZE,
          height: CONSTANT_RING_SIZE,
        }}
        animate={{
          opacity: isCursorHidden ? 0 : 1,
          scale: isPressed ? 0.88 : 1,
          borderColor: palette.ringBorder,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { duration: 0.15, ease: "easeOut" },
          borderColor: { duration: 0.18 },
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border-[2.25px] bg-transparent drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]"
      />

      {/* Crisp Center Core Dot – Constant 7.5px Size (Zero Blur, Sharp & Focused) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: CONSTANT_DOT_SIZE,
          height: CONSTANT_DOT_SIZE,
        }}
        animate={{
          opacity: isCursorHidden ? 0 : 1,
          scale: isPressed ? 1.25 : 1,
          backgroundColor: palette.dotBg,
        }}
        transition={{
          opacity: { duration: 0.12 },
          scale: { duration: 0.12, ease: "easeOut" },
          backgroundColor: { duration: 0.18 },
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full shadow-[0_0_10px_rgba(0,212,255,0.85)]"
      />
    </>
  );
}

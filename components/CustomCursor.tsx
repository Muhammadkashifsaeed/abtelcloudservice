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

  while (el && el !== document.documentElement && depth < 14) {
    const style = window.getComputedStyle(el);
    const parsedBg = parseRgb(style.backgroundColor);

    if (parsedBg && parsedBg[3] > 0.35) {
      const [r, g, b] = parsedBg;
      if (b > 190 && g > 165 && r < 95) {
        return "accent";
      }
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance < 145 ? "dark" : "light";
    }

    // High text brightness indicates dark background context
    const parsedText = parseRgb(style.color);
    if (parsedText && parsedText[3] > 0.6) {
      const textLuminance =
        0.299 * parsedText[0] + 0.587 * parsedText[1] + 0.114 * parsedText[2];
      if (textLuminance > 220) {
        return "dark";
      }
    }

    const className = typeof el.className === "string" ? el.className : "";
    if (
      className.includes("bg-[#3D96CE]") ||
      className.includes("bg-[#303E99]") ||
      className.includes("bg-[#398FC2]") ||
      className.includes("bg-[#246BFD]") ||
      className.includes("bg-[#2563EB]") ||
      className.includes("from-[#246BFD]") ||
      className.includes("to-[#00D4FF]") ||
      className.includes("bg-[#00D4FF]")
    ) {
      return "accent";
    }

    if (
      className.includes("bg-[#C5D82E]") ||
      el.hasAttribute("data-hero-section")
    ) {
      return "light";
    }

    if (
      el.tagName === "HEADER" ||
      el.tagName === "FOOTER" ||
      className.includes("bg-[#101B3F]") ||
      className.includes("bg-[#0B132C]") ||
      className.includes("bg-[#070A1E]") ||
      className.includes("bg-[#0A1032]") ||
      className.includes("bg-[#09153A]") ||
      className.includes("bg-[#0A163B]") ||
      className.includes("bg-[#070F28]") ||
      className.includes("bg-[#0A0E33]") ||
      className.includes("bg-[#090D24]") ||
      className.includes("bg-[#0B0E2E]") ||
      className.includes("bg-[#0B1130]") ||
      className.includes("bg-[#121752]") ||
      className.includes("bg-[#304098]") ||
      className.includes("bg-slate-900") ||
      className.includes("bg-slate-950") ||
      className.includes("bg-black")
    ) {
      return "dark";
    }

    el = el.parentElement;
    depth += 1;
  }

  return "light";
}

const SURFACE_PALETTE: Record<
  CursorSurface,
  {
    ringBorder: string;
    dotBg: string;
    rippleColor: string;
    glow: string;
  }
> = {
  light: {
    ringBorder: "rgba(16, 27, 63, 0.85)",
    dotBg: "#101B3F",
    rippleColor: "rgba(61, 150, 206, 0.5)",
    glow: "rgba(61, 150, 206, 0.4)",
  },
  dark: {
    ringBorder: "rgba(61, 150, 206, 0.95)",
    dotBg: "#FFFFFF",
    rippleColor: "rgba(61, 150, 206, 0.75)",
    glow: "rgba(61, 150, 206, 0.85)",
  },
  accent: {
    ringBorder: "rgba(255, 255, 255, 0.95)",
    dotBg: "#FFFFFF",
    rippleColor: "rgba(255, 255, 255, 0.7)",
    glow: "rgba(255, 255, 255, 0.6)",
  },
};

const BASE_RING_SIZE = 34;
const HOVER_RING_SIZE = 50;
const BASE_DOT_SIZE = 8;
const HOVER_DOT_SIZE = 8;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [surface, setSurface] = useState<CursorSurface>("light");
  const [isOverInput, setIsOverInput] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  const rippleIdRef = useRef(0);
  const surfaceRef = useRef<CursorSurface>("light");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Silky, responsive spring physics
  const dotX = useSpring(mouseX, { stiffness: 950, damping: 45, mass: 0.15 });
  const dotY = useSpring(mouseY, { stiffness: 950, damping: 45, mass: 0.15 });
  const ringX = useSpring(mouseX, { stiffness: 460, damping: 32, mass: 0.3 });
  const ringY = useSpring(mouseY, { stiffness: 460, damping: 32, mass: 0.3 });

  useEffect(() => {
    // Only activate for desktop fine-pointer devices (no mobile / touch)
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
        // Native I-beam text caret for inputs/textareas
        const overInput = Boolean(event.target.closest("input, textarea, select"));
        setIsOverInput(overInput);

        // Responsive enlargement when hovering clickable interactive items
        const isClickable = Boolean(
          event.target.closest("a, button, [role='button'], summary, input[type='submit'], input[type='button']")
        );
        setIsHoveringClickable(isClickable);

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
  const currentRingSize = isHoveringClickable ? HOVER_RING_SIZE : BASE_RING_SIZE;
  const currentDotSize = isHoveringClickable ? HOVER_DOT_SIZE : BASE_DOT_SIZE;

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
              opacity: 0.85,
              scale: 1,
            }}
            animate={{
              width: 52,
              height: 52,
              opacity: 0,
              scale: 1.2,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Outer Precision Ring – Expands smoothly over interactive elements with soft ambient halo */}
      <motion.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: currentRingSize,
          height: currentRingSize,
          opacity: isCursorHidden ? 0 : isHoveringClickable ? 0.95 : 0.8,
          scale: isPressed ? 0.86 : 1,
          borderColor: palette.ringBorder,
          boxShadow: isHoveringClickable
            ? `0 0 18px ${palette.glow}, inset 0 0 10px ${palette.glow}`
            : `0 0 8px ${palette.glow}`,
        }}
        transition={{
          width: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.15 },
          scale: { duration: 0.14, ease: "easeOut" },
          borderColor: { duration: 0.18 },
          boxShadow: { duration: 0.22 },
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border-[1.75px] bg-transparent"
      />

      {/* Crisp Center Core Dot with soft ambient glow */}
      <motion.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: currentDotSize,
          height: currentDotSize,
          opacity: isCursorHidden ? 0 : 1,
          scale: isPressed ? 1.3 : 1,
          backgroundColor: palette.dotBg,
          borderColor: surface === "dark" ? "#3D96CE" : "rgba(255, 255, 255, 0.9)",
          boxShadow:
            surface === "dark"
              ? "0 0 14px #3D96CE, 0 0 4px #FFFFFF"
              : "0 0 8px rgba(16, 27, 63, 0.65)",
        }}
        transition={{
          width: { duration: 0.18 },
          height: { duration: 0.18 },
          opacity: { duration: 0.12 },
          scale: { duration: 0.12, ease: "easeOut" },
          backgroundColor: { duration: 0.18 },
          borderColor: { duration: 0.18 },
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-[1.5px]"
      />
    </>
  );
}

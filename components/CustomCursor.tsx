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
    if (el.classList.contains("section-dark") || el.classList.contains("section-dark-2")) {
      return "dark";
    }
    if (el.classList.contains("section-light")) {
      return "light";
    }

    const style = window.getComputedStyle(el);
    const parsedBg = parseRgb(style.backgroundColor);

    if (parsedBg && parsedBg[3] > 0.35) {
      const [r, g, b] = parsedBg;
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance < 145 ? "dark" : "light";
    }

    if (
      el.tagName === "FOOTER" ||
      el.classList.contains("bg-[var(--bg-dark)]") ||
      el.classList.contains("bg-[#080A0F]") ||
      el.classList.contains("bg-[#0B0E14]")
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
    ringBorder: "rgba(11, 14, 20, 0.85)",
    dotBg: "#0B0E14",
    rippleColor: "rgba(255, 94, 20, 0.5)",
    glow: "rgba(255, 94, 20, 0.35)",
  },
  dark: {
    ringBorder: "rgba(255, 94, 20, 0.95)",
    dotBg: "#FFFFFF",
    rippleColor: "rgba(255, 94, 20, 0.75)",
    glow: "rgba(255, 94, 20, 0.8)",
  },
  accent: {
    ringBorder: "rgba(255, 255, 255, 0.95)",
    dotBg: "#FFFFFF",
    rippleColor: "rgba(255, 255, 255, 0.7)",
    glow: "rgba(255, 255, 255, 0.6)",
  },
};

const BASE_RING_SIZE = 34;
const HOVER_RING_SIZE = 52;
const LABEL_RING_SIZE = 76;
const BASE_DOT_SIZE = 7;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [surface, setSurface] = useState<CursorSurface>("dark");
  const [isOverInput, setIsOverInput] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  const rippleIdRef = useRef(0);
  const surfaceRef = useRef<CursorSurface>("dark");

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

    const rafId = requestAnimationFrame(() => {
      setEnabled(true);
      document.body.classList.add("custom-cursor-active");
    });

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);

      if (event.target instanceof Element) {
        // Native I-beam text caret for inputs/textareas
        const overInput = Boolean(event.target.closest("input, textarea, select"));
        setIsOverInput(overInput);

        // Check for special cursor badges (e.g. data-cursor="view" or "drag")
        const labelEl = event.target.closest("[data-cursor], [data-cursor-text]");
        if (labelEl) {
          const customText = labelEl.getAttribute("data-cursor-text");
          const cursorType = labelEl.getAttribute("data-cursor");
          if (customText) {
            setCursorLabel(customText);
          } else if (cursorType === "view") {
            setCursorLabel("VIEW");
          } else if (cursorType === "drag") {
            setCursorLabel("DRAG");
          } else {
            setCursorLabel(null);
          }
        } else {
          setCursorLabel(null);
        }

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
      cancelAnimationFrame(rafId);
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
  const hasLabel = Boolean(cursorLabel);

  const ringSize = hasLabel
    ? LABEL_RING_SIZE
    : isHoveringClickable
    ? HOVER_RING_SIZE
    : BASE_RING_SIZE;

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
              width: 56,
              height: 56,
              opacity: 0,
              scale: 1.25,
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
          width: ringSize,
          height: ringSize,
          opacity: isCursorHidden ? 0 : 1,
          scale: isPressed ? 0.9 : 1,
          borderColor: hasLabel ? "rgba(0, 0, 0, 0)" : palette.ringBorder,
          backgroundColor: hasLabel
            ? cursorLabel === "VIEW"
              ? "rgba(255, 94, 20, 0.95)"
              : "rgba(255, 94, 20, 0.95)"
            : "rgba(0, 0, 0, 0)",
          boxShadow: hasLabel
            ? "0 0 24px rgba(255, 94, 20, 0.6)"
            : isHoveringClickable
            ? `0 0 18px ${palette.glow}, inset 0 0 10px ${palette.glow}`
            : `0 0 8px ${palette.glow}`,
        }}
        transition={{
          width: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.15 },
          scale: { duration: 0.14, ease: "easeOut" },
          borderColor: { duration: 0.18 },
          backgroundColor: { duration: 0.2 },
          boxShadow: { duration: 0.22 },
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full border-[1.75px]"
      >
        {hasLabel && (
          <span className="font-heading text-[11px] font-black tracking-widest text-black">
            {cursorLabel}
          </span>
        )}
      </motion.div>

      {/* Crisp Center Core Dot (hidden when label is showing) */}
      {!hasLabel && (
        <motion.div
          aria-hidden="true"
          style={{
            x: dotX,
            y: dotY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            width: isHoveringClickable ? 0 : BASE_DOT_SIZE,
            height: isHoveringClickable ? 0 : BASE_DOT_SIZE,
            opacity: isCursorHidden || isHoveringClickable ? 0 : 1,
            scale: isPressed ? 1.3 : 1,
            backgroundColor: palette.dotBg,
            boxShadow:
              surface === "dark"
                ? "0 0 12px #FF5E14, 0 0 4px #FFFFFF"
                : "0 0 8px rgba(255, 94, 20, 0.5)",
          }}
          transition={{
            width: { duration: 0.18 },
            height: { duration: 0.18 },
            opacity: { duration: 0.12 },
            scale: { duration: 0.12, ease: "easeOut" },
            backgroundColor: { duration: 0.18 },
          }}
          className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        />
      )}
    </>
  );
}

"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function ShaderBackground({ children, className = "" }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* SVG Filter Definitions */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="shader-gooey" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Primary animated mesh gradient — dark navy/indigo/blue palette */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        style={{ position: "absolute", inset: 0 }}
        colors={["#040d1a", "#0a1628", "#1e3a5f", "#2563EB", "#0f1f3d"]}
        speed={isActive ? 0.6 : 0.25}
        distortion={0.6}
        swirl={0.15}
      />

      {/* Subtle electric-blue grain overlay for depth */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen"
        style={{ position: "absolute", inset: 0 }}
        colors={["#000000", "#0a1628", "#2563EB", "#000000", "#000000"]}
        speed={isActive ? 0.4 : 0.15}
        distortion={0.4}
        swirl={0.05}
        grainOverlay={0.08}
      />

      {/* Top-center soft radial glow for hero highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.28) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay for subtle structure */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

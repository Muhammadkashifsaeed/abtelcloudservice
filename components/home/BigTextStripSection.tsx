"use client";

import React from "react";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

interface ServiceMarqueeItem {
  text: string;
  color: string;
  starColor: string;
  outlined: boolean;
}

const SERVICES_MARQUEE: ServiceMarqueeItem[] = [
  {
    text: "Web Development",
    color: "text-white hover:text-sky-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
    starColor: "text-[#22C7F2]",
    outlined: false,
  },
  {
    text: "Mobile Apps",
    color:
      "text-transparent [-webkit-text-stroke:2px_#22C7F2] hover:[-webkit-text-stroke:2px_#38BDF8] drop-shadow-[0_2px_10px_rgba(34,199,242,0.35)]",
    starColor: "text-[#22C7F2]",
    outlined: true,
  },
  {
    text: "API Integrations",
    color: "text-[#FB923C] hover:text-[#FDBA74] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
    starColor: "text-[#FB923C]",
    outlined: false,
  },
  {
    text: "E-Commerce",
    color:
      "text-transparent [-webkit-text-stroke:2px_#34D399] hover:[-webkit-text-stroke:2px_#6EE7B7] drop-shadow-[0_2px_10px_rgba(52,211,153,0.35)]",
    starColor: "text-[#34D399]",
    outlined: true,
  },
  {
    text: "Digital Marketplace",
    color: "text-[#C084FC] hover:text-[#DDD6FE] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
    starColor: "text-[#C084FC]",
    outlined: false,
  },
  {
    text: "UI/UX Design",
    color:
      "text-transparent [-webkit-text-stroke:2px_#FB7185] hover:[-webkit-text-stroke:2px_#FDA4AF] drop-shadow-[0_2px_10px_rgba(251,113,133,0.35)]",
    starColor: "text-[#FB7185]",
    outlined: true,
  },
  {
    text: "Cloud Solutions",
    color: "text-[#38BDF8] hover:text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
    starColor: "text-[#38BDF8]",
    outlined: false,
  },
  {
    text: "Custom Software",
    color:
      "text-transparent [-webkit-text-stroke:2px_#FBBF24] hover:[-webkit-text-stroke:2px_#FDE047] drop-shadow-[0_2px_10px_rgba(251,191,36,0.35)]",
    starColor: "text-[#FBBF24]",
    outlined: true,
  },
];

/**
 * Premium Designer Geometric Asterisk Separator
 * Bespoke 8-spoke Swiss Modernist typographic insignia in a frosted glass medallion.
 */
function PremiumAsterisk({ starColor }: { starColor?: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center select-none"
      aria-hidden="true"
    >
      <div className="group/star relative flex h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-white/12 border border-white/25 shadow-[0_2px_12px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400/60 hover:bg-white/20">
        {/* Subtle Ambient Radial Highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/10 to-white/30" />

        {/* Precision 8-Spoke Swiss Geometric Asterisk */}
        <svg
          viewBox="0 0 24 24"
          className={`relative h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5 ${
            starColor || "text-[#22C7F2]"
          } drop-shadow-[0_0_8px_rgba(34,199,242,0.4)] transition-transform duration-500 ease-out group-hover/star:rotate-90`}
          fill="currentColor"
        >
          {/* Vertical spoke */}
          <rect x="10" y="2" width="4" height="20" rx="2" />
          {/* Horizontal spoke */}
          <rect x="2" y="10" width="20" height="4" rx="2" />
          {/* Diagonal spoke (45°) */}
          <rect
            x="10"
            y="2"
            width="4"
            height="20"
            rx="2"
            transform="rotate(45 12 12)"
          />
          {/* Diagonal spoke (-45°) */}
          <rect
            x="10"
            y="2"
            width="4"
            height="20"
            rx="2"
            transform="rotate(-45 12 12)"
          />
        </svg>
      </div>
    </div>
  );
}

export function BigTextStripSection() {
  return (
    <section
      aria-label="Core Services Marquee Strip"
      className="relative w-full overflow-hidden border-y border-[#22C7F2]/25 bg-gradient-to-r from-[#071428] via-[#0E274A] to-[#071428] py-6 sm:py-7 text-white shadow-[0_10px_32px_rgba(7,20,40,0.5)] select-none"
    >
      {/* Subtle brand cyan ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,199,242,0.12),transparent_70%)]"
      />
      {/* Edge gradient vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071428]/80 via-transparent to-[#071428]/80"
      />

      <Reveal variant="fade-up" duration={0.8}>
        <Marquee speed="normal" reverse={false} className="py-1">
          <div className="flex shrink-0 items-center gap-8 sm:gap-12">
            {SERVICES_MARQUEE.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
                <span
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${item.color}`}
                >
                  {item.text}
                </span>
                <PremiumAsterisk starColor={item.starColor} />
              </div>
            ))}
          </div>
        </Marquee>
      </Reveal>
    </section>
  );
}

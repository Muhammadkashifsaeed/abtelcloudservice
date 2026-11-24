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
    color: "text-white hover:text-[var(--brand-lime)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
    starColor: "text-[var(--brand-lime)]",
    outlined: false,
  },
  {
    text: "Mobile Apps",
    color:
      "text-transparent [-webkit-text-stroke:2px_#FF5E14] hover:text-white drop-shadow-[0_2px_10px_rgba(255, 94, 20,0.4)]",
    starColor: "text-[var(--brand-lime)]",
    outlined: true,
  },
  {
    text: "Digital Marketing",
    color: "text-[var(--brand-lime)] hover:text-white drop-shadow-[0_2px_10px_rgba(255, 94, 20,0.5)]",
    starColor: "text-[var(--brand-lime)]",
    outlined: false,
  },
  {
    text: "E-Commerce",
    color:
      "text-transparent [-webkit-text-stroke:2px_#FFFFFF] hover:[-webkit-text-stroke:2px_#FF5E14] drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]",
    starColor: "text-[var(--brand-lime)]",
    outlined: true,
  },
  {
    text: "UI/UX Design",
    color: "text-white hover:text-[var(--brand-lime)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
    starColor: "text-[var(--brand-lime)]",
    outlined: false,
  },
  {
    text: "API Integrations",
    color:
      "text-transparent [-webkit-text-stroke:2px_#FF5E14] hover:text-white drop-shadow-[0_2px_10px_rgba(255, 94, 20,0.4)]",
    starColor: "text-[var(--brand-lime)]",
    outlined: true,
  },
  {
    text: "Startup Growth",
    color: "text-[var(--brand-lime)] hover:text-white drop-shadow-[0_2px_10px_rgba(255, 94, 20,0.5)]",
    starColor: "text-[var(--brand-lime)]",
    outlined: false,
  },
];

function PremiumAsterisk({ starColor }: { starColor?: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center select-none"
      aria-hidden="true"
    >
      <div className="group/star relative flex h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[var(--brand-lime)] hover:bg-[var(--brand-lime)]/20">
        <svg
          viewBox="0 0 24 24"
          className={`relative h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5 ${
            starColor || "text-[var(--brand-lime)]"
          } drop-shadow-[0_0_8px_rgba(255, 94, 20,0.5)] transition-transform duration-500 ease-out group-hover/star:rotate-90`}
          fill="currentColor"
        >
          <rect x="10" y="2" width="4" height="20" rx="2" />
          <rect x="2" y="10" width="20" height="4" rx="2" />
          <rect
            x="10"
            y="2"
            width="4"
            height="20"
            rx="2"
            transform="rotate(45 12 12)"
          />
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
      className="relative w-full overflow-hidden border-y border-white/10 bg-[#0B0E14] py-6 sm:py-7 text-white shadow-2xl select-none"
    >
      {/* Subtle brand lime ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255, 94, 20,0.06),transparent_70%)]"
      />
      {/* Edge gradient vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-transparent to-[#0B0E14]"
      />

      <Reveal variant="fade-up" duration={0.8}>
        <Marquee speed="normal" reverse={false} className="py-1">
          <div className="flex shrink-0 items-center gap-8 sm:gap-12">
            {SERVICES_MARQUEE.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
                <span
                  className={`text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 ${item.color}`}
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

"use client";

import React from "react";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

const TECH_KEYWORDS = [
  {
    text: "Next.js 15",
    color: "text-white hover:text-slate-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
    dotColor: "bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]",
    outlined: false,
  },
  {
    text: "Python",
    color:
      "text-transparent [-webkit-text-stroke:2px_#F59E0B] hover:[-webkit-text-stroke:2px_#FBBF24] drop-shadow-[0_2px_10px_rgba(245,158,11,0.35)]",
    dotColor: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]",
    outlined: true,
  },
  {
    text: "Amazon AWS",
    color: "text-[#FB923C] hover:text-[#FDBA74] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
    dotColor: "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.7)]",
    outlined: false,
  },
  {
    text: "MySQL 8.0",
    color:
      "text-transparent [-webkit-text-stroke:2px_#34D399] hover:[-webkit-text-stroke:2px_#6EE7B7] drop-shadow-[0_2px_10px_rgba(52,211,153,0.35)]",
    dotColor: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    outlined: true,
  },
  {
    text: "React & Native",
    color: "text-[#9CEE69] hover:text-white drop-shadow-[0_2px_10px_rgba(156, 238, 105,0.35)]",
    dotColor: "bg-[#9CEE69] shadow-[0_0_10px_rgba(156, 238, 105,0.7)]",
    outlined: false,
  },
  {
    text: "PHP & Laravel",
    color:
      "text-transparent [-webkit-text-stroke:2px_#FB7185] hover:[-webkit-text-stroke:2px_#FDA4AF] drop-shadow-[0_2px_10px_rgba(251,113,133,0.35)]",
    dotColor: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.7)]",
    outlined: true,
  },
  {
    text: "Flutter Cross-Platform",
    color: "text-[var(--brand-lime)] hover:text-white drop-shadow-[0_2px_10px_rgba(156, 238, 105,0.35)]",
    dotColor: "bg-[var(--brand-lime)] shadow-[0_0_10px_rgba(156, 238, 105,0.7)]",
    outlined: false,
  },
  {
    text: "Shopify Plus",
    color:
      "text-transparent [-webkit-text-stroke:2px_#34D399] hover:[-webkit-text-stroke:2px_#6EE7B7] drop-shadow-[0_2px_10px_rgba(52,211,153,0.35)]",
    dotColor: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    outlined: true,
  },
  {
    text: "REST & GraphQL",
    color: "text-[#E879F9] hover:text-[#F0ABFC] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
    dotColor: "bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.7)]",
    outlined: false,
  },
  {
    text: "WordPress Headless",
    color:
      "text-transparent [-webkit-text-stroke:2px_#818CF8] hover:[-webkit-text-stroke:2px_#A5B4FC] drop-shadow-[0_2px_10px_rgba(129,140,248,0.35)]",
    dotColor: "bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.7)]",
    outlined: true,
  },
  {
    text: "Figma UI/UX Systems",
    color: "text-[#C084FC] hover:text-[#DDD6FE] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
    dotColor: "bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.7)]",
    outlined: false,
  },
];

export function TechMarqueeStripSection() {
  return (
    <section
      aria-label="Technologies Marquee Strip"
      className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#0A0D14] py-6 sm:py-7 text-white shadow-[0_10px_32px_rgba(0,0,0,0.5)] select-none"
    >
      {/* Subtle brand lime ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(156, 238, 105,0.06),transparent_70%)]"
      />
      {/* Edge gradient vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0D14]/90 via-transparent to-[#0A0D14]/90"
      />

      <Reveal variant="fade-up" duration={0.8}>
        <Marquee speed="normal" reverse={true} className="py-1">
          <div className="flex shrink-0 items-center gap-8 sm:gap-12">
            {TECH_KEYWORDS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
                <span
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${item.color}`}
                >
                  {item.text}
                </span>
                <span
                  className={`flex h-3.5 w-3.5 rounded-full transition-transform duration-300 hover:scale-125 ${item.dotColor}`}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </Reveal>
    </section>
  );
}

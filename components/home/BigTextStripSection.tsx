"use client";

import React from "react";
import {
  Code2,
  Smartphone,
  Megaphone,
  ShoppingCart,
  Palette,
  Network,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

interface ServiceMarqueeItem {
  text: string;
  color: string;
  icon: LucideIcon;
}

const SERVICES_MARQUEE: ServiceMarqueeItem[] = [
  {
    text: "Web Development",
    color: "text-white hover:text-[var(--brand-lime)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
    icon: Code2,
  },
  {
    text: "Mobile Apps",
    color:
      "text-transparent [-webkit-text-stroke:2px_#0E4739] hover:text-white drop-shadow-[0_2px_10px_rgba(14, 71, 57,0.4)]",
    icon: Smartphone,
  },
  {
    text: "Digital Marketing",
    color: "text-[var(--brand-lime)] hover:text-white drop-shadow-[0_2px_10px_rgba(14, 71, 57,0.5)]",
    icon: Megaphone,
  },
  {
    text: "E-Commerce",
    color:
      "text-transparent [-webkit-text-stroke:2px_#FFFFFF] hover:[-webkit-text-stroke:2px_#0E4739] drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]",
    icon: ShoppingCart,
  },
  {
    text: "UI/UX Design",
    color: "text-white hover:text-[var(--brand-lime)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
    icon: Palette,
  },
  {
    text: "API Integrations",
    color:
      "text-transparent [-webkit-text-stroke:2px_#0E4739] hover:text-white drop-shadow-[0_2px_10px_rgba(14, 71, 57,0.4)]",
    icon: Network,
  },
  {
    text: "Startup Growth",
    color: "text-[var(--brand-lime)] hover:text-white drop-shadow-[0_2px_10px_rgba(14, 71, 57,0.5)]",
    icon: TrendingUp,
  },
];

function ServiceIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <Icon
      aria-hidden="true"
      className="h-7 w-7 shrink-0 text-[var(--brand-lime)] drop-shadow-[0_0_10px_rgba(14,71,57,0.55)] transition-transform duration-500 ease-out group-hover:scale-110 sm:h-8 sm:w-8"
    />
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14, 71, 57,0.06),transparent_70%)]"
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
              <div
                key={idx}
                className="group flex shrink-0 items-center gap-3 sm:gap-4"
              >
                <ServiceIcon icon={item.icon} />
                <span
                  className={`text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 ${item.color}`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </Reveal>
    </section>
  );
}
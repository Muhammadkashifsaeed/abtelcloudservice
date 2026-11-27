"use client";

import React from "react";
import {
  Triangle,
  Code2,
  Cloud,
  Database,
  Atom,
  Braces,
  Smartphone,
  ShoppingBag,
  Network,
  Globe,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/motion/Marquee";

interface TechItem {
  text: string;
  icon: LucideIcon;
}

const TECH_KEYWORDS: TechItem[] = [
  { text: "Next.js 15", icon: Triangle },
  { text: "Python", icon: Code2 },
  { text: "Amazon AWS", icon: Cloud },
  { text: "MySQL 8.0", icon: Database },
  { text: "React & Native", icon: Atom },
  { text: "PHP & Laravel", icon: Braces },
  { text: "Flutter Cross-Platform", icon: Smartphone },
  { text: "Shopify Plus", icon: ShoppingBag },
  { text: "REST & GraphQL", icon: Network },
  { text: "WordPress Headless", icon: Globe },
  { text: "Figma UI/UX Systems", icon: Palette },
];

export function TechMarqueeStripSection() {
  return (
    <section
      aria-label="Technologies Marquee Strip"
      className="relative w-full overflow-hidden border-y border-slate-200/90 bg-slate-100 py-3 sm:py-4 text-slate-900"
    >
      <Marquee speed="normal" reverse={false} className="py-1">
        <div className="flex shrink-0 items-center gap-6 sm:gap-8">
          {TECH_KEYWORDS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-2 shadow-xs transition-all hover:scale-[1.02] hover:border-[#E11D48]/40"
              >
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-[#E11D48] drop-shadow-[0_0_8px_rgba(225,29,72,0.35)] transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <span className="text-sm font-bold text-[#0B0E14] tracking-wide">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
}
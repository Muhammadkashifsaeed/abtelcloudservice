"use client";

import React from "react";
import { Marquee } from "@/components/motion/Marquee";
import {
  Code2,
  Network,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGooglecloud,
  SiDocker,
  SiWordpress,
  SiShopify,
  SiFlutter,
  SiTailwindcss,
  SiPostgresql,
  SiFigma,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

interface ServiceChip {
  index: string;
  name: string;
  icon: React.ElementType;
}

const SIX_SERVICES_MARQUEE: ServiceChip[] = [
  { index: "01", name: "Web Development", icon: Code2 },
  { index: "02", name: "Mobile App Development", icon: Smartphone },
  { index: "03", name: "API Integrations", icon: Network },
  { index: "04", name: "E-Commerce Solutions", icon: ShoppingBag },
  { index: "05", name: "Digital Marketplace", icon: Store },
  { index: "06", name: "UI/UX Design", icon: Palette },
];

interface TechChip {
  name: string;
  category: string;
  icon: React.ElementType;
  iconColor?: string;
}

const TECHNOLOGIES: TechChip[] = [
  { name: "Python", category: "APIs & AI (65%)", icon: SiPython, iconColor: "text-[#3776AB]" },
  { name: "PHP & Laravel", category: "MVC (81%)", icon: SiLaravel, iconColor: "text-[#FF2D20]" },
  { name: "CodeIgniter", category: "Framework (81%)", icon: SiCodeigniter, iconColor: "text-[#EE4326]" },
  { name: "MySQL", category: "Relational (100%)", icon: SiMysql, iconColor: "text-[#00758F]" },
  { name: "AWS Cloud", category: "Cloud (65%)", icon: FaAws, iconColor: "text-[#FF9900]" },
  { name: "WordPress", category: "CMS & Headless (81%)", icon: SiWordpress, iconColor: "text-[#21759B]" },
  { name: "Graphics Design", category: "UI/UX & Figma (94%)", icon: SiFigma, iconColor: "text-[#F24E1E]" },
  { name: "Next.js 16", category: "Full-Stack Web", icon: SiNextdotjs, iconColor: "text-slate-900" },
  { name: "React 19", category: "UI Architecture", icon: SiReact, iconColor: "text-[var(--brand-lime)]" },
  { name: "TypeScript", category: "Type-Safe", icon: SiTypescript, iconColor: "text-[#3178C6]" },
  { name: "Node.js", category: "Microservices", icon: SiNodedotjs, iconColor: "text-[#5FA04E]" },
  { name: "Flutter", category: "iOS & Android", icon: SiFlutter, iconColor: "text-[#02569B]" },
  { name: "Shopify Plus", category: "E-Commerce", icon: SiShopify, iconColor: "text-[#96BF48]" },
  { name: "Docker", category: "DevOps", icon: SiDocker, iconColor: "text-[#2496ED]" },
  { name: "Google Cloud", category: "Cloud & AI", icon: SiGooglecloud, iconColor: "text-[#4285F4]" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, iconColor: "text-[#4169E1]" },
  { name: "Tailwind CSS", category: "Modern Styling", icon: SiTailwindcss, iconColor: "text-[#06B6D4]" },
];

export function MarqueeSection() {
  return (
    <section
      aria-label="Core Capabilities and Technology Ecosystem"
      className="relative w-full overflow-hidden section-light bg-gradient-to-r from-[#F4F8FC] via-white to-[#F4F8FC] py-8 sm:py-10 border-y border-[var(--border-light)]"
    >
      {/* Track 1: The 6 Core Services Capsules (Moving Left) */}
      <div className="py-1.5">
        <Marquee speed="normal" reverse={false} pauseOnHover={true}>
          {SIX_SERVICES_MARQUEE.map((svc) => {
            const IconComponent = svc.icon;
            return (
              <div
                key={svc.name}
                className="mx-2.5 flex items-center gap-3 rounded-full border border-slate-200/90 bg-white px-5 sm:px-6 py-2.5 sm:py-3 shadow-xs transition-all duration-200 hover:border-[var(--brand-royal)] hover:shadow-md hover:-translate-y-0.5 select-none"
              >
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black text-[var(--brand-lime)] shadow-xs">
                  <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="text-sm sm:text-[15px] font-extrabold uppercase tracking-wider text-[var(--text-dark)] whitespace-nowrap">
                  {svc.name}
                </span>
                <span className="rounded-full bg-[var(--primary-light)] px-2.5 py-0.5 text-[10.5px] font-mono font-bold text-[var(--brand-royal)] border border-[var(--brand-royal)]/20">
                  {svc.index}
                </span>
              </div>
            );
          })}
        </Marquee>
      </div>

      {/* Track 2: Harmonious Balanced Technology Chips (Moving Opposite: Right) */}
      <div className="mt-3.5 py-1.5">
        <Marquee speed="normal" reverse={true} pauseOnHover={true}>
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="mx-2.5 flex items-center gap-3 rounded-full border border-slate-200/90 bg-white px-5 sm:px-6 py-2.5 sm:py-3 shadow-xs transition-all duration-200 hover:border-[var(--brand-sky)] hover:shadow-md hover:-translate-y-0.5 select-none"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[var(--surface-muted)] text-sm shadow-xs">
                <tech.icon className={`h-4 w-4 ${tech.iconColor || "text-[var(--brand-royal)]"}`} />
              </div>
              <span className="text-sm sm:text-[15px] font-bold text-[var(--text-dark)] whitespace-nowrap">
                {tech.name}
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-slate-600 border border-slate-200">
                {tech.category}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

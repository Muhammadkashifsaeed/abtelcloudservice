"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Network,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CORE_SERVICES } from "@/data/services";

// Distinct colorful theme configurations for each of the 6 core services
interface ServiceColorConfig {
  icon: typeof Code2;
  gradientBadge: string;
  glowShadow: string;
  hoverOverlay: string;
  accentBorder: string;
  accentTag: string;
  underlineColor: string;
  arrowHoverBg: string;
  arrowHoverText: string;
}

const SERVICE_COLOR_THEMES: Record<string, ServiceColorConfig> = {
  "web-development": {
    icon: Code2,
    gradientBadge: "from-[var(--brand-lime)] to-emerald-400",
    glowShadow: "shadow-[0_8px_24px_rgba(14, 71, 57,0.4)]",
    hoverOverlay: "from-black/90 via-slate-950/50 to-transparent",
    accentBorder: "group-hover:border-[var(--brand-lime)]",
    accentTag: "bg-[var(--brand-lime)]/20 text-black border-[var(--brand-lime)]/40",
    underlineColor: "bg-[var(--brand-lime)]",
    arrowHoverBg: "group-hover:bg-[var(--brand-lime)]",
    arrowHoverText: "group-hover:text-black",
  },
  "mobile-app-development": {
    icon: Smartphone,
    gradientBadge: "from-violet-600 via-purple-600 to-fuchsia-500",
    glowShadow: "shadow-[0_8px_24px_rgba(168,85,247,0.4)]",
    hoverOverlay: "from-[#071428]/90 via-purple-950/50 to-transparent",
    accentBorder: "group-hover:border-purple-400/60",
    accentTag: "bg-purple-50 text-purple-700 border-purple-200/80",
    underlineColor: "bg-gradient-to-r from-purple-500 to-fuchsia-400",
    arrowHoverBg: "group-hover:bg-purple-500",
    arrowHoverText: "group-hover:text-white",
  },
  "api-integrations": {
    icon: Network,
    gradientBadge: "from-emerald-600 via-teal-500 to-teal-300",
    glowShadow: "shadow-[0_8px_24px_rgba(16,185,129,0.4)]",
    hoverOverlay: "from-[#071428]/90 via-emerald-950/50 to-transparent",
    accentBorder: "group-hover:border-emerald-400/60",
    accentTag: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    underlineColor: "bg-gradient-to-r from-emerald-500 to-teal-400",
    arrowHoverBg: "group-hover:bg-emerald-400",
    arrowHoverText: "group-hover:text-[#071428]",
  },
  "e-commerce": {
    icon: ShoppingBag,
    gradientBadge: "from-amber-500 via-orange-500 to-rose-500",
    glowShadow: "shadow-[0_8px_24px_rgba(249,115,22,0.4)]",
    hoverOverlay: "from-[#071428]/90 via-orange-950/50 to-transparent",
    accentBorder: "group-hover:border-orange-400/60",
    accentTag: "bg-amber-50 text-amber-800 border-amber-200/80",
    underlineColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    arrowHoverBg: "group-hover:bg-orange-400",
    arrowHoverText: "group-hover:text-[#071428]",
  },
  "digital-marketplace": {
    icon: Store,
    gradientBadge: "from-rose-600 via-pink-600 to-red-500",
    glowShadow: "shadow-[0_8px_24px_rgba(244,63,94,0.4)]",
    hoverOverlay: "from-[#071428]/90 via-rose-950/50 to-transparent",
    accentBorder: "group-hover:border-rose-400/60",
    accentTag: "bg-rose-50 text-rose-700 border-rose-200/80",
    underlineColor: "bg-gradient-to-r from-rose-500 to-pink-500",
    arrowHoverBg: "group-hover:bg-rose-500",
    arrowHoverText: "group-hover:text-white",
  },
  "ui-ux-design": {
    icon: Palette,
    gradientBadge: "from-rose-600 via-red-500 to-rose-400",
    glowShadow: "shadow-[0_8px_24px_rgba(225,29,72,0.4)]",
    hoverOverlay: "from-[#071428]/90 via-rose-950/50 to-transparent",
    accentBorder: "group-hover:border-rose-400/60",
    accentTag: "bg-rose-50 text-rose-700 border-rose-200/80",
    underlineColor: "bg-gradient-to-r from-rose-500 to-red-400",
    arrowHoverBg: "group-hover:bg-rose-500",
    arrowHoverText: "group-hover:text-white",
  },
};

export function ServicesCardsSection() {
  return (
    <section
      aria-label="Our Core Services"
      className="relative w-full section-light bg-[var(--bg-light)] py-20 sm:py-24 lg:py-28 text-[var(--text-dark)]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Reveal variant="fade-down">
            <span className="eyebrow-premium">
              Our Services
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1} className="mt-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-5xl leading-[1.18]">
              Reliable Technology Solutions,{" "}
              <span
                className="relative inline-block"
                style={{
                  fontFamily: "var(--font-serif, 'Georgia', serif)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #E11D48, #fb7185)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Delivered With Expertise
              </span>.
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.18} className="mt-4">
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              We specialize in 6 core engineering disciplines, delivering scalable cloud software architectures, rapid sprint velocity, and continuous technical support.
            </p>
          </Reveal>
        </div>

        {/* 3x2 Grid of 6 Distinctly Colored Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, index) => {
            const theme =
              SERVICE_COLOR_THEMES[service.id] || SERVICE_COLOR_THEMES["web-development"];
            const Icon = theme.icon;

            return (
              <Reveal
                key={service.id}
                variant="fade-up"
                delay={0.08 * (index + 1)}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[var(--border-light)] bg-white shadow-[0_8px_24px_rgba(11,31,58,0.06)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(11,31,58,0.14)] ${theme.accentBorder}`}
                >
                  {/* Top Image Container with zoom & distinct gradient overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Service-Specific Gradient Overlay on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${theme.hoverOverlay} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    {/* Service Index Watermark */}
                    <span className="absolute top-4 left-4 z-10 rounded-lg bg-[#071428]/80 px-2.5 py-1 text-xs font-mono font-bold text-white shadow-xs backdrop-blur-md">
                      {service.index}
                    </span>

                    {/* Optional Badge */}
                    {service.badge && (
                      <span
                        className={`absolute top-4 right-4 z-10 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md ${theme.accentTag}`}
                      >
                        {service.badge}
                      </span>
                    )}

                    {/* Rotating Arrow Circle on Hover */}
                    <div
                      className={`absolute right-4 bottom-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--text-dark)] shadow-md transition-all duration-300 group-hover:rotate-45 ${theme.arrowHoverBg} ${theme.arrowHoverText}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Overlapping Gradient Icon Badge with Colorful Glow */}
                  <div className="relative px-6">
                    <div
                      className={`-mt-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradientBadge} text-white ${theme.glowShadow} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-6 pt-3">
                    {/* Title with Slide-in Underline on Hover */}
                    <div className="relative inline-block">
                      <h3 className="text-xl font-bold text-[var(--text-dark)] transition-colors group-hover:text-black">
                        {service.title}
                      </h3>
                      <div
                        className={`h-[2.5px] w-0 ${theme.underlineColor} transition-all duration-300 group-hover:w-full mt-1.5 rounded-full`}
                      />
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Deliverables Bullet Points */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2 flex-1">
                      {service.deliverables.slice(0, 3).map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${theme.underlineColor}`}
                          />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore Link */}
                    <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] transition-colors group-hover:text-black">
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA Pill in Vibrant Multi-Gradient */}
        <Reveal variant="fade-up" delay={0.3} className="mt-14 text-center">
          <Link
            href="/services"
            className="btn-sheen group inline-flex h-[52px] items-center justify-center overflow-hidden rounded-lg bg-[var(--brand-lime)] px-9 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.03] hover:bg-[var(--brand-lime-hover)] hover:shadow-sm active:scale-95 ring-1 ring-inset ring-white/20"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <span>View All 6 Core Services</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

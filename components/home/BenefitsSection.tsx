"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Headphones,
  Lock,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";
import { BENEFITS_STATS, CORE_TECH_SKILLS } from "@/data/stats";

const FEATURE_ROWS = [
  {
    icon: Zap,
    title: "Innovative Solutions",
    description:
      "Modern cloud-native microservices, Next.js App Router, and scalable relational schemas built for high user load.",
    gradient: "from-[var(--brand-lime)] to-emerald-400",
    glow: "shadow-[0_0_16px_rgba(14, 71, 57,0.25)]",
    textHover: "group-hover:text-[var(--brand-lime)]",
  },
  {
    icon: Lock,
    title: "Data Protection & Security",
    description:
      "Enterprise security practices, PCI-DSS compliance, zero-trust permissions, and 100% intellectual property ownership.",
    gradient: "from-emerald-400 via-teal-400 to-green-500",
    glow: "shadow-[0_0_16px_rgba(16,185,129,0.25)]",
    textHover: "group-hover:text-emerald-300",
  },
  {
    icon: Headphones,
    title: "Expert Support & SLA",
    description:
      "Direct senior engineering access, 24/7 proactive monitoring, and predictable agile two-week iteration sprints.",
    gradient: "from-amber-400 via-orange-400 to-rose-400",
    glow: "shadow-[0_0_16px_rgba(249,115,22,0.25)]",
    textHover: "group-hover:text-amber-300",
  },
];

// Vibrant, high-contrast Electric Lime styling for thicker progress bars
const PROGRESS_BAR_GRADIENTS = [
  {
    bar: "from-[#FF7A38] via-[#0E4739] to-[#135C4A]",
    glow: "shadow-[0_0_16px_rgba(14, 71, 57,0.75)]",
  },
  {
    bar: "from-[#FFA066] via-[#0E4739] to-[#135C4A]",
    glow: "shadow-[0_0_16px_rgba(14, 71, 57,0.75)]",
  },
  {
    bar: "from-[#0E4739] via-[#FF7A38] to-[#135C4A]",
    glow: "shadow-[0_0_16px_rgba(14, 71, 57,0.75)]",
  },
];

// Distinct colorful styling for core tech skill chips
const SKILL_COLOR_THEMES = [
  {
    border: "border-[var(--brand-lime)]/30 hover:border-[var(--brand-lime)]/70",
    bg: "bg-[var(--brand-lime)]/10",
    text: "text-white",
    number: "text-[var(--brand-lime)]",
  },
  {
    border: "border-white/20 hover:border-white/50",
    bg: "bg-white/5",
    text: "text-slate-200",
    number: "text-white",
  },
  {
    border: "border-emerald-400/30 hover:border-emerald-400/70",
    bg: "bg-emerald-500/10",
    text: "text-emerald-200",
    number: "text-emerald-300",
  },
  {
    border: "border-amber-400/30 hover:border-amber-400/70",
    bg: "bg-amber-500/10",
    text: "text-amber-200",
    number: "text-amber-300",
  },
  {
    border: "border-white/20 hover:border-white/50",
    bg: "bg-white/5",
    text: "text-slate-200",
    number: "text-white",
  },
  {
    border: "border-[var(--brand-lime)]/30 hover:border-[var(--brand-lime)]/70",
    bg: "bg-[var(--brand-lime)]/10",
    text: "text-white",
    number: "text-[var(--brand-lime)]",
  },
];

export function BenefitsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="What Makes Our Solutions Different"
      className="relative w-full bg-white py-20 sm:py-24 lg:py-28 text-[#0B0E14] overflow-hidden border-t border-slate-200/80"
    >
      {/* Background Subtle Ambient Lights */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[var(--brand-lime)]/[0.05] blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-emerald-500/[0.04] blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Eyebrow, H2, Paragraph, 3 Icon Feature Rows & CTA */}
          <div className="flex flex-col items-start lg:col-span-6">
            <Reveal variant="fade-down">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-800 shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-black" />
                <span>Our Benefits</span>
              </div>
            </Reveal>

            <Reveal variant="fade-left" delay={0.1} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[42px] leading-[1.16]">
                What Makes Our Solutions{" "}
                <span className="relative inline-block text-[var(--brand-lime)]">
                  Different
                  <CurvedUnderline color="#0E4739" />
                </span>.
              </h2>
            </Reveal>

            <Reveal variant="fade-left" delay={0.16} className="mt-4">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We combine architectural rigor with practical business velocity. Every software system is engineered with production-ready standards, transparent metrics, and dedicated technical support.
              </p>
            </Reveal>

            {/* 3 Distinctly Colored Feature Rows */}
            <div className="mt-8 flex flex-col gap-6 w-full">
              {FEATURE_ROWS.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <Reveal key={idx} variant="fade-left" delay={0.2 + idx * 0.08}>
                    <div className="flex items-start gap-4 group rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:border-black hover:bg-slate-50">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${row.gradient} text-black font-bold ${row.glow} transition-all duration-300 group-hover:scale-105`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3
                          className="text-base font-bold text-[#0B0E14] transition-colors group-hover:text-black"
                        >
                          {row.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {row.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* "Explore More" Button in Electric Lime Style */}
            <Reveal variant="fade-left" delay={0.45} className="mt-9">
              <Link
                href="/about"
                className="btn-sheen group inline-flex h-[52px] items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] px-8 text-sm font-black text-white shadow-[0_6px_24px_rgba(14, 71, 57,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-[var(--brand-lime-hover)] hover:shadow-[0_10px_32px_rgba(14, 71, 57,0.5)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore More Benefits</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Image with Animated Progress Bars & Core Technical Skills (Fade Right) */}
          <div className="relative lg:col-span-6">
            <Reveal variant="fade-right" duration={0.75}>
              <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
                {/* Feature Image with curved corners */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 mb-6">
                  <Image
                    src="/images/software-programer.jpg"
                    alt="Senior software engineer designing enterprise cloud infrastructure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900 shadow-xs backdrop-blur-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Verified Engineering Performance</span>
                  </div>
                </div>

                {/* 3 Distinctly Colored Animated Progress Bars */}
                <div className="space-y-5">
                  {BENEFITS_STATS.map((stat, idx) => {
                    const barTheme =
                      PROGRESS_BAR_GRADIENTS[idx % PROGRESS_BAR_GRADIENTS.length];

                    return (
                      <div key={idx} className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                          <span className="text-[#0B0E14] flex items-center gap-1.5">
                            <span>{stat.label}</span>
                            {stat.isPlaceholder && (
                              <span
                                title="Configured metric target"
                                className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-slate-600 uppercase tracking-wider"
                              >
                                SLA Target
                              </span>
                            )}
                          </span>
                          <span className="font-mono font-bold text-black">
                            {stat.percentage}%
                          </span>
                        </div>

                        {/* Progress Track (Thicker & Enhanced Color) */}
                        <div className="h-3.5 sm:h-4 w-full overflow-hidden rounded-full bg-slate-100 p-0.5 sm:p-1 border border-slate-200/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${barTheme.bar} ${barTheme.glow} transition-all duration-1000 ease-out`}
                            style={{
                              width: inView ? `${stat.percentage}%` : "0%",
                              transitionDelay: `${idx * 150}ms`,
                            }}
                          />
                        </div>
                        <p className="text-[11px] text-slate-500">{stat.highlightText}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Languages & Frameworks Chips in Clean Badges */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <Cpu className="h-3.5 w-3.5 text-black" />
                      Core Technology Stack
                    </span>
                    <span className="text-[11px] text-emerald-600 font-semibold">
                      Production Verified
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {CORE_TECH_SKILLS.map((skill, sIdx) => {
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition-colors hover:border-black"
                        >
                          <span className="text-[11.5px] font-medium text-slate-800 truncate pr-1">
                            {skill.name.split(" ")[0]}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-black shrink-0">
                            {skill.percentage}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

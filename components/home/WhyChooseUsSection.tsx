"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

// Configurable Placeholders (flagged for client replacement)
export const WHY_CHOOSE_METRICS = [
  { value: 150, suffix: "+", label: "Worldwide Clients", note: "Growing global footprint" },
  { value: 96, suffix: "%", label: "Client Retention Rate", note: "Long-term engineering trust" },
  { value: 10, suffix: "+", label: "Years Experience", note: "Proven industry track record" },
  { value: 100, suffix: "%", label: "Code Ownership", note: "Full IP transfer guaranteed" },
];

export const WHY_CHOOSE_FEATURES = [
  {
    title: "You Own The Code",
    description: "Complete IP ownership and repository rights transfer from sprint one. No proprietary lock-in, ever.",
    imageSrc: "/images/You%20Own%20The%20Code.png",
    highlight: "100% IP Transfer",
  },
  {
    title: "Top 5% IT Talent",
    description: "Rigorous vetting ensures only senior software engineers and cloud architects join your build.",
    imageSrc: "/images/top-5-percent-it-talent.png",
    highlight: "Senior Staff Only",
  },
  {
    title: "Transparent Collaboration",
    description: "Direct Slack/Teams integration, daily standups, and full real-time sprint visibility without bureaucracy.",
    imageSrc: "/images/Open%20communication.png",
    highlight: "Direct Slack Access",
  },
  {
    title: "Rapid Software Delivery",
    description: "Agile velocity with scalable engineering squads designed for tight production deadlines and clean code.",
    imageSrc: "/images/Rapid%20Software%20Delivery.png",
    highlight: "Bi-Weekly Sprints",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      aria-label="Why Choose Abtel Cloud Services"
      className="relative w-full section-dark bg-gradient-to-b from-[#071428] via-[#0B1F3A] to-[#071428] pt-20 pb-28 sm:pt-24 sm:pb-32 lg:pt-28 lg:pb-36 text-[var(--text-on-dark)] overflow-hidden border-t border-[var(--brand-cyan)]/20"
    >
      {/* Large Outlined Background Watermark Word: "ENGINEERING" */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[15vw] font-black uppercase tracking-widest text-transparent opacity-30 [-webkit-text-stroke:1.5px_rgba(42,103,174,0.25)]"
      >
        ENGINEERING
      </div>

      {/* Background Decorative Tech Grid & Glow Meshes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[var(--brand-royal)]/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[var(--brand-cyan)]/15 blur-[130px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal variant="fade-down">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-cyan)]/35 bg-[var(--brand-cyan)]/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-cyan)] backdrop-blur-md shadow-[0_2px_14px_rgba(34,199,242,0.2)]">
              <Sparkles className="h-3 w-3" />
              <span>Why Partner With Us</span>
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1} className="mt-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[46px] leading-[1.12]">
              Engineering Accountability,{" "}
              <span className="heading-curved-underline text-[var(--brand-cyan)]">
                Zero Excuses
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.16} className="mt-4">
            <p className="text-base sm:text-lg text-slate-300">
              We eliminate the friction and uncertainty of custom software development with direct technical communication, sprint velocity, and full IP transfer.
            </p>
          </Reveal>
        </div>

        {/* Animated Counter Stats Bar */}
        <div className="mt-16 rounded-[28px] border border-white/15 bg-[#0B1F3A]/90 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {WHY_CHOOSE_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                className={`flex flex-col items-center text-center ${idx > 0 ? "pt-6 md:pt-0" : ""}`}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </div>
                <p className="mt-2 text-sm sm:text-base font-bold text-[var(--brand-cyan)]">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-xs text-slate-300">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Feature Blocks */}
        <StaggerGroup
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_CHOOSE_FEATURES.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="group relative flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-7 transition-all duration-300 hover:border-[var(--brand-cyan)]/50 hover:bg-white/[0.07] hover:shadow-[0_20px_42px_rgba(34,199,242,0.18)] hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-royal)] to-[var(--brand-cyan)] p-2.5 text-white shadow-md shadow-blue-950/40 transition-transform duration-300 group-hover:scale-108 group-hover:rotate-3">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="h-8 w-auto object-contain brightness-0 invert"
                      />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-[var(--brand-cyan)]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                  <span className="text-[var(--brand-cyan)]">{item.highlight}</span>
                  <CheckCircle2 className="h-4 w-4 text-[var(--brand-cyan)]" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Curved / Diagonal Section Divider into Next Light Section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 overflow-hidden leading-none z-10"
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 lg:h-18 fill-[var(--bg-light)] text-[var(--bg-light)]"
        >
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

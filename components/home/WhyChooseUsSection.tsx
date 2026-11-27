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
      className="relative w-full bg-[#F8FAFC] pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32 text-[#0B0E14] overflow-hidden border-t border-slate-200/80"
    >
      {/* Large Outlined Background Watermark Word: "ENGINEERING" */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[15vw] font-black uppercase tracking-widest text-transparent opacity-5 [-webkit-text-stroke:1.5px_rgba(15,23,42,0.18)]"
      >
        ENGINEERING
      </div>

      {/* Background Decorative Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[var(--brand-lime)]/[0.05] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[var(--brand-lime)]/[0.04] blur-[130px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal variant="fade-down">
            <span className="eyebrow-premium">
              Why Partner With Us
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1} className="mt-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[46px] leading-[1.12]">
              Engineering Accountability,{" "}
              <span className="relative inline-block" style={{ fontFamily: "var(--font-serif,'Georgia',serif)", fontStyle: "italic", fontWeight: 700, background: "linear-gradient(135deg,#E11D48,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Zero Excuses
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.16} className="mt-4">
            <p className="text-base sm:text-lg text-slate-600">
              We eliminate the friction and uncertainty of custom software development with direct technical communication, sprint velocity, and full IP transfer.
            </p>
          </Reveal>
        </div>

        {/* Animated Counter Stats Bar */}
        <div className="mt-16 rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {WHY_CHOOSE_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                className={`flex flex-col items-center text-center ${idx > 0 ? "pt-6 md:pt-0" : ""}`}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B0E14] font-heading">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </div>
                <p className="mt-2 text-sm sm:text-base font-bold text-black">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Feature Blocks (Clean Light Cards) */}
        <StaggerGroup
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_CHOOSE_FEATURES.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="group relative flex h-full flex-col justify-between rounded-[24px] border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-black hover:shadow-xl hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 p-2.5 text-white shadow-xs transition-transform duration-300 group-hover:scale-108 group-hover:border-black group-hover:bg-[var(--brand-lime)]/20">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-black transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#0B0E14] transition-colors group-hover:text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="text-black font-bold">{item.highlight}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

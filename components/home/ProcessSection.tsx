"use client";

import React, { useRef } from "react";
import { CheckCircle2, Code2, Compass, Layers, PenTool, Rocket, Search, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: typeof Search;
  tag: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Step 01",
    number: "01",
    title: "Discover & Blueprint",
    description: "Deep dive into your business logic, technical requirements, scalability targets, and cloud architecture roadmap.",
    deliverables: ["Technical Scope Document", "System Architecture Blueprint", "Sprint Velocity Roadmap"],
    icon: Search,
    tag: "Discovery & Audit",
  },
  {
    step: "Step 02",
    number: "02",
    title: "Design & Prototyping",
    description: "Creating interactive wireframes, human-centric UX flows, and reusable design systems in Figma before writing code.",
    deliverables: ["Figma Interactive Prototype", "Design System UI Kit", "Usability Flow Validation"],
    icon: PenTool,
    tag: "Figma UX Design",
  },
  {
    step: "Step 03",
    number: "03",
    title: "Agile Engineering",
    description: "Writing clean, type-safe code with Next.js, modern backends, unit tests, and continuous peer-reviewed pull requests.",
    deliverables: ["Bi-Weekly Sprint Demos", "Live Staging Environment", "Clean Audited Repository Code"],
    icon: Code2,
    tag: "Full-Stack Sprints",
  },
  {
    step: "Step 04",
    number: "04",
    title: "Deploy & Scale",
    description: "Production launch with automated CI/CD pipelines, autoscaling cloud infrastructure, and 24/7 telemetry monitoring.",
    deliverables: ["Zero-Downtime Deployment", "Automated Cloud Autoscaling", "Post-Launch SLA Support"],
    icon: Rocket,
    tag: "Production Launch",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={containerRef}
      aria-label="How We Work - Engineering Process"
      className="relative w-full section-light bg-[var(--bg-light)] py-20 sm:py-24 lg:py-28 overflow-hidden text-[var(--text-dark)]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal variant="fade-down">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-800 shadow-xs">
              <Compass className="h-3.5 w-3.5 text-black" />
              <span>Our 4-Step Agile Lifecycle</span>
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1} className="mt-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[46px] leading-[1.12]">
              How We Turn Ideas Into{" "}
              <span className="relative inline-block" style={{fontFamily:"var(--font-serif,'Georgia',serif)",fontStyle:"italic",fontWeight:700,background:"linear-gradient(135deg,#E11D48,#fb7185)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                Production Software
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.16} className="mt-4">
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
              A transparent, agile engineering methodology refined over 10+ years to guarantee precision, velocity, and on-time sprint delivery.
            </p>
          </Reveal>
        </div>

        {/* 4-Step Animated Timeline */}
        <div className="relative mt-16 lg:mt-20">
          {/* Animated SVG Progress Connector Line on Desktop */}
          <div
            aria-hidden="true"
            className="absolute top-16 left-12 right-12 hidden -translate-y-1/2 lg:block z-0 pointer-events-none"
          >
            <svg
              className="w-full h-4 overflow-visible"
              viewBox="0 0 1000 16"
              fill="none"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="8"
                x2="1000"
                y2="8"
                stroke="rgba(14, 71, 57, 0.28)"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <line
                x1="0"
                y1="8"
                x2="1000"
                y2="8"
                stroke="url(#process-line-gradient)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient id="process-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0E4739" />
                  <stop offset="50%" stopColor="#A3E635" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <StaggerGroup
            stagger={0.12}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10"
          >
            {PROCESS_STEPS.map((step) => {
              const IconComponent = step.icon;
              return (
                <StaggerItem key={step.number} className="h-full">
                  <div className="group relative flex h-full flex-col justify-between rounded-[26px] border border-slate-200/90 bg-white p-7 sm:p-8 card-soft-shadow transition-all duration-300 hover:border-black hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)] hover:-translate-y-2">
                    {/* Top Row: Icon + Large Step Number */}
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-[var(--brand-lime)] shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[var(--brand-lime)] group-hover:text-white">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="font-heading text-4xl font-black text-slate-200 transition-colors group-hover:text-[var(--brand-lime)]/40">
                          {step.number}
                        </span>
                      </div>

                      <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-royal)] bg-[var(--primary-light)] px-2.5 py-0.5 rounded-full">
                        {step.tag}
                      </span>

                      <h3 className="mt-4 text-xl font-bold tracking-tight text-[var(--text-dark)] transition-colors group-hover:text-[var(--brand-royal)]">
                        {step.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-muted)]">
                        {step.description}
                      </p>
                    </div>

                    {/* Key Deliverables */}
                    <div className="mt-6 border-t border-[var(--border-light)] pt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Sprint Deliverables:
                      </p>
                      <ul className="mt-2.5 space-y-1.5 text-xs font-semibold text-[var(--text-dark)]">
                        {step.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[var(--success)] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Animated Bottom Border Sweep */}
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[var(--brand-royal)] via-[var(--brand-cyan)] to-[var(--brand-sky)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-[26px]"
                    />
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

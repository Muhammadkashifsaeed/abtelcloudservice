"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Award,
  Clock,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { COMPANY_DATA } from "@/data/company";

export function AboutSection() {
  return (
    <section
      id="about-section"
      aria-label="Behind The Solutions - Abtel Cloud Services"
      className="relative w-full bg-white py-20 sm:py-24 lg:py-28 overflow-hidden text-[#0B0E14] border-t border-slate-200/80"
    >
      {/* Subtle Ambient Lime Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--brand-lime)]/[0.05] blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image Collage with Floating 10+ Years Badge & Avatar Stack */}
          <div className="relative lg:col-span-6">
            <Reveal variant="fade-left" duration={0.8}>
              <TiltCard maxTilt={4} scaleOnHover={1.01} className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Feature Image Container with subtle border */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                  <Image
                    src="/images/about-hero-ai.jpg"
                    alt="Abtel Cloud Services team collaborating in Texas office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating 10+ Years Badge in Abtel Cloud Services Lime & Crisp White Surface */}
                <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:right-6 rounded-[22px] border border-slate-200 bg-white p-4 sm:p-5 shadow-[0_16px_36px_rgba(15,23,42,0.12)] z-20">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[var(--brand-lime)] text-white shadow-[0_6px_20px_rgba(14, 71, 57,0.35)]">
                      <span className="font-heading text-2xl font-black">10+</span>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-extrabold text-[#0B0E14] leading-tight">
                        Years of Agency
                        <br />
                        Excellence
                      </p>
                      <p className="text-xs font-bold text-slate-600 mt-0.5 flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-black" />
                        <span>Established Agency</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Avatar Stack with "150+ Clients" */}
                <div className="absolute -bottom-6 left-2 sm:-bottom-8 sm:left-6 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-[0_16px_32px_rgba(15,23,42,0.12)] z-20 hidden xs:flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[var(--brand-lime)] bg-slate-800 overflow-hidden relative">
                      <Image src="/images/Abner Hill.png" alt="Client" fill className="object-cover" />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[var(--brand-lime)] bg-slate-700 overflow-hidden relative">
                      <Image src="/images/Man-Working-At-Laptop-768x768.png" alt="Client" fill className="object-cover" />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[var(--brand-lime)] bg-slate-600 overflow-hidden relative">
                      <Image src="/images/a-businessman-using.jpg" alt="Client" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-[#0B0E14] leading-none">
                      150+ Digital Launches
                    </span>
                    <span className="text-[10.5px] font-bold text-slate-500 mt-0.5">
                      Global &amp; US Based
                    </span>
                  </div>
                </div>

                {/* Floating Top Pill Badge (Location) */}
                <div className="absolute -top-3.5 -left-3 sm:-top-4 sm:-left-4 rounded-full border border-slate-200 bg-white/95 px-4 py-1.5 text-slate-800 shadow-md backdrop-blur-md z-20">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-black" />
                    <span className="text-xs font-bold">{COMPANY_DATA.location}</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Right Column: Eyebrow, H2, Real Content, Availability & "Discover More" */}
          <div className="flex flex-col items-start lg:col-span-6">
            {/* Eyebrow */}
            <Reveal variant="fade-down" delay={0.05}>
              <span className="eyebrow-premium">
                Behind The Solutions
              </span>
            </Reveal>

            {/* H2 with Lime Accent */}
            <Reveal variant="fade-right" delay={0.12} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[42px] leading-[1.15]">
                Modern Software &amp; Digital Agency for a{" "}
                <span className="relative inline-block" style={{fontFamily:"var(--font-serif,'Georgia',serif)",fontStyle:"italic",fontWeight:700,background:"linear-gradient(135deg,#E11D48,#fb7185)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  Smarter Future
                </span>
                .
              </h2>
            </Reveal>

            {/* Real About Content Paragraph */}
            <Reveal variant="fade-right" delay={0.18} className="mt-5">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Abtel Cloud Services provides full-lifecycle custom software development, modern mobile engineering, and data-driven digital growth strategies. We bridge technical complexity with high velocity, rock-solid security, and transparent client communication.
              </p>
            </Reveal>

            {/* Availability & Quality Highlights Block */}
            <Reveal variant="fade-right" delay={0.24} className="mt-6 w-full">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-xs">
                {/* Availability Line */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200 text-sm font-bold text-slate-900">
                  <Clock className="h-4 w-4 text-black shrink-0" />
                  <span>Agency Operating Hours:</span>
                  <span className="font-semibold text-slate-600">
                    {COMPANY_DATA.hours}
                  </span>
                </div>

                {/* 3 Core Agency Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>You Own All Code</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Top 5% Developers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Agile 2-Wk Sprints</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA Discover More */}
            <Reveal variant="fade-right" delay={0.3} className="mt-8">
              <Link
                href="/about"
                className="btn-sheen group/btn relative inline-flex h-[50px] min-w-[180px] items-center justify-center overflow-hidden rounded-lg bg-[var(--brand-lime)] px-8 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:shadow-sm hover:-translate-y-0.5 active:scale-95 ring-1 ring-inset ring-white/20"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <span>Discover More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

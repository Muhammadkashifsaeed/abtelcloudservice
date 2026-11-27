"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { COMPANY_DATA } from "@/data/company";

const PILLARS = ["You Own All Code", "Top 5% Developers", "Agile 2-Wk Sprints"];

export function AboutSection() {
  return (
    <section
      id="about-section"
      aria-label="Behind The Solutions - Abtel Cloud Services"
      className="relative w-full bg-white py-20 sm:py-24 lg:py-28 overflow-hidden text-[#0B0E14] border-t border-slate-200/80"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-[#E11D48]/[0.05] blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Image collage */}
          <div className="relative lg:col-span-6">
            <Reveal variant="fade-left" duration={0.8}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
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

                {/* 10+ Years badge */}
                <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:right-6 rounded-[22px] border border-slate-200 bg-white p-4 sm:p-5 shadow-[0_16px_36px_rgba(15,23,42,0.12)] z-20">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#E11D48] text-white shadow-[0_6px_20px_rgba(225,29,72,0.35)]">
                      <span className="font-heading text-2xl font-black">10+</span>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-extrabold text-[#0B0E14] leading-tight">
                        Years of Agency
                        <br />
                        Excellence
                      </p>
                      <p className="text-xs font-bold text-slate-600 mt-0.5 flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-[#E11D48]" />
                        <span>Established Agency</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Avatar stack */}
                <div className="absolute -bottom-6 left-2 sm:-bottom-8 sm:left-6 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-[0_16px_32px_rgba(15,23,42,0.12)] z-20 hidden xs:flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#E11D48] bg-slate-800 overflow-hidden relative">
                      <Image src="/images/Abner Hill.png" alt="Client" fill className="object-cover" />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#E11D48] bg-slate-700 overflow-hidden relative">
                      <Image src="/images/Man-Working-At-Laptop-768x768.png" alt="Client" fill className="object-cover" />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#E11D48] bg-slate-600 overflow-hidden relative">
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

                {/* Location pill */}
                <div className="absolute -top-3.5 -left-3 sm:-top-4 sm:-left-4 rounded-full border border-slate-200 bg-white/95 px-4 py-1.5 text-slate-800 shadow-md backdrop-blur-md z-20">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#E11D48]" />
                    <span className="text-xs font-bold">{COMPANY_DATA.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: copy */}
          <div className="flex flex-col items-start lg:col-span-6">
            <Reveal variant="fade-down" delay={0.05}>
              <span className="eyebrow-premium">Behind The Solutions</span>
            </Reveal>

            <Reveal variant="fade-right" delay={0.12} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[42px] leading-[1.15]">
                Modern Software &amp; Digital Agency for a{" "}
                <span
                  className="relative inline-block"
                  style={{ fontFamily: "var(--font-serif,'Georgia',serif)", fontStyle: "italic", fontWeight: 700, background: "linear-gradient(135deg,#E11D48,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  Smarter Future
                </span>
                .
              </h2>
            </Reveal>

            <Reveal variant="fade-right" delay={0.18} className="mt-5">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Abtel Cloud Services provides full-lifecycle custom software development, modern mobile engineering, and data-driven digital growth strategies. We bridge technical complexity with high velocity, rock-solid security, and transparent client communication.
              </p>
            </Reveal>

            <Reveal variant="fade-right" delay={0.24} className="mt-6 w-full">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-xs">
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200 text-sm font-bold text-slate-900">
                  <Clock className="h-4 w-4 text-[#E11D48] shrink-0" />
                  <span>Agency Operating Hours:</span>
                  <span className="font-semibold text-slate-600">{COMPANY_DATA.hours}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  {PILLARS.map((pillar) => (
                    <div key={pillar} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-[#E11D48] shrink-0" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade-right" delay={0.3} className="mt-8">
              <Link
                href="/about"
                className="btn-sheen group/btn relative inline-flex h-[50px] min-w-[180px] items-center justify-center overflow-hidden rounded-lg bg-[#E11D48] px-8 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#BE123C] hover:shadow-sm hover:-translate-y-0.5 active:scale-95 ring-1 ring-inset ring-white/20"
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
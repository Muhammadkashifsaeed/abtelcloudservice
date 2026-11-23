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
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";
import { COMPANY_DATA } from "@/data/company";

export function AboutSection() {
  return (
    <section
      id="about-section"
      aria-label="Behind The Solutions - Abtel Cloud Services"
      className="relative w-full section-light bg-[var(--bg-light)] py-20 sm:py-24 lg:py-28 overflow-hidden text-[var(--text-dark)]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image Collage with Floating 10+ Years Badge & Avatar Stack (Fade Left) */}
          <div className="relative lg:col-span-6">
            <Reveal variant="fade-left" duration={0.8}>
              <TiltCard maxTilt={4} scaleOnHover={1.01} className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Feature Image Container with subtle colorful border glow */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-blue-200/60 bg-white shadow-[0_16px_36px_rgba(11,31,58,0.1)]">
                  <Image
                    src="/images/about-hero-ai.jpg"
                    alt="Abtel Cloud Services senior software engineering team collaborating in Texas office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F3A]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating 10+ Years Badge in Logo Theme Gradient */}
                <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:right-6 rounded-[22px] border border-white/90 bg-white p-4 sm:p-5 shadow-[0_16px_36px_rgba(2,132,199,0.22)] z-20">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0284C7] via-[#0EA5E9] to-[#22C7F2] text-white shadow-[0_6px_20px_rgba(34,199,242,0.45)]">
                      <span className="font-heading text-2xl font-black">10+</span>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-extrabold text-[var(--text-dark)] leading-tight">
                        Years of Industry
                        <br />
                        Excellence
                      </p>
                      <p className="text-xs font-semibold text-[#0284C7] mt-0.5 flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-amber-500" />
                        <span>Established IT Firm</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Avatar Stack with "150+ Clients" */}
                <div className="absolute -bottom-6 left-2 sm:-bottom-8 sm:left-6 rounded-2xl border border-white/90 bg-white px-4 py-2.5 shadow-[0_16px_32px_rgba(11,31,58,0.12)] z-20 hidden xs:flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-cyan-400 bg-slate-200 overflow-hidden relative">
                      <Image src="/images/Abner Hill.png" alt="Client" fill className="object-cover" />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-purple-400 bg-slate-300 overflow-hidden relative">
                      <Image src="/images/David.png" alt="Client" fill className="object-cover" />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-emerald-400 bg-slate-400 overflow-hidden relative">
                      <Image src="/images/Hasan.png" alt="Client" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-blue-900 leading-none">
                      150+ Clients
                    </span>
                    <span className="text-[10.5px] font-medium text-emerald-600">
                      Global &amp; US Based
                    </span>
                  </div>
                </div>

                {/* Floating Top Pill Badge (Location) */}
                <div className="absolute -top-3.5 -left-3 sm:-top-4 sm:-left-4 rounded-full border border-white/20 bg-gradient-to-r from-blue-900 to-indigo-900 px-4 py-1.5 text-white shadow-lg z-20">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-cyan-300" />
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
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-purple-700 shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-purple-600" />
                <span>Behind The Solutions</span>
              </div>
            </Reveal>

            {/* H2 with Multi-color Gradient Accent (Fade Right) */}
            <Reveal variant="fade-right" delay={0.12} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[42px] leading-[1.15]">
                Expert Software Solutions for a{" "}
                <span className="relative inline-block text-[#0284C7]">
                  Smarter Future
                  <CurvedUnderline color="#0284C7" />
                </span>
                .
              </h2>
            </Reveal>

            {/* Real About Content Paragraph (Fade Right) */}
            <Reveal variant="fade-right" delay={0.18} className="mt-5">
              <p className="text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
                Abtel Cloud Services provides full-lifecycle software consulting, custom application engineering, and enterprise cloud infrastructure management. We bridge technical complexity with high velocity, rock-solid security, and transparent client communication.
              </p>
            </Reveal>

            {/* Availability & Quality Highlights Block with Distinct Colorful Badges (Fade Right) */}
            <Reveal variant="fade-right" delay={0.24} className="mt-6 w-full">
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs">
                {/* Mon - Fri Availability Line */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 text-sm font-bold text-[var(--text-dark)]">
                  <Clock className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Business Hours:</span>
                  <span className="font-semibold text-slate-600">
                    {COMPANY_DATA.hours}
                  </span>
                </div>

                {/* Checks with Distinct Colors */}
                <ul className="mt-4 space-y-3 text-sm font-semibold text-[var(--text-dark)]">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>
                      <strong className="text-emerald-700">Dedicated Senior Talent:</strong> Top full-stack software engineers and AWS/GCP architects.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>
                      <strong className="text-purple-700">100% Repository &amp; IP Ownership:</strong> Complete code rights delivered from sprint one.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>
                      <strong className="text-blue-700">Direct Sprint Visibility:</strong> Transparent milestone progress with automated CI/CD staging.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* "Discover More" Pill Button in Brand Theme Gradient (Fade Right) */}
            <Reveal variant="fade-right" delay={0.3} className="mt-8">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="btn-sheen group/btn relative inline-flex h-[52px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#22C7F2] px-8 text-sm font-bold text-white shadow-[0_6px_22px_rgba(34,199,242,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_32px_rgba(34,199,242,0.6)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Discover More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-[52px] items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-[var(--text-dark)] shadow-xs transition-all duration-300 hover:border-sky-500 hover:text-[#0284C7] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <span>Get In Touch</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

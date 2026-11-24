"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Globe,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";

const HERO_FEATURE_POINTS = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Our custom software development team recruits versatile developers and technical experts who understand and meet your project's unique requirements.",
    href: "https://abtelcloudservices.com/services/",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    desc: "Our deep AWS, Azure, and Google Cloud prowess ensures custom cloud solutions for operational efficiency and innovative business expansion",
    href: "https://abtelcloudservices.com/services/",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Design and code custom, from-scratch web solutions that engage users and compel interactions at every step",
    href: "https://abtelcloudservices.com/services/",
  },
];

const CALENDLY_LINK = "https://calendly.com/abtelcloud/30min";
const GALLERY_LINK = "http://gallary.abtelcloud.com/";

export function HeroSliderSection() {
  return (
    <section
      aria-label="Abtel Cloud Services - Web Development Services & Software Consulting"
      className="relative min-h-[86vh] w-full overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white text-[#0B0E14] flex flex-col justify-between"
    >
      {/* Background: Modern clean light SaaS with refined grid and soft ambient radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-indigo-500/[0.04] blur-[150px]" />
        {/* Refined Modern Background Grid */}
        <div className="absolute inset-0 opacity-[0.5] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 w-full">
          {/* Left Column: Clean High-Contrast Headline & CTAs (Fade Left) */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Eyebrow Badge (Fade Down) */}
            <Reveal variant="fade-down" delay={0.05}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1.5 shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-[#2563EB]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Web Development Services
                </span>
              </div>
            </Reveal>

            {/* Main Headline: Software Consulting and Development (Fade Left) */}
            <Reveal variant="fade-left" delay={0.12} className="w-full">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12] text-balance">
                Software Consulting and{" "}
                <span className="relative inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent font-extrabold">
                  Development
                  <CurvedUnderline color="#2563EB" />
                </span>
              </h1>
            </Reveal>

            {/* Subtext: Authentic Client Mission Statement (Fade Left) */}
            <Reveal variant="fade-left" delay={0.2} className="w-full">
              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#475569]">
                Our dedicated team is fully committed to providing exceptional service, no matter where you are, ensuring you achieve your desired results.
              </p>
            </Reveal>

            {/* Action Buttons (Tactile Modern Enterprise Buttons) */}
            <Reveal variant="fade-left" delay={0.28}>
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-4">
                {/* Button 1: Primary Get Started Action Linking to Calendly */}
                <a
                  href={CALENDLY_LINK}
                  className="btn-sheen group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </span>
                </a>

                {/* Button 2: Secondary Gallery Action */}
                <a
                  href={GALLERY_LINK}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200/90 bg-white/95 px-6 text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <span>Gallery</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Software Consulting Showcase with 15.jpg (Fade Right) */}
          <div className="relative lg:col-span-5 flex items-center justify-center py-6 lg:py-0">
            <Reveal variant="fade-right" delay={0.15} className="w-full flex justify-center">
              <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px]">
                {/* Ambient Subtle Glow Behind Showcase */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 rounded-full bg-blue-500/[0.08] blur-[80px]"
                />

                {/* Main Showcase Frame */}
                <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08)]">
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-slate-900">
                    <Image
                      src="/images/15.jpg"
                      alt="Abtel Cloud Services software consulting and development team"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover object-center"
                    />

                    {/* Subtle Gradient Rim Light */}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />
                  </div>
                </div>

                {/* Floating Bottom Status Pill */}
                <div className="absolute -bottom-4 left-4 sm:-bottom-5 sm:left-6 z-20 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.1)] backdrop-blur-md">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-lime)] opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--brand-lime)] ring-2 ring-black" />
                  </span>
                  <div className="text-left">
                    <p className="text-xs font-black text-slate-900 leading-tight">Live Consulting Sprints</p>
                    <p className="text-[11px] font-medium text-slate-500">Agile Cloud &amp; Web Strategy</p>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute -top-3 right-4 sm:-top-3 sm:right-6 z-20 rounded-md bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-blue-700 shadow-2xs">
                  Verified Team
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Row: 3 Custom Software & Cloud Feature Cards (Fade Up Staggered) */}
      <div className="relative z-20 w-full border-t border-slate-200/80 bg-slate-50/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {HERO_FEATURE_POINTS.map((pt, idx) => {
              const variant =
                idx === 0 ? "fade-left" : idx === 1 ? "fade-up" : "fade-right";
              return (
                <Reveal key={pt.title} variant={variant} delay={0.1 + idx * 0.1}>
                  <div className="flex flex-col justify-between h-full rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:border-slate-300 hover:shadow-xs transition-all duration-200">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] border border-blue-100 shadow-2xs">
                        <pt.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                          {pt.title}
                        </h4>
                        <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[#475569]">
                          {pt.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={pt.href}
                        className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

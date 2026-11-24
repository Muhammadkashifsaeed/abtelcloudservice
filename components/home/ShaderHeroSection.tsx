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
import { ShaderBackground } from "@/components/ui/ShaderBackground";

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

export function ShaderHeroSection() {
  return (
    <ShaderBackground className="min-h-[86vh] flex flex-col justify-between">
      {/* Main Hero Content Area */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pt-14 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 w-full">

          {/* Left Column: Headline & CTAs */}
          <div className="flex flex-col items-start lg:col-span-7">

            {/* Eyebrow Badge */}
            <Reveal variant="fade-down" delay={0.05}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#2563EB] shadow-[0_0_6px_rgba(37,99,235,0.8)]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/80">
                  Web Development Services
                </span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal variant="fade-left" delay={0.12} className="w-full">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-balance">
                <span className="text-white/90">Software </span>
                <em
                  className="not-italic"
                  style={{
                    fontFamily: "var(--font-serif, 'Georgia', serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "rgba(147, 197, 253, 0.95)", // blue-300
                  }}
                >
                  Consulting
                </em>
                <span className="text-white"> and </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#60A5FA] via-[#2563EB] to-[#818CF8] bg-clip-text text-transparent font-extrabold">
                    Development
                  </span>
                  <CurvedUnderline color="#2563EB" />
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal variant="fade-left" delay={0.2} className="w-full">
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/65">
                Our dedicated team is fully committed to providing exceptional
                service, no matter where you are, ensuring you achieve your
                desired results.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal variant="fade-left" delay={0.28}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                {/* Primary: Get Started */}
                <a
                  href={CALENDLY_LINK}
                  className="btn-sheen group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] ring-1 ring-inset ring-white/20 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-[0_0_28px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </span>
                </a>

                {/* Secondary: Gallery */}
                <a
                  href={GALLERY_LINK}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <span>Gallery</span>
                  <ArrowUpRight className="h-4 w-4 text-white/70" />
                </a>
              </div>
            </Reveal>

            {/* Trust micro-stats */}
            <Reveal variant="fade-left" delay={0.36}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {[
                  { value: "150+", label: "Clients Served" },
                  { value: "10+", label: "Years Experience" },
                  { value: "96%", label: "Client Retention" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl font-extrabold tracking-tight text-white leading-none">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 text-xs font-medium text-white/50 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Showcase Image */}
          <div className="relative lg:col-span-5 flex items-center justify-center py-6 lg:py-0">
            <Reveal variant="fade-right" delay={0.15} className="w-full flex justify-center">
              <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px]">
                {/* Glow behind card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 rounded-full opacity-50"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(37,99,235,0.35) 0%, transparent 70%)",
                    filter: "blur(32px)",
                  }}
                />

                {/* Showcase Frame */}
                <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm">
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-slate-900">
                    <Image
                      src="/images/15.jpg"
                      alt="Abtel Cloud Services software consulting and development team"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover object-center"
                    />
                    {/* Rim light overlay */}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    {/* Bottom gradient fade */}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                </div>

                {/* Floating Live Badge */}
                <div className="absolute -bottom-4 left-4 sm:-bottom-5 sm:left-6 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.4)] backdrop-blur-md">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB] opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#2563EB] ring-2 ring-white/20" />
                  </span>
                  <div className="text-left">
                    <p className="text-xs font-black text-white leading-tight">Live Consulting Sprints</p>
                    <p className="text-[11px] font-medium text-white/50">Agile Cloud &amp; Web Strategy</p>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute -top-3 right-4 sm:-top-3 sm:right-6 z-20 rounded-md border border-blue-400/30 bg-blue-500/20 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-blue-200 shadow-sm backdrop-blur-sm">
                  Verified Team
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Feature Cards */}
      <div className="relative w-full border-t border-white/[0.08] bg-black/20 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {HERO_FEATURE_POINTS.map((pt, idx) => {
              const variant =
                idx === 0 ? "fade-left" : idx === 1 ? "fade-up" : "fade-right";
              return (
                <Reveal key={pt.title} variant={variant} delay={0.1 + idx * 0.1}>
                  <div className="flex flex-col justify-between h-full rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-200">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 border border-blue-400/20 shadow-sm">
                        <pt.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white leading-snug">
                          {pt.title}
                        </h4>
                        <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-white/50">
                          {pt.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                      <Link
                        href={pt.href}
                        className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 transition-colors hover:text-blue-200"
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
    </ShaderBackground>
  );
}

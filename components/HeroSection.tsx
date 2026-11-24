"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Shield,
  Zap,
} from "lucide-react";
import { cn } from "@/utils";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      data-hero-section="true"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4F8FC] to-[#EBF3FA] text-[#101B3F]"
    >
      {/* 1. Pristine Clean White Tech Architecture Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/white-hero-tech-bg.svg"
          alt="Enterprise Software Consulting and Development Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-95"
        />

        {/* Subtle Modern Tech Grid Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(61,150,206,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(61,150,206,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)] opacity-70"
        />

        {/* Soft Ambient Brand Atmospheric Glow Lights */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-[520px] w-[520px] rounded-full bg-[var(--brand-lime)]/10 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/3 h-[520px] w-[520px] rounded-full bg-emerald-500/5 blur-[150px]"
        />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:min-h-[640px] lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-12 lg:pb-12">
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start text-left lg:col-span-7 xl:col-span-7">
          {/* Eyebrow Modern Tech Badge */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1.5 shadow-2xs">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#E11D48]">
                <Code2 className="h-3 w-3" strokeWidth={2.5} />
              </div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700">
                SOFTWARE &amp; DIGITAL AGENCY
              </span>
            </div>
          </div>

          {/* High-Impact Modern Heading */}
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.12]">
            Software Consulting
            <br />
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
              and Development
            </span>
          </h1>

          {/* Description Paragraph – Clean Slate Contrast */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">
            Our dedicated team is fully committed to providing exceptional service,
            no matter where you are, ensuring you achieve your desired results.
          </p>

          {/* Premium Modern Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="https://calendly.com/abtelcloud/30min?month=2026-11"
              className="btn-sheen group/btn relative inline-flex h-12 min-w-[170px] items-center justify-center overflow-hidden rounded-lg bg-[#E11D48] px-6 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 transition-all duration-200 hover:bg-[#BE123C] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600"
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/gallery"
              className="group/gallery relative inline-flex h-12 min-w-[150px] items-center justify-center overflow-hidden rounded-lg border border-slate-200/90 bg-white/95 px-6 text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <span className="relative z-10 transition-colors duration-200">
                <span>Gallery</span>
              </span>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200/80 pt-6 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Full-Stack Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#E11D48]" />
              <span>Rapid Deployment</span>
            </div>
          </div>
        </div>

        {/* Right Column: Consultant Portrait with Enhanced Animated Tech Backdrop */}
        <div className="relative flex items-end justify-center self-end lg:col-span-5 xl:col-span-5 lg:-mb-12">
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[470px] xl:max-w-[500px] flex items-end justify-center">
            {/* Enhanced Animated Tech Decorative Backdrop Behind Image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 z-0 sm:-inset-6"
            >
              {/* 1. Dual Morphing Glow Blobs */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 0.97, 1],
                  x: [0, 14, -10, 0],
                  y: [0, -12, 8, 0],
                  opacity: [0.28, 0.45, 0.28],
                }}
                transition={{
                  duration: 8.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[10%] left-1/2 h-[310px] w-[310px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[var(--brand-lime)]/20 via-emerald-100/30 to-transparent blur-3xl sm:h-[380px] sm:w-[380px]"
              />

              <motion.div
                animate={{
                  scale: [1.05, 0.94, 1.05],
                  x: [0, -16, 0],
                  y: [0, 12, 0],
                  opacity: [0.2, 0.36, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[4%] bottom-[12%] h-[220px] w-[220px] rounded-full bg-gradient-to-bl from-[var(--brand-lime)]/15 via-slate-100 to-transparent blur-2xl sm:h-[260px] sm:w-[260px]"
              />

              {/* 2. Outer Dashed Orbital HUD Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 26,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-[7%] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full border border-dashed border-slate-300 sm:h-[395px] sm:w-[395px] lg:h-[435px] lg:w-[435px]"
              />

              {/* 3. Counter-Rotating Segmented Tech Arc (SVG) */}
              <motion.svg
                viewBox="0 0 360 360"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-[13%] left-1/2 h-[265px] w-[265px] -translate-x-1/2 sm:h-[330px] sm:w-[330px] lg:h-[365px] lg:w-[365px]"
              >
                <defs>
                  <linearGradient id="hero-hud-arc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0E4739" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#10B981" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0E4739" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <circle
                  cx="180"
                  cy="180"
                  r="168"
                  fill="none"
                  stroke="url(#hero-hud-arc)"
                  strokeWidth="2.5"
                  strokeDasharray="115 62 42 56"
                  strokeLinecap="round"
                />
                <circle
                  cx="180"
                  cy="180"
                  r="142"
                  fill="none"
                  stroke="#0E4739"
                  strokeOpacity="0.25"
                  strokeWidth="1.2"
                  strokeDasharray="6 10"
                />
              </motion.svg>

              {/* 4. Soft Pulsing Inner Ring */}
              <motion.div
                animate={{
                  scale: [0.96, 1.05, 0.96],
                  opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[22%] left-1/2 h-[210px] w-[210px] -translate-x-1/2 rounded-full border border-[var(--brand-lime)]/30 sm:h-[260px] sm:w-[260px]"
              />
            </div>

            {/* Foreground Person Image with Seamless Feathered Bottom Fade */}
            <div className="relative z-10 w-full flex items-end justify-center [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
              <Image
                src="/images/img1.png"
                alt="Software consultant smiling while holding a laptop"
                width={600}
                height={701}
                priority
                draggable={false}
                className="block h-auto w-full select-none object-contain object-bottom drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
              />
              {/* Soft Atmospheric Feather Mist matching section background (#EBF3FA) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#EBF3FA] via-[#EBF3FA]/70 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

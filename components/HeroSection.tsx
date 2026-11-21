"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Cpu, Shield, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { usePageReady } from "@/components/PageLoader";
import {
  FloatingTechSphere,
} from "@/components/Floating3DElements";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const heroLeftContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -55 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: LUXURY_EASE,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

const FLOATING_SPARKS = [
  { left: "14%", bottom: "26%", size: 5, delay: 0, duration: 5.2 },
  { left: "26%", bottom: "42%", size: 4, delay: 1.1, duration: 6.0 },
  { left: "78%", bottom: "30%", size: 6, delay: 0.6, duration: 5.6 },
  { left: "86%", bottom: "52%", size: 4, delay: 1.8, duration: 6.4 },
  { left: "68%", bottom: "18%", size: 5, delay: 2.2, duration: 5.8 },
  { left: "18%", bottom: "64%", size: 4, delay: 0.9, duration: 6.2 },
];

export function HeroSection() {
  const isReady = usePageReady();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero-section"
      data-hero-section="true"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#070A1E] via-[#0A1032] to-[#070A1E] text-white"
    >
      {/* AI Generative 3D Left-Focused Tech Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/enterprise-cloud-hero-bg.jpg"
          alt="AI Enterprise Quantum Cloud Infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left opacity-65 mix-blend-screen"
        />
        {/* Horizontal transition gradient: keeping right clean & dark for portrait and badges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A1E]/30 via-transparent to-[#070A1E]/95" />
        {/* Vertical blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A1E]/75 via-transparent to-[#070A1E]" />
      </div>

      {/* 1. Subtle Modern Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-80"
      />

      {/* Ambient Tech Accent (Positioned on Left) */}
      <FloatingTechSphere
        size={46}
        glowColor="#00D4FF"
        duration={7}
        className="bottom-20 left-12 z-0 opacity-60 hidden lg:block"
      />

      {/* 2. Ambient Multi-Layer Glow Lights */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
              scale: [1, 1.15, 1],
              opacity: [0.18, 0.28, 0.18],
            }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/4 h-[520px] w-[520px] rounded-full bg-[#2563EB]/25 blur-[140px]"
      />
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
              scale: [1.1, 0.95, 1.1],
              opacity: [0.15, 0.25, 0.15],
            }
        }
        transition={{ duration: 11, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 top-1/3 h-[520px] w-[520px] rounded-full bg-[#00D4FF]/20 blur-[150px]"
      />

      {/* 3. Hero Content Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:min-h-[640px] lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-12 lg:pb-12">
        {/* Left Column: Text & CTAs (Fade Left, Fade Down, Fade Up) */}
        <motion.div
          variants={heroLeftContainer}
          initial="hidden"
          animate={isReady ? "visible" : "hidden"}
          className="flex flex-col items-start text-left lg:col-span-7 xl:col-span-7"
        >
          {/* Eyebrow Modern Tech Badge */}
          <motion.div variants={fadeDownItem}>
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00D4FF]/15 via-[#2563EB]/12 to-[#00D4FF]/10 px-4 py-1.5 shadow-[0_2px_14px_rgba(0,212,255,0.15)] backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00D4FF]">
                WEB DEVELOPMENT SERVICES
              </span>
            </div>
          </motion.div>

          {/* High-Impact Modern Heading */}
          <motion.h1
            variants={fadeLeftItem}
            className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[60px] xl:text-[68px] leading-[1.06]"
          >
            Software Consulting
            <br />
            and Development
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            variants={fadeLeftItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Our dedicated team is fully committed to providing exceptional service,
            no matter where you are, ensuring you achieve your desired results.
          </motion.p>

          {/* Premium Modern Buttons with Signature White Sweep */}
          <motion.div
            variants={fadeUpItem}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="https://calendly.com/abtelcloud/30min?month=2026-11"
              className="group/btn relative inline-flex h-[52px] min-w-[175px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#246BFD] via-[#0C5ADB] to-[#00D4FF] px-8 text-[15px] font-semibold text-white shadow-[0_0_28px_rgba(36,107,253,0.55),0_4px_16px_rgba(0,212,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,212,255,0.65)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
            >
              {/* Left-to-right white sweep layer */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-[105%] opacity-0 bg-white transition-all duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#070A1E]">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/gallery"
              className="group/gallery relative inline-flex h-[52px] min-w-[165px] items-center justify-center overflow-hidden rounded-full border border-white/25 bg-white/[0.08] px-8 text-[15px] font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:shadow-[0_8px_24px_rgba(255,255,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {/* Left-to-right white sweep layer */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-[105%] opacity-0 bg-white transition-all duration-300 ease-out group-hover/gallery:translate-x-0 group-hover/gallery:opacity-100"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover/gallery:text-[#070A1E]">
                <span>Gallery</span>
              </span>
            </Link>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            variants={fadeUpItem}
            className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-slate-300"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#00D4FF]" />
              <span>Full-Stack Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#00D4FF]" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#00D4FF]" />
              <span>Rapid Deployment</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Holographic Tech Stage & Floating 3D Orbs – Fade Right */}
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 75 }}
          transition={{ duration: 0.9, delay: 0.15, ease: LUXURY_EASE }}
          className="relative flex items-center justify-center self-end [perspective:1200px] lg:col-span-5 xl:col-span-5"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[470px] xl:max-w-[500px] [transform-style:preserve-3d]">
            {/* 1. Luminous Dual Morphing Ambient Glow Blobs Behind Portrait */}
            <motion.div
              aria-hidden="true"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    scale: [1, 1.1, 0.96, 1],
                    x: [0, 12, -10, 0],
                    y: [0, -10, 8, 0],
                    opacity: [0.45, 0.65, 0.45],
                  }
              }
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute top-[8%] left-1/2 h-[310px] w-[310px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#2563EB]/45 via-[#00D4FF]/35 to-purple-600/30 blur-2xl sm:h-[380px] sm:w-[380px]"
            />
            <motion.div
              aria-hidden="true"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    scale: [1.05, 0.94, 1.05],
                    x: [0, -14, 0],
                    y: [0, 10, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute right-[4%] bottom-[12%] h-[220px] w-[220px] rounded-full bg-gradient-to-bl from-[#00D4FF]/35 via-[#2563EB]/25 to-transparent blur-2xl sm:h-[260px] sm:w-[260px]"
            />

            {/* 2. Outer Dashed Orbital HUD Ring + Triple Glowing Satellites */}
            <motion.div
              aria-hidden="true"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute top-[6%] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full border border-dashed border-[#00D4FF]/40 sm:h-[395px] sm:w-[395px] lg:h-[435px] lg:w-[435px]"
            >
              <span className="absolute -top-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#00D4FF] shadow-[0_0_18px_#00D4FF] ring-4 ring-[#00D4FF]/25" />
              <span className="absolute right-4 bottom-16 h-2.5 w-2.5 rounded-full bg-[#A5B4FC] shadow-[0_0_14px_rgba(165,180,252,0.95)]" />
              <span className="absolute bottom-6 left-14 h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />
            </motion.div>

            {/* 3. Counter-Rotating Segmented Neon Tech Arc (SVG) */}
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 360 360"
              animate={prefersReducedMotion ? undefined : { rotate: -360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute top-[12%] left-1/2 h-[265px] w-[265px] -translate-x-1/2 sm:h-[330px] sm:w-[330px] lg:h-[365px] lg:w-[365px]"
            >
              <defs>
                <linearGradient id="hero-hud-arc-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0.85" />
                </linearGradient>
              </defs>
              <circle
                cx="180"
                cy="180"
                r="168"
                fill="none"
                stroke="url(#hero-hud-arc-2)"
                strokeWidth="2.5"
                strokeDasharray="115 62 42 56"
                strokeLinecap="round"
              />
              <circle
                cx="180"
                cy="180"
                r="142"
                fill="none"
                stroke="#7CEBFF"
                strokeOpacity="0.25"
                strokeWidth="1.2"
                strokeDasharray="6 10"
              />
            </motion.svg>

            {/* 4. Soft Pulsing Inner Energy Ring */}
            <motion.div
              aria-hidden="true"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    scale: [0.96, 1.05, 0.96],
                    opacity: [0.22, 0.5, 0.22],
                  }
              }
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute top-[20%] left-1/2 h-[210px] w-[210px] -translate-x-1/2 rounded-full border border-[#00D4FF]/35 sm:h-[260px] sm:w-[260px]"
            />

            {/* 5. 3D Cylindrical Neon Base Pedestal */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 inset-x-8 h-12 rounded-[100%] bg-gradient-to-r from-[#2563EB]/40 via-[#00D4FF]/60 to-[#2563EB]/40 blur-md opacity-80"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 inset-x-12 h-6 rounded-[100%] border border-[#00D4FF]/60 shadow-[0_0_24px_#00D4FF]"
            />

            {/* 6. Drifting Glowing Energy Sparks Rising Behind Portrait */}
            {!prefersReducedMotion &&
              FLOATING_SPARKS.map((spark, index) => (
                <motion.span
                  key={index}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 0, scale: 0.7 }}
                  animate={{
                    opacity: [0, 0.9, 0],
                    y: [0, -54, -96],
                    scale: [0.7, 1.15, 0.5],
                  }}
                  transition={{
                    duration: spark.duration,
                    delay: spark.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: spark.left,
                    bottom: spark.bottom,
                    width: spark.size,
                    height: spark.size,
                  }}
                  className="pointer-events-none absolute rounded-full bg-[#7CEBFF] shadow-[0_0_12px_rgba(0,229,255,0.95)]"
                />
              ))}

            {/* 7. 3D Sleek Tech Capsule 1: Top-Left (99.9% Uptime) */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    y: [0, -8, 0],
                  }
              }
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="group absolute top-4 -left-8 sm:-left-12 lg:-left-16 z-20 hidden sm:flex items-center gap-2.5 -rotate-2 rounded-2xl border border-white/20 bg-[#070A1E]/94 px-2.5 py-1.5 sm:px-3 sm:py-2 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,0,0,0.65),0_0_15px_rgba(0,212,255,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] [transform:translateZ(35px)] transition-all duration-300 hover:rotate-0 hover:scale-105 hover:border-[#00D4FF]/60 cursor-default select-none"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#2563EB]/40 to-[#00D4FF]/30 border border-[#00D4FF]/50 shadow-[0_0_12px_rgba(0,212,255,0.4)]">
                <Zap className="h-3.5 w-3.5 text-[#00E5FF]" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="text-[11.5px] sm:text-xs font-black text-white tracking-tight leading-tight whitespace-nowrap">
                  99.9% Uptime
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-300 leading-tight whitespace-nowrap mt-0.5">
                  Enterprise Cloud
                </span>
              </div>
            </motion.div>

            {/* 8. 3D Sleek Tech Capsule 2: Top-Right (100% IP Rights - Safe from Right Edge) */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    y: [0, 8, 0],
                  }
              }
              transition={{ duration: 6, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
              className="group absolute top-6 -right-6 sm:-right-10 lg:-right-12 z-20 hidden sm:flex items-center gap-2.5 rotate-2 rounded-2xl border border-white/20 bg-[#070A1E]/94 px-2.5 py-1.5 sm:px-3 sm:py-2 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,0,0,0.65),0_0_15px_rgba(0,212,255,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] [transform:translateZ(40px)] transition-all duration-300 hover:rotate-0 hover:scale-105 hover:border-[#00D4FF]/60 cursor-default select-none"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00D4FF]/30 to-[#2563EB]/40 border border-[#00D4FF]/50 shadow-[0_0_12px_rgba(0,212,255,0.4)]">
                <Code2 className="h-3.5 w-3.5 text-[#00E5FF]" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="text-[11.5px] sm:text-xs font-black text-white tracking-tight leading-tight whitespace-nowrap">
                  100% IP Rights
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-300 leading-tight whitespace-nowrap mt-0.5">
                  Full Ownership
                </span>
              </div>
            </motion.div>

            {/* 9. 3D Sleek Tech Capsule 3: Mid-Left (Agile Sprints - Tilted & Pushed Out to Clear Image) */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    y: [0, -7, 0],
                  }
              }
              transition={{ duration: 6.4, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="group absolute top-[44%] -translate-y-1/2 -left-12 sm:-left-16 lg:-left-20 z-20 hidden sm:flex items-center gap-2.5 -rotate-6 rounded-2xl border border-white/20 bg-[#070A1E]/94 px-2.5 py-1.5 sm:px-3 sm:py-2 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,0,0,0.65),0_0_15px_rgba(192,132,252,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] [transform:translateZ(45px)] transition-all duration-300 hover:rotate-0 hover:scale-105 hover:border-purple-400/60 cursor-default select-none"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600/40 to-pink-500/30 border border-purple-400/50 shadow-[0_0_12px_rgba(192,132,252,0.4)]">
                <Sparkles className="h-3.5 w-3.5 text-[#C084FC]" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="text-[11.5px] sm:text-xs font-black text-white tracking-tight leading-tight whitespace-nowrap">
                  Agile Sprints
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-purple-300 leading-tight whitespace-nowrap mt-0.5">
                  Rapid Delivery
                </span>
              </div>
            </motion.div>

            {/* 10. 3D Sleek Tech Capsule 4: Mid-Right (Top 5% IT Talent - Shifted Right to Clear Image) */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    y: [0, -6, 0],
                  }
              }
              transition={{ duration: 6.6, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="group absolute top-[48%] -translate-y-1/2 -right-14 sm:-right-18 lg:-right-22 xl:-right-24 z-20 hidden sm:flex items-center gap-2.5 rotate-3 rounded-2xl border border-white/20 bg-[#070A1E]/94 px-2.5 py-1.5 sm:px-3 sm:py-2 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,0,0,0.65),0_0_15px_rgba(56,189,248,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] [transform:translateZ(50px)] transition-all duration-300 hover:rotate-0 hover:scale-105 hover:border-sky-400/60 cursor-default select-none"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#2563EB]/40 to-sky-400/30 border border-sky-400/50 shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                <Cpu className="h-3.5 w-3.5 text-[#38BDF8]" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="text-[11.5px] sm:text-xs font-black text-white tracking-tight leading-tight whitespace-nowrap">
                  Top 5% Talent
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-sky-300 leading-tight whitespace-nowrap mt-0.5">
                  Dedicated Team
                </span>
              </div>
            </motion.div>

            {/* 11. 3D Sleek Tech Capsule 5: Lower-Left (Zero Lock-In - Tilted & Pushed Out to Clear Silhouette) */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    y: [0, 6, 0],
                  }
              }
              transition={{ duration: 6.8, delay: 2.0, repeat: Infinity, ease: "easeInOut" }}
              className="group absolute bottom-6 -left-10 sm:-left-14 lg:-left-18 z-20 hidden sm:flex items-center gap-2.5 rotate-3 rounded-2xl border border-white/20 bg-[#070A1E]/94 px-2.5 py-1.5 sm:px-3 sm:py-2 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,0,0,0.65),0_0_15px_rgba(56,189,248,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] [transform:translateZ(40px)] transition-all duration-300 hover:rotate-0 hover:scale-105 hover:border-sky-400/60 cursor-default select-none"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600/40 to-[#2563EB]/30 border border-sky-400/50 shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                <Shield className="h-3.5 w-3.5 text-[#38BDF8]" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="text-[11.5px] sm:text-xs font-black text-white tracking-tight leading-tight whitespace-nowrap">
                  Zero Lock-In
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-sky-300 leading-tight whitespace-nowrap mt-0.5">
                  Open Cloud Stack
                </span>
              </div>
            </motion.div>

            {/* 12. 3D Sleek Tech Capsule 6: Lower-Right (24/7 Live SLA - Tilted & Pushed Out to Clear Laptop) */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    y: [0, 7, 0],
                  }
              }
              transition={{ duration: 6.5, delay: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="group absolute bottom-8 -right-8 sm:-right-12 lg:-right-14 z-20 hidden sm:flex items-center gap-2.5 -rotate-4 rounded-2xl border border-white/20 bg-[#070A1E]/94 px-2.5 py-1.5 sm:px-3 sm:py-2 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,0,0,0.65),0_0_15px_rgba(52,211,153,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] [transform:translateZ(45px)] transition-all duration-300 hover:rotate-0 hover:scale-105 hover:border-emerald-400/60 cursor-default select-none"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600/40 to-teal-400/30 border border-emerald-400/50 shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#34D399]" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="text-[11.5px] sm:text-xs font-black text-white tracking-tight leading-tight whitespace-nowrap">
                  24/7 Live SLA
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-300 leading-tight whitespace-nowrap mt-0.5">
                  Enterprise Support
                </span>
              </div>
            </motion.div>

            {/* Foreground Person Image */}
            <div className="relative z-10 w-full overflow-hidden rounded-3xl [transform:translateZ(10px)]">
              <Image
                src="/images/img1.png"
                alt="Software consultant smiling while holding a laptop"
                width={600}
                height={701}
                priority
                draggable={false}
                className="block h-auto w-full select-none object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

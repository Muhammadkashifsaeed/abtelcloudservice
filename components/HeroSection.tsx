"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Cpu, Shield, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { usePageReady } from "@/components/PageLoader";
import { cn } from "@/utils";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

interface HeroPointItem {
  id: string;
  frontIcon: React.ElementType;
  frontTitle: string;
  frontSubtitle: string;
  backTitle: string;
  backSubtitle: string;
  positionClass: string;
  tiltClass: string;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  floatY: number[];
  duration: number;
  delay: number;
}

const HERO_POINTS: HeroPointItem[] = [
  {
    id: "uptime",
    frontIcon: Zap,
    frontTitle: "99.9% Uptime",
    frontSubtitle: "Enterprise Cloud",
    backTitle: "Guaranteed SLA",
    backSubtitle: "99.99% Reliability",
    positionClass: "top-4 -left-8 sm:-left-12 lg:-left-16",
    tiltClass: "-rotate-2",
    iconBg: "from-[#2563EB]/40 to-[#00D4FF]/30",
    iconBorder: "border-[#00D4FF]/50",
    iconColor: "text-[#00E5FF]",
    floatY: [0, -8, 0],
    duration: 5.5,
    delay: 0,
  },
  {
    id: "ip",
    frontIcon: Code2,
    frontTitle: "100% IP Rights",
    frontSubtitle: "Full Ownership",
    backTitle: "Zero Lock-In",
    backSubtitle: "Full Source Code",
    positionClass: "top-6 -right-6 sm:-right-10 lg:-right-12",
    tiltClass: "rotate-2",
    iconBg: "from-[#00D4FF]/30 to-[#2563EB]/40",
    iconBorder: "border-[#00D4FF]/50",
    iconColor: "text-[#00E5FF]",
    floatY: [0, 8, 0],
    duration: 6,
    delay: 0.6,
  },
  {
    id: "agile",
    frontIcon: Sparkles,
    frontTitle: "Agile Sprints",
    frontSubtitle: "Rapid Delivery",
    backTitle: "2-Week Sprints",
    backSubtitle: "Continuous CI/CD",
    positionClass: "top-[44%] -translate-y-1/2 -left-12 sm:-left-16 lg:-left-20",
    tiltClass: "-rotate-6",
    iconBg: "from-purple-600/40 to-pink-500/30",
    iconBorder: "border-purple-400/50",
    iconColor: "text-[#C084FC]",
    floatY: [0, -7, 0],
    duration: 6.4,
    delay: 1.2,
  },
  {
    id: "talent",
    frontIcon: Cpu,
    frontTitle: "Top 5% Talent",
    frontSubtitle: "Dedicated Team",
    backTitle: "Senior Staff",
    backSubtitle: "Silicon Valley Level",
    positionClass: "top-[48%] -translate-y-1/2 -right-16 sm:-right-22 lg:-right-28 xl:-right-32",
    tiltClass: "rotate-3",
    iconBg: "from-[#2563EB]/40 to-sky-400/30",
    iconBorder: "border-sky-400/50",
    iconColor: "text-[#38BDF8]",
    floatY: [0, -6, 0],
    duration: 6.6,
    delay: 1.5,
  },
  {
    id: "lockin",
    frontIcon: Shield,
    frontTitle: "Zero Lock-In",
    frontSubtitle: "Open Cloud Stack",
    backTitle: "Multi-Cloud",
    backSubtitle: "AWS • Azure • GCP",
    positionClass: "bottom-6 -left-10 sm:-left-14 lg:-left-18",
    tiltClass: "rotate-3",
    iconBg: "from-sky-600/40 to-[#2563EB]/30",
    iconBorder: "border-sky-400/50",
    iconColor: "text-[#38BDF8]",
    floatY: [0, 6, 0],
    duration: 6.8,
    delay: 2.0,
  },
  {
    id: "support",
    frontIcon: ShieldCheck,
    frontTitle: "24/7 Live SLA",
    frontSubtitle: "Enterprise Support",
    backTitle: "<15m Response",
    backSubtitle: "Tier-3 Direct",
    positionClass: "bottom-8 -right-8 sm:-right-12 lg:-right-14",
    tiltClass: "-rotate-4",
    iconBg: "from-emerald-600/40 to-teal-400/30",
    iconBorder: "border-emerald-400/50",
    iconColor: "text-[#34D399]",
    floatY: [0, 7, 0],
    duration: 6.5,
    delay: 1.8,
  },
];

const FLOATING_SPARKS = [
  { left: "14%", bottom: "26%", size: 5, delay: 0, duration: 5.2 },
  { left: "26%", bottom: "42%", size: 4, delay: 1.1, duration: 6.0 },
  { left: "78%", bottom: "30%", size: 6, delay: 0.6, duration: 5.6 },
  { left: "86%", bottom: "52%", size: 4, delay: 1.8, duration: 6.4 },
  { left: "68%", bottom: "18%", size: 5, delay: 2.2, duration: 5.8 },
  { left: "18%", bottom: "64%", size: 4, delay: 0.9, duration: 6.2 },
];

function HeroPointCard({
  point,
  prefersReducedMotion,
}: {
  point: HeroPointItem;
  prefersReducedMotion: boolean | null;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = point.frontIcon;

  return (
    <motion.div
      animate={
        prefersReducedMotion
          ? undefined
          : {
            y: point.floatY,
          }
      }
      transition={{
        duration: point.duration,
        delay: point.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={() => setIsFlipped((prev) => !prev)}
      className={cn(
        "group absolute z-20 hidden sm:block cursor-pointer select-none [perspective:1000px]",
        point.positionClass,
        point.tiltClass
      )}
      title="Click to flip"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: LUXURY_EASE }}
        className="relative [transform-style:preserve-3d] transition-transform duration-300 hover:scale-105"
      >
        {/* FRONT FACE */}
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/20 bg-[#070A1E]/95 px-2.5 py-1.5 sm:px-3 sm:py-2 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,0,0,0.65),0_0_15px_rgba(0,212,255,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] [backface-visibility:hidden]">
          <div
            className={cn(
              "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr border shadow-[0_0_12px_rgba(0,212,255,0.35)]",
              point.iconBg,
              point.iconBorder
            )}
          >
            <Icon className={cn("h-3.5 w-3.5", point.iconColor)} />
          </div>
          <div className="flex flex-col text-left pr-1">
            <span className="text-[11.5px] sm:text-xs font-black text-white tracking-tight leading-tight whitespace-nowrap">
              {point.frontTitle}
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-300 leading-tight whitespace-nowrap mt-0.5">
              {point.frontSubtitle}
            </span>
          </div>
        </div>

        {/* BACK FACE (ULTA CLICK FLIP) */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#00D4FF]/70 bg-gradient-to-r from-[#0C1236]/98 to-[#161D58]/98 px-3 py-1.5 sm:py-2 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,212,255,0.4)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col text-center">
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight whitespace-nowrap">
              {point.backTitle}
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#00D4FF] leading-tight whitespace-nowrap mt-0.5">
              {point.backSubtitle}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

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

export function HeroSection() {
  const isReady = usePageReady();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero-section"
      data-hero-section="true"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#171358] via-[#201A74] to-[#14104C] text-white"
    >
      {/* Bespoke Software Consulting & Development 3D Tech Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/software-consulting-hero-bg.jpg"
          alt="Enterprise Software Consulting and Development Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left-top opacity-70 mix-blend-screen [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.9)_45%,rgba(0,0,0,0.2)_75%,transparent_100%)]"
        />

        {/* Authentic ThemeForest Tiled Circuit-Board Texture */}
        <div
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/bg_pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "232px 232px",
          }}
          className="pointer-events-none absolute inset-0 opacity-[0.20] mix-blend-overlay"
        />

        {/* Deep Royal Indigo Seamless Blending Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#171358]/50 via-[#171358]/25 to-[#14104C]/95"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#171358]/70 via-transparent to-[#14104C]"
        />
      </div>

      {/* 1. Subtle Modern Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-80"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/12 px-4 py-1.5 shadow-[0_2px_18px_rgba(0,212,255,0.22)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#00D4FF]" />
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
            <span className="bg-gradient-to-r from-white via-cyan-100 to-[#00D4FF] bg-clip-text text-transparent">
              and Development
            </span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            variants={fadeLeftItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
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
            className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-white/90"
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

        {/* Right Column: Clean ThemeForest Consultant Portrait – Fade Right */}
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 75 }}
          transition={{ duration: 0.9, delay: 0.15, ease: LUXURY_EASE }}
          className="relative flex items-end justify-center self-end lg:col-span-5 xl:col-span-5"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[470px] xl:max-w-[500px] flex items-end justify-center">
            {/* Enhanced Animated ThemeForest Tech Decorative Layer (Strictly Behind Person Image) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 z-0 sm:-inset-6"
            >
              {/* 1. Dual Morphing Rim-Light Glow Blobs */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                      scale: [1, 1.1, 0.97, 1],
                      x: [0, 14, -10, 0],
                      y: [0, -12, 8, 0],
                      opacity: [0.46, 0.68, 0.46],
                    }
                }
                transition={{
                  duration: 8.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[10%] left-1/2 h-[310px] w-[310px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#246BFD]/45 via-[#00D4FF]/38 to-[#7C3AED]/38 blur-2xl sm:h-[380px] sm:w-[380px]"
              />

              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                      scale: [1.05, 0.94, 1.05],
                      x: [0, -16, 0],
                      y: [0, 12, 0],
                      opacity: [0.3, 0.52, 0.3],
                    }
                }
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[4%] bottom-[12%] h-[220px] w-[220px] rounded-full bg-gradient-to-bl from-[#32CAE4]/40 via-[#0EA5E9]/25 to-transparent blur-2xl sm:h-[260px] sm:w-[260px]"
              />

              {/* 2. Outer Dashed Orbital HUD Ring + Triple Glowing Satellites */}
              <motion.div
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{
                  duration: 26,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-[7%] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full border border-dashed border-[#00D4FF]/38 sm:h-[395px] sm:w-[395px] lg:h-[435px] lg:w-[435px]"
              >
                <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#32CAE4] shadow-[0_0_18px_rgba(50,202,228,1)] ring-4 ring-[#00D4FF]/25" />
                <span className="absolute right-4 bottom-16 h-2.5 w-2.5 rounded-full bg-[#A5B4FC] shadow-[0_0_14px_rgba(165,180,252,0.95)]" />
                <span className="absolute bottom-6 left-14 h-2 w-2 rounded-full bg-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.9)]" />
              </motion.div>

              {/* 3. Counter-Rotating Segmented Neon Tech Arc (SVG) */}
              <motion.svg
                viewBox="0 0 360 360"
                animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-[13%] left-1/2 h-[265px] w-[265px] -translate-x-1/2 sm:h-[330px] sm:w-[330px] lg:h-[365px] lg:w-[365px]"
              >
                <defs>
                  <linearGradient id="hero-hud-arc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#32CAE4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#818CF8" stopOpacity="0.85" />
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
                  stroke="#7CEBFF"
                  strokeOpacity="0.22"
                  strokeWidth="1.2"
                  strokeDasharray="6 10"
                />
              </motion.svg>

              {/* 4. Soft Pulsing Inner Energy Ring */}
              <motion.div
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
                className="absolute top-[22%] left-1/2 h-[210px] w-[210px] -translate-x-1/2 rounded-full border border-[#00D4FF]/35 sm:h-[260px] sm:w-[260px]"
              />

              {/* 5. Floating Glassmorphic Code Accent Shape – Mid-Left */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                      y: [0, -14, 0],
                      x: [0, -6, 0],
                      rotate: [-3, 3, -3],
                    }
                }
                transition={{
                  duration: 6.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[24%] left-[2%] flex h-11 w-14 items-center justify-center rounded-xl border border-[#32CAE4]/50 bg-[#1B1672]/70 font-mono text-xs font-bold tracking-wider text-[#7CEBFF] shadow-[0_10px_28px_rgba(0,212,255,0.22)] backdrop-blur-md sm:h-12 sm:w-16 sm:text-sm"
              >
                &lt;/&gt;
              </motion.div>

              {/* 6. Floating Translucent Cyan Tech Hexagon / Ring – Upper Right */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                      y: [0, -16, 0],
                      x: [0, 10, 0],
                      rotate: [0, 18, 0],
                    }
                }
                transition={{
                  duration: 7.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[13%] right-[4%] flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00D4FF]/45 bg-gradient-to-br from-[#00D4FF]/25 via-[#246BFD]/15 to-transparent shadow-[0_8px_24px_rgba(0,212,255,0.22)] backdrop-blur-[2px] sm:h-[72px] sm:w-[72px]"
              >
                <span className="h-6 w-6 rounded-full border-2 border-[#7CEBFF]/75 bg-[#00D4FF]/25" />
              </motion.div>

              {/* 7. Floating Rotated Wireframe Diamond – Top Left */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                      y: [0, -12, 0],
                      x: [0, 7, 0],
                      rotate: [45, 68, 45],
                    }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[9%] left-[18%] h-8 w-8 rounded-md border border-[#32CAE4]/55 bg-[#32CAE4]/15 shadow-[0_0_16px_rgba(50,202,228,0.25)] sm:h-10 sm:w-10"
              />

              {/* 8. Floating Micro Dot Grid Matrix – Lower Left */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                      y: [0, 14, 0],
                      x: [0, 8, 0],
                    }
                }
                transition={{
                  duration: 8.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[24%] left-[2%] grid grid-cols-4 gap-2 opacity-60"
              >
                {Array.from({ length: 16 }).map((_, idx) => (
                  <span
                    key={idx}
                    className="h-1.5 w-1.5 rounded-full bg-[#32CAE4] shadow-[0_0_6px_rgba(50,202,228,0.75)]"
                  />
                ))}
              </motion.div>

              {/* 9. Floating Double Ring Accent – Lower Right */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                      y: [0, 13, 0],
                      x: [0, -9, 0],
                      scale: [1, 1.1, 1],
                    }
                }
                transition={{
                  duration: 6.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[3%] bottom-[22%] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#32CAE4]/50 shadow-[0_0_20px_rgba(50,202,228,0.3)] sm:h-14 sm:w-14"
              >
                <span className="h-5 w-5 rounded-full border border-white/50 bg-[#00D4FF]/25" />
              </motion.div>

              {/* 10. Drifting Glowing Energy Sparks Rising Smoothly Behind Portrait */}
              {!prefersReducedMotion &&
                FLOATING_SPARKS.map((spark, index) => (
                  <motion.span
                    key={index}
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
                    className="absolute rounded-full bg-[#7CEBFF] shadow-[0_0_12px_rgba(0,229,255,0.95)]"
                  />
                ))}
            </div>

            {/* 3D Interactive Flip Point Cards Around Portrait */}
            {HERO_POINTS.map((point) => (
              <HeroPointCard
                key={point.id}
                point={point}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}

            {/* Foreground Person Image – Resting naturally at the bottom without cuts, pedestals, or cards */}
            <div className="relative z-10 w-full flex items-end justify-center">
              <Image
                src="/images/img1.png"
                alt="Software consultant smiling while holding a laptop"
                width={600}
                height={701}
                priority
                draggable={false}
                className="block h-auto w-full select-none object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

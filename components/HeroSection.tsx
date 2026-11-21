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
    positionClass: "top-[48%] -translate-y-1/2 -right-14 sm:-right-18 lg:-right-22 xl:-right-24",
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
      {/* Background Image: Web Dev & Software Consulting Environment */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/web-dev-hero-ai.jpg"
          alt="Web Development and Software Consulting Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left opacity-60 mix-blend-screen"
        />
        {/* Authentic ThemeForest Tech Dot-Matrix Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: "url('/images/bg_pattern.png')",
            backgroundRepeat: "repeat",
          }}
        />
        {/* Horizontal transition gradient: keeping right side pristine royal indigo for consultant portrait */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171358]/55 via-[#171358]/30 to-[#14104C]/95" />
        {/* Vertical blending gradients seamlessly connecting to header */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1768]/85 via-transparent to-[#14104C]" />
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
            {/* Luminous Ambient Glow Blob Behind Portrait */}
            <motion.div
              aria-hidden="true"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    scale: [1, 1.08, 1],
                    opacity: [0.35, 0.55, 0.35],
                  }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full bg-gradient-to-tr from-[#2563EB]/40 via-[#00D4FF]/30 to-purple-600/20 blur-3xl"
            />

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

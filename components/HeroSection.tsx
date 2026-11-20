"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePageReady } from "@/components/PageLoader";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: PREMIUM_EASE,
    },
  },
};

const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.82,
      ease: PREMIUM_EASE,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.74,
      ease: PREMIUM_EASE,
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
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0A0E33] via-[#121752] to-[#0A0E33] text-white">
      {/* Authentic Tiled Circuit-Board Background Pattern */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: 1 }}
        animate={isReady ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 1.2, ease: PREMIUM_EASE }}
        style={{
          backgroundImage: "url('/images/bg_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "232px 232px",
        }}
        className="pointer-events-none absolute inset-0 origin-center opacity-[0.20]"
      />

      {/* Deep Royal Blue & Indigo Gradient Overlay for Contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0E33]/92 via-[#11164E]/78 to-[#080B28]/95"
      />

      {/* Ambient Animated Cyan and Royal Blue Glow Meshes */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.14, 1],
                opacity: [0.18, 0.28, 0.18],
                x: [0, 15, 0],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-16 bottom-0 h-[500px] w-[500px] rounded-full bg-[#00D4FF]/16 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.18, 1],
                opacity: [0.16, 0.26, 0.16],
                y: [0, -20, 0],
              }
        }
        transition={{ duration: 11, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/4 h-[440px] w-[440px] rounded-full bg-[#246BFD]/22 blur-[130px]"
      />

      {/* Hero Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-4 pt-14 sm:px-6 sm:pt-20 lg:min-h-[660px] lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-16">
        {/* Left Content Column – Fade-Left Entrance */}
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -75 }}
          transition={{ duration: 0.88, ease: PREMIUM_EASE }}
          className="flex flex-col items-start pb-6 text-left lg:col-span-6 lg:pb-16 xl:col-span-6"
        >
          {/* Eyebrow Tech Badge */}
          <motion.div variants={fadeDownItem}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/35 bg-[#00D4FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF] shadow-[0_0_16px_rgba(0,212,255,0.22)] backdrop-blur-md sm:text-[13px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D4FF] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D4FF]" />
              </span>
              <span>WEB DEVELOPMENT SERVICES</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeLeftItem}
            className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-[56px] xl:text-[62px]"
          >
            Software Consulting
            <br />
            <span className="bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent">
              and Development
            </span>
          </motion.h1>

          <motion.p
            variants={fadeLeftItem}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-200/90 sm:text-[17px]"
          >
            Our dedicated team is fully committed to providing exceptional service,
            no matter where you are, ensuring you achieve your desired results.
          </motion.p>

          {/* Unified Technology CTA Buttons */}
          <motion.div
            variants={fadeUpItem}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="drop-shadow-[0_6px_22px_rgba(0,212,255,0.35)]"
            >
              <Link
                href="https://calendly.com/abtelcloud/30min?month=2026-11"
                className="btn-cut group/btn relative inline-flex h-[52px] min-w-[185px] items-center justify-center overflow-hidden bg-[#246BFD] px-8 text-[15px] font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,212,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E33]"
              >
                {/* Left-to-right white sweep layer */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                />
                <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                  <span>Get Started</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/gallery"
                className="btn-cut group inline-flex h-[52px] min-w-[160px] items-center justify-center border border-white/25 bg-white/10 px-8 text-[15px] font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0A0E33] hover:shadow-[0_8px_24px_rgba(255,255,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E33]"
              >
                <span>Gallery</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Hero Image Column – Fade-Right Entrance */}
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 75 }}
          transition={{ duration: 0.92, delay: 0.15, ease: PREMIUM_EASE }}
          className="relative flex items-end justify-center self-end lg:col-span-6 lg:justify-end xl:col-span-6"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[490px] xl:max-w-[530px]">
            {/* Enhanced Animated Tech Decorative Layer (Strictly Behind Person Image) */}
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

              {/* 2. Outer Dashed Orbital HUD Ring + Dual Glowing Satellites */}
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
                className="btn-cut absolute top-[24%] left-[2%] flex h-11 w-14 items-center justify-center border border-[#32CAE4]/50 bg-[#1B1672]/70 font-mono text-xs font-bold tracking-wider text-[#7CEBFF] shadow-[0_10px_28px_rgba(0,212,255,0.22)] backdrop-blur-md sm:h-12 sm:w-16 sm:text-sm"
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

            {/* Foreground Person Image – Kept Completely Unchanged */}
            <motion.div
              initial={{ opacity: 0, x: 92, y: 22, scale: 0.94 }}
              animate={
                isReady
                  ? { opacity: 1, x: 0, y: 0, scale: 1 }
                  : { opacity: 0, x: 92, y: 22, scale: 0.94 }
              }
              transition={{
                duration: 0.95,
                delay: 0.14,
                ease: PREMIUM_EASE,
              }}
              className="relative z-10 w-full"
            >
              <Image
                src="/images/img1.png"
                alt="Software consultant smiling while holding a laptop"
                width={600}
                height={701}
                priority
                className="block h-auto w-full object-contain object-bottom drop-shadow-[0_22px_42px_rgba(0,0,0,0.36)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

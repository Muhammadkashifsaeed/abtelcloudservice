"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { usePageReady } from "@/components/PageLoader";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export function GalleryHeroSection() {
  const isReady = usePageReady();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Website Templates Gallery Banner"
      className="relative flex min-h-[340px] w-full items-center justify-center overflow-hidden bg-gradient-to-r from-[#3D30BA] via-[#342A9C] to-[#2B237F] py-16 text-white sm:min-h-[380px] sm:py-20 lg:min-h-[420px] lg:py-24"
    >
      {/* Authentic Tiled Circuit-Board Background Pattern (Same as Home Hero) */}
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
        className="pointer-events-none absolute inset-0 origin-center opacity-[0.22]"
      />

      {/* Deep Indigo & Royal Tech Gradient Overlay for Contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#3D30BA]/90 via-[#342A9C]/80 to-[#2B237F]/90"
      />

      {/* Ambient Animated Cyan and Royal Blue Glow Meshes */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.18, 0.28, 0.18],
                x: [0, 15, 0],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#00D4FF]/16 blur-[120px]"
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
        transition={{ duration: 10, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#246BFD]/20 blur-[130px]"
      />

      {/* Center Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center">
          {/* Centered Logo with Ambient Glow and Subtle Zoom Pulse Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={
              isReady
                ? prefersReducedMotion
                  ? { opacity: 1, scale: 1, y: 0 }
                  : {
                      opacity: 1,
                      y: 0,
                      scale: [1, 1.05, 1],
                    }
                : { opacity: 0, scale: 0.92, y: 15 }
            }
            transition={{
              opacity: { duration: 0.65, ease: PREMIUM_EASE },
              y: { duration: 0.65, ease: PREMIUM_EASE },
              scale: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative mb-5 flex items-center justify-center"
          >
            {/* Ambient Cyan Halo Behind Logo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -m-4 rounded-full bg-[#00D4FF]/25 blur-[34px]"
            />
            <Image
              src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
              alt="Abtel Cloud Services"
              width={420}
              height={115}
              priority
              className="relative z-10 h-16 w-auto object-contain drop-shadow-[0_4px_30px_rgba(0,212,255,0.45)] sm:h-20 md:h-24 lg:h-[102px]"
            />
          </motion.div>

          {/* Eyebrow Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.55, delay: 0.12, ease: PREMIUM_EASE }}
            className="mb-3"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF] sm:text-[13px]">
              PORTFOLIO &amp; SHOWCASE
            </span>
          </motion.div>

          {/* Big Centered Heading: WEBSITE TEMPLATES */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.18, ease: PREMIUM_EASE }}
            className="text-3xl font-extrabold uppercase leading-[1.12] tracking-tight text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            WEBSITE TEMPLATES
          </motion.h1>

          {/* Centered Breadcrumb: Home . Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.25, ease: PREMIUM_EASE }}
            className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-slate-300 sm:text-sm"
          >
            <Link
              href="/"
              className="text-slate-300 transition-colors duration-200 hover:text-[#00D4FF]"
            >
              Home
            </Link>
            <span className="font-bold text-[#00D4FF]">.</span>
            <span className="text-[#7DD3FC]">Gallery</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

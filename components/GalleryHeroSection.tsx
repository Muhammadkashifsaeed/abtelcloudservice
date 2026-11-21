"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { usePageReady } from "@/components/PageLoader";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function GalleryHeroSection() {
  const isReady = usePageReady();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Website Templates Gallery Banner"
      className="relative flex min-h-[340px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#070A1E] via-[#0A1032] to-[#070A1E] py-16 text-white sm:min-h-[380px] sm:py-20 lg:min-h-[420px] lg:py-24"
    >
      {/* Background Image: AI 3D Showcase */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={isReady ? { scale: 1 } : { scale: 1.06 }}
        transition={{ duration: 1.25, ease: LUXURY_EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/images/gallery-hero-ai.jpg"
          alt="Curved digital showcase with glowing cybernetic displays"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Deep Obsidian Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070A1E]/88 via-[#0A1032]/72 to-[#070A1E]/88"
      />

      {/* Subtle Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-70"
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
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#00D4FF]/14 blur-[130px]"
      />
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1.1, 0.95, 1.1],
                opacity: [0.16, 0.26, 0.16],
              }
        }
        transition={{ duration: 10, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[140px]"
      />

      {/* Center Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center">
          {/* Centered Logo with Ambient Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={
              isReady
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.92, y: 15 }
            }
            transition={{ duration: 0.65, ease: LUXURY_EASE }}
            className="relative mb-5 flex items-center justify-center"
          >
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
              className="relative z-10 h-16 w-auto object-contain drop-shadow-[0_4px_30px_rgba(0,212,255,0.45)] sm:h-20 md:h-24 lg:h-[96px]"
            />
          </motion.div>

          {/* Eyebrow Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.55, delay: 0.12, ease: LUXURY_EASE }}
            className="mb-3"
          >
            <div className="inline-flex items-center rounded-full border border-[#3D96CE]/35 bg-[#3D96CE]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#3D96CE] backdrop-blur-md shadow-[0_2px_14px_rgba(61,150,206,0.2)]">
              <span>PORTFOLIO &amp; SHOWCASE</span>
            </div>
          </motion.div>

          {/* Big Centered Heading: WEBSITE TEMPLATES */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.7, delay: 0.18, ease: LUXURY_EASE }}
            className="text-3xl font-extrabold uppercase leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[66px]"
          >
            WEBSITE TEMPLATES
          </motion.h1>

          {/* Centered Breadcrumb: Home . Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.25, ease: LUXURY_EASE }}
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

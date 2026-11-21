"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePageReady } from "@/components/PageLoader";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function TermsHeroSection() {
  const isReady = usePageReady();

  return (
    <section
      aria-label="Terms and Conditions Banner"
      className="relative flex min-h-[220px] w-full items-center overflow-hidden bg-gradient-to-b from-[#070A1E] via-[#0A1032] to-[#070A1E] py-10 text-white sm:min-h-[250px] sm:py-12 lg:min-h-[280px] lg:py-14"
    >
      {/* Background Image: AI Enterprise Data Architecture */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={isReady ? { scale: 1 } : { scale: 1.06 }}
        transition={{ duration: 1.25, ease: LUXURY_EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/images/terms-hero-ai.jpg"
          alt="Enterprise cloud governance and infrastructure architecture"
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

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.55, delay: 0.05, ease: LUXURY_EASE }}
            className="mb-3"
          >
            <div className="inline-flex items-center rounded-full border border-[#3D96CE]/35 bg-[#3D96CE]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#3D96CE] backdrop-blur-md shadow-[0_2px_14px_rgba(61,150,206,0.2)]">
              <span>LEGAL &amp; AGREEMENTS</span>
            </div>
          </motion.div>

          {/* Main Heading: "TERMS AND CONDITIONS" */}
          <motion.h1
            initial={{ opacity: 0, x: -35 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -35 }}
            transition={{ duration: 0.7, delay: 0.08, ease: LUXURY_EASE }}
            className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl lg:text-[40px] xl:text-[44px] leading-[1.15]"
          >
            TERMS AND CONDITIONS
          </motion.h1>

          {/* Breadcrumb: "Home . Terms and Conditions" */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.12, ease: LUXURY_EASE }}
            className="mt-3 flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-300 sm:text-sm"
          >
            <Link
              href="/"
              className="text-slate-300 transition-colors duration-200 hover:text-[#00D4FF]"
            >
              Home
            </Link>
            <span className="font-bold text-[#00D4FF]">.</span>
            <span className="text-[#7DD3FC]">Terms and Conditions</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePageReady } from "@/components/PageLoader";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export function AboutHeroSection() {
  const isReady = usePageReady();

  return (
    <section
      aria-label="About Abtel Cloud Services"
      className="relative flex min-h-[380px] w-full items-center overflow-hidden bg-gradient-to-b from-[#120D4A] via-[#1A1464] to-[#120D4A] py-20 text-white sm:min-h-[440px] sm:py-24 lg:min-h-[500px] lg:py-28"
    >
      {/* Background Image with Smooth Subtle Zoom Reveal */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={isReady ? { scale: 1 } : { scale: 1.08 }}
        transition={{ duration: 1.25, ease: PREMIUM_EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/images/software-programe.jpg"
          alt="Software engineers collaborating at dual-monitor workstations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Deep Navy/Indigo Technology Gradient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0E2E]/96 via-[#120D47]/86 to-[#080B26]/68"
      />

      {/* Subtle Ambient Cyan Glow Behind Heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-16 h-80 w-80 -translate-y-1/2 rounded-full bg-[#00D4FF]/16 blur-[110px]"
      />

      {/* Left-Aligned Hero Heading */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isReady ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: PREMIUM_EASE }}
            aria-hidden="true"
            className="mb-5 h-1 w-20 origin-left rounded-full bg-gradient-to-r from-[#246BFD] via-[#0EA5E9] to-[#00D4FF]"
          />

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.65, delay: 0.08, ease: PREMIUM_EASE }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#00D4FF] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
              ABOUT ABTEL CLOUD SERVICES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -64 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -64 }}
            transition={{ duration: 0.85, delay: 0.12, ease: PREMIUM_EASE }}
            className="text-3xl font-extrabold leading-[1.16] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[48px] xl:text-[54px]"
          >
            Work with one of the fastest growing software agencies in the world
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

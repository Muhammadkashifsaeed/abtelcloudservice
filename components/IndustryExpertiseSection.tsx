"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Floating3DRing } from "@/components/Floating3DElements";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

export function IndustryExpertiseSection() {
  return (
    <section
      aria-label="Our Industry Expertise"
      className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#070A1E] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background Image with Smooth Reveal */}
      <motion.div
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: LUXURY_EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/images/enterprise-ai-datacenter-bg.jpg"
          alt="Enterprise blade servers and cloud infrastructure architecture"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Deep Obsidian Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070A1E]/85 via-[#0B1033]/75 to-[#070A1E]/85"
      />

      {/* Ambient Radial Cyan Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D4FF]/12 blur-[120px]"
      />

      {/* 3D Floating Gyroscope Ring Background Element */}
      <Floating3DRing
        size={340}
        color="rgba(0, 212, 255, 0.35)"
        duration={32}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 z-0 pointer-events-none"
      />

      {/* Centered Content */}
      <div className="relative z-10 mx-auto w-full max-w-[920px] px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeDownItem}>
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00D4FF]/15 via-[#2563EB]/10 to-[#00D4FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#00D4FF] backdrop-blur-md shadow-[0_2px_14px_rgba(0,212,255,0.15)]">
              <span>ENTERPRISE CAPABILITIES</span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeDownItem}
            className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[48px] leading-[1.12]"
          >
            <span>Our </span>
            <span className="text-white">
              Industry Expertise
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            We create web applications that optimize workflows, improve efficiency,
            automate appointment scheduling, and more, saving time for employers and
            customers while enhancing the user&rsquo;s experience.
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-8">
            <Link
              href="/about"
              className="group/btn relative inline-flex h-[52px] min-w-[195px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#246BFD] via-[#0C5ADB] to-[#00D4FF] px-8 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(36,107,253,0.5),0_4px_16px_rgba(0,212,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,212,255,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
            >
              {/* Left-to-right white sweep layer */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-[105%] opacity-0 bg-white transition-all duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#070A1E]">
                <span>Discover more</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

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
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.74,
      ease: PREMIUM_EASE,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.74,
      ease: PREMIUM_EASE,
    },
  },
};

export function IndustryExpertiseSection() {
  return (
    <section
      aria-label="Our Industry Expertise"
      className="relative w-full overflow-hidden border-y border-white/10 bg-[#0B0E2E] py-18 text-white sm:py-22 lg:py-26"
    >
      {/* Blade Servers Background Image with Smooth Zoom Reveal */}
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: PREMIUM_EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/images/blade-servers-background.jpg"
          alt="Enterprise blade servers and cloud infrastructure architecture"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Deep Navy Technology Gradient Overlay for High Contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0E2E]/92 via-[#120D47]/84 to-[#080B26]/92"
      />

      {/* Subtle Ambient Center Cyan Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D4FF]/14 blur-[110px]"
      />

      {/* Centered Content */}
      <div className="relative z-10 mx-auto w-full max-w-[920px] px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeDownItem}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D4FF]">
              ENTERPRISE CAPABILITIES
            </span>
          </motion.div>

          <motion.h2
            variants={fadeDownItem}
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-[44px]"
          >
            Our Industry Expertise
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-3xl text-base leading-relaxed text-slate-200/90 sm:text-[17px] lg:text-lg"
          >
            We create web applications that optimize workflows, improve efficiency,
            automate appointment scheduling, and more, saving time for employers and
            customers while enhancing the user&rsquo;s experience.
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-8">
            <Link
              href="/about"
              className="btn-cut group/btn relative inline-flex h-[50px] min-w-[190px] items-center justify-center overflow-hidden bg-[#246BFD] px-8 text-[15px] font-semibold text-white shadow-[0_6px_22px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,212,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
            >
              {/* Left-to-right white sweep layer */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
              />
              <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                <span>Discover more</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

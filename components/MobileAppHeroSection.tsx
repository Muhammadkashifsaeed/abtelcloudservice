"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Terminal } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export function MobileAppHeroSection() {
  return (
    <section
      aria-label="Mobile App Development Hero"
      className="relative flex min-h-[440px] w-full items-center overflow-hidden bg-gradient-to-r from-[#3D30BA] via-[#342A9C] to-[#2B237F] py-14 sm:min-h-[480px] sm:py-16 lg:min-h-[520px] lg:py-20"
    >
      {/* 1. Background Image with Neon Coding Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Neon Coding.png"
          alt="Mobile App Development and Modern Tech Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center"
        />
        {/* Deep Indigo & Royal Tech Gradient Overlays – Seamlessly Matching Header Theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D30BA]/92 via-[#342A9C]/85 to-[#2B237F]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B237F] via-transparent to-[#3D30BA]/60" />
      </div>

      {/* Decorative Subtle Glowing Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#246BFD]/20 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-[#00D4FF]/15 blur-[100px]"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Breadcrumb / Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: PREMIUM_EASE }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D4FF]"
          >
            <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Home • Services • Mobile App Development</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Mobile App Development
          </motion.h1>

          {/* Sleek Luminous Accent Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: PREMIUM_EASE }}
            style={{ transformOrigin: "left" }}
            className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#246BFD] to-transparent"
          />

          {/* Description Paragraph – Verbatim as requested */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: PREMIUM_EASE }}
            className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-relaxed"
          >
            At Abtel Cloud Services, we offer a comprehensive suite of mobile app development services designed to bring your ideas to life and drive your business forward. Our team of seasoned developers and designers is committed to delivering high-quality, innovative mobile solutions that meet your specific needs. Here’s how we can help
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: PREMIUM_EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="btn-cut group relative inline-flex h-12 items-center justify-center overflow-hidden bg-[#246BFD] px-7 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(36,107,253,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,212,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0"
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#0B0E2E]">
                <span>Start Your Mobile App Project</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>

            <a
              href="#mobile-services-grid"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00D4FF]/60 hover:bg-white/10 hover:text-[#00D4FF]"
            >
              <span className="flex items-center gap-2">
                <Terminal className="h-4 w-4" aria-hidden="true" />
                <span>Explore All 30 Capabilities</span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

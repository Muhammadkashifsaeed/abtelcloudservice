"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Terminal } from "lucide-react";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function UiUxDesignHeroSection() {
  return (
    <section
      aria-label="UI/UX Design Services Hero"
      className="relative flex min-h-[440px] w-full items-center overflow-hidden bg-gradient-to-b from-[#070A1E] via-[#0A1032] to-[#070A1E] py-14 sm:min-h-[480px] sm:py-16 lg:min-h-[520px] lg:py-20 text-white"
    >
      {/* Background Image with AI UI/UX Design Studio Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ui-ux-hero-ai.jpg"
          alt="UI/UX Design and Product Experience Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A1E]/92 via-[#0A1032]/80 to-[#070A1E]/92" />
      </div>

      {/* Subtle Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-70"
      />

      {/* Decorative Subtle Glowing Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#2563EB]/20 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-[#00D4FF]/14 blur-[100px]"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Breadcrumb / Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: LUXURY_EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-[#3D96CE]/35 bg-[#3D96CE]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#3D96CE] backdrop-blur-md shadow-[0_2px_14px_rgba(61,150,206,0.2)]"
          >
            <Palette className="h-3.5 w-3.5 text-[#3D96CE]" aria-hidden="true" />
            <span>Home • Services • UI/UX Design</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: LUXURY_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.12]"
          >
            UI/UX Design
          </motion.h1>

          {/* Sleek Luminous Accent Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: LUXURY_EASE }}
            style={{ transformOrigin: "left" }}
            className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#246BFD] to-transparent shadow-[0_0_12px_#00D4FF]"
          />

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: LUXURY_EASE }}
            className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-relaxed"
          >
            At Abtel Cloud Services, we specialize in delivering exceptional UI/UX design services that elevate your digital presence and user experience. Our dedicated team combines creativity with a deep understanding of user behavior to craft interfaces that captivate and engage. Here’s how we can transform your vision into reality
          </motion.p>

          {/* Action CTAs with Signature White Sweep */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: LUXURY_EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#3D96CE] hover:bg-[#2C7DAF] px-7 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(61,150,206,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(61,150,206,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D96CE]"
            >
              {/* Luminous sheen animation on hover (no white fill) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
              />
              <span className="relative z-10 flex items-center gap-2 text-white">
                <span>Start Your Design Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
              </span>
            </Link>

            <a
              href="#uiux-services-grid"
              className="group/btn2 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] px-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3D96CE]/60 hover:shadow-[0_8px_24px_rgba(61,150,206,0.3)]"
            >
              {/* Luminous sheen animation on hover (no white fill) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn2:translate-x-full"
              />
              <span className="relative z-10 flex items-center gap-2 text-white">
                <Terminal className="h-4 w-4" aria-hidden="true" />
                <span>Explore Design Capabilities</span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

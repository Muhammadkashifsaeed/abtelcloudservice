"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePageReady } from "@/components/PageLoader";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function ContactHeroSection() {
  const isReady = usePageReady();

  return (
    <section
      aria-label="Contact Us"
      className="relative flex min-h-[360px] w-full items-center overflow-hidden bg-gradient-to-b from-[#070A1E] via-[#0A1032] to-[#070A1E] py-16 text-white sm:min-h-[400px] sm:py-20 lg:min-h-[440px] lg:py-24"
    >
      {/* Background Image: AI Tech Operations Command Visual */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={isReady ? { scale: 1 } : { scale: 1.06 }}
        transition={{ duration: 1.25, ease: LUXURY_EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/images/about-hero-ai.jpg"
          alt="Global customer operations and digital technical support"
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

      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-16 h-80 w-80 -translate-y-1/2 rounded-full bg-[#00D4FF]/14 blur-[110px]"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.65, delay: 0.08, ease: LUXURY_EASE }}
            className="mb-3"
          >
            <div className="inline-flex items-center rounded-full border border-[#3D96CE]/35 bg-[#3D96CE]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#3D96CE] backdrop-blur-md shadow-[0_2px_14px_rgba(61,150,206,0.2)]">
              <span>GET IN TOUCH WITH US</span>
            </div>
          </motion.div>

          {/* Main Heading: "Contact us" */}
          <motion.h1
            initial={{ opacity: 0, x: -45 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -45 }}
            transition={{ duration: 0.8, delay: 0.12, ease: LUXURY_EASE }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[50px] xl:text-[56px] leading-[1.12]"
          >
            Contact us
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.75, delay: 0.18, ease: LUXURY_EASE }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Want to discuss a project with us? We have highly agile people to work on your projects and are available 24/7 to help you!
          </motion.p>

          {/* Breadcrumb: "Home . Contact Us" */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.7, delay: 0.24, ease: LUXURY_EASE }}
            className="mt-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-300 sm:text-[15px]"
          >
            <Link
              href="/"
              className="text-slate-300 transition-colors duration-200 hover:text-[#00D4FF]"
            >
              Home
            </Link>
            <span className="font-bold text-[#00D4FF]">.</span>
            <span className="text-[#7DD3FC]">Contact Us</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

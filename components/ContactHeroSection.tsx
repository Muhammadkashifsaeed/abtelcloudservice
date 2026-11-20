"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePageReady } from "@/components/PageLoader";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export function ContactHeroSection() {
  const isReady = usePageReady();

  return (
    <section
      aria-label="Contact Us"
      className="relative flex min-h-[360px] w-full items-center overflow-hidden bg-gradient-to-r from-[#3D30BA] via-[#342A9C] to-[#2B237F] py-16 text-white sm:min-h-[400px] sm:py-20 lg:min-h-[440px] lg:py-24"
    >
      {/* Background Image: a-businessman-using-a-smartphone.jpg with Smooth Subtle Zoom Reveal */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={isReady ? { scale: 1 } : { scale: 1.08 }}
        transition={{ duration: 1.25, ease: PREMIUM_EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/images/a-businessman-using-a-smartphone.jpg"
          alt="Businessman using a smartphone"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Deep Indigo & Royal Tech Gradient Overlays – Seamlessly Matching Header Theme */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#3D30BA]/92 via-[#342A9C]/85 to-[#2B237F]/80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2B237F] via-transparent to-[#3D30BA]/60"
      />

      {/* Ambient Color Glow Meshes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-16 h-80 w-80 -translate-y-1/2 rounded-full bg-[#00D4FF]/16 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 h-80 w-80 -translate-y-1/2 rounded-full bg-[#246BFD]/14 blur-[120px]"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.65, delay: 0.08, ease: PREMIUM_EASE }}
            className="mb-3"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D4FF]">
              GET IN TOUCH WITH US
            </span>
          </motion.div>

          {/* Main Heading: "Contact us" */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.85, delay: 0.12, ease: PREMIUM_EASE }}
            className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[50px] xl:text-[54px]"
          >
            Contact us
          </motion.h1>

          {/* Subtext: "Want to discuss a project with us? We have highly agile people to work on your projects and are available 24/7 to help you!" */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, delay: 0.18, ease: PREMIUM_EASE }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            Want to discuss a project with us? We have highly agile people to work on your projects and are available 24/7 to help you!
          </motion.p>

          {/* Breadcrumb: "Home . Contact Us" */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.24, ease: PREMIUM_EASE }}
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

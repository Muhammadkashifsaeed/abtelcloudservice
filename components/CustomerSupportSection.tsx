"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const leftVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -55 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: LUXURY_EASE,
    },
  },
};

export function CustomerSupportSection() {
  return (
    <section
      aria-label="Customer Support"
      className="relative w-full overflow-hidden border-t border-[var(--border-light)] section-light bg-white text-[var(--text-dark)]"
    >
      {/* Subtle Ambient Warm Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 bottom-0 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-[100px] lg:h-96 lg:w-96"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 px-4 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-12">
        {/* Left Content Column */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="flex flex-col items-start pb-4 text-left lg:col-span-6 lg:py-16"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeDownItem}>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-light)] border border-[var(--primary)]/30 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)] shadow-xs">
              <span>Customer Support</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeLeftItem}
            className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-[#101B3F] sm:text-4xl lg:text-[44px] leading-[1.14]"
          >
            Need more information about{" "}
            <span className="relative inline-block text-[#0284C7]">
              services?
              <CurvedUnderline color="#0284C7" />
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeLeftItem}
            className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-base"
          >
            Our dedicated technical consultants in San Antonio are available around the clock to
            answer questions, review architectures, and discuss your roadmap.
          </motion.p>

          {/* CTA Button – Fade Left */}
          <motion.div variants={fadeLeftItem} className="mt-8">
            <Link
              href="/contact"
              className="btn-sheen group/btn relative inline-flex h-[52px] min-w-[190px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#22C7F2] px-8 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(34,199,242,0.4)] transition-all duration-300 hover:shadow-[0_10px_32px_rgba(34,199,242,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span className="relative z-10 flex items-center gap-2.5 text-white">
                <span>Contact us</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Column (Fade Right) */}
        <motion.div
          initial={{ opacity: 0, x: 75, scale: 0.95, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.85, ease: LUXURY_EASE }}
          className="relative flex items-end justify-center self-end [perspective:1000px] lg:col-span-6 lg:justify-end"
        >
          <div className="relative [transform-style:preserve-3d]">
            {/* Luminous Ambient Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-[var(--primary)]/15 via-[var(--secondary)]/15 to-transparent blur-2xl"
            />

            {/* 3D Floating Support Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-[var(--border-light)] bg-white/95 px-4 py-2.5 backdrop-blur-xl shadow-lg [transform:translateZ(30px)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary-light)] text-[var(--primary)] shadow-sm">
                <Clock className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[var(--text-dark)]">24/7 Priority Support</span>
                <span className="text-[11px] text-[var(--text-muted)]">Live SLA Guarantee</span>
              </div>
            </motion.div>

            {/* 3D Floating Security Chip */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-[var(--border-light)] bg-white/95 px-3.5 py-2 backdrop-blur-xl shadow-md [transform:translateZ(25px)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--success-light)] text-[var(--success)]">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-xs font-bold text-[var(--text-dark)]">Verified Cloud Experts</span>
            </motion.div>

            <Image
              src="/images/img_9.png"
              alt="Customer support specialist smiling while wearing a headset"
              width={600}
              height={572}
              className="pointer-events-none relative z-10 block h-auto w-full max-w-[380px] object-contain object-bottom drop-shadow-[0_20px_36px_rgba(20,22,26,0.12)] sm:max-w-[430px] lg:max-w-[480px] [transform:translateZ(10px)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

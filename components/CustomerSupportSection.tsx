"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

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
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: PREMIUM_EASE,
    },
  },
};

const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.78,
      ease: PREMIUM_EASE,
    },
  },
};

export function CustomerSupportSection() {
  return (
    <section
      aria-label="Customer Support"
      className="relative w-full overflow-hidden border-t border-slate-100 bg-white"
    >
      {/* Subtle Ambient Soft Cyan/Indigo Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 bottom-0 h-80 w-80 rounded-full bg-[#00D4FF]/10 blur-[100px] lg:h-96 lg:w-96"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 px-4 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-12">
        {/* Left Content Column */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-start pb-4 text-left lg:col-span-6 lg:py-16"
        >
          <motion.div variants={fadeDownItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              <span>Customer Support</span>
            </span>
          </motion.div>

          <motion.h2
            variants={fadeLeftItem}
            className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.16] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px]"
          >
            Need more information about services?
          </motion.h2>

          <motion.p
            variants={fadeLeftItem}
            className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#475569] sm:text-base"
          >
            Our dedicated technical consultants are available around the clock to
            answer questions, review architectures, and discuss your roadmap.
          </motion.p>

          <motion.div variants={fadeLeftItem} className="mt-8">
            <Link
              href="/contact"
              className="btn-cut group/btn relative inline-flex h-[50px] min-w-[180px] items-center justify-center overflow-hidden bg-[#246BFD] px-8 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
            >
              {/* Left-to-right white sweep layer */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
              />
              <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                <span>Contact us</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.88, ease: PREMIUM_EASE }}
          className="relative flex items-end justify-center self-end lg:col-span-6 lg:justify-end"
        >
          <Image
            src="/images/img_9.png"
            alt="Customer support specialist smiling while wearing a headset"
            width={600}
            height={572}
            className="pointer-events-none block h-auto w-full max-w-[380px] object-contain object-bottom drop-shadow-[0_20px_36px_rgba(15,23,42,0.14)] sm:max-w-[430px] lg:max-w-[480px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

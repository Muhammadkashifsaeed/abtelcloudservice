"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
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
      className="relative w-full overflow-hidden border-t border-slate-200/80 bg-white text-[#0B0E14]"
    >
      {/* Subtle Ambient Lime Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 bottom-0 h-80 w-80 rounded-full bg-[var(--brand-lime)]/[0.04] blur-[120px] lg:h-96 lg:w-96"
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
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-black uppercase tracking-[0.16em] text-slate-800 shadow-xs">
              <Sparkles className="h-3 w-3 text-black" />
              <span>Dedicated Partner Support</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeLeftItem}
            className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[44px] leading-[1.14]"
          >
            Need more information about{" "}
            <span className="relative inline-block text-black">
              our agency services?
              <CurvedUnderline color="#FF5E14" />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeLeftItem}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base"
          >
            Contact us for expert guidance on custom software, mobile apps, digital marketing funnels, and e-commerce platforms. Our senior engineers respond within hours.
          </motion.p>

          {/* CTA Action: Link to Contact page */}
          <motion.div variants={fadeLeftItem} className="mt-8">
            <Link
              href="/contact"
              className="btn-sheen group/btn relative inline-flex h-[50px] min-w-[180px] items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] px-8 text-[15px] font-black text-black shadow-[0_4px_20px_rgba(255, 94, 20,0.35)] transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:shadow-[0_8px_30px_rgba(255, 94, 20,0.55)] hover:-translate-y-0.5 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <span>Contact us</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Column with Support Specialist */}
        <div className="relative flex items-end justify-center self-end lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: 75, scale: 0.95, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="relative flex w-full max-w-[460px] items-end justify-center"
          >
            {/* Ambient Background Glow Behind Specialist */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-[var(--brand-lime)]/15 via-slate-100 to-transparent blur-2xl"
            />

            {/* Floating Top Badge: 24/7 Availability */}
            <div className="absolute top-10 -left-6 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 backdrop-blur-xl shadow-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-black">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#0B0E14]">Rapid Response</span>
                <span className="text-[10px] font-semibold text-slate-500">Avg. &lt; 2 Hours</span>
              </div>
            </div>

            {/* Floating Bottom Badge: Verified Trust */}
            <div className="absolute -bottom-2 -left-2 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2 backdrop-blur-xl shadow-xl">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-bold text-[#0B0E14]">Direct Lead Developer Access</span>
            </div>

            {/* Specialist Image Container */}
            <div className="relative z-10 w-full flex items-end justify-center">
              <Image
                src="/images/img_9.png"
                alt="Abtel Cloud Services customer support specialist ready to assist with software inquiries"
                width={920}
                height={720}
                className="pointer-events-none block h-auto w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[480px] object-contain object-bottom drop-shadow-[0_20px_36px_rgba(15,23,42,0.14)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

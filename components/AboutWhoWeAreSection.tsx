"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

const cardContainerVariants: Variants = {
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
  hidden: { opacity: 0, y: -22 },
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
  hidden: { opacity: 0, x: -46 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.78,
      ease: PREMIUM_EASE,
    },
  },
};

export function AboutWhoWeAreSection() {
  return (
    <section
      aria-label="Who We Are"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FFFFFF] pt-14 pb-0 sm:pt-16 lg:pt-20"
    >
      {/* Subtle Circuit-Board Technology Pattern */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/bg_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "210px 210px",
        }}
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Side – Large White Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -64, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.82, ease: PREMIUM_EASE }}
            className="lg:col-span-6 lg:pb-16"
          >
            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative rounded-2xl border border-slate-200/80 bg-white/95 p-8 shadow-[0_18px_52px_rgba(15,23,42,0.07)] backdrop-blur-sm sm:p-11 lg:p-14"
            >
              {/* Top Accent Line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-10 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent"
              />

              <motion.div variants={fadeDownItem}>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                  <span>WHO WE ARE</span>
                </span>
              </motion.div>

              <motion.h2
                variants={fadeLeftItem}
                className="mt-4 text-3xl font-extrabold leading-[1.16] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px]"
              >
                We are experts in developing software across all technologies.
              </motion.h2>

              <motion.p
                variants={fadeLeftItem}
                className="mt-5 text-[15px] leading-relaxed text-[#475569] sm:text-base lg:text-[17px]"
              >
                We believe expertise is about matching personal abilities with
                clients&rsquo; needs. Our team can ensure this alignment in your
                projects.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Side – Standing Image */}
          <motion.div
            initial={{ opacity: 0, y: 72, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.92, delay: 0.1, ease: PREMIUM_EASE }}
            className="flex items-end justify-center self-end lg:col-span-6 lg:justify-end"
          >
            <Image
              src="/images/img2.png"
              alt="Software development expert reviewing project details on mobile"
              width={600}
              height={666}
              className="pointer-events-none block h-auto w-full max-w-[360px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(15,23,42,0.18)] sm:max-w-[420px] lg:max-w-[480px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

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
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: LUXURY_EASE,
    },
  },
};

const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: LUXURY_EASE,
    },
  },
};

export function AboutWhoWeAreSection() {
  return (
    <section
      aria-label="Who We Are"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] pt-14 pb-0 sm:pt-16 lg:pt-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Side – Large Content Card (Fade Left) */}
          <motion.div
            initial={{ opacity: 0, x: -70, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="lg:col-span-6 lg:pb-16"
          >
            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="relative rounded-3xl border border-slate-200/90 bg-white/95 p-8 shadow-[0_18px_52px_rgba(15,23,42,0.07)] backdrop-blur-sm sm:p-11 lg:p-14"
            >
              {/* Top Accent Line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-10 top-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#2563EB] via-[#00D4FF] to-[#2563EB]"
              />

              {/* Eyebrow – Fade Down */}
              <motion.div variants={fadeDownItem}>
                <div className="inline-flex items-center rounded-full bg-blue-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0C5ADB] shadow-sm">
                  <span>WHO WE ARE</span>
                </div>
              </motion.div>

              {/* Heading – Fade Left */}
              <motion.h2
                variants={fadeLeftItem}
                className="mt-5 text-3xl font-extrabold tracking-tight text-[#090D24] sm:text-4xl lg:text-[42px] leading-[1.16]"
              >
                We are experts in developing software across all technologies.
              </motion.h2>

              {/* Description – Fade Left */}
              <motion.p
                variants={fadeLeftItem}
                className="mt-5 text-[15px] leading-relaxed text-slate-600 sm:text-base lg:text-[17px]"
              >
                We believe expertise is about matching personal abilities with
                clients&rsquo; needs. Our team can ensure this alignment in your
                projects.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Side – Standing Image (Fade Right) */}
          <motion.div
            initial={{ opacity: 0, x: 70, y: 30, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.85, delay: 0.1, ease: LUXURY_EASE }}
            className="flex items-end justify-center self-end lg:col-span-6 lg:justify-end"
          >
            <Image
              src="/images/img2.png"
              alt="Software development expert reviewing project details on mobile"
              width={600}
              height={666}
              className="pointer-events-none block h-auto w-full max-w-[360px] object-contain object-bottom drop-shadow-[0_24px_40px_rgba(15,23,42,0.18)] sm:max-w-[420px] lg:max-w-[480px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

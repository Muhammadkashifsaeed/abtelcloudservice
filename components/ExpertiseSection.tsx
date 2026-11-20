"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/utils";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

const leftCardContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const fadeLeftChild: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: PREMIUM_EASE,
    },
  },
};

interface FeatureCardItem {
  title: string;
  description: string;
  highlighted?: boolean;
}

const FEATURE_CARDS: FeatureCardItem[] = [
  {
    title: "Consulting Your Startup Plans",
    description:
      "Our team ensures your startup's success with confidential and secure plan execution.",
  },
  {
    title: "Hiring for your Project",
    description:
      "Our team ensures your startup succeeds with secure, confidential planning.",
    highlighted: true,
  },
  {
    title: "Bug Fixes",
    description:
      "Our teams not only aid in developing new software but also help in fixing bugs.",
  },
];

export function ExpertiseSection() {
  return (
    <section
      aria-label="Software Development Expertise"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#F8FAFC] pt-12 pb-0 sm:pt-14 lg:pt-16"
    >
      {/* Subtle Light Technology Circuit-Board Pattern */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="expertise-circuit-pattern"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 44 H54 L76 66 H138 L160 44 H240 M0 168 H38 L60 146 H116 L138 168 H202 L220 186 H240 M42 0 V44 M186 0 V60 L166 80 V132 L188 154 V240 M98 240 V194 L120 172"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.2"
            />
            <path
              d="M0 108 H30 L48 126 H92 M154 98 H208 L226 116 H240 M68 240 V214 L86 196 H148 L168 216 H212"
              fill="none"
              stroke="#BFDBFE"
              strokeWidth="1"
            />
            <circle cx="54" cy="44" r="3" fill="#94A3B8" fillOpacity="0.65" />
            <circle cx="138" cy="66" r="3.5" fill="none" stroke="#38BDF8" strokeOpacity="0.55" strokeWidth="1.3" />
            <circle cx="186" cy="60" r="3" fill="#94A3B8" fillOpacity="0.65" />
            <circle cx="166" cy="132" r="4" fill="none" stroke="#94A3B8" strokeOpacity="0.6" strokeWidth="1.3" />
            <circle cx="92" cy="126" r="2.8" fill="#38BDF8" fillOpacity="0.5" />
            <circle cx="60" cy="146" r="3" fill="#94A3B8" fillOpacity="0.6" />
            <circle cx="202" cy="168" r="3.5" fill="none" stroke="#38BDF8" strokeOpacity="0.55" strokeWidth="1.3" />
            <circle cx="120" cy="172" r="2.8" fill="#94A3B8" fillOpacity="0.6" />
            <rect
              x="108"
              y="90"
              width="18"
              height="18"
              rx="2"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#expertise-circuit-pattern)" />
      </svg>

      {/* Main Content Grid */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-0">
          {/* Left Content Card – Fade-Left Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -92, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: PREMIUM_EASE }}
            className="relative z-10 lg:col-span-4 lg:pb-12"
          >
            <motion.div
              variants={leftCardContentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="rounded-2xl border border-slate-200/80 bg-white/95 p-8 shadow-[0_16px_48px_rgba(15,23,42,0.07)] backdrop-blur-sm sm:p-9 lg:pr-12"
            >
              <motion.div variants={fadeLeftChild}>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
                  Technology Leadership
                </span>
              </motion.div>

              <motion.h2
                variants={fadeLeftChild}
                className="mt-4 text-2xl font-bold leading-snug tracking-tight text-[#0F172A] sm:text-[27px]"
              >
                We are experts in developing software across all technologies.
              </motion.h2>

              <motion.p
                variants={fadeLeftChild}
                className="mt-4 text-[15px] leading-relaxed text-[#475569]"
              >
                We believe expertise is about matching personal abilities with
                clients&rsquo; needs. Our team can ensure this alignment in your
                projects.
              </motion.p>

              <motion.div variants={fadeLeftChild} className="mt-7">
                <Link
                  href="/services"
                  className="btn-cut group/btn relative inline-flex h-[46px] min-w-[154px] items-center justify-center overflow-hidden bg-[#246BFD] px-8 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
                >
                  {/* Left-to-right white sweep layer */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                  />
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                    <span>Learn more</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center Prominent Image */}
          <motion.div
            initial={{ opacity: 0, y: 72, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.92, delay: 0.12, ease: PREMIUM_EASE }}
            className="relative z-20 flex items-end justify-center self-end lg:col-span-4 lg:-mx-10 xl:-mx-12"
          >
            <Image
              src="/images/img2.png"
              alt="Software development expert reviewing project details on mobile"
              width={600}
              height={666}
              className="pointer-events-none block h-auto w-full max-w-[340px] object-contain object-bottom drop-shadow-[0_20px_36px_rgba(15,23,42,0.18)] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px]"
            />
          </motion.div>

          {/* Right Side – Three Vertically Stacked Feature Cards */}
          <div className="relative z-10 flex flex-col gap-4 pb-10 lg:col-span-4 lg:gap-5 lg:pb-12">
            {FEATURE_CARDS.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 96, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ x: -4 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.82,
                  delay: 0.14 + index * 0.13,
                  ease: PREMIUM_EASE,
                }}
              >
                <div
                  className={cn(
                    "flex items-start gap-4 rounded-2xl px-6 py-5 transition-all duration-300 lg:py-6 lg:pl-10",
                    card.highlighted
                      ? "bg-gradient-to-r from-[#246BFD] via-[#0EA5E9] to-[#00D4FF] text-white shadow-[0_16px_38px_rgba(14,165,233,0.32)] hover:shadow-[0_20px_46px_rgba(14,165,233,0.42)]"
                      : "border border-slate-200/80 bg-white/95 shadow-[0_8px_26px_rgba(15,23,42,0.06)] hover:border-[#00D4FF]/40 hover:shadow-[0_14px_36px_rgba(0,212,255,0.14)]"
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 transition-transform duration-200",
                      card.highlighted
                        ? "border-white/30 bg-white/10 text-white"
                        : "border-[#00D4FF] bg-[#00D4FF]/10 text-[#0099FF]"
                    )}
                  >
                    <CheckCircle2 className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <h3
                      className={cn(
                        "text-lg font-bold leading-snug tracking-tight",
                        card.highlighted ? "text-white" : "text-[#0F172A]"
                      )}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 text-sm leading-relaxed",
                        card.highlighted ? "text-white/90" : "text-[#475569]"
                      )}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

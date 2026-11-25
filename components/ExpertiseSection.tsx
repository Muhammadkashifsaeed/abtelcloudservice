"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/utils";
import { Card3D } from "@/components/Card3D";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const leftCardContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeDownChild: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: LUXURY_EASE,
    },
  },
};

const fadeLeftChild: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
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
    title: "Strategic Technology Consulting",
    description:
      "Architecture planning, cloud roadmap design, and technology selection tailored to your business goals.",
  },
  {
    title: "Dedicated Engineering Squads",
    description:
      "Vetted full-stack developers and cloud architects ready to integrate directly into your sprint cycles.",
    highlighted: true,
  },
  {
    title: "Application Modernization & QA",
    description:
      "Continuous code refactoring, automated testing, and SLA-backed maintenance for mission-critical apps.",
  },
];

export function ExpertiseSection() {
  return (
    <section
      aria-label="Software Development Expertise"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] pt-14 pb-0 sm:pt-16 lg:pt-20"
    >
      {/* Subtle Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-0">
          {/* Left Content Card – Fade Left */}
          <motion.div
            initial={{ opacity: 0, x: -70, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="relative z-10 lg:col-span-4 lg:pb-14"
          >
            <motion.div
              variants={leftCardContentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="rounded-3xl border border-slate-200/90 bg-white/95 p-8 shadow-[0_16px_48px_rgba(15,23,42,0.07)] backdrop-blur-sm sm:p-10 lg:pr-12"
            >
              {/* Eyebrow – Fade Down */}
              <motion.div variants={fadeDownChild}>
                <span className="eyebrow-premium">
                  Technology Leadership
                </span>
              </motion.div>

              {/* Heading – Fade Left */}
              <motion.h2
                variants={fadeLeftChild}
                className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#0B0E14] sm:text-[28px]"
              >
                We are experts in developing software across all technologies.
              </motion.h2>

              {/* Description – Fade Left */}
              <motion.p
                variants={fadeLeftChild}
                className="mt-4 text-[15px] leading-relaxed text-slate-600"
              >
                We believe expertise is about matching personal abilities with
                clients&rsquo; needs. Our team can ensure this alignment in your
                projects.
              </motion.p>

              {/* CTA Button – Fade Up */}
              <motion.div variants={fadeUpChild} className="mt-8">
                <Link
                  href="/services"
                  className="btn-sheen group/btn relative inline-flex h-[46px] min-w-[160px] items-center justify-center overflow-hidden rounded-lg bg-[var(--brand-lime)] px-7 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ring-1 ring-inset ring-white/20"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    <span>Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center Prominent Image – Fade Up */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.85, delay: 0.1, ease: LUXURY_EASE }}
            className="relative z-20 flex items-end justify-center self-end lg:col-span-4 lg:-mx-10 xl:-mx-12"
          >
            {/* Luminous Ambient Backlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 h-[440px] w-[360px] rounded-full bg-gradient-to-t from-[var(--brand-lime)]/20 via-slate-100 to-transparent blur-[70px]"
            />
            <Image
              src="/images/img2.png"
              alt="Software development expert reviewing project details on mobile"
              width={600}
              height={666}
              className="pointer-events-none relative z-10 block h-auto w-full max-w-[340px] object-contain object-bottom drop-shadow-[0_24px_40px_rgba(15,23,42,0.18)] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px]"
            />
          </motion.div>

          {/* Right Side – Three 3D Feature Cards – Fade Right */}
          <div className="relative z-10 flex flex-col gap-4 pb-10 lg:col-span-4 lg:gap-5 lg:pb-14">
            {FEATURE_CARDS.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 70, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1 + index * 0.1,
                  ease: LUXURY_EASE,
                }}
              >
                <Card3D
                  maxTilt={5}
                  scaleOnHover={1.02}
                  glareOpacity={card.highlighted ? 0.15 : 0.08}
                  borderGlowColor={card.highlighted ? "rgba(14, 71, 57, 0.4)" : "rgba(15, 23, 42, 0.15)"}
                  className="rounded-2xl"
                >
                  <div
                    className={cn(
                      "flex items-start gap-4 rounded-2xl px-6 py-5 transition-all duration-300 lg:py-6 lg:pl-8 [transform-style:preserve-3d]",
                      card.highlighted
                        ? "bg-black text-white shadow-xl"
                        : "border border-slate-200/90 bg-white/95 shadow-[0_6px_24px_rgba(15,23,42,0.05)] backdrop-blur-sm hover:border-black"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 [transform:translateZ(18px)]",
                        card.highlighted
                          ? "bg-[var(--brand-lime)] text-white shadow-[0_0_12px_rgba(14, 71, 57,0.5)]"
                          : "bg-slate-100 text-black shadow-sm"
                      )}
                    >
                      <CheckCircle2 className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                    </span>

                    <div className="min-w-0 [transform:translateZ(12px)]">
                      <h3
                        className={cn(
                          "text-lg font-bold leading-snug tracking-tight",
                          card.highlighted ? "text-white" : "text-[#0B0E14]"
                        )}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-1.5 text-sm leading-relaxed",
                          card.highlighted ? "text-slate-300" : "text-slate-600"
                        )}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

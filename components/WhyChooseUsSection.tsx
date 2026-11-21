"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const leftVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
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

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

export interface WhyChooseFeatureCard {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

export interface WhyChooseUsSectionProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaHref?: string;
  cards?: WhyChooseFeatureCard[];
}

const DEFAULT_WHY_CHOOSE_CARDS: WhyChooseFeatureCard[] = [
  {
    title: "You Own The Code",
    description:
      "Complete IP ownership and repository rights transfer from sprint one.",
    imageSrc: "/images/You%20Own%20The%20Code.png",
    imageWidth: 38,
    imageHeight: 49,
  },
  {
    title: "Top 5% IT Talent",
    description:
      "Rigorous vetting ensures only senior software engineers and cloud architects join your build.",
    imageSrc: "/images/top-5-percent-it-talent.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "Transparent Collaboration",
    description:
      "Direct Slack/Teams integration, daily standups, and full real-time sprint visibility.",
    imageSrc: "/images/Communication.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "Rapid Software Delivery",
    description:
      "Agile velocity with scalable engineering squads designed for tight production deadlines.",
    imageSrc: "/images/Rapid%20Software%20Delivery.png",
    imageWidth: 43,
    imageHeight: 49,
  },
];

const DEFAULT_DESCRIPTION =
  "We create lightning-fast, SEO-friendly user interfaces using cutting-edge technologies that perform flawlessly across all devices. Our expertise in both monolithic and micro-frontend solutions ensures performance and scalability, delivering smooth user experiences and high conversion rates.";

export function WhyChooseUsSection({
  eyebrow = "WHY CHOOSE US",
  heading = "Built-With-Experience",
  description = DEFAULT_DESCRIPTION,
  ctaHref = "/about",
  cards = DEFAULT_WHY_CHOOSE_CARDS,
}: WhyChooseUsSectionProps) {
  return (
    <section
      aria-label="Why Choose Us"
      className="relative w-full overflow-hidden border-t border-slate-100 bg-gradient-to-b from-[#EBF3FA] via-[#F4F8FC] to-[#FFFFFF] py-18 sm:py-22 lg:py-26"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Content Column */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="flex flex-col items-start text-left lg:col-span-5"
          >
            {/* Eyebrow – Fade Down */}
            <motion.div variants={fadeDownItem}>
              <div className="inline-flex items-center rounded-full bg-[#3D96CE]/10 border border-[#3D96CE]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#3D96CE] shadow-sm">
                <span>{eyebrow}</span>
              </div>
            </motion.div>

            {/* Heading – Fade Left */}
            <motion.h2
              variants={fadeLeftItem}
              className="mt-4 text-3xl font-extrabold tracking-tight text-[#101B3F] sm:text-4xl lg:text-[44px] leading-[1.15]"
            >
              {heading}
            </motion.h2>

            {/* Description – Fade Left */}
            <motion.p
              variants={fadeLeftItem}
              className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base"
            >
              {description}
            </motion.p>

            {/* CTA Button – Fade Up */}
            <motion.div variants={fadeUpItem} className="mt-8">
              <Link
                href={ctaHref}
                className="group/btn relative inline-flex h-[50px] min-w-[180px] items-center justify-center overflow-hidden rounded-full bg-[#3D96CE] px-8 text-[15px] font-semibold text-white shadow-[0_4px_18px_rgba(61,150,206,0.4)] transition-all duration-300 hover:bg-[#2C7DAF] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(61,150,206,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D96CE]"
              >
                {/* Luminous sheen animation on hover (no white fill) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
                />
                <span className="relative z-10 flex items-center gap-2.5 text-white">
                  <span>Discover more</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right 2x2 Feature Cards Grid – Fade Left/Right Flow */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7 sm:gap-6">
            {cards.map((card, index) => {
              const cardInitial =
                index % 2 === 0
                  ? { opacity: 0, x: -45, y: 25 }
                  : { opacity: 0, x: 45, y: 25 };

              return (
                <motion.div
                  key={card.title}
                  initial={cardInitial}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: LUXURY_EASE,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.025,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-7 sm:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.06),0_0_1px_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-sm transition-all duration-300 hover:border-[#3D96CE]/60 hover:shadow-[0_20px_45px_rgba(61,150,206,0.2),0_10px_20px_rgba(48,62,153,0.12)]"
                >
                  {/* Top Subtle Sky Glow Accent */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 h-[2.5px] rounded-full bg-gradient-to-r from-transparent via-[#3D96CE]/40 to-transparent transition-all duration-300 group-hover:via-[#3D96CE] group-hover:shadow-[0_0_10px_#3D96CE]"
                  />

                  {/* Light Sheen Sweep Across Card on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full rounded-3xl bg-gradient-to-r from-transparent via-[#3D96CE]/[0.08] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />

                  <div>
                    <div className="flex items-center justify-between">
                      {/* Clean Icon Box */}
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/90 p-2.5 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-[#3D96CE]/60 group-hover:shadow-[0_0_24px_rgba(61,150,206,0.25)]">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 -m-2 rounded-2xl bg-[#3D96CE]/10 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <Image
                          src={card.imageSrc}
                          alt={card.title}
                          width={card.imageWidth}
                          height={card.imageHeight}
                          className="relative z-10 h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                        />
                      </div>

                      <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#303E99] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold tracking-tight text-[#101B3F] transition-colors group-hover:text-[#303E99]">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

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
      staggerChildren: 0.11,
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

function getWhyCardInitial(index: number) {
  return { opacity: 0, x: 64, y: index < 2 ? -18 : 18, scale: 0.96 };
}

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
      "You have the ownership rights for everything we code for you.",
    imageSrc: "/images/You%20Own%20The%20Code.png",
    imageWidth: 38,
    imageHeight: 49,
  },
  {
    title: "Top 5% IT Talent",
    description: "we pick only the best experienced software developers.",
    imageSrc: "/images/top-5-percent-it-talent.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "Communication",
    description: "Our Agile developers can perform with real time feedback.",
    imageSrc: "/images/Communication.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "Rapid Software Delivery",
    description:
      "We can deploy larger team for your project with tight deadlines.",
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
      className="relative w-full overflow-hidden border-t border-slate-100 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FFFFFF] py-16 sm:py-20 lg:py-24"
    >
      {/* Tiled Circuit-Board Background */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/bg_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "210px 210px",
        }}
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Content Column */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start text-left lg:col-span-5"
          >
            <motion.div variants={fadeDownItem}>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeLeftItem}
              className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[44px]"
            >
              {heading}
            </motion.h2>

            <motion.p
              variants={fadeLeftItem}
              className="mt-5 text-[15px] leading-relaxed text-[#475569] sm:text-base"
            >
              {description}
            </motion.p>

            <motion.div variants={fadeLeftItem} className="mt-8">
              <Link
                href={ctaHref}
                className="btn-cut group/btn relative inline-flex h-[48px] min-w-[172px] items-center justify-center overflow-hidden bg-[#246BFD] px-8 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
              >
                {/* Left-to-right white sweep layer */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                  <span>Learn more</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side – Four Feature Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={getWhyCardInitial(index)}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.72,
                  delay: index * 0.1,
                  ease: PREMIUM_EASE,
                }}
                className="flex"
              >
                <article className="group relative flex w-full flex-col items-center rounded-2xl border border-slate-200/80 bg-white/95 px-6 py-8 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00D4FF]/50 hover:shadow-[0_18px_44px_rgba(0,212,255,0.15)] sm:px-7 sm:py-9">
                  {/* Top Glowing Cyan Accent Line */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent transition-opacity duration-300 group-hover:via-[#00D4FF]"
                  />

                  {/* Centered Image Icon with bottom-to-top blue sweep hover animation */}
                  <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 p-2 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-[#00D4FF]/60 group-hover:shadow-[0_8px_20px_rgba(0,212,255,0.25)]">
                    {/* Bottom-to-top blue sweep layer */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                    />
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        width={card.imageWidth}
                        height={card.imageHeight}
                        unoptimized
                        className="h-[46px] w-auto object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                  </div>

                  {/* Cyan-Colored Heading */}
                  <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight text-[#0284C7] transition-colors duration-200 group-hover:text-[#00A3C4] sm:text-[19px]">
                    {card.title}
                  </h3>

                  {/* Grey Description Text */}
                  <p className="mt-2.5 text-sm leading-relaxed text-[#475569] sm:text-[15px]">
                    {card.description}
                  </p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  Code2,
  Headphones,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export type WhyChooseIconKey =
  | "code"
  | "messages"
  | "award"
  | "rocket"
  | "shield"
  | "headphones"
  | "users";

const ICON_MAP: Record<WhyChooseIconKey, LucideIcon> = {
  code: Code2,
  messages: MessagesSquare,
  award: Award,
  rocket: Rocket,
  shield: ShieldCheck,
  headphones: Headphones,
  users: Users,
};

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

export interface WhyChooseFeatureCard {
  title: string;
  description: string;
  iconName?: WhyChooseIconKey;
  icon?: LucideIcon;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
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
    description: "Full intellectual property ownership rights for every line of code we engineer for you.",
    iconName: "code",
  },
  {
    title: "Agile Communication",
    description: "Direct lead developer access, transparent milestone roadmaps, and real-time sprint feedback.",
    iconName: "messages",
  },
  {
    title: "Top 5% Senior Talent",
    description: "Vetted senior engineers, modern UI/UX architects, and digital marketing growth specialists.",
    iconName: "award",
  },
  {
    title: "Rapid Sprint Delivery",
    description: "High-velocity team scaling and agile sprint cycles designed to meet tight market deadlines.",
    iconName: "rocket",
  },
];

const DEFAULT_DESCRIPTION =
  "We create lightning-fast, high-converting digital products using cutting-edge technologies that perform flawlessly across all devices. Our agile engineering approach ensures scalability, security, and measurable startup growth.";

export function WhyChooseUsSection({
  eyebrow = "Why Choose Us",
  heading = "Built-With-Experience",
  description = DEFAULT_DESCRIPTION,
  ctaHref = "/about",
  cards = DEFAULT_WHY_CHOOSE_CARDS,
}: WhyChooseUsSectionProps) {
  return (
    <section
      aria-label="Why Choose Us"
      className="relative w-full overflow-hidden border-y border-slate-200/80 bg-[#F8FAFC] py-20 sm:py-24 lg:py-28 text-[#0B0E14]"
    >
      {/* Subtle Dot Grid Texture for Tech Feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(#94A3B8_1px,transparent_1px)] bg-[size:28px_28px]"
      />

      {/* Subtle Ambient Brand Lime Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 rounded-full bg-[var(--brand-lime)]/[0.08] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[var(--brand-lime)]/[0.06] blur-[150px]"
      />

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
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-slate-800 shadow-xs">
                <Sparkles className="h-3 w-3 text-black" />
                <span>{eyebrow}</span>
              </div>
            </motion.div>

            {/* Heading – Fade Left */}
            <motion.h2
              variants={fadeLeftItem}
              className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[44px] leading-[1.15]"
            >
              Built-With-
              <span className="relative inline-block text-[var(--brand-lime)]">
                Experience
                <CurvedUnderline color="#0E4739" />
              </span>
              {heading && (heading.includes(",") || heading.toLowerCase().includes("scalable"))
                ? heading.substring(heading.indexOf(","))
                : ""}
            </motion.h2>

            {/* Description – Fade Left */}
            <motion.p
              variants={fadeLeftItem}
              className="mt-4 text-[15px] sm:text-base leading-relaxed text-slate-600"
            >
              {description}
            </motion.p>

            {/* CTA Button – Fade Left */}
            <motion.div variants={fadeLeftItem} className="mt-8">
              <Link
                href={ctaHref}
                className="btn-sheen group/btn relative inline-flex h-[50px] min-w-[180px] items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] px-8 text-[15px] font-black text-white shadow-[0_4px_20px_rgba(14, 71, 57,0.35)] transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:shadow-[0_8px_30px_rgba(14, 71, 57,0.55)] hover:-translate-y-0.5 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right 2x2 Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7 sm:gap-6">
            {cards.map((card, index) => {
              const cardInitial =
                index % 2 === 0
                  ? { opacity: 0, x: -55, y: 25, filter: "blur(3px)" }
                  : { opacity: 0, x: 55, y: 25, filter: "blur(3px)" };

              return (
                <motion.div
                  key={card.title}
                  initial={cardInitial}
                  whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: LUXURY_EASE,
                  }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-black hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Top Subtle Lime Accent Bar */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 h-[2.5px] rounded-full bg-gradient-to-r from-transparent via-[var(--brand-lime)] to-transparent"
                  />

                  <div>
                    {/* Modern Premium Solid Black Icon Container with Brand Accent */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-[var(--brand-lime)] shadow-sm transition-all duration-300 group-hover:scale-108 group-hover:shadow-[0_0_20px_rgba(14, 71, 57,0.35)]">
                      {(() => {
                        const IconComponent =
                          (card.iconName ? ICON_MAP[card.iconName] : undefined) ||
                          card.icon ||
                          Code2;
                        return (
                          <IconComponent
                            className="h-7 w-7 transition-transform duration-300 group-hover:scale-105"
                            aria-hidden="true"
                          />
                        );
                      })()}
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-black">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>

                  {/* Subtle Bottom Accent Indicator */}
                  <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-slate-800">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--brand-lime)] ring-1 ring-black" />
                    <span>Verified Agency Standard</span>
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

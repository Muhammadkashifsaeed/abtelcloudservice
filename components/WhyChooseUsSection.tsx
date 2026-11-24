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
      className="relative w-full overflow-hidden border-y border-slate-200/80 bg-[#FAFAFA] py-20 lg:py-24 text-slate-900"
    >
      {/* Subtle Dot Grid Texture for Tech Feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/90 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 shadow-2xs">
                <Sparkles className="h-3 w-3 text-[#2563EB]" />
                <span>{eyebrow}</span>
              </div>
            </motion.div>

            {/* Heading – Fade Left */}
            <motion.h2
              variants={fadeLeftItem}
              className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] leading-[1.15]"
            >
              Built-With-
              <span className="relative inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Experience
                <CurvedUnderline color="#2563EB" />
              </span>
              {heading && (heading.includes(",") || heading.toLowerCase().includes("scalable"))
                ? heading.substring(heading.indexOf(","))
                : ""}
            </motion.h2>

            {/* Description – Fade Left */}
            <motion.p
              variants={fadeLeftItem}
              className="mt-4 text-base leading-relaxed text-[#475569] max-w-xl"
            >
              {description}
            </motion.p>

            {/* CTA Button – Fade Left */}
            <motion.div variants={fadeLeftItem} className="mt-8">
              <Link
                href={ctaHref}
                className="btn-sheen group/btn relative inline-flex h-11 min-w-[160px] items-center justify-center overflow-hidden rounded-lg bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
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
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                >
                  {/* Top Subtle Accent Bar */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
                  />

                  <div>
                    {/* Modern Premium Solid Icon Container with Brand Accent */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 shadow-2xs transition-all duration-200 group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white">
                      {(() => {
                        const IconComponent =
                          (card.iconName ? ICON_MAP[card.iconName] : undefined) ||
                          card.icon ||
                          Code2;
                        return (
                          <IconComponent
                            className="h-6 w-6 transition-transform duration-200 group-hover:scale-105"
                            aria-hidden="true"
                          />
                        );
                      })()}
                    </div>

                    <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#2563EB]">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                      {card.description}
                    </p>
                  </div>

                  {/* Subtle Bottom Accent Indicator */}
                  <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
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

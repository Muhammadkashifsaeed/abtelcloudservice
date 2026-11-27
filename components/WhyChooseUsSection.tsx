"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Code2,
  Headphones,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

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
  description = DEFAULT_DESCRIPTION,
  ctaHref = "/about",
  cards = DEFAULT_WHY_CHOOSE_CARDS,
}: WhyChooseUsSectionProps) {
  return (
    <section
      aria-label="Why Choose Us"
      className="relative w-full overflow-hidden border-y border-slate-200/80 bg-[#FAFAFA] py-20 lg:py-24 text-slate-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-start text-left lg:col-span-5">
            <Reveal variant="fade-down">
              <span className="eyebrow-premium">{eyebrow}</span>
            </Reveal>

            <Reveal variant="fade-left" delay={0.08}>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] leading-[1.15]">
                Built-With-
                <span
                  className="relative inline-block"
                  style={{ fontFamily: "var(--font-serif,'Georgia',serif)", fontStyle: "italic", fontWeight: 700, background: "linear-gradient(135deg,#E11D48,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  Experience
                </span>
              </h2>
            </Reveal>

            <Reveal variant="fade-left" delay={0.14}>
              <p className="mt-4 text-base leading-relaxed text-[#475569] max-w-xl">{description}</p>
            </Reveal>

            <Reveal variant="fade-left" delay={0.2} className="mt-8">
              <Link
                href={ctaHref}
                className="btn-sheen group/btn relative inline-flex h-11 min-w-[160px] items-center justify-center overflow-hidden rounded-lg bg-[#E11D48] px-6 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 transition-all duration-200 hover:bg-[#BE123C] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7 sm:gap-6">
            {cards.map((card, index) => {
              const IconComponent =
                (card.iconName ? ICON_MAP[card.iconName] : undefined) || card.icon || Code2;
              const variant = index % 2 === 0 ? "fade-left" : "fade-right";
              return (
                <Reveal key={card.title} variant={variant} delay={index * 0.1} className="h-full">
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-rose-500/40 to-transparent"
                    />

                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-[#E11D48] border border-rose-100 shadow-2xs transition-all duration-200 group-hover:scale-105 group-hover:bg-[#E11D48] group-hover:text-white">
                        <IconComponent className="h-6 w-6 transition-transform duration-200 group-hover:scale-105" aria-hidden="true" />
                      </div>

                      <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#E11D48]">
                        {card.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">{card.description}</p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
                      <span>Verified Agency Standard</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
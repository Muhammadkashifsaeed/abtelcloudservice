"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Cloud, Globe } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface CoreServiceCardItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Code2;
  href: string;
}

const CORE_CARDS: CoreServiceCardItem[] = [
  {
    id: "software-dev",
    title: "Custom Software Development",
    description:
      "Our custom software development team recruits versatile developers and technical experts who understand and meet your project's unique requirements.",
    icon: Code2,
    href: "/services",
  },
  {
    id: "server-management",
    title: "Cloud Services",
    description:
      "Our deep AWS, Azure, and Google Cloud prowess ensures custom cloud solutions for operational efficiency and innovative business expansion",
    icon: Cloud,
    href: "/services",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Design and code custom, from-scratch web solutions that engage users and compel interactions at every step.",
    icon: Globe,
    href: "/services",
  },
];

export function ServicesCoreCardsSection() {
  return (
    <section
      aria-label="Core Technology Practices"
      className="relative z-20 w-full border-b border-slate-200/90 bg-slate-50/90 py-6 sm:py-8"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {CORE_CARDS.map((card, idx) => {
            const variant =
              idx === 0 ? "fade-left" : idx === 1 ? "fade-up" : "fade-right";

            return (
              <Reveal key={card.title} variant={variant} delay={0.08 + idx * 0.08}>
                <div className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-black hover:shadow-md">
                  <div className="flex items-start gap-3.5">
                    {/* Sleek Black Icon Box matching Home Page */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-[var(--brand-lime)] shadow-xs transition-transform duration-300 group-hover:scale-105">
                      <card.icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-base font-bold text-[#0B0E14] leading-snug transition-colors group-hover:text-black">
                        {card.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={card.href}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 transition-colors hover:text-[var(--brand-lime-hover)] hover:underline"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

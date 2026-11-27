"use client";

import React from "react";
import { Code2, Cloud, Globe } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface CoreServiceCardItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Code2;
}

const CORE_CARDS: CoreServiceCardItem[] = [
  {
    id: "software-dev",
    title: "Custom Software Development",
    description:
      "Our custom software development team recruits versatile developers and technical experts who understand and meet your project's unique requirements.",
    icon: Code2,
  },
  {
    id: "server-management",
    title: "Cloud Services",
    description:
      "Our deep AWS, Azure, and Google Cloud prowess ensures custom cloud solutions for operational efficiency and innovative business expansion",
    icon: Cloud,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Design and code custom, from-scratch web solutions that engage users and compel interactions at every step.",
    icon: Globe,
  },
];

export function ServicesCoreCardsSection() {
  return (
    <section
      aria-label="Core Technology Practices"
      className="relative z-20 w-full border-b border-slate-200/90 bg-slate-50/90 py-6 sm:py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {CORE_CARDS.map((card, idx) => {
            const variant =
              idx === 0 ? "fade-left" : idx === 1 ? "fade-up" : "fade-right";

            return (
              <Reveal key={card.title} variant={variant} delay={0.08 + idx * 0.08}>
                <div className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:border-slate-200/90">
                  <div className="flex items-start gap-3.5">
                    {/* Sleek Black Icon Box matching Home Page */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-[var(--brand-lime)] shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(14,71,57,0.4)] group-hover:bg-[var(--brand-lime)] group-hover:text-white">
                      <card.icon className="h-5 w-5 transition-colors duration-300" aria-hidden="true" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-base font-bold text-[#0B0E14] leading-snug transition-colors group-hover:text-[var(--brand-lime)]">
                        {card.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle animated accent bar on hover */}
                  <div className="mt-4 h-0.5 w-full overflow-hidden bg-slate-100">
                    <div
                      className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[var(--brand-lime)] via-[#E2F93C] to-[var(--brand-lime)] transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100"
                      aria-hidden="true"
                    />
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

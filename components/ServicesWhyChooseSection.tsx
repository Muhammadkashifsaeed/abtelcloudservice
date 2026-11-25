'use client';

import { motion } from 'framer-motion';
import {
  MessageSquare,
  Code,
  Award,
  Zap,
} from 'lucide-react';

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

interface WhyChooseItem {
  title: string;
  description: string;
  icon: typeof MessageSquare;
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: 'Communication',
    description: 'Our Agile developers work with real-time feedback loops, keeping you aligned at every sprint.',
    icon: MessageSquare,
  },
  {
    title: 'You Own The Code',
    description: 'Full ownership rights for everything we build — IP, source code, and deliverables are yours.',
    icon: Code,
  },
  {
    title: 'Top 5% IT Talent',
    description: 'We hire only the best experienced software developers through rigorous technical screening.',
    icon: Award,
  },
  {
    title: 'Rapid Software Delivery',
    description: 'Scale up instantly with larger teams to meet tight deadlines without compromising quality.',
    icon: Zap,
  },
];

export function ServicesWhyChooseSection() {
  return (
    <section
      aria-label="Why Choose abtelcloudservices"
      className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#080A0F] py-12 sm:py-14 lg:py-16 text-white"
    >
      {/* Background Image: AI Enterprise Datacenter */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'url("/images/enterprise-ai-datacenter-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      {/* Deep Obsidian Tech Gradient Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080A0F]/95 via-[#0C101A]/88 to-[#080A0F]/95" />

      {/* Ambient Meshes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-lime)]/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Center Header – Fade Down */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: LUXURY_EASE }}
            className="mb-2"
          >
            <span className="eyebrow-premium-dark">
              STAND OUT PERFORMANCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: LUXURY_EASE }}
            className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:whitespace-nowrap"
          >
            WHY CHOOSE ABTELCLOUDSERVICES?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: LUXURY_EASE }}
            className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Here is how we stand out from our competition
          </motion.p>
        </div>

        {/* 4 Feature Cards – Fade Left, Up, Right */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const cardInitial =
              index === 0
                ? { opacity: 0, x: -36, y: 15 }
                : index === 3
                  ? { opacity: 0, x: 36, y: 15 }
                  : { opacity: 0, y: 32 };

            return (
              <motion.div
                key={item.title}
                initial={cardInitial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.62,
                  delay: index * 0.1,
                  ease: LUXURY_EASE,
                }}
              >
                <div className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--brand-lime)]/50 hover:bg-white/[0.07] hover:shadow-[0_16px_36px_rgba(14, 71, 57,0.2)]">
                  {/* Icon Box with Solid Black Background */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-black p-3 shadow-lg shadow-black/60 transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--brand-lime)] group-hover:shadow-[0_0_20px_rgba(14, 71, 57,0.35)] group-hover:bg-[var(--brand-lime)] group-hover:text-white">
                    <item.icon className="h-9 w-9 transition-all duration-300 group-hover:scale-110" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[var(--brand-lime)]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-white/85">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

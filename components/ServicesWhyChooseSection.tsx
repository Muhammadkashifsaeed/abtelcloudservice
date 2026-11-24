"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

interface WhyChooseItem {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Communication",
    description: "Our Agile developers can perform with real time feedback",
    imageSrc: "/images/Communication.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "You Own The Code",
    description: "You have the ownership rights for everything we code for you",
    imageSrc: "/images/you-own-the-code.png",
    imageWidth: 38,
    imageHeight: 49,
  },
  {
    title: "Top 5% IT Talent",
    description: "We pick only the best experienced software developers",
    imageSrc: "/images/top-5-percent-it-talent.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "Rapid Software Delivery",
    description: "We can deploy larger team for your project with tight deadlines",
    imageSrc: "/images/rapid-software-delivery.png",
    imageWidth: 43,
    imageHeight: 49,
  },
];

export function ServicesWhyChooseSection() {
  return (
    <section
      aria-label="Why Choose abtelcloudservices"
      className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#080A0F] py-12 sm:py-14 lg:py-16 text-white"
    >
      {/* Background Image: AI Enterprise Datacenter */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/enterprise-ai-datacenter-bg.jpg"
          alt="AI Enterprise Data Center Server Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep Obsidian Tech Gradient Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#080A0F]/95 via-[#0C101A]/88 to-[#080A0F]/95"
        />
      </div>

      {/* Ambient Meshes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-lime)]/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Center Header – Fade Down */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: LUXURY_EASE }}
            className="mb-2"
          >
            <div className="inline-flex items-center rounded-full border border-[var(--brand-lime)]/35 bg-[var(--brand-lime)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-lime)] backdrop-blur-md shadow-[0_2px_14px_rgba(156, 238, 105,0.2)]">
              <span>STAND OUT PERFORMANCE</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: LUXURY_EASE }}
            className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:whitespace-nowrap"
          >
            WHY CHOOSE{" "}
            <span className="text-[var(--brand-lime)]">
              abtelcloudservices?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: LUXURY_EASE }}
            className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg"
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
              <div className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--brand-lime)]/50 hover:bg-white/[0.07] hover:shadow-[0_16px_36px_rgba(156, 238, 105,0.2)]">
                {/* Icon Box with Solid Black Background */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-black p-3 shadow-lg shadow-black/60 transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--brand-lime)] group-hover:shadow-[0_0_20px_rgba(156,238,105,0.35)]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[var(--brand-lime)]">
                  {item.title}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-300">
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

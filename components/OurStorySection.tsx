"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView, type Variants } from "framer-motion";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

const fadeLeftContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      ease: PREMIUM_EASE,
    },
  },
};

const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -68 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: PREMIUM_EASE,
    },
  },
};

const fadeRightContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeRightItem: Variants = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.76,
      ease: PREMIUM_EASE,
    },
  },
};

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

const STATS: StatItem[] = [
  { label: "Worldwide Clients", value: 150, suffix: "+" },
  { label: "Client Retention", value: 96, suffix: "%" },
  { label: "Years Experience", value: 10, suffix: "+" },
];

function AnimatedStatValue({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: PREMIUM_EASE,
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flex items-baseline justify-center gap-0.5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px]"
    >
      <span>{displayValue}</span>
      {suffix && <span className="text-[#00D4FF]">{suffix}</span>}
    </div>
  );
}

export interface OurStorySectionProps {
  backgroundImage?: string;
}

export function OurStorySection({
  backgroundImage = "/images/it-engineer-specialist.jpg",
}: OurStorySectionProps) {
  return (
    <section
      aria-label="Our Story"
      className="relative w-full overflow-hidden border-t border-white/10 bg-[#0B0E2E] py-18 text-white sm:py-22 lg:py-26"
    >
      {/* Background Image with Smooth Zoom Reveal */}
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.25, ease: PREMIUM_EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src={backgroundImage}
          alt="Dedicated software development engineering team and technology operations"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Deep Navy/Blue Overlay for High Contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0E2E]/94 via-[#120D47]/86 to-[#080B26]/92"
      />

      {/* Subtle Ambient Cyan Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-[560px] -translate-x-1/2 rounded-full bg-[#00D4FF]/14 blur-[110px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Top Row: Left Heading & Right Paragraph */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Heading Column */}
          <motion.div
            variants={fadeLeftContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6"
          >
            <motion.div variants={fadeDownItem}>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D4FF] sm:text-sm">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              variants={fadeLeftItem}
              className="mt-4 text-3xl font-extrabold leading-[1.16] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-[44px]"
            >
              A Trusted Team of Software Developers, Pioneers in Innovative
              Technology!
            </motion.h2>
          </motion.div>

          {/* Right Paragraph Column */}
          <motion.div
            variants={fadeRightContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center lg:col-span-6 lg:pt-6"
          >
            <motion.p
              variants={fadeRightItem}
              className="text-base font-semibold leading-relaxed text-white sm:text-lg"
            >
              We are an{" "}
              <span className="text-[#00D4FF]">ORGANIZED TEAM</span>, dedicated
              to maximizing client ROI.
            </motion.p>

            <motion.blockquote
              variants={fadeRightItem}
              className="mt-4 border-l-2 border-[#00D4FF] pl-5 text-[15px] leading-relaxed text-slate-200/90 sm:text-base"
            >
              &ldquo;We help you access the developers of your choice. Our core
              values include principled service, prioritizing client benefits,
              and achieving innovative excellence in software
              development.&rdquo;
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Bottom Stats Row */}
        <div className="mt-14 border-t border-white/15 pt-10 lg:mt-16 lg:pt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: PREMIUM_EASE,
                }}
                className="flex flex-col items-center justify-center px-6 text-center"
              >
                <AnimatedStatValue value={stat.value} suffix={stat.suffix} />
                <p className="mt-2.5 text-sm font-semibold tracking-wide text-slate-200 sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

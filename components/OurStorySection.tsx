"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView, type Variants } from "framer-motion";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

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
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: LUXURY_EASE,
    },
  },
};

const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: LUXURY_EASE,
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
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: LUXURY_EASE,
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
      ease: LUXURY_EASE,
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flex items-baseline justify-center gap-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[58px]"
    >
      <span>{displayValue}</span>
      {suffix && <span className="text-[var(--brand-lime)]">{suffix}</span>}
    </div>
  );
}

export interface OurStorySectionProps {
  backgroundImage?: string;
  className?: string;
}

export function OurStorySection({
  backgroundImage = "/images/it-engineer-specialist.jpg",
  className = "",
}: OurStorySectionProps = {}) {
  return (
    <section
      aria-label="Our Story"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`relative w-full overflow-hidden border-t border-white/[0.08] bg-[#080A0F] py-20 text-white sm:py-24 lg:py-28 ${className}`}
    >
      {/* Background Image with Smooth Subtle Scale & High-Contrast Overlay */}
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 1.2, ease: LUXURY_EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src={backgroundImage}
          alt="Dedicated software development engineering team and technology operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Deep Obsidian Pitch-Black High-Contrast Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080A0F]/90 via-[#0D111A]/85 to-[#080A0F]/90"
      />

      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-[560px] -translate-x-1/2 rounded-full bg-[var(--brand-lime)]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Row: Left Heading & Right Paragraph */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Heading Column – Fade Left & Down */}
          <motion.div
            variants={fadeLeftContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="lg:col-span-6"
          >
            <motion.div variants={fadeDownItem}>
              <div className="inline-flex items-center rounded-full bg-[var(--brand-lime)]/10 border border-[var(--brand-lime)]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-lime)] backdrop-blur-md">
                <span>Our Story</span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeLeftItem}
              className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px] leading-[1.14]"
            >
              A Trusted Team of Software Developers, Pioneers in{" "}
              <span className="relative inline-block" style={{fontFamily:"var(--font-serif,'Georgia',serif)",fontStyle:"italic",fontWeight:700,background:"linear-gradient(135deg,#E11D48,#fb7185)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                Innovative Technology!
              </span>
            </motion.h2>
          </motion.div>

          {/* Right Paragraph Column – Fade Right */}
          <motion.div
            variants={fadeRightContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="flex flex-col justify-center lg:col-span-6 lg:pt-6"
          >
            <motion.p
              variants={fadeRightItem}
              className="text-base font-semibold leading-relaxed text-white sm:text-lg"
            >
              We are an ORGANIZED TEAM, dedicated to maximizing client ROI.
            </motion.p>

            <motion.blockquote
              variants={fadeRightItem}
              className="mt-4 rounded-2xl border-l-2 border-[var(--brand-lime)] bg-white/[0.04] p-4 text-[15px] leading-relaxed text-slate-200 backdrop-blur-sm sm:text-base"
            >
              &ldquo;We help you access the developers of your choice. Our core values include principled service, prioritizing client benefits, and achieving innovative excellence in software development.&rdquo;
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Bottom Stats Row – 3 Animated Metrics */}
        <div className="mt-14 border-t border-white/[0.08] pt-10 lg:mt-16 lg:pt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            {STATS.map((stat, index) => {
              const statInitial =
                index === 0
                  ? { opacity: 0, x: -50, y: 20, filter: "blur(3px)" }
                  : index === 1
                    ? { opacity: 0, y: 50, filter: "blur(3px)" }
                    : { opacity: 0, x: 50, y: 20, filter: "blur(3px)" };

              return (
                <motion.div
                  key={stat.label}
                  initial={statInitial}
                  whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: LUXURY_EASE,
                  }}
                  className="flex flex-col items-center justify-center px-6 text-center"
                >
                  <AnimatedStatValue value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2.5 text-sm font-semibold tracking-wide text-slate-300 sm:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

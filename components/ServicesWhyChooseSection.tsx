"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

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
      aria-label="Why Choose Abtel Cloud Services"
      className="relative w-full overflow-hidden bg-[#0A0E33] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background Image: blade-servers-background.jpg */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/blade-servers-background.jpg"
          alt="Data Center Server Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep Dark Tech Gradient Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0A0E33]/95 via-[#0A0E33]/92 to-[#070A26]/96"
        />
        {/* Subtle Circuit Overlay */}
        <div
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/bg_pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "210px 210px",
          }}
          className="absolute inset-0 opacity-[0.14] mix-blend-screen"
        />
      </div>

      {/* Ambient Meshes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D4FF]/12 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Center Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: PREMIUM_EASE }}
            className="mb-2"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D4FF] sm:text-sm">
              STAND OUT PERFORMANCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.08, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold uppercase leading-[1.15] tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-[44px]"
          >
            WHY CHOOSE abtelcloudservices?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.14, ease: PREMIUM_EASE }}
            className="mt-3.5 text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Here is how we stand out from our competition
          </motion.p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: PREMIUM_EASE,
              }}
              className="flex"
            >
              <article className="group relative flex w-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00D4FF]/60 hover:bg-white/[0.09] hover:shadow-[0_16px_40px_rgba(0,212,255,0.22)] sm:p-7">
                {/* Top Subtle Cyan Glow Accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent transition-opacity duration-300 group-hover:via-[#00D4FF]"
                />

                {/* Centered Image Icon (Static, original colors, no blue hover animation) */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-colors duration-300 group-hover:border-[#00D4FF]/60 group-hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    unoptimized
                    className="h-[44px] w-auto object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight text-[#7DD3FC] transition-colors duration-200 group-hover:text-[#00D4FF] sm:text-[19px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

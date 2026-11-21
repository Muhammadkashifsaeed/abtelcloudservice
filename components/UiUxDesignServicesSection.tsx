"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export interface UiUxServiceCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const UI_UX_SERVICES: UiUxServiceCapability[] = [
  {
    id: "user-centric-approach",
    number: "01",
    title: "User-Centric Approach",
    description:
      "We begin by conducting comprehensive user research and analysis to understand your target audience's needs, behaviors, and expectations. This forms the foundation for creating intuitive and user-friendly designs.",
    imageSrc: "/images/User-Centric Approach.png",
  },
  {
    id: "strategic-design-process",
    number: "02",
    title: "Strategic Design Process",
    description:
      "Our experienced designers employ a strategic approach, starting with wireframing and prototyping to visualize and refine the interface structure and functionality. This iterative process ensures that every design decision aligns with your business goals and enhances usability.",
    imageSrc: "/images/Strategic Design Process.png",
  },
  {
    id: "visual-excellence",
    number: "03",
    title: "Visual Excellence",
    description:
      "We excel in UI design, focusing on creating visually appealing interfaces that not only reflect your brand identity but also provide a seamless user experience. From typography and color schemes to iconography and imagery, every element is meticulously crafted to convey professionalism and enhance user engagement.",
    imageSrc: "/images/Visual Excellence.png",
  },
  {
    id: "responsive-and-adaptive-design",
    number: "04",
    title: "Responsive and Adaptive Design",
    description:
      "Whether designing for web or mobile platforms, we prioritize responsive and adaptive design principles. This ensures that your interface is accessible and functions seamlessly across various devices and screen sizes, catering to the diverse needs of your audience.",
    imageSrc: "/images/Responsive and Adaptive Design.png",
  },
  {
    id: "accessibility-and-inclusivity",
    number: "05",
    title: "Accessibility and Inclusivity",
    description:
      "We adhere to accessibility standards and best practices, ensuring that your interface is usable by all individuals, including those with disabilities. Accessibility features are seamlessly integrated to provide an inclusive experience for every user.",
    imageSrc: "/images/Accessibility and Inclusivity.png",
  },
  {
    id: "iterative-testing-and-refinement",
    number: "06",
    title: "Iterative Testing and Refinement",
    description:
      "Throughout the design process, we conduct usability testing and gather feedback from real users. This iterative approach allows us to identify potential pain points, optimize user flows, and refine designs to achieve the highest level of user satisfaction.",
    imageSrc: "/images/Iterative Testing and Refinement.png",
  },
  {
    id: "design-system-and-consistency",
    number: "07",
    title: "Design System and Consistency",
    description:
      "We establish design systems and UI pattern libraries to maintain consistency across all design elements and interactions. This not only enhances efficiency during design iterations but also ensures a cohesive visual language that strengthens your brand identity.",
    imageSrc: "/images/Design System and Consistency.png",
  },
  {
    id: "collaborative-partnership",
    number: "08",
    title: "Collaborative Partnership",
    description:
      "Your vision and goals are at the heart of our collaboration. We work closely with your team to understand your business objectives, align on design strategies, and deliver solutions that exceed your expectations. Your input and feedback guide our process every step of the way.",
    imageSrc: "/images/Collaborative Partnership.png",
  },
  {
    id: "continuous-support-and-optimization",
    number: "09",
    title: "Continuous Support and Optimization",
    description:
      "Our commitment doesn’t end with delivery. We provide ongoing support, monitoring, and optimization to ensure your UI/UX design continues to meet evolving user needs and industry trends",
    imageSrc: "/images/Continuous Support and Optimization.png",
  },
];

export function UiUxDesignServicesSection() {
  return (
    <section
      id="uiux-services-grid"
      aria-label="UI/UX Design Core Capabilities"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FFFFFF] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Subtle Tech Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0B0E2E06_1px,transparent_1px),linear-gradient(to_bottom,#0B0E2E06_1px,transparent_1px)] bg-[size:40px_40px] opacity-70"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading Header – Fade Down & Up */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: PREMIUM_EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-[#246BFD]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#246BFD]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#246BFD]" aria-hidden="true" />
            <span>Product Experience & Digital Design</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0E2E] sm:text-4xl lg:text-5xl"
          >
            Our Design Methodology & Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: PREMIUM_EASE }}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            From in-depth behavioral research and prototyping to design systems and inclusive accessibility, explore how we build captivating interfaces.
          </motion.p>
        </div>

        {/* 3 Boxes per Row Grid – Fade Left, Fade Up, Fade Right Flow */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {UI_UX_SERVICES.map((service, index) => {
            const colIndex = index % 3;
            const cardInitial =
              colIndex === 0
                ? { opacity: 0, x: -50, y: 20 }
                : colIndex === 1
                ? { opacity: 0, y: 50 }
                : { opacity: 0, x: 50, y: 20 };

            return (
              <motion.article
                key={service.id}
                initial={cardInitial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.7,
                  delay: colIndex * 0.1,
                  ease: PREMIUM_EASE,
                }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#246BFD]/50 hover:shadow-[0_16px_36px_rgba(36,107,253,0.12)]"
              >
                {/* Top Subtle Hover Accent Bar */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 scale-x-0 rounded-t-2xl bg-gradient-to-r from-[#246BFD] via-[#00D4FF] to-[#246BFD] transition-transform duration-300 ease-out group-hover:scale-x-100"
                />

                <div>
                  {/* Top: Centered, Prominently Zoomed Image Badge */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#BFDBFE]/70 bg-gradient-to-br from-[#EEF4FF] via-[#E0ECFF] to-[#DBEAFE] p-3.5 shadow-md shadow-blue-500/5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#246BFD]/50 group-hover:shadow-[0_8px_24px_rgba(36,107,253,0.22)]">
                      <Image
                        src={service.imageSrc}
                        alt={service.title}
                        width={64}
                        height={64}
                        className="h-12 w-12 scale-110 object-contain transition-transform duration-300 group-hover:scale-125"
                      />
                    </div>

                    <span className="mt-3 font-mono text-xs font-semibold tracking-wider text-slate-400 transition-colors group-hover:text-[#246BFD]">
                      #{service.number}
                    </span>

                    {/* Heading */}
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-[#0B0E2E] transition-colors duration-200 group-hover:text-[#246BFD]">
                      {service.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer: Accent Line & Interactive Link */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="h-[2px] w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[#246BFD]" />

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors duration-200 group-hover:text-[#246BFD]"
                  >
                    <span>Inquire Now</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#070A1E] via-[#0A1032] to-[#070A1E] p-8 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#00D4FF]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#00D4FF]">
                Transform Your Interface
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to Craft an Unforgettable Digital Experience?
              </h3>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Our senior product designers and usability researchers work with you to build interfaces that convert visitors into loyal advocates.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#00D4FF] px-8 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,212,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
              >
                {/* Left-to-right white sweep layer */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-[105%] opacity-0 bg-white transition-all duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#070A1E]">
                  <span>Get in Touch With Us</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

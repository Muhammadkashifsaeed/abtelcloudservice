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
      className="relative w-full overflow-hidden bg-[var(--bg-light)] py-20 sm:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: PREMIUM_EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)] shadow-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--primary)]" aria-hidden="true" />
            <span>Product Experience &amp; Digital Design</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[44px]"
          >
            Our Design Methodology &amp; Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: PREMIUM_EASE }}
            className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
          >
            From in-depth behavioral research and prototyping to design systems and inclusive accessibility, explore how we build captivating interfaces.
          </motion.p>
        </div>

        {/* 3 Boxes per Row Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {UI_UX_SERVICES.map((service, index) => {
            const colIndex = index % 3;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: colIndex * 0.08,
                  ease: PREMIUM_EASE,
                }}
                className="group relative flex flex-col justify-between rounded-[24px] border border-[var(--border-light)] bg-white p-7 sm:p-8 card-soft-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--primary)]/40 hover:shadow-[0_20px_42px_rgba(14, 71, 57,0.2)]"
              >
                {/* Large Faded Corner Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-5 select-none font-heading text-4xl font-black text-slate-100 transition-colors group-hover:text-[var(--primary)]/15"
                >
                  {service.number}
                </span>

                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border-light)] bg-[var(--surface-muted)] p-2.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-[var(--primary)]/30">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={44}
                      height={44}
                      className="h-8 w-auto object-contain"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-[var(--text-dark)] transition-colors group-hover:text-[var(--primary)]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-muted)]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-[var(--border-light)] pt-4">
                  <div className="h-[2px] w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--primary)]" />

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] transition-colors duration-200"
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
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[var(--bg-dark)] p-8 sm:p-10 lg:p-12 shadow-2xl"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                Transform Your Interface
              </span>
              <h3
                className="mt-4 text-2xl font-bold tracking-tight text-white !text-white sm:text-3xl"
                style={{ color: "#FFFFFF" }}
              >
                Ready to Craft an Unforgettable Digital Experience?
              </h3>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Our senior product designers and usability researchers work with you to build interfaces that convert visitors into loyal advocates.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-sheen group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] hover:bg-[var(--brand-lime-hover)] px-8 text-sm font-black text-white shadow-[0_4px_20px_rgba(14, 71, 57,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(14, 71, 57,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
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

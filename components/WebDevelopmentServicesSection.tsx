"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Card3D } from "@/components/Card3D";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export interface WebServiceCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const WEB_DEVELOPMENT_SERVICES: WebServiceCapability[] = [
  {
    id: "custom-website-development",
    number: "01",
    title: "Custom Website Development",
    description:
      "We create unique, tailor-made websites that reflect your brand's identity and meet your business goals. Our custom solutions ensure that your website stands out from the competition.",
    imageSrc: "/images/Custom Website Development.png",
  },
  {
    id: "web-application-development",
    number: "02",
    title: "Web Application Development",
    description:
      "Whether you need a simple web app or a complex enterprise solution, our team has the expertise to build scalable, robust, and secure web applications that enhance your operational efficiency.",
    imageSrc: "/images/Web Application Development.png",
  },
  {
    id: "e-commerce-solutions",
    number: "03",
    title: "E-commerce Solutions",
    description:
      "We design and develop e-commerce platforms that provide seamless shopping experiences. From product listings to payment gateways, we ensure every aspect of your online store is optimized for conversions.",
    imageSrc: "/images/E-commerce Solutions.png",
  },
  {
    id: "cms-development",
    number: "04",
    title: "(CMS) Development",
    description:
      "Our CMS solutions empower you to manage your website content easily and efficiently. We specialize in popular CMS platforms like WordPress, Drupal, and Joomla, providing you with the flexibility to update your site with ease.",
    imageSrc: "/images/(CMS) Development.png",
  },
  {
    id: "responsive-web-design",
    number: "05",
    title: "Responsive Web Design",
    description:
      "We create websites that look and function beautifully on any device. Our responsive designs ensure that your site provides an optimal user experience, whether accessed on a desktop, tablet, or smartphone.",
    imageSrc: "/images/Responsive Web Design.png",
  },
  {
    id: "ui-ux-design",
    number: "06",
    title: "UI/UX Design",
    description:
      "Our user interface (UI) and user experience (UX) design services focus on creating intuitive and engaging interfaces that enhance user satisfaction and drive engagement.",
    imageSrc: "/images/ui ux designe.png", // Saved with exact filename as specified
  },
  {
    id: "front-end-development",
    number: "07",
    title: "Front-End Development",
    description:
      "Our front-end developers use the latest technologies to build visually stunning and interactive websites. We ensure that your website is not only attractive but also fast and user-friendly.",
    imageSrc: "/images/Front-End Development.png",
  },
  {
    id: "back-end-development",
    number: "08",
    title: "Back-End Development",
    description:
      "We handle the behind-the-scenes development to ensure your website functions smoothly. Our back-end services include database management, server-side logic, and integration of third-party services.",
    imageSrc: "/images/Back-End Development.png",
  },
  {
    id: "full-stack-development",
    number: "09",
    title: "Full-Stack Development",
    description:
      "Our full-stack developers manage both the front-end and back-end of your website, providing a cohesive and seamless development process. We deliver end-to-end solutions that meet your complete development needs.",
    imageSrc: "/images/Full-Stack Development.png",
  },
  {
    id: "api-development-and-integration",
    number: "10",
    title: "API Development and Integration",
    description:
      "We develop and integrate APIs to enhance your website’s functionality and enable seamless communication between different systems",
    imageSrc: "/images/API Development and Integration.png",
  },
  {
    id: "spa-development",
    number: "11",
    title: "(SPA) Development",
    description:
      "Our team builds SPAs that provide a smooth and fast user experience by loading a single HTML page and dynamically updating content as users interact with the app.",
    imageSrc: "/images/(SPA) Development.png",
  },
  {
    id: "pwa-development",
    number: "12",
    title: "(PWA) Development",
    description:
      "We develop PWAs that combine the best of web and mobile apps. Our PWAs offer fast loading times, offline capabilities, and a native app-like experience.",
    imageSrc: "/images/(PWA) Development.png",
  },
  {
    id: "web-hosting-and-maintenance",
    number: "13",
    title: "Web Hosting and Maintenance",
    description:
      "We provide reliable web hosting services and ongoing maintenance to ensure your website remains secure, up-to-date, and performing optimally.",
    imageSrc: "/images/Web Hosting and Maintenance.png",
  },
  {
    id: "search-engine-optimization",
    number: "14",
    title: "Search Engine Optimization",
    description:
      "Our SEO experts optimize your website to improve its visibility on search engines, driving more organic traffic and increasing your online presence.",
    imageSrc: "/images/Search Engine Optimization.png",
  },
  {
    id: "website-performance-optimization",
    number: "15",
    title: "Website Performance Optimization",
    description:
      "We analyze and optimize your website's performance to ensure fast loading times and a smooth user experience, which is crucial for retaining visitors and improving search engine rankings.",
    imageSrc: "/images/Website Performance Optimization.png",
  },
  {
    id: "database-design-and-management",
    number: "16",
    title: "Database Design and Management",
    description:
      "We design and manage efficient and secure databases to store and organize your website’s data, ensuring quick access and reliable performance.",
    imageSrc: "/images/Database Design and Management.png",
  },
  {
    id: "security-and-compliance",
    number: "17",
    title: "Security and Compliance",
    description:
      "We implement robust security measures to protect your website from cyber threats and ensure compliance with industry standards and regulations.",
    imageSrc: "/images/Security and Compliance.png",
  },
  {
    id: "third-party-integrations",
    number: "18",
    title: "Third-Party Integrations",
    description:
      "We integrate third-party services and tools to enhance your website’s functionality, such as payment gateways, social media platforms, and analytics tools.",
    imageSrc: "/images/Third-Party Integrations.png",
  },
  {
    id: "mobile-first-website-development",
    number: "19",
    title: "Mobile-First Website Development",
    description:
      "We prioritize mobile-first design and development to ensure your website delivers a superior experience on mobile devices, catering to the growing number of mobile users.",
    imageSrc: "/images/Mobile-First Website Development.png",
  },
  {
    id: "user-testing-and-feedback-analysis",
    number: "20",
    title: "User Testing and Feedback Analysis",
    description:
      "We conduct thorough user testing and analyze feedback to identify areas for improvement, ensuring your website meets user needs and expectations.",
    imageSrc: "/images/User Testing and Feedback Analysis.png",
  },
];

export function WebDevelopmentServicesSection() {
  return (
    <section
      id="web-services-grid"
      aria-label="Web Development Core Capabilities"
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
            className="inline-flex items-center gap-2 rounded-full border border-[#3D96CE]/30 bg-[#3D96CE]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#3D96CE]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#3D96CE]" aria-hidden="true" />
            <span>Comprehensive Web Engineering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0E2E] sm:text-4xl lg:text-5xl"
          >
            Our Specialized Web Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: PREMIUM_EASE }}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            From custom architectures and interactive front-ends to enterprise database systems and scalable e-commerce, explore how we build modern web products.
          </motion.p>
        </div>

        {/* 3 Boxes per Row Grid – Fade Left, Fade Up, Fade Right Flow */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {WEB_DEVELOPMENT_SERVICES.map((service, index) => {
            const colIndex = index % 3;
            const cardInitial =
              colIndex === 0
                ? { opacity: 0, x: -50, y: 20 }
                : colIndex === 1
                  ? { opacity: 0, y: 50 }
                  : { opacity: 0, x: 50, y: 20 };

            return (
              <motion.div
                key={service.id}
                initial={cardInitial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.7,
                  delay: colIndex * 0.1,
                  ease: PREMIUM_EASE,
                }}
                className="h-full"
              >
                <Card3D
                  maxTilt={6}
                  scaleOnHover={1.02}
                  glareOpacity={0.12}
                  borderGlowColor="rgba(36, 107, 253, 0.22)"
                  className="h-full rounded-2xl"
                >
                  <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/95 p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_0_1px_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-sm transition-all duration-300 hover:border-[#246BFD]/50 hover:shadow-[0_18px_38px_rgba(36,107,253,0.14)] [transform-style:preserve-3d]">
                    {/* Top Subtle Hover Accent Bar */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 scale-x-0 rounded-t-2xl bg-gradient-to-r from-[#246BFD] via-[#00D4FF] to-[#246BFD] transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />

                    <div>
                      {/* Top Row: Icon Badge & Number Indicator */}
                      <div className="flex items-center justify-between [transform:translateZ(20px)]">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#BFDBFE]/60 bg-gradient-to-br from-[#EEF4FF] to-[#E0ECFF] p-2.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#246BFD]/40 group-hover:shadow-[0_4px_16px_rgba(36,107,253,0.20)]">
                          <Image
                            src={service.imageSrc}
                            alt={service.title}
                            width={44}
                            height={44}
                            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 group-hover:text-[#246BFD] transition-colors">
                          {service.number}
                        </span>
                      </div>

                      {/* Heading */}
                      <h3 className="mt-6 text-xl font-bold tracking-tight text-[#0B0E2E] transition-colors duration-200 group-hover:text-[#246BFD] [transform:translateZ(12px)]">
                        {service.title}
                      </h3>

                      {/* Description Paragraph */}
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 [transform:translateZ(6px)]">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Card Footer: Accent Line & Interactive Link */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 [transform:translateZ(14px)]">
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
                  </article>
                </Card3D>
              </motion.div>
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
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3D96CE]/35 bg-[#3D96CE]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#3D96CE]">
                Ready to Build?
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Have a Web Application or Custom Website in Mind?
              </h3>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Our senior software architects and developers are ready to analyze your requirements and deliver a high-performance, future-proof solution.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#3D96CE] hover:bg-[#2C7DAF] px-8 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(61,150,206,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(61,150,206,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D96CE]"
              >
                {/* Luminous sheen animation on hover (no white fill) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
                />
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

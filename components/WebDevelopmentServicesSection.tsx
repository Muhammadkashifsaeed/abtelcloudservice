"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

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
    imageSrc: "/images/ui ux designe.png",
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
      "We develop and integrate APIs to enhance your website’s functionality and enable seamless communication between different systems.",
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
      className="relative w-full overflow-hidden bg-[var(--bg-light)] py-20 sm:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <span className="eyebrow-premium">
              Comprehensive Web Engineering
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[44px]">
            Our Specialized Web Capabilities
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            From custom architectures and interactive front-ends to enterprise database systems and scalable e-commerce, explore our full spectrum of web solutions.
          </p>
        </div>

        {/* 3 Boxes per Row Grid with Warm Styling */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {WEB_DEVELOPMENT_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: PREMIUM_EASE }}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col justify-between rounded-[24px] border border-[var(--border-light)] bg-white p-7 card-soft-shadow transition-all duration-300 hover:border-[var(--primary)]/40 hover:-translate-y-1.5 hover:shadow-[0_20px_42px_rgba(14, 71, 57,0.2)]">
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

                <div className="mt-6 flex items-center justify-between border-t border-[var(--border-light)] pt-4 text-xs font-bold text-[var(--primary)]">
                  <span>Architecture &amp; Code</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

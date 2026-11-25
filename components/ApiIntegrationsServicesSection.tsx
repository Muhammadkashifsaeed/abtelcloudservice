"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export interface ApiServiceCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const API_INTEGRATIONS_SERVICES: ApiServiceCapability[] = [
  {
    id: "custom-api-development",
    number: "01",
    title: "Custom API Development",
    description:
      "We design and develop custom APIs tailored to your specific business needs, ensuring seamless communication between your systems and applications.",
    imageSrc: "/images/Custom API Development.png",
  },
  {
    id: "third-party-api-integration",
    number: "02",
    title: "Third-Party API Integration",
    description:
      "We integrate third-party APIs to extend the capabilities of your applications, providing access to a wide range of external services and functionalities.",
    imageSrc: "/images/Third-Party API Integration.png",
  },
  {
    id: "restful-api-development",
    number: "03",
    title: "RESTful API Development",
    description:
      "Our team develops RESTful APIs that are scalable, easy to use, and maintain, ensuring smooth interactions between your applications and services.",
    imageSrc: "/images/RESTful API Development.png",
  },
  {
    id: "soap-api-development",
    number: "04",
    title: "SOAP API Development",
    description:
      "We provide SOAP API development services for robust, secure, and standardized communication between your applications and external systems.",
    imageSrc: "/images/SOAP API Development.png",
  },
  {
    id: "api-consulting-and-strategy",
    number: "05",
    title: "API Consulting and Strategy",
    description:
      "Our experts offer strategic consulting to help you define the best API integration approach, ensuring alignment with your business goals and technical requirements.",
    imageSrc: "/images/API Consulting and Strategy.png",
  },
  {
    id: "api-security-and-authentication",
    number: "06",
    title: "API Security and Authentication",
    description:
      "We implement advanced security measures and authentication protocols to protect your APIs and ensure secure data exchanges.",
    imageSrc: "/images/API Security and Authentication.png",
  },
  {
    id: "api-gateway-implementation",
    number: "07",
    title: "API Gateway Implementation",
    description:
      "We set up API gateways to manage, monitor, and secure your APIs, ensuring reliable and efficient API traffic management.",
    imageSrc: "/images/API Gateway Implementation.png",
  },
  {
    id: "api-management-and-monitoring",
    number: "08",
    title: "API Management and Monitoring",
    description:
      "Our team provides comprehensive API management and monitoring services to ensure optimal performance, availability, and reliability of your APIs.",
    imageSrc: "/images/API Management and Monitoring.png",
  },
  {
    id: "microservices-architecture-implementation",
    number: "09",
    title: "Microservices Architecture Implementation",
    description:
      "We design and implement microservices architectures that leverage APIs for efficient, scalable, and flexible application development.",
    imageSrc: "/images/Microservices Architecture Implementation.png",
  },
  {
    id: "api-documentation-and-testing",
    number: "10",
    title: "API Documentation and Testing",
    description:
      "We create detailed API documentation and conduct thorough testing to ensure your APIs are easy to understand, use, and maintain.",
    imageSrc: "/images/API Documentation and Testing.png",
  },
  {
    id: "real-time-api-integration",
    number: "11",
    title: "Real-Time API Integration",
    description:
      "We integrate real-time APIs to enable instantaneous data exchanges and updates, enhancing the responsiveness of your applications.",
    imageSrc: "/images/Real-Time API Integration.png",
  },
  {
    id: "api-versioning-and-lifecycle-management",
    number: "12",
    title: "API Versioning and Lifecycle Management",
    description:
      "Our services include API versioning and lifecycle management to ensure backward compatibility and smooth transitions between API updates.",
    imageSrc: "/images/API Versioning and Lifecycle Management.png",
  },
  {
    id: "payment-gateway-integration",
    number: "13",
    title: "Payment Gateway Integration",
    description:
      "We integrate payment gateway APIs to facilitate secure and seamless online transactions for your e-commerce platforms.",
    imageSrc: "/images/Payment Gateway Integration.png",
  },
  {
    id: "social-media-api-integration",
    number: "14",
    title: "Social Media API Integration",
    description:
      "Our team integrates social media APIs to enhance your applications with social sharing, authentication, and engagement features.",
    imageSrc: "/images/Social Media API Integration.png",
  },
  {
    id: "geolocation-and-mapping-api-integration",
    number: "15",
    title: "Geolocation and Mapping API Integration",
    description:
      "We integrate geolocation and mapping APIs to provide location-based services and features, enhancing the user experience.",
    imageSrc: "/images/Geolocation and Mapping API Integration.png",
  },
  {
    id: "cloud-api-integration",
    number: "16",
    title: "Cloud API Integration",
    description:
      "We integrate cloud APIs to enable seamless interaction with cloud services, enhancing the scalability and flexibility of your applications.",
    imageSrc: "/images/Cloud API Integration.png",
  },
  {
    id: "iot-api-integration",
    number: "17",
    title: "IoT API Integration",
    description:
      "Our IoT API integration services connect your applications with smart devices, enabling real-time data exchanges and innovative IoT solutions.",
    imageSrc: "/images/IoT API Integration.png",
  },
  {
    id: "mobile-api-integration",
    number: "18",
    title: "Mobile API Integration",
    description:
      "We integrate mobile APIs to enhance the functionality and performance of your mobile applications, ensuring a seamless user experience.",
    imageSrc: "/images/Mobile API Integration.png",
  },
  {
    id: "e-commerce-api-integration",
    number: "19",
    title: "E-commerce API Integration",
    description:
      "Our team integrates e-commerce APIs to streamline your online store operations, including product listings, inventory management, and payment processing.",
    imageSrc: "/images/E-commerce API Integration.png",
  },
  {
    id: "crm-api-integration",
    number: "20",
    title: "CRM API Integration",
    description:
      "We integrate CRM APIs to enable seamless data exchanges between your CRM system and other business applications, enhancing customer relationship management.",
    imageSrc: "/images/CRM API Integration.png",
  },
  {
    id: "erp-api-integration",
    number: "21",
    title: "ERP API Integration",
    description:
      "Our ERP API integration services ensure efficient data flows between your ERP system and other applications, improving operational efficiency.",
    imageSrc: "/images/ERP API Integration.png",
  },
  {
    id: "marketing-automation-api-integration",
    number: "22",
    title: "Marketing Automation API Integration",
    description:
      "We integrate marketing automation APIs to enhance your marketing efforts, enabling efficient campaign management and analytics.",
    imageSrc: "/images/Marketing Automation API Integration.png",
  },
  {
    id: "analytics-and-reporting-api-integration",
    number: "23",
    title: "Analytics and Reporting API Integration",
    description:
      "Our team integrates analytics and reporting APIs to provide valuable insights and data visualizations, enhancing decision-making processes.",
    imageSrc: "/images/Analytics and Reporting API Integration.png",
  },
  {
    id: "messaging-and-communication-api-integration",
    number: "24",
    title: "Messaging and Communication API Integration",
    description:
      "We integrate messaging and communication APIs to enable real-time communication and collaboration within your applications.",
    imageSrc: "/images/Messaging and Communication API Integration.png",
  },
  {
    id: "healthcare-api-integration",
    number: "25",
    title: "Healthcare API Integration",
    description:
      "Our healthcare API integration services connect your applications with healthcare systems, ensuring secure and efficient data exchanges.",
    imageSrc: "/images/Healthcare API Integration.png",
  },
  {
    id: "financial-and-banking-api-integration",
    number: "26",
    title: "Financial and Banking API Integration",
    description:
      "We integrate financial and banking APIs to enable secure transactions, account management, and other financial services within your applications.",
    imageSrc: "/images/Financial and Banking API Integration.png",
  },
  {
    id: "travel-and-booking-api-integration",
    number: "27",
    title: "Travel and Booking API Integration",
    description:
      "Our team integrates travel and booking APIs to enhance your travel applications with real-time booking, reservations, and itinerary management features.",
    imageSrc: "/images/Travel and Booking API Integration.png",
  },
  {
    id: "media-and-entertainment-api-integration",
    number: "28",
    title: "Media and Entertainment API Integration",
    description:
      "We integrate media and entertainment APIs to provide streaming, content management, and interactive features for your applications.",
    imageSrc: "/images/Media and Entertainment API Integration.png",
  },
  {
    id: "machine-learning-and-ai-api-integration",
    number: "29",
    title: "Machine Learning and AI API Integration",
    description:
      "Our machine learning and AI API integration services enhance your applications with intelligent features and predictive analytics.",
    imageSrc: "/images/Machine Learning and AI API Integration.png",
  },
  {
    id: "blockchain-api-integration",
    number: "30",
    title: "Blockchain API Integration",
    description:
      "We integrate blockchain APIs to provide secure, transparent, and decentralized solutions for your applications.",
    imageSrc: "/images/Blockchain API Integration.png",
  },
];

export function ApiIntegrationsServicesSection() {
  return (
    <section
      id="api-services-grid"
      aria-label="API Integration Core Capabilities"
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
          >
            <span className="eyebrow-premium">
              Enterprise Integration &amp; Scalability
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[44px]"
          >
            Our Complete API Integration Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: PREMIUM_EASE }}
            className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
          >
            From custom REST and SOAP protocols to cloud-scale microservices, payment gateways, and real-time streaming interfaces, discover our complete API services.
          </motion.p>
        </div>

        {/* 3 Boxes per Row Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {API_INTEGRATIONS_SERVICES.map((service, index) => {
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
              <span className="eyebrow-premium-dark">
                Enterprise Integration
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to Unify Your Systems With High-Performance APIs?
              </h3>
              <p className="mt-2 text-sm text-white/85 sm:text-base">
                Our senior integration architects design reliable, high-throughput, and secure APIs tailored to your existing software ecosystem.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-sheen group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-[var(--brand-lime)] hover:bg-[var(--brand-lime-hover)] px-8 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ring-1 ring-inset ring-white/20"
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

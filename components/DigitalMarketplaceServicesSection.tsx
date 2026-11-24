"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export interface MarketplaceServiceCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const DIGITAL_MARKETPLACE_SERVICES: MarketplaceServiceCapability[] = [
  {
    id: "marketplace-platform-development",
    number: "01",
    title: "Marketplace Platform Development",
    description:
      "We design and develop custom marketplace platforms that align with your business objectives, providing a solid foundation for your digital marketplace.",
    imageSrc: "/images/Marketplace Platform Development.png",
  },
  {
    id: "multi-vendor-marketplace-solutions",
    number: "02",
    title: "Multi-Vendor Marketplace Solutions",
    description:
      "Our multi-vendor marketplace solutions enable multiple sellers to list and sell their products or services on your platform, fostering a diverse and competitive marketplace environment.",
    imageSrc: "/images/Multi-Vendor Marketplace Solutions.png",
  },
  {
    id: "custom-digital-marketplace-development",
    number: "03",
    title: "Custom Digital Marketplace Development",
    description:
      "We specialize in creating bespoke digital marketplace solutions that cater specifically to your industry, target audience, and unique business requirements.",
    imageSrc: "/images/Custom Digital Marketplace Development.png",
  },
  {
    id: "marketplace-website-design-and-development",
    number: "04",
    title: "Marketplace Website Design and Development",
    description:
      "Our expert designers and developers create visually appealing and user-friendly marketplace websites that enhance user engagement and satisfaction.",
    imageSrc: "/images/Marketplace Website Design and Development.png",
  },
  {
    id: "vendor-management-systems",
    number: "05",
    title: "Vendor Management Systems",
    description:
      "We implement robust vendor management systems that streamline onboarding, product management, and communication between your platform and vendors.",
    imageSrc: "/images/Vendor Management Systems.png",
  },
  {
    id: "payment-gateway-integration",
    number: "06",
    title: "Payment Gateway Integration",
    description:
      "We integrate secure payment gateways to facilitate seamless and safe transactions between buyers and sellers, supporting multiple payment methods for enhanced convenience.",
    imageSrc: "/images/Payment Gateway Integration.png",
  },
  {
    id: "escrow-services-integration",
    number: "07",
    title: "Escrow Services Integration",
    description:
      "For added security and trust, we integrate escrow services that ensure funds are securely held until transactions are successfully completed, protecting both buyers and sellers.",
    imageSrc: "/images/Escrow Services Integration.png",
  },
  {
    id: "review-and-rating-systems",
    number: "08",
    title: "Review and Rating Systems",
    description:
      "Our review and rating systems empower users to leave feedback on transactions, products, and vendors, fostering transparency and building trust within your marketplace community.",
    imageSrc: "/images/Review and Rating Systems.png",
  },
  {
    id: "search-and-filtering-capabilities",
    number: "09",
    title: "Search and Filtering Capabilities",
    description:
      "We enhance user experience with advanced search and filtering features that help buyers find products or services quickly and efficiently, improving conversion rates.",
    imageSrc: "/images/Search and Filtering Capabilities.png",
  },
  {
    id: "user-authentication-and-authorization",
    number: "10",
    title: "User Authentication and Authorization",
    description:
      "We implement robust authentication and authorization protocols to ensure secure access and protect user data, maintaining trust and compliance with privacy regulations.",
    imageSrc: "/images/User Authentication and Authorization.png",
  },
  {
    id: "product-catalog-management",
    number: "11",
    title: "Product Catalog Management",
    description:
      "Our intuitive product catalog management systems allow sellers to easily list, update, and manage their offerings, ensuring accurate and up-to-date product information.",
    imageSrc: "/images/Product Catalog Management.png",
  },
  {
    id: "order-and-transaction-management",
    number: "12",
    title: "Order and Transaction Management",
    description:
      "We streamline order processing and transaction management with efficient systems that track orders, manage inventory, and handle payments seamlessly.",
    imageSrc: "/images/Order and Transaction Management.png",
  },
  {
    id: "analytics-and-reporting-tools",
    number: "13",
    title: "Analytics and Reporting Tools",
    description:
      "Our analytics and reporting tools provide valuable insights into marketplace performance, sales trends, and user behavior, enabling data-driven decision-making and strategic planning",
    imageSrc: "/images/Analytics and Reporting Tools.png",
  },
  {
    id: "marketing-and-promotions-features",
    number: "14",
    title: "Marketing and Promotions Features",
    description:
      "We incorporate marketing and promotions features such as discount coupons, promotional campaigns, and targeted offers to attract and retain customers.",
    imageSrc: "/images/Marketing and Promotions Features.png",
  },
  {
    id: "seo-and-content-management",
    number: "15",
    title: "SEO and Content Management",
    description:
      "We optimize your marketplace for search engines with SEO best practices and robust content management tools, ensuring maximum visibility and organic traffic.",
    imageSrc: "/images/SEO and Content Management.png",
  },
  {
    id: "mobile-app-development-for-marketplaces",
    number: "16",
    title: "Mobile App Development for Marketplaces",
    description:
      "Our mobile app development services create responsive and intuitive apps that allow users to browse, buy, and sell on the go, enhancing accessibility and user engagement.",
    imageSrc: "/images/Mobile App Development for Marketplaces.png",
  },
  {
    id: "third-party-api-integrations",
    number: "17",
    title: "Third-Party API Integrations",
    description:
      "We integrate third-party APIs for additional functionalities such as shipping, analytics, CRM, and more, expanding the capabilities of your marketplace platform.",
    imageSrc: "/images/Third-Party API Integrations.png",
  },
  {
    id: "customer-support-systems",
    number: "18",
    title: "Customer Support Systems",
    description:
      "We provide efficient customer support systems, including live chat, ticketing systems, and knowledge bases, to resolve queries and issues promptly, enhancing customer satisfaction.",
    imageSrc: "/images/Customer Support Systems.png",
  },
  {
    id: "security-and-compliance-solutions",
    number: "19",
    title: "Security and Compliance Solutions",
    description:
      "We implement robust security measures and ensure compliance with industry regulations, protecting sensitive data and maintaining trust with users and stakeholders.",
    imageSrc: "/images/Security and Compliance Solutions.png",
  },
  {
    id: "integration-with-social-media-platforms",
    number: "20",
    title: "Integration with Social Media Platforms",
    description:
      "We enable seamless integration with social media platforms to leverage social sharing, user engagement, and marketing opportunities within your marketplace.",
    imageSrc: "/images/Integration with Social Media Platforms.png",
  },
  {
    id: "subscription-and-membership-systems",
    number: "21",
    title: "Subscription and Membership Systems",
    description:
      "Our subscription and membership systems facilitate recurring revenue models, offering exclusive benefits and personalized experiences to loyal customers.",
    imageSrc: "/images/Subscription and Membership Systems.png",
  },
  {
    id: "digital-rights-management-drm",
    number: "22",
    title: "Digital Rights Management (DRM)",
    description:
      "For digital content marketplaces, we implement DRM solutions to protect intellectual property rights and prevent unauthorized distribution or access.",
    imageSrc: "/images/Digital Rights Management (DRM).png",
  },
  {
    id: "content-moderation-and-user-management",
    number: "23",
    title: "Content Moderation and User Management",
    description:
      "We ensure a safe and positive user experience with robust content moderation tools and user management features that uphold community guidelines and standards.",
    imageSrc: "/images/Content Moderation and User Management.png",
  },
  {
    id: "cloud-integration-for-mobile-apps",
    number: "24",
    title: "Cloud Integration for Mobile Apps",
    description:
      "We support global expansion with internationalization and localization features that adapt your marketplace to different languages, currencies, and cultural preferences.",
    imageSrc: "/images/Cloud Integration for Mobile Apps.png",
  },
  {
    id: "data-backup-and-recovery-solutions",
    number: "25",
    title: "Data Backup and Recovery Solutions",
    description:
      "We implement reliable data backup and recovery solutions to safeguard critical information and ensure continuity in case of system failures or data loss.",
    imageSrc: "/images/Data Backup and Recovery Solutions.png",
  },
  {
    id: "performance-optimization",
    number: "26",
    title: "Performance Optimization",
    description:
      "We optimize marketplace performance with techniques such as caching, load balancing, and database optimization, ensuring fast loading times and seamless user experience.",
    imageSrc: "/images/Performance Optimization.png",
  },
  {
    id: "scalability-and-load-balancing",
    number: "27",
    title: "Scalability and Load Balancing",
    description:
      "We design scalable architectures and implement load balancing strategies to accommodate growth and handle increased traffic and transactions without compromising performance.",
    imageSrc: "/images/Scalability and Load Balancing.png",
  },
  {
    id: "continuous-maintenance-and-support",
    number: "28",
    title: "Continuous Maintenance and Support",
    description:
      "Our ongoing maintenance and support services ensure your marketplace operates smoothly, with timely updates, security patches, and technical assistance.",
    imageSrc: "/images/Continuous Maintenance and Support.png",
  },
  {
    id: "community-and-forum-integration",
    number: "29",
    title: "Community and Forum Integration",
    description:
      "We integrate community forums and discussion boards to foster engagement, facilitate knowledge sharing, and build a strong community around your marketplace.",
    imageSrc: "/images/Community and Forum Integration.png",
  },
  {
    id: "feedback-and-improvement-mechanisms",
    number: "30",
    title: "Feedback and Improvement Mechanisms",
    description:
      "We implement feedback mechanisms and user surveys to gather insights, identify areas for improvement, and continuously enhance your marketplace's functionality and user experience.",
    imageSrc: "/images/Feedback and Improvement Mechanisms.png",
  },
];

export function DigitalMarketplaceServicesSection() {
  return (
    <section
      id="marketplace-services-grid"
      aria-label="Digital Marketplace Core Capabilities"
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
            <span>Multi-Vendor Architecture &amp; Growth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[44px]"
          >
            Our Complete Marketplace Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: PREMIUM_EASE }}
            className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
          >
            From multi-vendor vendor management, escrow workflows, and DRM protections to high-concurrency load balancing, discover our digital marketplace solutions.
          </motion.p>
        </div>

        {/* 3 Boxes per Row Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {DIGITAL_MARKETPLACE_SERVICES.map((service, index) => {
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
                className="group relative flex flex-col justify-between rounded-[24px] border border-[var(--border-light)] bg-white p-7 sm:p-8 card-soft-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--primary)]/40 hover:shadow-[0_20px_42px_rgba(197,216,46,0.2)]"
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
                Launch Your Marketplace
              </span>
              <h3
                className="mt-4 text-2xl font-bold tracking-tight text-white !text-white sm:text-3xl"
                style={{ color: "#FFFFFF" }}
              >
                Ready to Build an Industry-Leading Digital Marketplace?
              </h3>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Our marketplace specialists help you architect vendor onboarding, escrow settlements, and scalable platform infrastructure.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-sheen group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] hover:bg-[var(--brand-lime-hover)] px-8 text-sm font-black text-black shadow-[0_4px_20px_rgba(197, 216, 46,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(197, 216, 46,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="relative z-10 flex items-center gap-2 text-black">
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

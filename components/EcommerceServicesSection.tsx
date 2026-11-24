"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export interface EcommerceServiceCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const ECOMMERCE_SERVICES: EcommerceServiceCapability[] = [
  {
    id: "custom-ecommerce-website-development",
    number: "01",
    title: "Custom E-commerce Website Development",
    description:
      "We create custom e-commerce websites that reflect your brand's identity and offer a user-friendly shopping experience. Our solutions are scalable, secure, and designed to drive sales.",
    imageSrc: "/images/Custom E-commerce Website Development.png",
  },
  {
    id: "ecommerce-platform-integration",
    number: "02",
    title: "E-commerce Platform Integration",
    description:
      "We integrate leading e-commerce platforms such as Shopify, WooCommerce, Magento, and BigCommerce to provide you with the best tools for managing your online store.",
    imageSrc: "/images/E-commerce Platform Integration.png",
  },
  {
    id: "shopping-cart-development",
    number: "03",
    title: "Shopping Cart Development",
    description:
      "Our team develops intuitive and secure shopping carts that enhance the purchasing experience, reduce cart abandonment, and increase conversion rates.",
    imageSrc: "/images/Shopping Cart Development.png",
  },
  {
    id: "payment-gateway-integration",
    number: "04",
    title: "Payment Gateway Integration",
    description:
      "We integrate reliable and secure payment gateways to facilitate smooth and secure transactions, supporting multiple payment methods to meet your customers' preferences.",
    imageSrc: "/images/Payment Gateway Integration.png",
  },
  {
    id: "ecommerce-mobile-app-development",
    number: "05",
    title: "E-commerce Mobile App Development",
    description:
      "We develop mobile apps that offer a seamless shopping experience on smartphones and tablets, ensuring your customers can shop on the go.",
    imageSrc: "/images/E-commerce Mobile App Development.png",
  },
  {
    id: "product-management-systems",
    number: "06",
    title: "Product Management Systems",
    description:
      "Our product management systems make it easy to organize, categorize, and update your product listings, ensuring your inventory is always up-to-date.",
    imageSrc: "/images/Product Management Systems.png",
  },
  {
    id: "inventory-management-solutions",
    number: "07",
    title: "Inventory Management Solutions",
    description:
      "We provide robust inventory management solutions that help you track stock levels, manage suppliers, and avoid stockouts or overstocking.",
    imageSrc: "/images/Inventory Management Solutions.png",
  },
  {
    id: "order-management-systems",
    number: "08",
    title: "Order Management Systems",
    description:
      "Our order management systems streamline the order processing workflow, from order placement to delivery, ensuring timely and accurate fulfillment.",
    imageSrc: "/images/Order Management Systems.png",
  },
  {
    id: "crm-integration",
    number: "09",
    title: "(CRM) Integration",
    description:
      "We integrate CRM systems to help you manage customer interactions, track sales, and build strong customer relationships.",
    imageSrc: "/images/(CRM) Integration.png",
  },
  {
    id: "ecommerce-analytics-and-reporting",
    number: "10",
    title: "E-commerce Analytics and Reporting",
    description:
      "Our analytics and reporting tools provide valuable insights into your store's performance, helping you make data-driven decisions to optimize your business.",
    imageSrc: "/images/E-commerce Analytics and Reporting.png",
  },
  {
    id: "seo-for-ecommerce",
    number: "11",
    title: "(SEO) for E-commerce",
    description:
      "We implement SEO strategies to improve your online store's visibility in search engines, driving more organic traffic and increasing sales.",
    imageSrc: "/images/(SEO) for E-commerce.png",
  },
  {
    id: "ecommerce-marketing-and-automation",
    number: "12",
    title: "E-commerce Marketing and Automation",
    description:
      "We offer marketing and automation solutions that enhance your marketing efforts, including email marketing, social media campaigns, and personalized promotions.",
    imageSrc: "/images/E-commerce Marketing and Automation.png",
  },
  {
    id: "multi-vendor-marketplace-development",
    number: "13",
    title: "Multi-Vendor Marketplace Development",
    description:
      "We develop multi-vendor marketplaces that allow multiple sellers to list their products on your platform, expanding your product offerings and customer base.",
    imageSrc: "/images/Multi-Vendor Marketplace Development.png",
  },
  {
    id: "subscription-and-membership-systems",
    number: "14",
    title: "Subscription and Membership Systems",
    description:
      "We create subscription and membership systems that offer recurring billing options, increasing customer loyalty and generating steady revenue streams.",
    imageSrc: "/images/Subscription and Membership Systems.png",
  },
  {
    id: "ecommerce-hosting-solutions",
    number: "15",
    title: "E-commerce Hosting Solutions",
    description:
      "Our hosting solutions ensure your online store is fast, secure, and always available, providing a reliable shopping experience for your customers.",
    imageSrc: "/images/E-commerce Hosting Solutions.png",
  },
  {
    id: "cms-integration",
    number: "16",
    title: "(CMS) Integration",
    description:
      "We integrate CMS platforms to help you easily manage and update your website content, ensuring your store remains fresh and engaging.",
    imageSrc: "/images/(CMS) Integration.png",
  },
  {
    id: "social-media-integration",
    number: "17",
    title: "Social Media Integration",
    description:
      "We integrate social media platforms to enable seamless sharing of products, boosting your brand's visibility and driving traffic to your store.",
    imageSrc: "/images/Social Media Integration.png",
  },
  {
    id: "custom-ecommerce-plugin-and-extension-development",
    number: "18",
    title: "Custom E-commerce Plugin and Extension Development",
    description:
      "Our team develops custom plugins and extensions to enhance your store's functionality and meet your specific business needs.",
    imageSrc: "/images/Custom E-commerce Plugin and Extension Development.png",
  },
  {
    id: "ecommerce-security-solutions",
    number: "19",
    title: "E-commerce Security Solutions",
    description:
      "We implement advanced security measures to protect your online store from cyber threats, ensuring the safety of your customers' data and transactions.",
    imageSrc: "/images/E-commerce Security Solutions.png",
  },
  {
    id: "ux-and-ui-design",
    number: "20",
    title: "(UX) and (UI) Design",
    description:
      "Our UX/UI designers create visually appealing and intuitive interfaces that enhance the shopping experience and keep customers coming back.",
    imageSrc: "/images/(UX) and (UI) Design.png",
  },
  {
    id: "product-review-and-rating-systems",
    number: "21",
    title: "Product Review and Rating Systems",
    description:
      "We integrate review and rating systems to build trust and credibility, helping customers make informed purchasing decisions.",
    imageSrc: "/images/Product Review and Rating Systems.png",
  },
  {
    id: "personalized-product-recommendations",
    number: "22",
    title: "Personalized Product Recommendations",
    description:
      "Our personalized recommendation engines increase sales by suggesting products based on customers' browsing and purchasing behavior.",
    imageSrc: "/images/Personalized Product Recommendations.png",
  },
  {
    id: "ecommerce-site-migration",
    number: "23",
    title: "E-commerce Site Migration",
    description:
      "We handle seamless migrations of your e-commerce site to new platforms or hosting providers, ensuring minimal downtime and data integrity.",
    imageSrc: "/images/E-commerce Site Migration.png",
  },
  {
    id: "ecommerce-site-maintenance-and-support",
    number: "24",
    title: "E-commerce Site Maintenance and Support",
    description:
      "Our ongoing maintenance and support services ensure your online store remains up-to-date, secure, and functioning optimally.",
    imageSrc: "/images/E-commerce Site Maintenance and Support.png",
  },
  {
    id: "cross-border-ecommerce-solutions",
    number: "25",
    title: "Cross-Border E-commerce Solutions",
    description:
      "We provide solutions for cross-border e-commerce, including currency conversion, language localization, and international shipping options.",
    imageSrc: "/images/Cross-Border E-commerce Solutions.png",
  },
  {
    id: "loyalty-and-rewards-programs",
    number: "26",
    title: "Loyalty and Rewards Programs",
    description:
      "We develop loyalty and rewards programs that incentivize repeat purchases and enhance customer retention.",
    imageSrc: "/images/Loyalty and Rewards Programs.png",
  },
  {
    id: "ecommerce-compliance-and-regulatory-solutions",
    number: "27",
    title: "E-commerce Compliance and Regulatory Solutions",
    description:
      "Our solutions ensure your online store complies with industry regulations and standards, including GDPR, PCI-DSS, and more.",
    imageSrc: "/images/E-commerce Compliance and Regulatory Solutions.png",
  },
  {
    id: "performance-optimization-for-ecommerce-sites",
    number: "28",
    title: "Performance Optimization for E-commerce Sites",
    description:
      "We optimize your e-commerce site for speed and performance, providing a smooth and fast shopping experience for your customers.",
    imageSrc: "/images/Performance Optimization for E-commerce Sites.png",
  },
  {
    id: "email-marketing-integration",
    number: "29",
    title: "Email Marketing Integration",
    description:
      "We integrate email marketing tools to help you engage with customers, send personalized offers, and boost sales through targeted email campaigns.",
    imageSrc: "/images/Email Marketing Integration.png",
  },
  {
    id: "live-chat-and-customer-support-integration",
    number: "30",
    title: "Live Chat and Customer Support Integration",
    description:
      "Our live chat and customer support integrations provide real-time assistance to customers, enhancing their shopping experience and resolving issues quickly.",
    imageSrc: "/images/Live Chat and Customer Support Integration.png",
  },
  {
    id: "fraud-detection-and-prevention",
    number: "31",
    title: "Fraud Detection and Prevention",
    description:
      "We implement fraud detection and prevention measures to protect your online store from fraudulent transactions and chargebacks.",
    imageSrc: "/images/Fraud Detection and Prevention.png",
  },
  {
    id: "affiliate-marketing-system-integration",
    number: "32",
    title: "Affiliate Marketing System Integration",
    description:
      "We set up affiliate marketing systems that enable you to partner with affiliates, driving traffic and sales through performance-based marketing.",
    imageSrc: "/images/Affiliate Marketing System Integration.png",
  },
  {
    id: "return-and-refund-management-systems",
    number: "33",
    title: "Return and Refund Management Systems",
    description:
      "Our return and refund management systems streamline the process of handling returns and refunds, ensuring customer satisfaction and efficient operations.",
    imageSrc: "/images/Return and Refund Management Systems.png",
  },
  {
    id: "shipping-and-logistics-integration",
    number: "34",
    title: "Shipping and Logistics Integration",
    description:
      "We integrate shipping and logistics solutions to provide accurate shipping rates, real-time tracking, and efficient order fulfillment.",
    imageSrc: "/images/Shipping and Logistics Integration.png",
  },
  {
    id: "voice-commerce-solutions",
    number: "35",
    title: "Voice Commerce Solutions",
    description:
      "We develop voice commerce solutions that allow customers to search for and purchase products using voice commands, providing a hands-free shopping experience.",
    imageSrc: "/images/Voice Commerce Solutions.png",
  },
  {
    id: "augmented-reality-ar-product-visualization",
    number: "36",
    title: "Augmented Reality (AR) Product Visualization",
    description:
      "Our AR solutions enable customers to visualize products in their real environment, enhancing the shopping experience and reducing returns.",
    imageSrc: "/images/Augmented Reality (AR) Product Visualization.png",
  },
  {
    id: "omni-channel-retail-solutions",
    number: "37",
    title: "Omni-Channel Retail Solutions",
    description:
      "We provide omni-channel solutions that integrate your online store with physical retail locations, ensuring a consistent shopping experience across all channels.",
    imageSrc: "/images/Omni-Channel Retail Solutions.png",
  },
  {
    id: "ecommerce-training-and-consultation",
    number: "38",
    title: "E-commerce Training and Consultation",
    description:
      "Our training and consultation services help you and your team stay up-to-date with the latest e-commerce trends, technologies, and best practices.",
    imageSrc: "/images/E-commerce Training and Consultation.png",
  },
  {
    id: "b2b-ecommerce-solutions",
    number: "39",
    title: "B2B E-commerce Solutions",
    description:
      "We develop B2B e-commerce platforms that facilitate bulk ordering, custom pricing, and account management, enhancing your business-to-business sales processes.",
    imageSrc: "/images/B2B E-commerce Solutions.png",
  },
  {
    id: "gift-card-and-coupon-systems",
    number: "40",
    title: "Gift Card and Coupon Systems",
    description:
      "Our gift card and coupon systems enable you to offer promotional discounts and incentives, attracting new customers and increasing sales.",
    imageSrc: "/images/Gift Card and Coupon Systems.png",
  },
];

export function EcommerceServicesSection() {
  return (
    <section
      id="ecommerce-services-grid"
      aria-label="E-commerce Core Capabilities"
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
            <span>Digital Commerce Engineering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[44px]"
          >
            Our Complete E-commerce Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: PREMIUM_EASE }}
            className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
          >
            From custom storefronts and multi-vendor marketplaces to global payment gateways, fraud prevention, and AR visualization, explore our end-to-end commerce suite.
          </motion.p>
        </div>

        {/* 3 Boxes per Row Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {ECOMMERCE_SERVICES.map((service, index) => {
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
                Scale Your Revenue
              </span>
              <h3
                className="mt-4 text-2xl font-bold tracking-tight text-white !text-white sm:text-3xl"
                style={{ color: "#FFFFFF" }}
              >
                Ready to Build an Exceptional E-commerce Experience?
              </h3>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Let&apos;s consult with our e-commerce engineering specialists and create a high-converting digital storefront tailored to your target market.
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export interface MobileServiceCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const MOBILE_APP_SERVICES: MobileServiceCapability[] = [
  {
    id: "custom-mobile-app-development",
    number: "01",
    title: "Custom Mobile App Development",
    description:
      "We create tailor-made mobile apps that align perfectly with your business objectives. Our custom solutions ensure your app stands out in a competitive market.",
    imageSrc: "/images/Custom Mobile App Development.png",
  },
  {
    id: "ios-app-development",
    number: "02",
    title: "iOS App Development",
    description:
      "Our expert iOS developers build high-performance, feature-rich iOS applications that provide a seamless user experience on all Apple devices.",
    imageSrc: "/images/iOS App Development.png",
  },
  {
    id: "android-app-development",
    number: "03",
    title: "Android App Development",
    description:
      "We develop robust and scalable Android apps that run smoothly across a wide range of devices, ensuring maximum reach and engagement.",
    imageSrc: "/images/Android App Development.png",
  },
  {
    id: "cross-platform-app-development",
    number: "04",
    title: "Cross-Platform App Development",
    description:
      "Using frameworks like React Native and Flutter, we create cross-platform apps that deliver a native-like experience on both iOS and Android, reducing development time and costs.",
    imageSrc: "/images/Cross-Platform App Development.png",
  },
  {
    id: "native-app-development",
    number: "05",
    title: "Native App Development",
    description:
      "For optimal performance and user experience, we offer native app development services tailored to the specific requirements of each platform.",
    imageSrc: "/images/Native App Development.png",
  },
  {
    id: "hybrid-app-development",
    number: "06",
    title: "Hybrid App Development",
    description:
      "We combine the best of web and native technologies to develop hybrid apps that offer flexibility and efficiency while maintaining high performance.",
    imageSrc: "/images/Hybrid App Development.png",
  },
  {
    id: "pwa-development",
    number: "07",
    title: "(PWA) Development",
    description:
      "Our team builds PWAs that provide a fast, reliable, and engaging user experience, combining the best features of web and mobile apps.",
    imageSrc: "/images/(PWA) Development.png",
  },
  {
    id: "mobile-app-ui-ux-design",
    number: "08",
    title: "Mobile App UI/UX Design",
    description:
      "Our designers create intuitive and visually appealing interfaces that enhance user satisfaction and engagement. We focus on delivering a seamless user experience.",
    imageSrc: "/images/Mobile App UI UX Design.png",
  },
  {
    id: "app-prototyping-and-concept-development",
    number: "09",
    title: "App Prototyping and Concept Development",
    description:
      "We help you bring your app ideas to life through detailed prototyping and concept development, ensuring a clear vision and direction for your project.",
    imageSrc: "/images/App Prototyping and Concept Development.png",
  },
  {
    id: "app-testing-and-quality-assurance",
    number: "10",
    title: "App Testing and Quality Assurance",
    description:
      "We conduct rigorous testing to ensure your app is free of bugs and performs optimally across all devices and operating systems.",
    imageSrc: "/images/App Testing and Quality Assurance.png",
  },
  {
    id: "app-maintenance-and-support",
    number: "11",
    title: "App Maintenance and Support",
    description:
      "Our ongoing maintenance and support services ensure your app remains up-to-date, secure, and functional, providing a seamless experience for your users.",
    imageSrc: "/images/App Maintenance and Support.png",
  },
  {
    id: "app-store-optimization",
    number: "12",
    title: "App Store Optimization",
    description:
      "We optimize your app’s listing on the App Store and Google Play to improve visibility, attract more downloads, and increase user engagement.",
    imageSrc: "/images/App Store Optimization.png",
  },
  {
    id: "enterprise-mobile-solutions",
    number: "13",
    title: "Enterprise Mobile Solutions",
    description:
      "We develop custom mobile solutions tailored to the unique needs of your enterprise, enhancing productivity and streamlining operations.",
    imageSrc: "/images/Enterprise Mobile Solutions.png",
  },
  {
    id: "mvp-development",
    number: "14",
    title: "MVP Development",
    description:
      "We help you quickly launch a minimum viable product to validate your idea, gather user feedback, and iterate for continuous improvement.",
    imageSrc: "/images/MVP Development.png",
  },
  {
    id: "wearable-app-development",
    number: "15",
    title: "Wearable App Development",
    description:
      "Our expertise extends to developing apps for wearable devices, ensuring your solutions are accessible across all user touchpoints.",
    imageSrc: "/images/Wearable App Development.png",
  },
  {
    id: "internet-of-things-app-development",
    number: "16",
    title: "(Internet of Things) App Development",
    description:
      "We create IoT-enabled mobile apps that connect seamlessly with smart devices, providing innovative solutions for various industries.",
    imageSrc: "/images/(Internet of Things) App Development.png",
  },
  {
    id: "blockchain-mobile-app-development",
    number: "17",
    title: "Blockchain Mobile App Development",
    description:
      "We integrate blockchain technology into mobile apps to enhance security, transparency, and functionality for your business processes.",
    imageSrc: "/images/Blockchain Mobile App Development.png",
  },
  {
    id: "ai-and-machine-learning-app-development",
    number: "18",
    title: "AI and Machine Learning App Development",
    description:
      "We leverage AI and machine learning to build intelligent mobile apps that offer personalized experiences and advanced functionalities.",
    imageSrc: "/images/AI and Machine Learning App Development.png",
  },
  {
    id: "augmented-reality-ar-app-development",
    number: "19",
    title: "Augmented Reality (AR) App Development",
    description:
      "Our AR apps provide immersive experiences that engage users in new and innovative ways, enhancing interaction with your brand.",
    imageSrc: "/images/Augmented Reality (AR) App Development.png",
  },
  {
    id: "vr-app-development",
    number: "20",
    title: "(VR) App Development",
    description:
      "We develop VR apps that create immersive virtual experiences, perfect for gaming, training, and educational purposes.",
    imageSrc: "/images/(VR) App Development.png",
  },
  {
    id: "mobile-app-consulting",
    number: "21",
    title: "Mobile App Consulting",
    description:
      "Our consulting services help you refine your app idea, define a clear development strategy, and ensure a successful launch.",
    imageSrc: "/images/Mobile App Consulting.png",
  },
  {
    id: "app-integration-services",
    number: "22",
    title: "App Integration Services",
    description:
      "We integrate third-party services and APIs to enhance your app’s functionality and provide a seamless user experience.",
    imageSrc: "/images/App Integration Services.png",
  },
  {
    id: "mobile-backend-development",
    number: "23",
    title: "Mobile Backend Development",
    description:
      "Our backend development services ensure your app has a robust and scalable infrastructure to support its functionalities.",
    imageSrc: "/images/Mobile Backend Development.png",
  },
  {
    id: "cloud-integration-for-mobile-apps",
    number: "24",
    title: "Cloud Integration for Mobile Apps",
    description:
      "We integrate cloud services to enhance your app’s performance, scalability, and accessibility.",
    imageSrc: "/images/Cloud Integration for Mobile Apps.png",
  },
  {
    id: "mobile-app-security-solutions",
    number: "25",
    title: "Mobile App Security Solutions",
    description:
      "We implement advanced security measures to protect your app and its data from potential threats and vulnerabilities.",
    imageSrc: "/images/Mobile App Security Solutions.png",
  },
  {
    id: "mobile-game-development",
    number: "26",
    title: "Mobile Game Development",
    description:
      "Our game development team creates engaging and high-quality mobile games that captivate users and provide an entertaining experience.",
    imageSrc: "/images/Mobile Game Development.png",
  },
  {
    id: "in-app-analytics-and-user-behavior-tracking",
    number: "27",
    title: "In-App Analytics and User Behavior Tracking",
    description:
      "We implement analytics tools to track user behavior and gather insights, helping you make data-driven decisions for your app’s growth.",
    imageSrc: "/images/In-App Analytics and User Behavior Tracking.png",
  },
  {
    id: "social-media-integration",
    number: "28",
    title: "Social Media Integration",
    description:
      "We integrate social media features to enhance user engagement and enable seamless sharing and interaction within your app.",
    imageSrc: "/images/Social Media Integration.png",
  },
  {
    id: "push-notifications-and-in-app-messaging",
    number: "29",
    title: "Push Notifications and In-App Messaging",
    description:
      "Our push notification and in-app messaging services help you stay connected with your users, providing timely updates and enhancing engagement.",
    imageSrc: "/images/Push Notifications and In-App Messaging.png",
  },
  {
    id: "geolocation-and-mapping-services",
    number: "30",
    title: "Geolocation and Mapping Services",
    description:
      "We integrate geolocation and mapping functionalities to provide location-based services and enhance user experience.",
    imageSrc: "/images/Geolocation and Mapping Services.png",
  },
];

export function MobileAppServicesSection() {
  return (
    <section
      id="mobile-services-grid"
      aria-label="Mobile App Development Core Capabilities"
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
            <span>Mobile Engineering &amp; Innovation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[44px]"
          >
            Our Complete Mobile App Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: PREMIUM_EASE }}
            className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
          >
            From native iOS and Android to AI-driven, IoT, and high-performance cross-platform systems, explore our full spectrum of mobile development services.
          </motion.p>
        </div>

        {/* 3 Boxes per Row Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {MOBILE_APP_SERVICES.map((service, index) => {
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
                Let&apos;s Build Together
              </span>
              <h3
                className="mt-4 text-2xl font-bold tracking-tight text-white !text-white sm:text-3xl"
                style={{ color: "#FFFFFF" }}
              >
                Ready to Launch Your High-Performance Mobile Application?
              </h3>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Our mobile product engineers and UI/UX designers are ready to turn your app concept into a market-leading reality.
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

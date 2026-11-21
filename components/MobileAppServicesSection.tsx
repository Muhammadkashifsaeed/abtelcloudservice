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
            <span>Mobile Engineering & Innovation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0E2E] sm:text-4xl lg:text-5xl"
          >
            Our Complete Mobile App Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: PREMIUM_EASE }}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            From native iOS and Android to AI-driven, IoT, and high-performance cross-platform systems, explore our full spectrum of mobile development services.
          </motion.p>
        </div>

        {/* 3 Boxes per Row Grid – Fade Left, Fade Up, Fade Right Flow */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {MOBILE_APP_SERVICES.map((service, index) => {
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
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3D96CE]/35 bg-[#3D96CE]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#3D96CE]">
                Let&apos;s Build Together
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to Launch Your High-Performance Mobile Application?
              </h3>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Our mobile product engineers and UI/UX designers are ready to turn your app concept into a market-leading reality.
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

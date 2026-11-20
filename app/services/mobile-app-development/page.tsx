import type { Metadata } from "next";
import {
  CustomerSupportSection,
  MobileAppHeroSection,
  MobileAppServicesSection,
} from "@/components";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  generateServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Mobile Apps | iOS & Android Dev",
  description:
    "Custom iOS, Android, and cross-platform mobile apps engineered by Abtel Cloud Services for high performance, intuitive UX, and enterprise scale.",
  path: "/services/mobile-app-development",
  keywords: [
    "mobile app development services",
    "iOS app development",
    "Android app development",
    "cross platform app development",
    "React Native developers",
    "Flutter app development",
    "enterprise mobile apps",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Mobile App Development", path: "/services/mobile-app-development" },
]);

const serviceJsonLd = generateServiceJsonLd({
  name: "Mobile App Development Services",
  description:
    "Expert iOS, Android, and cross-platform mobile application development delivering intuitive UX, top-tier performance, and scalable mobile backend architectures.",
  path: "/services/mobile-app-development",
});

export default function MobileAppDevelopmentPage() {
  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      {/* 1. Neon Coding Hero Section with Left-Aligned Heading & Introduction */}
      <MobileAppHeroSection />

      {/* 2. 30 Mobile App Development Capabilities in Centered, Zoom-Enhanced 3-Box-Per-Row Grid */}
      <MobileAppServicesSection />

      {/* 3. Customer Support & Rapid Consultation Section */}
      <CustomerSupportSection />
    </div>
  );
}

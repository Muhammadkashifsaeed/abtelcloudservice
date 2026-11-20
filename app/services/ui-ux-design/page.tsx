import type { Metadata } from "next";
import {
  CustomerSupportSection,
  UiUxDesignHeroSection,
  UiUxDesignServicesSection,
} from "@/components";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  generateServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "UI/UX Design | Prototyping & Apps",
  description:
    "Elevate your product with human-centered UI/UX design from Abtel Cloud Services. Wireframing, interactive prototyping, and modern design systems.",
  path: "/services/ui-ux-design",
  keywords: [
    "UI UX design services",
    "user experience design",
    "user interface prototyping",
    "wireframing and user research",
    "design systems",
    "usability testing",
    "mobile app UI design",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "UI/UX Design", path: "/services/ui-ux-design" },
]);

const serviceJsonLd = generateServiceJsonLd({
  name: "UI/UX Design Services",
  description:
    "Human-centered UI/UX design combining thorough user research, iterative wireframing, high-fidelity prototypes, and brand-aligned design systems.",
  path: "/services/ui-ux-design",
});

export default function UiUxDesignPage() {
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
      <UiUxDesignHeroSection />

      {/* 2. 9 UI/UX Design Capabilities in Centered, Zoom-Enhanced 3-Box-Per-Row Grid */}
      <UiUxDesignServicesSection />

      {/* 3. Customer Support & Rapid Consultation Section */}
      <CustomerSupportSection />
    </div>
  );
}

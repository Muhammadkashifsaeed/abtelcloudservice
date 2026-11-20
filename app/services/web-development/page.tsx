import type { Metadata } from "next";
import {
  CustomerSupportSection,
  WebDevelopmentHeroSection,
  WebDevelopmentServicesSection,
} from "@/components";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  generateServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Web Development | Custom Web Apps",
  description:
    "Abtel Cloud Services builds fast, secure, and responsive web applications and portals using modern frontend frameworks and scalable cloud backends.",
  path: "/services/web-development",
  image: "/images/Neon Coding.png",
  keywords: [
    "custom website development",
    "web application development",
    "responsive web design",
    "e-commerce web solutions",
    "progressive web apps",
    "enterprise web portal",
    "CMS development",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Web Development", path: "/services/web-development" },
]);

const serviceJsonLd = generateServiceJsonLd({
  name: "Web Development Services",
  description:
    "Comprehensive website and web application development services tailored to meet your specific business requirements with security, responsiveness, and scale.",
  path: "/services/web-development",
});

export default function WebDevelopmentPage() {
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
      <WebDevelopmentHeroSection />

      {/* 2. 20 Web Development Capabilities in Staggered 3-Box-Per-Row Grid */}
      <WebDevelopmentServicesSection />

      {/* 3. Customer Support & Rapid Consultation Section */}
      <CustomerSupportSection />
    </div>
  );
}

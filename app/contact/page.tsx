import type { Metadata } from "next";
import {
  ContactHeroSection,
  ContactMainSection,
  ContactMapSection,
} from "@/components";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | Project Consultations",
  description:
    "Discuss your software or cloud project with Abtel Cloud Services. Reach our technical sales and agile engineering team 24/7 for custom quotes.",
  path: "/contact",
  keywords: [
    "contact abtel cloud services",
    "software development quote",
    "hire software developers",
    "cloud consulting inquiry",
    "San Antonio software company contact",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact" },
]);

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Abtel Cloud Services",
  description:
    "Reach out to the technical sales and project engineering team at Abtel Cloud Services.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "ProfessionalService",
    name: "Abtel Cloud Services",
    telephone: "+1 800 484 4204",
    email: "sales@abtelcloud.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
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
          __html: JSON.stringify(contactPageJsonLd),
        }}
      />
      {/* 1. Hero Section with Background a-businessman-using-a-smartphone.jpg */}
      <ContactHeroSection />

      {/* 2. Main Contact Section: Left Form & Consent, Right Channels & Socials */}
      <ContactMainSection />

      {/* 3. Google Maps Location Section */}
      <ContactMapSection />
    </div>
  );
}

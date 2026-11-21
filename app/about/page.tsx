import type { Metadata } from "next";
import {
  AboutCustomersSection,
  AboutHeroSection,
  AboutWhoWeAreSection,
  OurStorySection,
  WhyChooseUsSection,
} from "@/components";
import type { WhyChooseFeatureCard } from "@/components/WhyChooseUsSection";
import { createPageMetadata, generateBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | Global Software Engineers",
  description:
    "Learn about Abtel Cloud Services: an experienced team of software engineers and cloud architects delivering scalable digital solutions worldwide.",
  path: "/about",
  keywords: [
    "about abtel cloud services",
    "software development company",
    "cloud consulting team",
    "enterprise IT partner",
    "agile software engineers",
  ],
});

const ABOUT_WHY_CHOOSE_CARDS: WhyChooseFeatureCard[] = [
  {
    title: "Enterprise Architecture",
    description:
      "Web applications with high-availability cloud infrastructure and zero-trust security standards.",
    imageSrc: "/images/Smart%20%26%20secure%20system.png",
    imageWidth: 38,
    imageHeight: 49,
  },
  {
    title: "Senior Engineering Squads",
    description:
      "Experienced full-stack engineers and cloud architects dedicated to your roadmap.",
    imageSrc: "/images/Professional%20team.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "24/7 SLA-Backed Support",
    description:
      "Round-the-clock infrastructure monitoring and enterprise support to keep mission-critical apps running.",
    imageSrc: "/images/24%207%20Premium%20Support.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "Transparent Collaboration",
    description:
      "Real-time sprint tracking, direct communication channels, and complete repository ownership.",
    imageSrc: "/images/Open%20communication.png",
    imageWidth: 43,
    imageHeight: 49,
  },
];

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
]);

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Abtel Cloud Services",
  description:
    "Abtel Cloud Services recruits versatile developers and technical experts who understand and meet your project's unique requirements.",
  url: `${SITE_URL}/about`,
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd),
        }}
      />
      <AboutHeroSection />
      <AboutWhoWeAreSection />
      <OurStorySection backgroundImage="/images/it-enginee.jpg" />
      <WhyChooseUsSection
        eyebrow="Why Choose us"
        heading="Built-With-Experience, Scalable Websites"
        ctaHref="/services"
        cards={ABOUT_WHY_CHOOSE_CARDS}
      />
      <AboutCustomersSection />
    </>
  );
}

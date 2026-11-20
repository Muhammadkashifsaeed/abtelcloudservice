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
    title: "Smart & secure system",
    description:
      "Web applications with advanced features for enhanced usability and safety.",
    imageSrc: "/images/Smart%20%26%20secure%20system.png",
    imageWidth: 38,
    imageHeight: 49,
  },
  {
    title: "Professional team",
    description: "Our web developers have a genuine passion for their work.",
    imageSrc: "/images/Professional%20team.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "24/7 Premium Support",
    description:
      "Enjoy peace of mind with our 24/7 Premium Support, your web services run smoothly at all times.",
    imageSrc: "/images/24%207%20Premium%20Support.png",
    imageWidth: 57,
    imageHeight: 49,
  },
  {
    title: "Open communication",
    description:
      "Total transparency and open communication are our trademarks.",
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

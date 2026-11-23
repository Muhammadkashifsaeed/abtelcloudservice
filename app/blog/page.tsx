import type { Metadata } from "next";
import { BlogHeroSection } from "@/components";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tech Blog | Cloud and Software Guides",
  description:
    "Explore software architecture guides, cloud computing insights, and DevOps best practices from the engineering team at Abtel Cloud Services.",
  path: "/blog",
  image: "/images/The-ROI-of-a-Professional-Website.png",
  keywords: [
    "software engineering blog",
    "ROI of a professional website",
    "why DIY website builders cost more",
    "small business website needs 2025",
    "cloud infrastructure guides",
    "web development insights",
    "Abtel Cloud Services blog",
  ],
});

interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  url: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    url: string;
  };
  date: string;
  isoDate: string;
  category: string;
  readTime: string;
}

const BLOG_POSTS: BlogPostItem[] = [
  {
    id: "roi-professional-website",
    title: "The ROI of a Professional Website",
    slug: "roi-professional-website",
    url: "/roi-professional-website",
    excerpt:
      "Why Your Business Can't Afford to Settle. In today's digital-first world, your website isn't just an online brochure — it's your 24/7 salesperson, brand ambassador, and conversion engine. Discover how custom engineering delivers compounding returns.",
    image: "/images/The-ROI-of-a-Professional-Website.png",
    author: {
      name: "Abner Hill",
      avatar: "/images/Abner Hill.png",
      url: "https://abtelcloudservices.com/author/abner/",
    },
    date: "April 4, 2025",
    isoDate: "2025-04-04",
    category: "Business Strategy",
    readTime: "5 min read",
  },
  {
    id: "why-diy-website-builders-cost-more",
    title: "Why DIY Website Builders Cost You More in the Long Run",
    slug: "why-diy-website-builders-cost-more",
    url: "/why-diy-website-builders-cost-more",
    excerpt:
      "For many small business owners, the appeal of DIY website builders like Wix, Squarespace, or GoDaddy seems obvious: low monthly costs and quick setup. But the hidden long-term limitations cost far more.",
    image: "/images/Why-DIY-Website-Builders-Cost-You-More-in-the-Long-Run-768x512.png",
    author: {
      name: "Abner Hill",
      avatar: "/images/Abner Hill.png",
      url: "https://abtelcloudservices.com/author/abner/",
    },
    date: "February 7, 2025",
    isoDate: "2025-02-07",
    category: "Web Development",
    readTime: "6 min read",
  },
  {
    id: "small-business-website-needs-2025",
    title: "5 Things Every Small Business Website Needs in 2025",
    slug: "small-business-website-needs-2025",
    url: "/small-business-website-needs-2025",
    excerpt:
      "The digital landscape is evolving faster than ever. For small businesses, your website is no longer just a digital business card—it's your storefront, salesperson, and customer support hub all rolled into one.",
    image: "/images/Man-Working-At-Laptop-768x768.png",
    author: {
      name: "Abner Hill",
      avatar: "/images/Abner Hill.png",
      url: "https://abtelcloudservices.com/author/abner/",
    },
    date: "January 3, 2025",
    isoDate: "2025-01-03",
    category: "Digital Growth",
    readTime: "4 min read",
  },
];

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Abtel Cloud Services Blog & Tech Insights",
  description:
    "Expert perspectives on web ROI, software engineering, cloud architecture, and modern digital platforms from Abtel Cloud Services.",
  url: `${SITE_URL}/blog`,
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    url: `${SITE_URL}${post.url}`,
    datePublished: post.isoDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Abtel Cloud Services",
      url: SITE_URL,
    },
  })),
};

export default function BlogPage() {
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
          __html: JSON.stringify(blogListJsonLd),
        }}
      />

      {/* 1. Hero Banner */}
      <BlogHeroSection />

      {/* 2. Main Articles Grid Section */}
      <section className="relative w-full bg-[var(--bg-light)] py-16 sm:py-20 lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[var(--primary-light)] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)] border border-[var(--primary)]/20">
              Articles &amp; Perspectives
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[40px]">
              Latest Insights &amp; Engineering Articles
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              Explore expert guides, ROI frameworks, and digital architecture best practices crafted by the engineering team at Abtel Cloud Services.
            </p>
          </div>

          {/* 3-Column Grid of Modern Blog Cards */}
          <StaggerGroup
            stagger={0.12}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {BLOG_POSTS.map((item) => (
              <StaggerItem key={item.id} className="h-full">
                <Card
                  variant="blog"
                  title={item.title}
                  excerpt={item.excerpt}
                  image={item.image}
                  date={item.date}
                  readTime={item.readTime}
                  category={item.category}
                  author={{
                    name: item.author.name,
                    avatar: item.author.avatar,
                  }}
                  href={item.url}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogHeroSection } from "@/components";
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
      "Why Your Business Can’t Afford to Settle. In today’s digital-first world, your website isn’t just an online brochure — it’s your 24/7 salesperson, brand ambassador, and conversion engine. Discover how custom engineering delivers compounding returns.",
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
      "For many small business owners, the appeal of DIY website builders like Wix, Squarespace, or GoDaddy seems obvious: low monthly costs, quick setup, and no coding required. But the hidden long-term limitations cost far more.",
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
      "The digital landscape is evolving faster than ever, and for small businesses, your website is no longer just a digital business card—it’s your storefront, salesperson, and customer support hub all rolled into one.",
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

      {/* 1. Hero Section with Background software-programe.jpg */}
      <BlogHeroSection />

      {/* 2. Main Blog Articles Section */}
      <section className="relative w-full bg-white py-14 sm:py-18 lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Header Eyebrow & Title */}
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
              Articles &amp; Perspectives
            </p>
            <h2 className="mt-3.5 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[40px]">
              Latest Insights &amp; Articles
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Explore expert guides, ROI frameworks, and digital architecture best practices crafted by the engineering team at Abtel Cloud Services.
            </p>
          </div>

          {/* 3-Column Responsive Blog Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((item) => (
              <article
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00D4FF]/60 hover:shadow-[0_20px_48px_rgba(0,212,255,0.16)]"
              >
                {/* Top Subtle Hover Accent Glow Line */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 top-0 z-20 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent transition-opacity duration-300 group-hover:via-[#00D4FF]"
                />

                {/* Featured Thumbnail with Hover Zoom - Opens in SAME TAB */}
                <Link
                  href={item.url}
                  aria-label={`Read article: ${item.title}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center rounded-full bg-[#0A0E33]/85 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#00D4FF]">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Sweep Overlay with Read Article Pill */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0E33]/85 via-[#0A0E33]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0A0E33] shadow-lg">
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#246BFD]" aria-hidden="true" />
                    </span>
                  </div>
                </Link>

                {/* Content Details */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Author Avatar & Date Meta Row */}
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <a
                      href={item.author.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-slate-700 transition-colors hover:text-[#246BFD] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#246BFD] rounded"
                    >
                      <div className="relative h-6 w-6 overflow-hidden rounded-full border border-sky-200 bg-sky-50 shadow-xs">
                        <Image
                          src={item.author.avatar}
                          alt={item.author.name}
                          fill
                          sizes="24px"
                          className="object-cover"
                        />
                      </div>
                      <span>{item.author.name}</span>
                    </a>

                    <span className="text-slate-300" aria-hidden="true">
                      •
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-sky-500" aria-hidden="true" />
                      <time dateTime={item.isoDate}>{item.date}</time>
                    </span>
                  </div>

                  {/* Heading Link - Opens in SAME TAB */}
                  <h3 className="mt-3.5 text-xl font-bold tracking-tight text-[#0F172A] sm:text-[22px] leading-snug">
                    <Link
                      href={item.url}
                      className="inline-flex items-start gap-1.5 text-[#0F172A] transition-colors hover:text-[#246BFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#246BFD]"
                    >
                      <span>{item.title}</span>
                    </Link>
                  </h3>

                  {/* Excerpt Paragraph */}
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-[#475569]">
                    {item.excerpt}
                  </p>

                  {/* Bottom Read More Action Row - Opens in SAME TAB */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <Link
                      href={item.url}
                      className="btn-cut group/btn relative inline-flex h-[40px] items-center justify-center overflow-hidden bg-[#246BFD] px-5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(36,107,253,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                      />
                      <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover/btn:text-[#0A0E33]">
                        <span>Read More</span>
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>

                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-medium">
                      <Clock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      <span>{item.readTime}</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

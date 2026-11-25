"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const LATEST_BLOG_POSTS = [
  {
    id: "roi-professional-website",
    title: "The ROI of a Professional Website",
    slug: "roi-professional-website",
    url: "/roi-professional-website",
    excerpt:
      "Why Your Business Can't Afford to Settle. In today's digital-first world, your website isn't just an online brochure — it's your 24/7 salesperson and conversion engine.",
    image: "/images/The-ROI-of-a-Professional-Website.png",
    author: {
      name: "Abner Hill",
      avatar: "/images/Abner Hill.png",
    },
    date: "April 4, 2025",
    category: "Business Strategy",
    readTime: "5 min read",
  },
  {
    id: "why-diy-website-builders-cost-more",
    title: "Why DIY Website Builders Cost You More in the Long Run",
    slug: "why-diy-website-builders-cost-more",
    url: "/why-diy-website-builders-cost-more",
    excerpt:
      "The appeal of DIY website builders like Wix or Squarespace seems obvious, but the hidden long-term limitations on SEO, performance, and customization cost far more.",
    image: "/images/Why-DIY-Website-Builders-Cost-You-More-in-the-Long-Run-768x512.png",
    author: {
      name: "Abner Hill",
      avatar: "/images/Abner Hill.png",
    },
    date: "February 7, 2025",
    category: "Web Development",
    readTime: "6 min read",
  },
  {
    id: "small-business-website-needs-2025",
    title: "5 Things Every Small Business Website Needs in 2025",
    slug: "small-business-website-needs-2025",
    url: "/small-business-website-needs-2025",
    excerpt:
      "The digital landscape is evolving rapidly. Discover the 5 essential technical elements your business website must have to outperform competitors in 2025.",
    image: "/images/Man-Working-At-Laptop-768x768.png",
    author: {
      name: "Abner Hill",
      avatar: "/images/Abner Hill.png",
    },
    date: "January 3, 2025",
    category: "Digital Growth",
    readTime: "4 min read",
  },
];

export function BlogPreviewSection() {
  return (
    <section
      aria-label="Latest Tech & Industry Insights"
      className="relative w-full bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal variant="fade-down">
            <span className="eyebrow-premium">
              From Our Tech Blog
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1} className="mt-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[44px]">
              Latest Engineering &amp;{" "}
              <span className="relative inline-block" style={{fontFamily:"var(--font-serif,'Georgia',serif)",fontStyle:"italic",fontWeight:700,background:"linear-gradient(135deg,#E11D48,#fb7185)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                Strategy Insights
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.16} className="mt-3">
            <p className="text-base sm:text-lg text-[var(--text-muted)]">
              Perspectives on modern software architecture, cloud ROI, and web development from the engineering team.
            </p>
          </Reveal>
        </div>

        {/* 3-Card Grid */}
        <StaggerGroup
          stagger={0.12}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {LATEST_BLOG_POSTS.map((post) => (
            <StaggerItem key={post.id} className="h-full">
              <Card
                variant="blog"
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                author={post.author}
                href={post.url}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Bottom CTA */}
        <Reveal variant="fade-up" delay={0.25} className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] transition-transform hover:translate-x-1"
          >
            <span>Explore all articles and technical tutorials</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

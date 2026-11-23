"use client";

import React from "react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export interface ArticleHeroSectionProps {
  title: string;
  category: string;
  backgroundImage: string;
  date: string;
  isoDate: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  breadcrumbsTitle?: string;
}

export function ArticleHeroSection({
  title,
  category,
  backgroundImage,
  date,
  readTime,
  author,
  breadcrumbsTitle,
}: ArticleHeroSectionProps) {
  return (
    <PageHeroBanner
      align="left"
      badge={category}
      title={title}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: breadcrumbsTitle || title },
      ]}
      backgroundImage={backgroundImage}
      meta={{
        date,
        readTime,
        author,
      }}
    />
  );
}

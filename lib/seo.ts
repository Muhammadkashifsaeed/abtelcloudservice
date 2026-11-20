import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_APP_URL
    ? process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "")
    : process.env.NODE_ENV === "production"
      ? "https://abtelcloudservices.com"
      : "http://localhost:3000";

export const SITE_NAME = "Abtel Cloud Services";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/blade-servers-background.jpg`;
export const SITE_LOGO = `${SITE_URL}/images/ABTEL-CLOUD-SERVICES-logo-1.png`;

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  authorUrl?: string;
  section?: string;
  noIndex?: boolean;
}

/**
 * Generates comprehensive, production-grade Next.js App Router metadata for any page.
 */
export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
  authorName,
  authorUrl,
  section,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const defaultKeywords = [
    "Abtel Cloud Services",
    "custom software development",
    "cloud services",
    "web development",
    "mobile app development",
    "API integration",
    "software consulting",
    "IT infrastructure",
  ];

  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  const authorsList = authorName
    ? [
        {
          name: authorName,
          url: authorUrl || `${SITE_URL}/about`,
        },
      ]
    : [{ name: SITE_NAME, url: SITE_URL }];

  // For the home page ("/"), ensure the title includes the brand name so the browser <title> is 50-60 characters
  const isHomePage = cleanPath === "/";
  const pageTitle =
    isHomePage && !title.includes(SITE_NAME)
      ? `${title} | ${SITE_NAME}`
      : title;
  const ogTitle = pageTitle.includes(SITE_NAME) ? pageTitle : `${pageTitle} | ${SITE_NAME}`;

  return {
    title: pageTitle,
    description,
    keywords: mergedKeywords,
    authors: authorsList,
    creator: authorName || SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph:
      type === "article"
        ? {
            title: ogTitle,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            locale: "en_US",
            type: "article",
            publishedTime,
            modifiedTime: modifiedTime || publishedTime,
            authors: [authorName || SITE_NAME],
            section: section || "Technology",
            tags: mergedKeywords,
            images: [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: ogTitle,
              },
            ],
          }
        : {
            title: ogTitle,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            locale: "en_US",
            type: "website",
            images: [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: ogTitle,
              },
            ],
          },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [imageUrl],
      creator: "@abtelcloud",
      site: "@abtelcloud",
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

/**
 * Organization Schema for JSON-LD structured data.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  alternateName: "Abtel Cloud Services LLC",
  url: SITE_URL,
  logo: SITE_LOGO,
  image: DEFAULT_OG_IMAGE,
  description:
    "Leading software development and cloud solutions provider specializing in custom software development, cloud infrastructure, web and mobile app development, and API integrations.",
  telephone: "+1 800 484 4204",
  email: "sales@abtelcloud.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    addressCountry: "US",
  },
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://www.facebook.com",
    "https://www.linkedin.com",
    "https://twitter.com",
  ],
};

/**
 * WebSite Schema for SearchAction structured data.
 */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO,
    },
  },
};

/**
 * Generates BreadcrumbList structured data for interior pages.
 */
export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Generates Service Schema for service pages.
 */
export function generateServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}${path}`,
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  };
}

export interface ArticleJsonLdOptions {
  title: string;
  headline?: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  authorRole?: string;
  section?: string;
  keywords?: string[];
  wordCount?: number;
}

/**
 * Generates Google-compliant BlogPosting / Article Schema JSON-LD.
 */
export function generateArticleJsonLd({
  title,
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  authorRole = "Solutions Architect",
  section = "Technology",
  keywords = [],
  wordCount,
}: ArticleJsonLdOptions) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: headline || title,
    description,
    image: [imageUrl],
    datePublished,
    dateModified: dateModified || datePublished,
    articleSection: section,
    keywords: keywords.join(", "),
    wordCount,
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: authorRole,
      url: authorUrl || `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
    },
  };
}

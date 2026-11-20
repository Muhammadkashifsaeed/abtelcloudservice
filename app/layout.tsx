import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CanonicalSync, CustomCursor, Footer, Header, PageLoaderProvider } from "@/components";
import {
  DEFAULT_OG_IMAGE,
  organizationJsonLd,
  SITE_NAME,
  SITE_URL,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Custom Software & Cloud Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Abtel Cloud Services provides custom software development, cloud infrastructure management, web and mobile engineering, and enterprise API integrations.",
  metadataBase: new URL(SITE_URL),
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Custom Software & Cloud Solutions`,
    description:
      "Abtel Cloud Services provides custom software development, cloud infrastructure management, web and mobile engineering, and enterprise API integrations.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Enterprise Software & Cloud Infrastructure`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Custom Software & Cloud Solutions`,
    description:
      "Abtel Cloud Services provides custom software development, cloud infrastructure management, web and mobile engineering, and enterprise API integrations.",
    images: [DEFAULT_OG_IMAGE],
    creator: "@abtelcloud",
    site: "@abtelcloud",
  },
  robots: {
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A0E33" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0E33" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Instant Canonical Sync (Guarantees matching self-canonical on Vercel deployments, custom domains & localhost) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var c=document.querySelector('link[rel="canonical"]');if(c&&window.location.origin){var p=window.location.pathname==='/'?'':window.location.pathname.replace(/\\/$/,'');var u=window.location.origin+p;if(c.href!==u){c.href=u;}}}catch(e){}})();`,
          }}
        />

        {/* Verification & SEO Extension Meta Tags */}
        <meta name="publisher" content={SITE_NAME} />
        <meta name="author" content={SITE_NAME} />
        <link rel="publisher" href={SITE_URL} />
        <meta property="article:publisher" content="https://www.facebook.com" />

        {/* Structured Data: Organization & WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col overflow-x-clip bg-background font-sans text-foreground selection:bg-primary/20 selection:text-foreground"
      >
        <PageLoaderProvider>
          <CanonicalSync />
          <CustomCursor />
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </PageLoaderProvider>
      </body>
    </html>
  );
}

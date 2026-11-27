import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { CanonicalSync, CustomCursor, Footer, Header, PageLoaderProvider } from "@/components";
import { PageTransition, ScrollProgressBar, SmoothScroll } from "@/components/motion";
import {
  DEFAULT_OG_IMAGE,
  organizationJsonLd,
  SITE_NAME,
  SITE_URL,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
      { url: "/images/acs-fav-icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/images/acs-fav-icon.png",
    apple: [{ url: "/images/acs-fav-icon.png", sizes: "512x512", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F1115" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1115" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        {/* Instant Canonical Sync */}
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
        className="flex min-h-full flex-col overflow-x-hidden bg-[var(--bg-light)] font-sans text-[var(--text-dark)] selection:bg-[var(--primary)] selection:text-white"
      >
        <CustomCursor />
        <PageLoaderProvider>
          <SmoothScroll>
            <ScrollProgressBar />
            <CanonicalSync />
            <Header />
            <main className="flex flex-1 flex-col">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </SmoothScroll>
        </PageLoaderProvider>
      </body>
    </html>
  );
}

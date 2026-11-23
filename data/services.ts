export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
  badge?: string;
  deliverables: string[];
  isPlaceholder?: boolean;
}

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "web-development",
    index: "01",
    title: "Web Development",
    subtitle: "Enterprise Next.js & React Applications",
    description: "Custom web applications engineered for sub-second performance, search visibility, high conversion rates, and seamless cloud scale.",
    href: "/services/web-development",
    image: "/images/web-dev-hero-ai.jpg",
    badge: "Popular",
    deliverables: [
      "Next.js App Router & Server Components",
      "Sub-second global Edge page performance",
      "Headless CMS & API-first integrations",
      "WCAG 2.1 AA accessibility compliance",
    ],
    isPlaceholder: false,
  },
  {
    id: "mobile-app-development",
    index: "02",
    title: "Mobile App Development",
    subtitle: "Native iOS, Android & Flutter Apps",
    description: "High-performance mobile products with fluid 60fps animations, offline data synchronization, and enterprise cloud APIs.",
    href: "/services/mobile-app-development",
    image: "/images/mobile-app-hero-ai.jpg",
    badge: "Cross-Platform",
    deliverables: [
      "Native iOS (Swift) & Android (Kotlin)",
      "Cross-platform Flutter & React Native",
      "Offline-first local database caching",
      "Automated CI/CD App Store pipelines",
    ],
    isPlaceholder: false,
  },
  {
    id: "api-integrations",
    index: "03",
    title: "API Integrations",
    subtitle: "Enterprise Middleware & Microservices",
    description: "Connect CRM, ERP, and payment systems with secure, audited microservices designed for zero data loss and automated retries.",
    href: "/services/api-integrations",
    image: "/images/api-integrations-hero-ai.jpg",
    deliverables: [
      "RESTful, GraphQL & gRPC microservices",
      "Stripe, PayPal, and Authorize.Net gateways",
      "Salesforce, HubSpot, and ERP middleware",
      "Automated webhooks with retry queuing",
    ],
    isPlaceholder: false,
  },
  {
    id: "e-commerce",
    index: "04",
    title: "E-Commerce Solutions",
    subtitle: "High-Converting Headless Storefronts",
    description: "Scalable headless commerce platforms and Shopify Plus architectures with instant faceted search and frictionless checkout funnels.",
    href: "/services/e-commerce",
    image: "/images/ecommerce-hero-ai.jpg",
    deliverables: [
      "Headless Shopify Plus & WooCommerce platforms",
      "Instant faceted search & catalog filtering",
      "Multi-currency & localization engines",
      "Sub-200ms checkout conversion optimization",
    ],
    isPlaceholder: false,
  },
  {
    id: "digital-marketplace",
    index: "05",
    title: "Digital Marketplace",
    subtitle: "Turnkey Multi-Vendor Marketplaces",
    description: "Turnkey multi-vendor platforms with automated seller onboarding, commission split billing, and enterprise escrow compliance.",
    href: "/services/digital-marketplace",
    image: "/images/digital-marketplace-hero-ai.jpg",
    badge: "Enterprise",
    deliverables: [
      "Vendor dashboard & inventory synchronization",
      "Automated escrow & commission split payouts",
      "Real-time order tracking & messaging",
      "PCI-DSS compliant payment routing",
    ],
    isPlaceholder: false,
  },
  {
    id: "ui-ux-design",
    index: "06",
    title: "UI/UX Design",
    subtitle: "Figma Design Systems & Prototypes",
    description: "Transform complex user journeys into intuitive, high-converting digital interfaces backed by usability research and Figma UI kits.",
    href: "/services/ui-ux-design",
    image: "/images/ui-ux-hero-ai.jpg",
    deliverables: [
      "User research, persona mapping & journey flows",
      "Interactive Figma high-fidelity prototypes",
      "Scalable Design System component kits",
      "Conversion rate optimization (CRO) audits",
    ],
    isPlaceholder: false,
  },
];

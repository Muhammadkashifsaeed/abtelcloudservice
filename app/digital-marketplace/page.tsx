import type { Metadata } from "next";
import DigitalMarketplacePage from "../services/digital-marketplace/page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Marketplaces | Multi-Vendor Stores",
  description:
    "Build scalable multi-vendor marketplaces with Abtel Cloud Services. Complete seller onboarding, vendor management, and secure automated transactions.",
  path: "/services/digital-marketplace",
  keywords: ["digital marketplace", "multi-vendor marketplace", "B2B platform"],
});

export default DigitalMarketplacePage;

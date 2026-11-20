import type { Metadata } from "next";
import MobileAppDevelopmentPage from "../services/mobile-app-development/page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Mobile Apps | iOS & Android Dev",
  description:
    "High-performance mobile application development across iOS, Android, and cross-platform frameworks by Abtel Cloud Services.",
  path: "/services/mobile-app-development",
  keywords: ["mobile app development", "iOS", "Android", "React Native", "Flutter"],
});

export default MobileAppDevelopmentPage;

import type { Metadata } from "next";
import UiUxDesignPage from "../services/ui-ux-design/page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "UI/UX Design | Prototyping & Apps",
  description:
    "Elevate your product with human-centered UI/UX design from Abtel Cloud Services. Wireframing, interactive prototyping, and modern design systems.",
  path: "/services/ui-ux-design",
  keywords: ["UI UX design", "wireframing", "prototyping", "design systems"],
});

export default UiUxDesignPage;

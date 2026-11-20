import type { Metadata } from "next";
import ApiIntegrationsPage from "../services/api-integrations/page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "API Integration | REST & SOAP APIs",
  description:
    "Seamless API integration services by Abtel Cloud Services. Connect third-party platforms, build custom REST & SOAP APIs, and synchronize your data.",
  path: "/services/api-integrations",
  keywords: ["API integrations", "custom API", "RESTful API", "SOAP"],
});

export default ApiIntegrationsPage;

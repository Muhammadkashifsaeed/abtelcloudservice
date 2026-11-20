import type { Metadata } from "next";
import EcommercePage from "../services/e-commerce/page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "E-Commerce | Scalable Online Stores",
  description:
    "Launch high-converting e-commerce stores and marketplaces with Abtel Cloud Services. Secure payment gateways, inventory management, and fast checkout.",
  path: "/services/e-commerce",
  keywords: ["e-commerce", "online store", "Shopify", "WooCommerce", "Magento"],
});

export default EcommercePage;

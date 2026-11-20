import type { Metadata } from "next";
import WebDevelopmentPage from "../services/web-development/page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Web Development | Custom Web Apps",
  description:
    "Abtel Cloud Services builds fast, secure, and responsive web applications and portals using modern frontend frameworks and scalable cloud backends.",
  path: "/services/web-development",
  keywords: ["web development", "custom website", "web apps"],
});

export default WebDevelopmentPage;

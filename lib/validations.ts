import { z } from "zod";

export const newsletterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be 500 characters or fewer."),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export const SERVICE_OPTIONS = [
  "Custom Software Development",
  "Cloud Services (AWS, Azure, Google Cloud)",
  "Web Development",
  "Mobile App Development",
  "API Integration",
  "E-commerce Development",
  "UI/UX Design",
  "Digital Marketplace",
  "IT Consulting",
  "Technical Support",
] as const;

export const projectInquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(100, "Name must be 100 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(25, "Phone number is too long.")
    .regex(/^[+\d\s().-]+$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  service: z
    .string()
    .trim()
    .min(1, "Please select a service."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few details about your project (at least 10 characters).")
    .max(1500, "Message must be 1500 characters or fewer."),
});

export type ProjectInquiryValues = z.infer<typeof projectInquirySchema>;

export const contactRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(100, "Name must be 100 characters or fewer."),
  company: z
    .string()
    .trim()
    .max(100, "Company name is too long.")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(25, "Phone number is too long.")
    .regex(/^[+\d\s().-]+$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(2, "Please enter a subject (at least 2 characters).")
    .max(150, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(5, "Please enter your message (at least 5 characters).")
    .max(2000, "Message must be 2000 characters or fewer."),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy and terms and conditions.",
  }),
  consentInformational: z.boolean().optional(),
  consentNoTexts: z.boolean().optional(),
  captchaVerified: z.boolean().refine((val) => val === true, {
    message: "Please complete the CAPTCHA verification.",
  }),
});

export type ContactRequestValues = z.infer<typeof contactRequestSchema>;

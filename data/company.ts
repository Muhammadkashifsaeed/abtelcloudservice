export interface CompanyConfig {
  name: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  hours: string;
  supportAvailability: string;
  calendlyUrl: string;
}

export const COMPANY_DATA: CompanyConfig = {
  name: "Abtel Cloud Services",
  tagline: "Custom Software & Cloud Solutions",
  location: "San-Antonio, Texas",
  phone: "+1 800 484 4204",
  email: "sales@abtelcloud.com",
  hours: "Mon - Fri: 8:00 AM - 6:00 PM CST",
  supportAvailability: "24/7 Dedicated Technical Support",
  calendlyUrl: "https://calendly.com/abtelcloud/30min",
};

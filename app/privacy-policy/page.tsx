import type { Metadata } from "next";
import Link from "next/link";
import { PrivacyHeroSection } from "@/components";
import {
  ShieldCheck,
  Lock,
  MessageSquare,
  AlertCircle,
  FileText,
  CheckCircle2,
  ChevronRight,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";
import { createPageMetadata, generateBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | Data & SMS Terms - Abtel Cloud Services",
  description:
    "Learn how Abtel Cloud Services collects, protects, and handles your personal information and SMS communication data in compliance with strict privacy laws.",
  path: "/privacy-policy",
  keywords: [
    "privacy policy",
    "data protection",
    "SMS terms and conditions",
    "personal data security",
    "Abtel Cloud Services privacy",
    "mobile opt-in compliance",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
]);

const TOC_SECTIONS = [
  { id: "official-statement", label: "Official Statement" },
  { id: "messaging-terms", label: "SMS & Messaging Terms" },
  { id: "data-sharing", label: "Data Sharing & Mobile Consent" },
  { id: "personally-identifiable", label: "Personally Identifiable Info" },
  { id: "collection", label: "Information Collected" },
  { id: "third-parties", label: "Third-Party Organizations" },
  { id: "usage", label: "How Information is Used" },
  { id: "sharing", label: "Information Sharing" },
  { id: "storage", label: "Storage & Retention" },
  { id: "choices", label: "Visitor Choices & Opt-Out" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "login-info", label: "Login Information" },
  { id: "partners", label: "Partner & Provider Access" },
  { id: "security", label: "Information Security" },
  { id: "corrections", label: "Correcting Inaccuracies" },
  { id: "deletion", label: "Deleting / Deactivating Data" },
  { id: "policy-changes", label: "Policy Changes" },
  { id: "links", label: "External Links" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero Section */}
      <PrivacyHeroSection />

      {/* Main Content Section */}
      <section className="relative w-full bg-[#F8FAFC] py-10 sm:py-14 lg:py-16">
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="hidden lg:col-span-4 lg:block sticky top-28">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-[#0284C7]">
                    <FileText className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Document Sections
                  </span>
                </div>

                <nav className="mt-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 flex flex-col space-y-1 text-xs font-medium text-slate-600 scrollbar-thin">
                  {TOC_SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-150 hover:bg-sky-50 hover:text-[#0284C7]"
                    >
                      <span>{sec.label}</span>
                      <ChevronRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </nav>

                <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <p className="font-semibold text-slate-700">Abtel Cloud Services</p>
                  <p className="mt-1">
                    Have questions? Email{" "}
                    <a
                      href="mailto:info@abtelcloud.com"
                      className="font-bold text-[#0284C7] hover:underline"
                    >
                      info@abtelcloud.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Legal Document Main Column */}
            <main className="lg:col-span-8">
              <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 text-left shadow-[0_4px_30px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12">
                {/* Top Subtle Cyan Glow Accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 top-0 h-[3px] rounded-full bg-gradient-to-r from-[#0284C7] via-[#22C7F2] to-[#0284C7]"
                />

                {/* Document Header */}
                <div id="official-statement" className="border-b border-slate-100 pb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                    <FileText className="h-3.5 w-3.5 text-[#0284C7]" />
                    <span>Official Statement</span>
                  </div>

                  <h1 className="relative inline-block mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                    <span>Privacy Policy</span>
                    <CurvedUnderline color="#0284C7" className="-bottom-2 sm:-bottom-3" />
                  </h1>

                  <p className="mt-6 text-[15px] leading-relaxed text-slate-700 sm:text-base lg:text-[16.5px]">
                    Welcome to{" "}
                    <strong className="text-slate-900">
                      https://www.abtelcloudservices.com
                    </strong>{" "}
                    (the &ldquo;Site&rdquo;). We understand that privacy online is important to users of our Site, especially when conducting business. This statement governs our privacy policies with respect to those users of the Site (&ldquo;Visitors&rdquo;) who visit without transacting business and Visitors who register to transact business on the Site and make use of the various services offered by Abtel Cloud Services (collectively, &ldquo;Services&rdquo;) (&ldquo;Authorized Customers&rdquo;).
                  </p>
                </div>

                {/* Document Body */}
                <div className="space-y-10 pt-8 text-[15px] leading-relaxed text-slate-700 sm:text-base lg:text-[16.5px]">
                  {/* Abtel Cloud Services Messaging Terms and Conditions */}
                  <div
                    id="messaging-terms"
                    className="rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-sky-50/40 p-6 sm:p-8"
                  >
                    <div className="flex items-center gap-2.5 text-lg font-bold text-slate-900 sm:text-xl">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-white">
                        <MessageSquare className="h-4.5 w-4.5" />
                      </div>
                      <h3>Abtel Cloud Services Messaging Terms and Conditions</h3>
                    </div>

                    <ol className="mt-5 space-y-3.5 list-decimal pl-5 text-slate-800 text-sm sm:text-base">
                      <li className="pl-1">
                        The messaging program consists of customer inquiries, technical consultation updates, and service notifications.
                      </li>
                      <li className="pl-1">
                        You can cancel the SMS service at any time. Just text &lsquo;STOP&rsquo; to the phone number from which you received messages. After you send the SMS message &lsquo;STOP&rsquo; to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
                      </li>
                      <li className="pl-1">
                        If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at{" "}
                        <a
                          href="mailto:abner@abtelcloud.com"
                          className="font-bold text-[#0284C7] underline hover:text-[#0369A1]"
                        >
                          abner@abtelcloud.com
                        </a>.
                      </li>
                      <li className="pl-1">
                        Carriers are not liable for delayed or undelivered messages.
                      </li>
                      <li className="pl-1">
                        As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency will vary based on communication needs. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
                      </li>
                      <li className="pl-1">
                        If you have any questions regarding privacy, please read our privacy policy contained in the rest of this document/page.
                      </li>
                    </ol>

                    <div className="mt-6 border-t border-sky-200/70 pt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <p>
                        If you wish to stop receiving text messages from Abtel Cloud Services, simply text &ldquo;STOP&rdquo; to{" "}
                        <strong className="text-slate-900">+1 (800) 484-4204</strong>. You will receive a confirmation message once your request has been processed. For additional assistance or information, text &ldquo;HELP&rdquo; to{" "}
                        <strong className="text-slate-900">+1 (800) 484-4204</strong>. You can also contact our customer support team at{" "}
                        <a
                          href="mailto:support@abtelcloud.com"
                          className="font-bold text-[#0284C7] underline hover:text-[#0369A1]"
                        >
                          support@abtelcloud.com
                        </a>{" "}
                        for further assistance with opting out or managing your communication preferences. Please note that while opting out of text messages will stop promotional and non-transactional messages, you may still receive transactional messages related to your account or purchases.
                      </p>
                    </div>
                  </div>

                  {/* Data Sharing Highlight Callout */}
                  <div
                    id="data-sharing"
                    className="rounded-2xl border-2 border-emerald-300/80 bg-emerald-50/70 p-6 sm:p-7"
                  >
                    <div className="flex items-center gap-2.5 text-base font-bold text-emerald-950 sm:text-lg lg:text-xl">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h3>Data Sharing</h3>
                    </div>

                    <ul className="mt-4 space-y-3 text-sm sm:text-[15.5px] font-medium text-emerald-950">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                        <span>Customer data is not shared with 3rd parties for promotional or marketing purposes.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                        <span>Mobile opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Personally Identifiable Information */}
                  <div id="personally-identifiable" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      &ldquo;Personally Identifiable Information&rdquo;
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      refers to any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains, including, but not limited to, name, address, phone number, fax number, email address, financial profiles, social security number, and credit card information. Personally Identifiable Information does not include information that is collected anonymously (that is, without identification of the individual user) or demographic information not connected to an identified individual.
                    </p>
                  </div>

                  {/* What Personally Identifiable Information is collected? */}
                  <div id="collection" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      What Personally Identifiable Information is collected?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      We may collect basic user profile information from all of our Visitors. We collect the following additional information from our Authorized Customers: the names, addresses, phone numbers and email addresses of Authorized Customers, the nature and size of the business, and the nature and size of the advertising inventory that the Authorized Customer intends to purchase or sell.
                    </p>
                  </div>

                  {/* What organizations are collecting the information? */}
                  <div id="third-parties" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      What organizations are collecting the information?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      In addition to our direct collection of information, our third party service vendors (such as credit card companies, clearinghouses and banks) who may provide such services as credit, insurance, and escrow services may collect this information from our Visitors and Authorized Customers. We do not control how these third parties use such information, but we do ask them to disclose how they use personal information provided to them from Visitors and Authorized Customers. Some of these third parties may be intermediaries that act solely as links in the distribution chain, and do not store, retain, or use the information given to them.
                    </p>
                  </div>

                  {/* How does the Site use Personally Identifiable Information? */}
                  <div id="usage" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      How does the Site use Personally Identifiable Information?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      We use Personally Identifiable Information to customize the Site, to make appropriate service offerings, and to fulfill buying and selling requests on the Site. We may email Visitors and Authorized Customers about research or purchase and selling opportunities on the Site or information related to the subject matter of the Site. We may also use Personally Identifiable Information to contact Visitors and Authorized Customers in response to specific inquiries, or to provide requested information.
                    </p>
                  </div>

                  {/* With whom may the information may be shared? */}
                  <div id="sharing" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      With whom may the information may be shared?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      Personally Identifiable Information about Authorized Customers may be shared with other Authorized Customers who wish to evaluate potential transactions with other Authorized Customers. We may share aggregated information about our Visitors, including the demographics of our Visitors and Authorized Customers, with our affiliated agencies and third party vendors. We also offer the opportunity to &ldquo;opt out&rdquo; of receiving information or being contacted by us or by any agency acting on our behalf.
                    </p>
                  </div>

                  {/* How is Personally Identifiable Information stored? */}
                  <div id="storage" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      How is Personally Identifiable Information stored?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      Personally Identifiable Information collected by Abtel Cloud Services is securely stored and is not accessible to third parties or employees of Abtel Cloud Services except for use as indicated above.
                    </p>
                  </div>

                  {/* What choices are available to Visitors regarding collection, use and distribution of the information? */}
                  <div id="choices" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      What choices are available to Visitors regarding collection, use and distribution of the information?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      Visitors and Authorized Customers may opt out of receiving unsolicited information from or being contacted by us and/or our vendors and affiliated agencies by responding to emails as instructed, or by contacting us at{" "}
                      <a
                        href="mailto:info@abtelcloud.com"
                        className="font-semibold text-[#0284C7] underline hover:text-[#0369A1]"
                      >
                        info@abtelcloud.com
                      </a>.
                    </p>
                  </div>

                  {/* Are Cookies Used on the Site? */}
                  <div id="cookies" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      Are Cookies Used on the Site?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      Cookies are used for a variety of reasons. We use Cookies to obtain information about the preferences of our Visitors and the services they select. We also use Cookies for security purposes to protect our Authorized Customers. For example, if an Authorized Customer is logged on and the site is unused for more than 10 minutes, we will automatically log the Authorized Customer off.
                    </p>
                  </div>

                  {/* How does Abtel Cloud Services use login information? */}
                  <div id="login-info" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      How does Abtel Cloud Services use login information?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      Abtel Cloud Services uses login information, including, but not limited to, IP addresses, ISPs, and browser types, to analyze trends, administer the Site, track a user’s movement and use, and gather broad demographic information.
                    </p>
                  </div>

                  {/* What partners or service providers have access to Personally Identifiable Information */}
                  <div id="partners" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      What partners or service providers have access to Personally Identifiable Information from Visitors and/or Authorized Customers on the Site?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      Abtel Cloud Services has entered into and will continue to enter into partnerships and other affiliations with a number of vendors. Such vendors may have access to certain Personally Identifiable Information on a need to know basis for evaluating Authorized Customers for service eligibility. Our privacy policy does not cover their collection or use of this information. Disclosure of Personally Identifiable Information to comply with law. We will disclose Personally Identifiable Information in order to comply with a court order or subpoena or a request from a law enforcement agency to release information. We will also disclose Personally Identifiable Information when reasonably necessary to protect the safety of our Visitors and Authorized Customers.
                    </p>
                  </div>

                  {/* How does the Site keep Personally Identifiable Information secure? */}
                  <div
                    id="security"
                    className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-8"
                  >
                    <div className="flex items-center gap-2.5 font-bold text-slate-900">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-white">
                        <Lock className="h-4.5 w-4.5" />
                      </div>
                      <h2 className="text-base sm:text-lg lg:text-xl">
                        How does the Site keep Personally Identifiable Information secure?
                      </h2>
                    </div>
                    <p className="mt-3.5 text-slate-700 leading-relaxed">
                      All of our employees are familiar with our security policy and practices. The Personally Identifiable Information of our Visitors and Authorized Customers is only accessible to a limited number of qualified employees who are given a password in order to gain access to the information. We audit our security systems and processes on a regular basis. Sensitive information, such as credit card numbers or social security numbers, is protected by encryption protocols, in place to protect information sent over the Internet. While we take commercially reasonable measures to maintain a secure site, electronic communications and databases are subject to errors, tampering and break-ins, and we cannot guarantee or warrant that such events will not take place and we will not be liable to Visitors or Authorized Customers for any such occurrences.
                    </p>
                  </div>

                  {/* How can Visitors correct any inaccuracies in Personally Identifiable Information? */}
                  <div id="corrections" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      How can Visitors correct any inaccuracies in Personally Identifiable Information?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      Visitors and Authorized Customers may contact us to update Personally Identifiable Information about them or to correct any inaccuracies by emailing us at{" "}
                      <a
                        href="mailto:info@abtelcloud.com"
                        className="font-semibold text-[#0284C7] underline hover:text-[#0369A1]"
                      >
                        info@abtelcloud.com
                      </a>.
                    </p>
                  </div>

                  {/* Can a Visitor delete or deactivate Personally Identifiable Information collected by the Site? */}
                  <div id="deletion" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      Can a Visitor delete or deactivate Personally Identifiable Information collected by the Site?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      We provide Visitors and Authorized Customers with a mechanism to delete/deactivate Personally Identifiable Information from the Site’s database by contacting{" "}
                      <a
                        href="mailto:info@abtelcloud.com"
                        className="font-semibold text-[#0284C7] underline hover:text-[#0369A1]"
                      >
                        info@abtelcloud.com
                      </a>. However, because of backups and records of deletions, it may be impossible to delete a Visitor’s entry without retaining some residual information. An individual who requests to have Personally Identifiable Information deactivated will have this information functionally deleted, and we will not sell, transfer, or use Personally Identifiable Information relating to that individual in any way moving forward.
                    </p>
                  </div>

                  {/* What happens if the Privacy Policy Changes? */}
                  <div id="policy-changes" className="pt-2">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      What happens if the Privacy Policy Changes?
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      We will let our Visitors and Authorized Customers know about changes to our privacy policy by posting such changes on the Site. However, if we are changing our privacy policy in a manner that might cause disclosure of Personally Identifiable Information that a Visitor or Authorized Customer has previously requested not be disclosed, we will contact such Visitor or Authorized Customer to allow such Visitor or Authorized Customer to prevent such disclosure.
                    </p>
                  </div>

                  {/* Links */}
                  <div id="links" className="border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <AlertCircle className="h-4 w-4 text-[#0284C7]" />
                      <h2 className="text-base sm:text-lg lg:text-xl">Links</h2>
                    </div>
                    <p className="mt-2.5 text-slate-700">
                      <strong className="text-slate-900">
                        https://www.abtelcloudservices.com
                      </strong>{" "}
                      contains links to other web sites. Please note that when you click on one of these links, you are moving to another web site. We encourage you to read the privacy statements of these linked sites as their privacy policies may differ from ours.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div
                    id="contact"
                    className="border-t border-slate-200 pt-8"
                  >
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                      Contact Us
                    </h2>
                    <p className="mt-2 text-slate-700">
                      If you have any questions regarding this Privacy Policy, your personal information, or our practices, please contact us:
                    </p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                      <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                        <Globe className="h-5 w-5 shrink-0 text-[#0284C7]" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-500">Website</p>
                          <a
                            href="https://www.abtelcloudservices.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-slate-900 hover:text-[#0284C7]"
                          >
                            https://www.abtelcloudservices.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                        <Mail className="h-5 w-5 shrink-0 text-[#0284C7]" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-500">Official Email</p>
                          <a
                            href="mailto:info@abtelcloud.com"
                            className="font-semibold text-slate-900 hover:text-[#0284C7]"
                          >
                            info@abtelcloud.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                        <Mail className="h-5 w-5 shrink-0 text-[#0284C7]" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-500">Support Desk</p>
                          <a
                            href="mailto:support@abtelcloud.com"
                            className="font-semibold text-slate-900 hover:text-[#0284C7]"
                          >
                            support@abtelcloud.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                        <Phone className="h-5 w-5 shrink-0 text-[#0284C7]" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-500">Direct Phone</p>
                          <a
                            href="tel:+18004844204"
                            className="font-semibold text-slate-900 hover:text-[#0284C7]"
                          >
                            +1 (800) 484-4204
                          </a>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-slate-500">
                      Abtel Cloud Services &bull; San Antonio, Texas, United States &bull; All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

import { NextResponse } from "next/server";
import { contactRequestSchema, projectInquirySchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();

    // 1. Honeypot Anti-Spam Check: If a bot fills hidden field, fail silently
    if (rawBody && typeof rawBody === "object" && "website_hp" in rawBody && rawBody.website_hp) {
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for contacting us.",
        },
        { status: 200 }
      );
    }

    // 2. Check if it matches contactRequestSchema
    const parsedContact = contactRequestSchema.safeParse(rawBody);
    if (parsedContact.success) {
      const { name, email, subject, message } = parsedContact.data;

      // TODO: Connect with real email provider (e.g., Resend, Nodemailer, SendGrid, Postmark)
      // Example with Resend:
      // await resend.emails.send({
      //   from: 'contact@abtelcloud.com',
      //   to: 'sales@abtelcloud.com',
      //   subject: `[Contact Form] ${subject} from ${name}`,
      //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      // });

      return NextResponse.json(
        {
          success: true,
          data: {
            receivedAt: new Date().toISOString(),
            name,
            email,
          },
          message: `Thank you, ${name}! Your request has been received by our technical sales team. We will review it and reply within 24 hours.`,
        },
        { status: 200 }
      );
    }

    // 3. Otherwise check projectInquirySchema
    const parsedInquiry = projectInquirySchema.safeParse(rawBody);
    if (parsedInquiry.success) {
      const { name, service, email } = parsedInquiry.data;

      // TODO: Send project inquiry email alert to sales@abtelcloud.com

      return NextResponse.json(
        {
          success: true,
          data: {
            receivedAt: new Date().toISOString(),
            name,
            service,
            email,
          },
          message: `Thank you, ${name}! We received your inquiry regarding ${service} and will be in touch shortly.`,
        },
        { status: 200 }
      );
    }

    // Return the appropriate errors
    const errors =
      rawBody && typeof rawBody === "object" && "service" in rawBody && !("subject" in rawBody)
        ? parsedInquiry.error.flatten().fieldErrors
        : parsedContact.error.flatten().fieldErrors;

    return NextResponse.json(
      {
        success: false,
        message: "Please check the highlighted fields and try again.",
        errors,
      },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your request. Please try again or email us directly at sales@abtelcloud.com.",
      },
      { status: 400 }
    );
  }
}

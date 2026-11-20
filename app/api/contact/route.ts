import { NextResponse } from "next/server";
import { contactRequestSchema, projectInquirySchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    // Check if it matches contactRequestSchema
    const parsedContact = contactRequestSchema.safeParse(body);
    if (parsedContact.success) {
      const { name } = parsedContact.data;
      return NextResponse.json(
        {
          success: true,
          data: {
            receivedAt: new Date().toISOString(),
            name,
          },
          message: `Thank you, ${name}! Your request has been submitted to our team. We will reply within 24 hours.`,
        },
        { status: 200 }
      );
    }

    // Otherwise check projectInquirySchema
    const parsedInquiry = projectInquirySchema.safeParse(body);
    if (parsedInquiry.success) {
      const { name, service } = parsedInquiry.data;
      return NextResponse.json(
        {
          success: true,
          data: {
            receivedAt: new Date().toISOString(),
            name,
            service,
          },
          message: `Thank you, ${name}! We received your ${service} inquiry and will be in touch ASAP.`,
        },
        { status: 200 }
      );
    }

    // Return the contact errors as primary feedback
    return NextResponse.json(
      {
        success: false,
        message: "Please check the highlighted fields and try again.",
        errors: parsedContact.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your request. Please try again.",
      },
      { status: 400 }
    );
  }
}

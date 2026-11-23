import { NextResponse } from "next/server";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().trim().email("Please provide a valid email address."),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = subscribeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // TODO: Connect with real newsletter / CRM provider (e.g., Resend, SendGrid, Mailchimp, Nodemailer)
    // Example:
    // await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing! We'll keep you updated on modern tech insights.",
        data: { email, subscribedAt: new Date().toISOString() },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Subscription service temporarily unavailable. Please try again later.",
      },
      { status: 500 }
    );
  }
}

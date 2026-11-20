import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      status: "ok",
      timestamp: new Date().toISOString(),
    },
    message: "Service is healthy.",
  });
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        receivedAt: new Date().toISOString(),
        name: parsed.data.name,
      },
      message: `Thanks, ${parsed.data.name}! Your request passed Zod validation and reached the API.`,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON payload.",
      },
      { status: 400 }
    );
  }
}

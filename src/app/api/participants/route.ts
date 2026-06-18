import { NextRequest, NextResponse } from "next/server";
import { createParticipant } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { full_name, email, organization, department, job_title, phone } =
      body;

    if (!full_name?.trim() || !email?.trim() || !organization?.trim()) {
      return NextResponse.json(
        { error: "Full name, email, and organization are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const participantId = await createParticipant({
      full_name: full_name.trim(),
      email: email.trim(),
      organization: organization.trim(),
      department: department?.trim(),
      job_title: job_title?.trim(),
      phone: phone?.trim(),
    });

    return NextResponse.json({ participantId });
  } catch (error) {
    console.error("Create participant error:", error);
    return NextResponse.json(
      { error: "Failed to register participant." },
      { status: 500 }
    );
  }
}

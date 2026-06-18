import { NextResponse } from "next/server";
import { getAdminSession, COOKIE_NAME } from "@/lib/auth";
import { getAllParticipants } from "@/lib/db";
import { QUESTIONS } from "@/lib/questions";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const participants = await getAllParticipants();
  return NextResponse.json({ participants, questions: QUESTIONS });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  return response;
}

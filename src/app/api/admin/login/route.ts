import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {
  getAdminByUsername,
  ensureDefaultAdmin,
  updateAdminPassword,
} from "@/lib/db";
import { createAdminToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const envUsername = process.env.ADMIN_USERNAME || "admin";
    const envPassword = process.env.ADMIN_PASSWORD || "admin123";
    const passwordHash = bcrypt.hashSync(envPassword, 10);

    await ensureDefaultAdmin(envUsername, passwordHash);
    await updateAdminPassword(envUsername, passwordHash);

    const { username, password } = await request.json();
    const trimmedUser = username?.trim();
    const trimmedPass = password?.trim();

    if (!trimmedUser || !trimmedPass) {
      return NextResponse.json(
        { error: "Username and password are required." },
        { status: 400 }
      );
    }

    const admin = await getAdminByUsername(trimmedUser);
    if (!admin || !bcrypt.compareSync(trimmedPass, admin.password_hash)) {
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 }
      );
    }

    const token = await createAdminToken(admin.username);
    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "Login failed." }, { status: 500 });
  }
}

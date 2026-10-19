import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Auth API Error:", error);
    return NextResponse.json(
      { success: false, error: "Authentication request failed" },
      { status: 500 }
    );
  }
};
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/mongodb";
import Message from "@/models/Message";

export const POST = async (req: Request) => {
  try {
    await connectToDatabase();
    const body = await req.json();
    const newMessage = await Message.create(body);
    return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
  } catch (error) {
    console.error("POST Message Error:", error);
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectToDatabase();
    const messages = await Message.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: messages }, { status: 200 });
  } catch (error) {
    console.error("GET Messages Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch messages" }, { status: 500 });
  }
};
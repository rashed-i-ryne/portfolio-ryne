import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/mongodb";
import Project from "@/models/Project";

export const GET = async () => {
  try {
    await connectToDatabase();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error("GET Projects Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    await connectToDatabase();
    const body = await req.json();
    const project = await Project.create(body);
    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    console.error("POST Project Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create project" },
      { status: 400 }
    );
  }
};
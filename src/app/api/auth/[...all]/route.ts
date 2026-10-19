// src/app/api/auth/[...all]/route.ts
import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handlers = toNextJsHandler(auth);

// Strictly define the Next.js 15 dynamic route context
type RouteContext = {
  params: Promise<{ all: string[] }>;
};

export const GET = async (request: NextRequest, context: RouteContext) => {
  // Pass only the single argument (request) to Better Auth
  return handlers.GET(request);
};

export const POST = async (request: NextRequest, context: RouteContext) => {
  // Pass only the single argument (request) to Better Auth
  return handlers.POST(request);
};
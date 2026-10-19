// src/app/api/auth/[...all]/route.ts
import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const dynamic = "force-dynamic";

const handlers = toNextJsHandler(auth);

type RouteContext = {
  params: Promise<{ all: string[] }>;
};

export const GET = async (request: NextRequest, context: RouteContext) => {
  return handlers.GET(request);
};

export const POST = async (request: NextRequest, context: RouteContext) => {
  return handlers.POST(request);
};
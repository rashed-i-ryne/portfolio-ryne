import { NextRequest } from "next/server";

type RouteContext = {
  params: Promise<{ all: string[] }>;
};

export const GET = async (request: NextRequest, context: RouteContext) => {
  const { auth } = await import("@/lib/auth");
  const { toNextJsHandler } = await import("better-auth/next-js");
  const handlers = toNextJsHandler(auth);
  return handlers.GET(request);
};

export const POST = async (request: NextRequest, context: RouteContext) => {
  const { auth } = await import("@/lib/auth");
  const { toNextJsHandler } = await import("better-auth/next-js");
  const handlers = toNextJsHandler(auth);
  return handlers.POST(request);
};
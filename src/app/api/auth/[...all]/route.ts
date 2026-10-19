// src/app/api/auth/[...all]/route.ts
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// BetterAuth provides a helper to convert its handler for Next.js App Router
const handlers = toNextJsHandler(auth);

// Wrap the handlers with `context: any` to satisfy Next.js 15 type checking
export const GET = async (request: Request, context: any) => {
  return handlers.GET(request, context);
};

export const POST = async (request: Request, context: any) => {
  return handlers.POST(request, context);
};
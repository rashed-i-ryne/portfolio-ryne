// src/app/api/auth/[...all]/route.ts
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// BetterAuth provides a helper to convert its handler for Next.js App Router
const handler = toNextJsHandler(auth);

export const GET = handler;
export const POST = handler;
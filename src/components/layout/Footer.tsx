// src/components/layout/Footer.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@heroui/react";

export const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Making this asynchronous clears the strict ESLint warning
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Uses a static year for the server build, swaps to dynamic year in the browser
  const currentYear = mounted ? new Date().getFullYear() : 2026;

  return (
    <footer className="bg-primary-dark text-surface py-12 mt-20 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-2xl tracking-tighter mb-2">
            RASHEDUL ISLAM RYNE<span className="text-accent">.</span>
          </p>
          <p className="text-surface/70 text-sm">
            Full Stack Developer & EEE Student at UIU.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://github.com/rashed-i-ryne"
            target="_blank"
            className="text-surface hover:text-accent transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/rashedul-ryne"
            target="_blank"
            className="text-surface hover:text-accent transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/_rynnne._"
            target="_blank"
            className="text-surface hover:text-accent transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="https://www.facebook.com/rashedulryne24"
            target="_blank"
            className="text-surface hover:text-accent transition-colors"
          >
            Facebook
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 text-center text-sm text-surface/50">
        &copy; {currentYear} Rashedul Islam Ryne.
      </div>
    </footer>
  );
};

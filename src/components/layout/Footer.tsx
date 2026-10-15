// src/components/layout/Footer.tsx
"use client";

import React from "react";
import { Link } from "@heroui/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-surface py-12 mt-20 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-2xl tracking-tighter mb-2">
            RASHEDUL ISLAM RYNE<span className="text-accent">.</span>
          </p>
          <p className="text-surface/70 text-sm">
            Frontend Developer & EEE Student at UIU.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link href="https://github.com/rashed-i-ryne" target="_blank" className="text-surface hover:text-accent transition-colors">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/rashedul-ryne" target="_blank" className="text-surface hover:text-accent transition-colors">
            LinkedIn
          </Link>
          <Link href="https://x.com/rashedulryne" target="_blank" className="text-surface hover:text-accent transition-colors">
            Twitter
          </Link>
        </div>
      </div>
      <div 
        className="max-w-7xl mx-auto px-6 mt-12 text-center text-sm text-surface/50" 
        suppressHydrationWarning
      >
        &copy; {currentYear} Rashedul Islam Ryne. Built with Next.js, HeroUI & Tailwind CSS.
      </div>
    </footer>
  );
};
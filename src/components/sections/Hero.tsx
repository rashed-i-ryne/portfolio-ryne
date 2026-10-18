// src/components/sections/Hero.tsx
"use client";

import React from "react";
import { Download } from "lucide-react";

// Custom SVG components for brand icons to prevent lucide-react import errors
const GithubIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 px-6 bg-background flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Headline, Focused Tagline & Action Buttons */}
        <div className="space-y-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-secondary-dark uppercase mb-3">
              FRONTEND / WEB DEVELOPER
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-primary tracking-tighter leading-none mb-6">
              RASHEDUL <br />
              ISLAM <br />
              RYNE<span className="text-accent">.</span>
            </h1>

            {/* Focused Tagline */}
            <div className="inline-block border-l-4 border-accent pl-4 py-2 bg-surface/60 border-r border-y border-primary/10 pr-6">
              <p className="text-lg sm:text-xl font-display italic font-semibold text-primary tracking-wide">
                &ldquo;Curiosity architects the future.&rdquo;
              </p>
            </div>
          </div>

          {/* Action Buttons & Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/resume.pdf"
              download="Rashedul_Islam_Ryne_Resume.pdf"
              className="bg-primary text-surface px-6 py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-all flex items-center gap-3 rounded-none"
            >
              <span>Download Resume</span>
              <Download size={18} />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/rashed-i-ryne"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-surface border border-primary/20 text-primary hover:border-accent hover:text-accent transition-all rounded-none flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/rashedul-ryne"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-surface border border-primary/20 text-primary hover:border-accent hover:text-accent transition-all rounded-none flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.facebook.com/rashedulryne24"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-surface border border-primary/20 text-primary hover:border-accent hover:text-accent transition-all rounded-none flex items-center justify-center"
                aria-label="Facebook Profile"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Code Snippet Card */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
          {/* Offset Accent Backdrop Frame */}
          <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 border border-accent/40 hidden sm:block"></div>

          {/* Main Card Container */}
          <div className="relative bg-surface border border-primary/20 p-6 sm:p-8 shadow-2xl font-mono text-sm space-y-4">
            {/* Fake Window Header */}
            <div className="flex items-center justify-between border-b border-primary/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="text-xs text-mainText/40 font-sans tracking-widest uppercase">
                developer.ts
              </span>
            </div>

            {/* Code Body */}
            <div className="space-y-1 text-mainText/90 leading-relaxed overflow-x-auto">
              <p>
                <span className="text-accent font-bold">const</span>{" "}
                <span className="text-primary font-bold">developer</span> =
                &#123;
              </p>
              <p className="pl-4">
                name:{" "}
                <span className="text-accent">
                  &apos;Rashedul Islam Ryne&apos;
                </span>
                ,
              </p>
              <p className="pl-4">
                motto:{" "}
                <span className="text-accent">
                  &apos;Curiosity architects the future&apos;
                </span>
                ,
              </p>
              <p className="pl-4">
                role:{" "}
                <span className="text-accent">
                  &apos;Frontend / Web Developer&apos;
                </span>
                ,
              </p>
              <p className="pl-4">
                location:{" "}
                <span className="text-accent">
                  &apos;Dhaka, Bangladesh&apos;
                </span>
                ,
              </p>
              <p className="pl-4">stack: [</p>
              <p className="pl-8 text-secondary-dark font-medium">
                &apos;Next.js&apos;, &apos;TypeScript&apos;,
                &apos;Tailwind&apos;, &apos;MongoDB&apos;
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                status:{" "}
                <span className="text-accent">
                  &apos;Available for Hire&apos;
                </span>
              </p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

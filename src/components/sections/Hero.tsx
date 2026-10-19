
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import heroBg from "../../../public/hero-bg.jpeg";


const GithubIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-6 flex items-center relative overflow-hidden">
    
      <div className="absolute inset-0 -z-20 w-full h-full">
        <Image
          src={heroBg}
          alt="Developer Hero Background"
          fill
          priority
          placeholder="blur"
          className="object-cover object-right lg:object-center opacity-[0.85]" 
        />
      </div>

      <div className="absolute inset-0 bg-background/50 lg:bg-linear-to-r lg:from-background/95 lg:via-background/40 lg:to-transparent -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
        
        <div className="space-y-8 animate-fade-in lg:col-span-2">
          <div>
        
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-accent tracking-tighter leading-[0.95] mb-6 uppercase drop-shadow-sm">
              CURIOSITY ARCHITECTS <br /> THE FUTURE.
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tighter leading-none mb-3">
              RASHEDUL ISLAM RYNE<span className="text-accent">.</span>
            </h2>

            <p className="text-lg sm:text-xl text-mainText/90 max-w-2xl font-medium text-justify">
              Full-Stack Web Developer crafting modern, scalable digital experiences through thoughtful engineering, clean architecture, and continuous learning.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/resume.pdf"
              download="Rashedul_Islam_Ryne_Resume.pdf"
              className="bg-primary text-surface px-6 py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-all flex items-center gap-3 rounded-none shadow-lg"
            >
              <span>Download Resume</span>
              <Download size={18} />
            </a>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/rashed-i-ryne"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-surface/80 border border-primary/20 text-primary hover:border-accent hover:text-accent transition-all rounded-none flex items-center justify-center backdrop-blur-sm shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rashedul-ryne"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-surface/80 border border-primary/20 text-primary hover:border-accent hover:text-accent transition-all rounded-none flex items-center justify-center backdrop-blur-sm shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href="https://www.instagram.com/_rynnne._"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-surface/80 border border-primary/20 text-primary hover:border-accent hover:text-accent transition-all rounded-none flex items-center justify-center backdrop-blur-sm shadow-sm"
                aria-label="Instagram Profile"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.facebook.com/rashedulryne24"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-surface/80 border border-primary/20 text-primary hover:border-accent hover:text-accent transition-all rounded-none flex items-center justify-center backdrop-blur-sm shadow-sm"
                aria-label="Facebook Profile"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-1"></div>

      </div>
    </section>
  );
};
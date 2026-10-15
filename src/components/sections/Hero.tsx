// src/components/sections/Hero.tsx
"use client";

import React from "react";
import { Button, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

// Custom SVG components for brand icons
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


const FacebookIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center bg-background pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <p className="text-secondary font-medium tracking-widest uppercase mb-4 pl-1">
            Frontend / Web Developer
          </p>
          <h1 className="text-[12vw] sm:text-8xl md:text-9xl font-display font-bold text-primary leading-[0.85] tracking-tighter mb-8">
            RASHEDUL <br />
            ISLAM <br />
            RYNE<span className="text-accent">.</span>
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center mt-6">
            <Button 
              className="bg-primary text-surface font-bold rounded-none px-8 py-6 uppercase tracking-wider hover:bg-primary-dark transition-all flex items-center gap-2"
            >
              <span>Download Resume</span>
              <Download size={20} />
            </Button>
            
            <div className="flex gap-4 ml-4">
              <Link 
                href="https://github.com/rashed-i-ryne" 
                target="_blank" 
                className="text-primary hover:text-accent transition-colors p-2 border border-primary/20 hover:border-accent flex items-center justify-center w-[42px] h-[42px]"
              >
                <GithubIcon />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/rashedul-ryne" 
                target="_blank" 
                className="text-primary hover:text-accent transition-colors p-2 border border-primary/20 hover:border-accent flex items-center justify-center w-[42px] h-[42px]"
              >
                <LinkedinIcon />
              </Link>
              
              <Link 
                href="https://www.facebook.com/rashedulryne24" 
                target="_blank" 
                className="text-primary hover:text-accent transition-colors p-2 border border-primary/20 hover:border-accent flex items-center justify-center w-[42px] h-[42px]"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-secondary/5 -z-10 hidden md:block" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};
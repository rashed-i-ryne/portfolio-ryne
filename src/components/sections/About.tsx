// src/components/sections/About.tsx
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="ABOUT ME" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <div className="aspect-square bg-background border-2 border-primary/10 relative group overflow-hidden">
            {/* Placeholder for professional photo */}
            <div className="absolute inset-0 flex items-center justify-center text-secondary-light font-display uppercase tracking-widest group-hover:scale-105 transition-transform duration-500">
              [ Photo Placeholder ]
            </div>
          </div>
          
          <div className="space-y-6 text-mainText text-lg leading-relaxed">
            <p>
              My journey into programming began from a desire to blend logic with visual creativity. As an Electrical and Electronic Engineering (EEE) student at United International University (UIU), I bring a strong analytical mindset to the web development space. 
            </p>
            <p>
              I specialize in crafting meticulous front-end experiences. I love diving deep into CSS—whether it's building clean layouts or programming precise keyframe animations, like calculating the exact color transitions for a pure sky transitioning from dark to light at sunrise, and hitting the perfect light blue when the sun is at its highest point.
            </p>
            <p>
              When I'm not writing code or debugging complex circuits, you can find me playing sports or painting, always looking for new ways to channel my creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
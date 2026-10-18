// src/components/sections/Education.tsx
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="EDUCATION" />
        <div className="mt-12 space-y-12 border-l-2 border-primary/20 pl-8 ml-4">
          
          {/* University */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-accent"></div>
            <h3 className="text-2xl font-display font-bold text-primary">BSc in Electrical and Electronic Engineering</h3>
            <p className="text-secondary font-medium mt-1">United International University (UIU) | Present</p>
            <p className="text-mainText/80 mt-4 text-lg">Currently pursuing my degree, building a strong foundation in analytical problem-solving and logic that perfectly translates to complex software engineering tasks.</p>
          </div>

          {/* College */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-secondary-light"></div>
            <h3 className="text-2xl font-display font-bold text-primary">Higher Secondary Certificate (HSC)</h3>
            <p className="text-secondary font-medium mt-1">Ananda Mohan College, Mymensingh | Passing Year: 2017</p>
            <p className="text-mainText/80 mt-2">Science Background</p>
          </div>

          {/* School */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-secondary/50"></div>
            <h3 className="text-2xl font-display font-bold text-primary">Secondary School Certificate (SSC)</h3>
            <p className="text-secondary font-medium mt-1">Jamalpur Zilla School | Passing Year: 2015</p>
            <p className="text-mainText/80 mt-2">Science Background</p>
          </div>

        </div>
      </div>
    </section>
  );
};
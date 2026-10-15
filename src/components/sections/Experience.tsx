// src/components/sections/Experience.tsx
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "@heroui/react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="EXPERIENCE" />
        <div className="mt-12 space-y-6">
          <Card className="bg-surface rounded-none border border-primary/10 shadow-none p-8">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-primary">Freelance Web Developer</h3>
                <p className="text-secondary font-medium mt-1">Self-Employed | 2024 - Present</p>
                <p className="text-mainText/80 mt-4 text-lg max-w-2xl">
                  Building responsive, performance-optimized web applications for diverse clients using React, Next.js, and modern CSS frameworks.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
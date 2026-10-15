// src/components/sections/Skills.tsx
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "@heroui/react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "MongoDB", "Mongoose", "BetterAuth"],
  },
  {
    title: "Tools & Paradigms",
    skills: ["Git & GitHub", "AI Mindset & Engineering", "AI-Assisted Coding"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="SKILLS" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-surface rounded-none border border-primary/10 shadow-none hover:border-accent transition-colors p-8">
              <h3 className="text-xl font-display font-bold text-primary mb-6 border-b border-secondary/20 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background text-secondary-dark text-sm font-medium border border-secondary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
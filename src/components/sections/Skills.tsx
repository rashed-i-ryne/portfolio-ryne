// src/components/sections/Skills.tsx
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "@heroui/react";

const skillCategories = [
  {
    title: "Foundation",
    skills: ["HTML5", "CSS3", "JavaScript (Basic)", "ES6 + Problem Solving"],
  },
  {
    title: "Frontend",
    skills: ["React (Basic)", "Tailwind CSS", "TypeScript Basic + OOP", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Modular Pattern", "API Integration"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose / ODM"],
  },
  {
    title: "UI Libraries",
    skills: ["HeroUI", "ShadCN"],
  },
  {
    title: "Auth & Security",
    skills: ["BetterAuth", "Role Based Access Control"],
  },
  {
    title: "Advanced Concepts",
    skills: ["DOM vs BOM", "AI Mindset Development", "AI Integration", "AI Assisted Coding"],
  },
  {
    title: "Payment & Testing",
    skills: ["Stripe", "SSLCommerz", "Introduction to Testing"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="SKILLS" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
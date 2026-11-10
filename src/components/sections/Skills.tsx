import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "@heroui/react";

import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, 
  SiTypescript, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiStripe 
} from "react-icons/si";
import { 
  FaShieldAlt, FaLock, FaPalette, FaCreditCard, FaRobot, 
  FaBrain, FaVial, FaCubes, FaSitemap, FaCodeBranch 
} from "react-icons/fa";
import { MdApi, MdArchitecture } from "react-icons/md";

const skillCategories = [
  {
    title: "Foundation",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
      { name: "JavaScript (Basic)", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "ES6 + Problem Solving", icon: SiJavascript, color: "text-[#F7DF1E]" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React (Basic)", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "TypeScript Basic + OOP", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-black dark:text-white" },
      { name: "Modular Pattern", icon: MdArchitecture, color: "text-indigo-500" },
      { name: "API Integration", icon: MdApi, color: "text-emerald-500" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Mongoose / ODM", icon: SiMongoose, color: "text-[#880000]" },
    ],
  },
  {
    title: "UI Libraries",
    skills: [
      { name: "HeroUI", icon: FaPalette, color: "text-pink-500" },
      { name: "ShadCN", icon: FaCubes, color: "text-black dark:text-white" },
    ],
  },
  {
    title: "Auth & Security",
    skills: [
      { name: "BetterAuth", icon: FaShieldAlt, color: "text-blue-500" },
      { name: "Role Based Access Control", icon: FaLock, color: "text-slate-500" },
    ],
  },
  {
    title: "Advanced Concepts",
    skills: [
      { name: "DOM vs BOM", icon: FaSitemap, color: "text-amber-600" },
      { name: "AI Mindset Development", icon: FaBrain, color: "text-purple-500" },
      { name: "AI Integration", icon: FaRobot, color: "text-blue-400" },
      { name: "AI Assisted Coding", icon: FaCodeBranch, color: "text-green-500" },
    ],
  },
  {
    title: "Payment & Testing",
    skills: [
      { name: "Stripe", icon: SiStripe, color: "text-[#008CDD]" },
      { name: "SSLCommerz", icon: FaCreditCard, color: "text-teal-600" },
      { name: "Introduction to Testing", icon: FaVial, color: "text-red-400" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="SKILLS" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              // Added group class, shadow effects, and translation on hover
              className="group relative overflow-hidden bg-surface rounded-none border border-primary/10 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-500 p-8"
            >
              {/* Ghost gradient that fades in on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="relative text-xl font-display font-bold text-primary mb-6 border-b border-secondary/20 pb-4 group-hover:border-primary/40 transition-colors duration-500">
                {category.title}
              </h3>
              
              <div className="relative flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      // Added hover states to individual badges for independent interaction
                      className="flex items-center gap-2 px-4 py-2 bg-background hover:bg-surface text-secondary-dark text-sm font-medium border border-secondary/20 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      <Icon className={`text-lg ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
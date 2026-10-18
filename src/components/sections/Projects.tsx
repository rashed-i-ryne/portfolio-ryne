// src/components/sections/Projects.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectType {
  _id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  challenges?: string;
  futureImprovements?: string;
}

const defaultProjects: ProjectType[] = [
  {
    _id: "1",
    title: "Sun Cycle CSS Animation Engine",
    description: "Synchronized keyframe-based sky and sun elevation engine with seamless color space transition logic.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    _id: "2",
    title: "EEE Circuit Analyzer Pro",
    description: "Web application designed for UIU students to compute transient circuit response and simulate wave nodes.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    _id: "3",
    title: "BetterAuth Management Suite",
    description: "Minimalist administrative dashboard with integrated user session authorization and audit logging.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    techStack: ["Next.js", "HeroUI", "BetterAuth", "Mongoose"],
  },
];

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>(defaultProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const json = await res.json();
        if (json.success && json.data.length > 0) {
          setProjects(json.data);
        }
      } catch (err: unknown) {
        console.error("Using default projects due to fetch error:", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="PROJECTS" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <Card
              key={project._id}
              className="bg-surface rounded-none border border-primary/10 shadow-none group hover:border-accent transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden relative aspect-video w-full bg-secondary/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover rounded-none group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-mainText/80 text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-background text-secondary-dark font-medium border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/projects/${project._id}`}
                  className="w-full bg-primary text-surface font-bold rounded-none hover:bg-primary-dark transition-all flex items-center justify-between px-4 py-3"
                >
                  <span>View Details</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
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
}

const defaultProjects: ProjectType[] = [
  {
    _id: "1",
    title: "FitLog — Fitness Tracking Platform",
    description: "Responsive fitness tracking web application that allows users to explore workouts, organize fitness plans, and manage saved activities with secure authentication and database integration.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Hero UI"],
    liveLink: "https://fitlog-06-ph.vercel.app/",
    githubLink: "https://github.com/rashed-i-ryne/assignment-06",
  },
  {
    _id: "2",
    title: "BazarDor — Daily Market Price Tracker",
    description: "Modern market-price tracking platform designed to help users quickly view, compare, and filter prices of everyday grocery and market products with category sorting and secure role-based routes.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Hero UI"],
    liveLink: "https://bazardar-assignment-07-ph.vercel.app/",
    githubLink: "https://github.com/rashed-i-ryne/assignment-07",
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
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="PROJECTS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
                    sizes="(max-width: 768px) 100vw, 500px"
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
              
              <div className="p-6 pt-0 flex items-center gap-3">
                <Link
                  href={`/projects/${project._id}`}
                  className="flex-1 bg-primary text-surface font-bold rounded-none hover:bg-primary-dark transition-all flex items-center justify-between px-4 py-3 text-sm"
                >
                  <span>View Details</span>
                  <ArrowUpRight size={16} />
                </Link>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="p-3 border border-primary/20 text-primary hover:border-accent hover:text-accent transition-colors flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
// src/app/projects/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button, Spinner } from "@heroui/react";
import { ArrowLeft, ExternalLink, Code2, AlertTriangle, Lightbulb } from "lucide-react";

// Custom SVG component for GitHub
const GithubIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectDetails {
  _id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  challenges: string;
  futureImprovements: string;
}

const mockProjectsRecord: Record<string, ProjectDetails> = {
  "1": {
    _id: "1",
    title: "Sun Cycle CSS Animation Engine",
    description:
      "A pure CSS keyframe animation tracking sunrise and sunset elevation paths with synchronized lighting state background shifts.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://example.com/sun-cycle",
    githubLink: "https://github.com/rashed-i-ryne/sun-cycle-css",
    challenges:
      "Balancing keyframe color transitions smoothly without sudden steps, ensuring the sky remains light blue when the sun hits peak altitude without needing an artificial ground plane element.",
    futureImprovements:
      "Add interactive solar time control sliders and real-time astronomical API integration based on user geographic latitude.",
  },
  "2": {
    _id: "2",
    title: "EEE Circuit Analyzer Pro",
    description:
      "Interactive nodal analysis web application helping EEE students compute state equations and plot waveforms in real time.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveLink: "https://example.com/circuit-pro",
    githubLink: "https://github.com/rashed-i-ryne/circuit-analyzer",
    challenges:
      "Formulating complex matrix calculation pipelines on client side while keeping rendering high performance.",
    futureImprovements:
      "Export waveforms to SPICE-compatible files and integrate 3D visual component layouts using Three.js.",
  },
  "3": {
    _id: "3",
    title: "BetterAuth Management Suite",
    description:
      "Secure administrative control portal for content management with role-based access control and session verification.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    techStack: ["Next.js", "HeroUI", "BetterAuth", "Mongoose"],
    liveLink: "https://example.com/better-auth-admin",
    githubLink: "https://github.com/rashed-i-ryne/better-auth-suite",
    challenges:
      "Managing seamless session propagation across Next.js App Router Server Components and Client Components.",
    futureImprovements:
      "Integrate multi-factor authentication (MFA) support and audit activity log streaming.",
  },
};

const ProjectDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params?.id as string;

  const [project, setProject] = useState<ProjectDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await fetch(`/api/projects/${projectId}`);
        const json = await res.json();
        if (json.success && json.data) {
          setProject(json.data);
        } else if (mockProjectsRecord[projectId]) {
          setProject(mockProjectsRecord[projectId]);
        }
      } catch {
        if (mockProjectsRecord[projectId]) {
          setProject(mockProjectsRecord[projectId]);
        }
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      getProject();
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Spinner size="lg" color="current" className="text-primary" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-display font-bold text-primary mb-4">Project Not Found</h1>
        <Button
          onClick={() => router.push("/#projects")}
          className="bg-primary text-surface font-bold rounded-none"
        >
          Return to Projects
        </Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <Button
          onClick={() => router.push("/#projects")}
          className="bg-surface text-primary border border-primary/20 font-medium rounded-none mb-8 hover:bg-primary hover:text-surface transition-all flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </Button>

        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-secondary/10 text-secondary-dark font-medium border border-secondary/30 text-xs px-3 py-1 inline-block"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="aspect-video w-full overflow-hidden border border-primary/10 mb-12 relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            className="object-cover rounded-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2 space-y-8">
            <section className="bg-surface p-8 border border-primary/10">
              <h2 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <Code2 size={22} className="text-accent" />
                Project Description
              </h2>
              <p className="text-mainText leading-relaxed text-lg">{project.description}</p>
            </section>

            <section className="bg-surface p-8 border border-primary/10">
              <h2 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <AlertTriangle size={22} className="text-accent" />
                Challenges Faced
              </h2>
              <p className="text-mainText leading-relaxed text-lg">{project.challenges}</p>
            </section>

            <section className="bg-surface p-8 border border-primary/10">
              <h2 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <Lightbulb size={22} className="text-accent" />
                Future Improvements
              </h2>
              <p className="text-mainText leading-relaxed text-lg">{project.futureImprovements}</p>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-surface p-6 border border-primary/10">
              <h3 className="text-lg font-display font-bold text-primary mb-4">Project Links</h3>
              <div className="space-y-4">
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button className="w-full bg-primary text-surface font-bold rounded-none hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                      <span>Live Demo</span>
                      <ExternalLink size={18} />
                    </Button>
                  </Link>
                )}

                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button className="w-full bg-surface text-primary border border-primary font-bold rounded-none hover:bg-primary hover:text-surface transition-all flex items-center justify-center gap-2">
                      <span>GitHub Repository</span>
                      <GithubIcon />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectDetailsPage;
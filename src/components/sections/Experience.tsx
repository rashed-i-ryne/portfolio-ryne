
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "@heroui/react";

export const Experience = () => {
  return (
    <section id="experience" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title="EXPERIENCE" />

        <div className="mt-12 space-y-6">
          <Card className="rounded-none border border-primary/10 bg-surface p-8 shadow-none">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Freelance Full-Stack Web Developer
                </h3>

                <p className="mt-1 font-medium text-secondary">
                  Self-Employed | 2025 - Present
                </p>

                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-mainText/80">
                  Working independently on web development projects, turning
                  ideas and requirements into responsive, functional, and
                  user-focused digital experiences.
                </p>

                <ul className="mt-5 max-w-3xl space-y-3 text-mainText/80">
                  <li>
                    • Building responsive web applications using React,
                    Next.js, TypeScript, and Tailwind CSS.
                  </li>

                  <li>
                    • Developing backend services and REST APIs with Node.js,
                    Express.js, and MongoDB.
                  </li>

                  <li>
                    • Implementing authentication, database integration, and
                    third-party services to create complete full-stack
                    applications.
                  </li>

                  <li>
                    • Working closely with project requirements and translating
                    them into clean, maintainable, and practical solutions.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
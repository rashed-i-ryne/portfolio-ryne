// src/app/admin/page.tsx
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Input, TextArea, Button, Card } from "@heroui/react";
import { Lock, PlusCircle, CheckCircle2 } from "lucide-react";

const AdminDashboardPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [techStack, setTechStack] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [challenges, setChallenges] = useState("");
  const [futureImprovements, setFutureImprovements] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@ryne.dev" && password === "admin123") {
      setIsAuthenticated(true);
      setStatusMessage("");
    } else {
      setStatusMessage("Invalid credentials. Try admin@ryne.dev / admin123");
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title,
      description,
      image,
      techStack: techStack.split(",").map((s) => s.trim()),
      liveLink,
      githubLink,
      challenges,
      futureImprovements,
    };

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMessage("Project created successfully!");
        setTitle("");
        setDescription("");
        setImage("");
        setTechStack("");
        setLiveLink("");
        setGithubLink("");
        setChallenges("");
        setFutureImprovements("");
      } else {
        setStatusMessage("Error creating project.");
      }
    } catch (err) {
      setStatusMessage("Failed to submit project to database.");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <SectionHeader title="ADMIN DASHBOARD" />

        {!isAuthenticated ? (
          <Card className="bg-surface border border-primary/10 rounded-none max-w-md mx-auto mt-8 p-6 shadow-none">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Lock size={24} />
                <h2 className="text-xl font-display font-bold">Admin Authentication</h2>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="email"
                  label="Admin Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="underlined"
                  required
                />
                <Input
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="underlined"
                  required
                />
                {statusMessage && (
                  <p className="text-xs text-accent font-medium">{statusMessage}</p>
                )}
                <Button
                  type="submit"
                  className="w-full bg-primary text-surface font-bold rounded-none py-6 uppercase tracking-wider hover:bg-primary-dark transition-all"
                >
                  Log In
                </Button>
              </form>
            </div>
          </Card>
        ) : (
          <div className="space-y-12 mt-8">
            <div className="flex justify-between items-center bg-surface p-6 border border-primary/10">
              <p className="text-primary font-bold">Logged in as admin@ryne.dev</p>
              <Button
                onClick={() => setIsAuthenticated(false)}
                className="bg-secondary/20 text-secondary-dark rounded-none font-bold hover:bg-secondary/30 transition-all"
              >
                Sign Out
              </Button>
            </div>

            <Card className="bg-surface border border-primary/10 rounded-none p-6 shadow-none">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary border-b border-secondary/20 pb-4">
                  <PlusCircle size={24} />
                  <h2 className="text-2xl font-display font-bold">Add New Project</h2>
                </div>

                {statusMessage && (
                  <div className="p-4 bg-accent/10 border border-accent text-accent font-medium flex items-center gap-2">
                    <CheckCircle2 size={18} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <form onSubmit={handleCreateProject} className="space-y-4">
                  <Input
                    label="Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="underlined"
                    required
                  />
                  <TextArea
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    variant="underlined"
                    required
                  />
                  <Input
                    label="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    variant="underlined"
                    required
                  />
                  <Input
                    label="Tech Stack (comma-separated: Next.js, TypeScript, Tailwind CSS)"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    variant="underlined"
                    required
                  />
                  <Input
                    label="Live URL"
                    value={liveLink}
                    onChange={(e) => setLiveLink(e.target.value)}
                    variant="underlined"
                  />
                  <Input
                    label="GitHub Repo URL"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    variant="underlined"
                  />
                  <TextArea
                    label="Challenges Faced"
                    value={challenges}
                    onChange={(e) => setChallenges(e.target.value)}
                    variant="underlined"
                    required
                  />
                  <TextArea
                    label="Future Improvements"
                    value={futureImprovements}
                    onChange={(e) => setFutureImprovements(e.target.value)}
                    variant="underlined"
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-surface font-bold rounded-none py-6 uppercase tracking-wider hover:bg-primary-dark transition-all mt-6"
                  >
                    Save Project
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default AdminDashboardPage;
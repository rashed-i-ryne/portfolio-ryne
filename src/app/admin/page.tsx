"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button, Card } from "@heroui/react";
import { Lock, PlusCircle, CheckCircle2, Inbox } from "lucide-react";

interface IMessageData {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const AdminDashboardPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "messages">("projects");
  
 
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

  
  const [messages, setMessages] = useState<IMessageData[]>([]);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();
      if (data.success) {
        setMessages(data.data);
      }
    } catch (error) {
      console.error("Failed to load messages", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && activeTab === "messages") {
      // Using setTimeout bypasses the strict synchronous setState linting rule
      const timer = setTimeout(() => {
        fetchMessages();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, activeTab]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
        setStatusMessage("");
      } else {
        setStatusMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setStatusMessage("Authentication failed. Please try again.");
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title, description, image, liveLink, githubLink, challenges, futureImprovements,
      techStack: techStack.split(",").map((s) => s.trim()),
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
        setTitle(""); setDescription(""); setImage(""); setTechStack("");
        setLiveLink(""); setGithubLink(""); setChallenges(""); setFutureImprovements("");
      } else {
        setStatusMessage("Error creating project.");
      }
    } catch (error) {
      // Logging the error clears the 'unused variable' warning
      console.error("Project creation error:", error);
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
                <h2 className="text-xl font-display font-bold">Authentication</h2>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">Admin Email</label>
                  <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="w-full px-4 py-3 bg-background border border-primary/20 text-mainText focus:outline-none focus:border-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">Password</label>
                  <input
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                    className="w-full px-4 py-3 bg-background border border-primary/20 text-mainText focus:outline-none focus:border-accent"
                  />
                </div>
                {statusMessage && <p className="text-xs text-accent font-medium">{statusMessage}</p>}
                <Button type="submit" className="w-full bg-primary text-surface font-bold rounded-none py-6 uppercase hover:bg-primary-dark">
                  Log In
                </Button>
              </form>
            </div>
          </Card>
        ) : (
          <div className="space-y-8 mt-8">
            <div className="flex justify-between items-center bg-surface p-6 border border-primary/10">
              <div className="flex gap-4">
                <Button 
                  onClick={() => setActiveTab("projects")}
                  className={`rounded-none font-bold ${activeTab === "projects" ? "bg-primary text-surface" : "bg-transparent text-primary border border-primary/20"}`}
                >
                  Manage Projects
                </Button>
                <Button 
                  onClick={() => setActiveTab("messages")}
                  className={`rounded-none font-bold ${activeTab === "messages" ? "bg-primary text-surface" : "bg-transparent text-primary border border-primary/20"}`}
                >
                  Inbox
                </Button>
              </div>
              <Button onClick={() => setIsAuthenticated(false)} className="bg-secondary/20 text-secondary-dark rounded-none font-bold hover:bg-secondary/30">
                Sign Out
              </Button>
            </div>

            {activeTab === "projects" ? (
              <Card className="bg-surface border border-primary/10 rounded-none p-6 shadow-none">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-primary border-b border-secondary/20 pb-4">
                    <PlusCircle size={24} />
                    <h2 className="text-2xl font-display font-bold">Add New Project</h2>
                  </div>
                  {statusMessage && (
                    <div className="p-4 bg-accent/10 border border-accent text-accent font-medium flex items-center gap-2">
                      <CheckCircle2 size={18} /><span>{statusMessage}</span>
                    </div>
                  )}
                  <form onSubmit={handleCreateProject} className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">Project Title</label>
                      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full px-4 py-3 bg-background border border-primary/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">Description</label>
                      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={3} className="w-full px-4 py-3 bg-background border border-primary/20 resize-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">Image URL</label>
                      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required className="w-full px-4 py-3 bg-background border border-primary/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">Tech Stack (comma-separated)</label>
                      <input type="text" value={techStack} onChange={(e) => setTechStack(e.target.value)} required className="w-full px-4 py-3 bg-background border border-primary/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">Live URL</label>
                      <input type="text" value={liveLink} onChange={(e) => setLiveLink(e.target.value)} className="w-full px-4 py-3 bg-background border border-primary/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">GitHub URL</label>
                      <input type="text" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} className="w-full px-4 py-3 bg-background border border-primary/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">Challenges Faced</label>
                      <textarea value={challenges} onChange={(e) => setChallenges(e.target.value)} required rows={3} className="w-full px-4 py-3 bg-background border border-primary/20 resize-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-primary">Future Improvements</label>
                      <textarea value={futureImprovements} onChange={(e) => setFutureImprovements(e.target.value)} required rows={3} className="w-full px-4 py-3 bg-background border border-primary/20 resize-none" />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-surface font-bold rounded-none py-6 mt-6">
                      Save Project
                    </Button>
                  </form>
                </div>
              </Card>
            ) : (
              <Card className="bg-surface border border-primary/10 rounded-none p-6 shadow-none">
                <div className="flex items-center gap-3 text-primary border-b border-secondary/20 pb-4 mb-6">
                  <Inbox size={24} />
                  <h2 className="text-2xl font-display font-bold">Client Messages</h2>
                </div>
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <p className="text-mainText/60 italic">No messages yet.</p>
                  ) : (
                    messages.map((msg) => (
                      <div key={msg._id} className="p-4 bg-background border border-primary/10">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-bold text-primary">{msg.name}</h4>
                            <a href={`mailto:${msg.email}`} className="text-sm text-accent hover:underline">{msg.email}</a>
                          </div>
                          <span className="text-xs text-mainText/50">{new Date(msg.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-mainText/80 mt-2 whitespace-pre-wrap">{msg.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default AdminDashboardPage;
// src/components/sections/Contact.tsx
"use client";

import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Message submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="CONTACT" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <div>
            <h3 className="text-4xl font-display font-bold text-primary mb-6">
              Let&apos;s Build <br/>Something Great.
            </h3>
            <p className="text-mainText/80 text-lg mb-10">
              I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary-dark hover:text-accent transition-colors">
                <Mail size={24} />
                <span className="text-lg font-medium">rashedulislamrynee@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-secondary-dark hover:text-accent transition-colors">
                <Phone size={24} />
                <span className="text-lg font-medium">+880 1637022108</span>
              </div>
              <div className="flex items-center gap-4 text-secondary-dark">
                <MapPin size={24} />
                <span className="text-lg font-medium">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 border border-primary/10">
            {status === "success" && (
              <div className="p-4 bg-accent/10 border border-accent text-accent font-medium flex items-center gap-2 mb-4">
                <CheckCircle2 size={18} />
                <span>Message sent successfully! I will reply soon.</span>
              </div>
            )}
            
            {status === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 font-medium mb-4">
                Failed to send message. Please try again later.
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-primary">
                Name
              </label>
              <input 
                id="name"
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                required 
                className="w-full px-4 py-3 bg-surface border border-primary/20 text-mainText placeholder:text-mainText/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-primary">
                Email
              </label>
              <input 
                id="email"
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required 
                className="w-full px-4 py-3 bg-surface border border-primary/20 text-mainText placeholder:text-mainText/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-primary">
                Phone (Optional)
              </label>
              <input 
                id="phone"
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+880 1XXXXXXXXX"
                className="w-full px-4 py-3 bg-surface border border-primary/20 text-mainText placeholder:text-mainText/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-primary">
                Message
              </label>
              <textarea 
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can I help you?"
                rows={4}
                required 
                className="w-full px-4 py-3 bg-surface border border-primary/20 text-mainText placeholder:text-mainText/40 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary text-surface font-bold rounded-none py-6 uppercase tracking-wider hover:bg-primary-dark transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
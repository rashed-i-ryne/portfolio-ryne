// src/components/sections/Contact.tsx
"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "@heroui/react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submission logic triggered!");
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
                <span className="text-lg font-medium">ryne.dev@example.com</span>
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
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-primary">
                Name
              </label>
              <input 
                id="name"
                type="text" 
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
                placeholder="your.email@example.com"
                required 
                className="w-full px-4 py-3 bg-surface border border-primary/20 text-mainText placeholder:text-mainText/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-primary">
                Message
              </label>
              <textarea 
                id="message"
                placeholder="How can I help you?"
                rows={4}
                required 
                className="w-full px-4 py-3 bg-surface border border-primary/20 text-mainText placeholder:text-mainText/40 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary text-surface font-bold rounded-none py-6 uppercase tracking-wider hover:bg-primary-dark transition-all mt-4"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
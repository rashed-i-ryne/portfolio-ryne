// src/components/layout/Navbar.tsx
"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-surface/90 backdrop-blur-md border-b border-secondary-light/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="font-display font-bold text-2xl tracking-tighter text-mainText">
          RYNE<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-mainText hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {item.name}
            </Link>
          ))}
          <Button
            as={Link}
            href="/admin"
            className="bg-primary text-surface font-medium hover:bg-primary-dark transition-all rounded-none"
          >
            Admin
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-surface border-b border-secondary-light/20 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-mainText hover:text-primary text-xl font-display uppercase font-bold py-2"
            >
              {item.name}
            </Link>
          ))}
          <Button
            as={Link}
            href="/admin"
            onClick={() => setIsMenuOpen(false)}
            className="w-full bg-primary text-surface font-medium hover:bg-primary-dark transition-all rounded-none mt-2"
          >
            Admin Dashboard
          </Button>
        </div>
      )}
    </nav>
  );
};
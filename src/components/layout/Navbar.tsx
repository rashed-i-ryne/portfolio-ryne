
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="bg-surface/90 backdrop-blur-md border-b border-secondary-light/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo with Hidden Admin Trigger */}
        <div className="font-display font-bold text-2xl tracking-tighter text-mainText flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            RYNE
          </Link>
          <Link 
            href="/admin" 
            className="text-accent hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Admin Access"
          >
            .
          </Link>
        </div>

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
        </div>

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
        </div>
      )}
    </nav>
  );
};
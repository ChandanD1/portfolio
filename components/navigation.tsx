"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Startup", href: "#startup" },
  { name: "Projects", href: "#projects" },
  { name: "Security Lab", href: "#lab" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      const sections = ["home", "about", "startup", "projects", "lab", "skills", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      <div className="pointer-events-auto relative">
        {/* Desktop Centered Pill Navigation */}
        <nav className="hidden md:flex items-center space-x-1 p-1 rounded-full border border-border/80 bg-white/90 backdrop-blur-md shadow-xs">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background font-medium shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60 font-light"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-full border border-border/80 bg-white/90 backdrop-blur-md text-muted-foreground hover:text-foreground shadow-xs transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-12 right-0 w-52 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-border/80 shadow-lg space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-muted font-light transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-xs text-muted-foreground">→</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
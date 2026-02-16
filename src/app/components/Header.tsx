"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-navy-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <rect width="32" height="32" rx="8" fill="#102a43" />
              <text x="16" y="22" textAnchor="middle" fill="#d97706" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">NV</text>
            </svg>
            <span className="text-xl font-bold text-navy-900">
              <span className="text-accent-500">Web Design</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-lg font-medium transition-all"
            >
              Free Mock-Up
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-navy-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        <nav
          className={`md:hidden flex flex-col gap-3 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-48 pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"
          }`}
        >
          <a
            href="#services"
            className="text-navy-600 hover:text-navy-900 transition-colors py-1"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-navy-600 hover:text-navy-900 transition-colors py-1"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-lg font-medium transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            Free Mock-Up
          </a>
        </nav>
      </div>
    </header>
  );
}

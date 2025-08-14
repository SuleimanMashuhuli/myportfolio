"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 border-b bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="font-bold text-lg sm:text-xl">S.A</div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-6">
        <a href="#about" className="hover:underline text-sm lg:text-base">About</a>
        <a href="#skills" className="hover:underline text-sm lg:text-base">Skills</a>
        <a href="#projects" className="hover:underline text-sm lg:text-base">Projects</a>
        <a href="#experience" className="hover:underline text-sm lg:text-base">Experience</a>
        <a href="#contact" className="hover:underline text-sm lg:text-base">Contact</a>
        <a 
          href="/SULEIMAN-PROFESSIONAL-RESUME.pdf" 
          download 
          className="px-3 py-2 lg:px-4 lg:py-2 bg-black text-white rounded hover:bg-gray-800 text-sm lg:text-base transition-colors"
        >
          Download CV
        </a>
        {/* Social icons */}
        <div className="flex gap-2 ml-4">
          <a href="https://www.linkedin.com/in/suleiman-mashuhuli/" aria-label="LinkedIn" className="hover:opacity-80 transition">
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={28} height={28} className="w-6 h-6 lg:w-8 lg:h-8" />
          </a>
          <a href="https://github.com/SuleimanMashuhuli" aria-label="GitHub" className="hover:opacity-80 transition">
            <Image src="/icons/github.png" alt="GitHub" width={28} height={28} className="w-6 h-6 lg:w-8 lg:h-8" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <a 
              href="#about" 
              className="hover:underline py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="hover:underline py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="hover:underline py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="hover:underline py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="hover:underline py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="/SULEIMAN-MASHUHULI-RESUME.pdf" 
              download 
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download CV
            </a>
            {/* Mobile Social Icons */}
            <div className="flex gap-4 justify-center pt-2">
              <a href="https://www.linkedin.com/in/suleiman-mashuhuli/" aria-label="LinkedIn" className="hover:opacity-80 transition">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={32} height={32} />
              </a>
              <a href="https://github.com/SuleimanMashuhuli" aria-label="GitHub" className="hover:opacity-80 transition">
                <Image src="/icons/github.png" alt="GitHub" width={32} height={32} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 
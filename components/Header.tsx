"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-[9999] w-full bg-background/95 backdrop-blur border-b-4 border-secondary doodle-border">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-3xl font-bold text-primary hover:text-accent transition-colors">
          Aryaman
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-secondary hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-1 bg-primary transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-1 bg-primary transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-1 bg-primary transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b-4 border-secondary doodle-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

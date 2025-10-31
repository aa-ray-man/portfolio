"use client"

import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "FocusFlow",
    image: "/focusflow.png",
    description: "A responsive productivity web app. Implemented a habit tracker, Pomodoro timer and analytics dashboard for students to manage study habits and time effectively.",
    tags: ["React", "Tailwind", "Supabase"],
    demo: "https://focus-flow-smoky.vercel.app/",
    github: "https://github.com/aa-ray-man/FocusFlow",
  },
  {
    id: 2,
    title: "PixelMind: AI Image Generator",
    image: "/pixelmind.png",
    description: "Allows users to create unique images simply by providing descriptive text prompts.",
    tags: ["TypeScript", "PostgreSQL"],
    demo: "https://pixel-mind.vercel.app/",
    github: "https://github.com/aa-ray-man/PixelMind",
  },
  // {
  //   id: 3,
  //   title: "Wiggle Works",
  //   description: "Interactive experience showcasing organic motion design and playful interactions",
  //   tags: ["JavaScript", "CSS", "Motion"],
  //   demo: "https://example.com",
  //   github: "https://github.com",
  // },
  // {
  //   id: 4,
  //   title: "Code Canvas",
  //   description: "A collaborative coding environment with real-time updates and visual feedback",
  //   tags: ["React", "WebSocket", "Real-time"],
  //   demo: "https://example.com",
  //   github: "https://github.com",
  // },
  // {
  //   id: 5,
  //   title: "Algorithm Visualizer",
  //   description: "Interactive tool to visualize data structures and algorithms in action",
  //   tags: ["JavaScript", "Visualization", "Education"],
  //   demo: "https://example.com",
  //   github: "https://github.com",
  // },
  // {
  //   id: 6,
  //   title: "Design System",
  //   description: "Comprehensive component library with doodle art aesthetic and animations",
  //   tags: ["React", "Storybook", "Components"],
  //   demo: "https://example.com",
  //   github: "https://github.com",
  // },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-primary mb-4 inline-block">Projects</h2>
          <div className="h-1 bg-accent doodle-border w-32 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-muted-dark border-4 border-secondary doodle-border p-6 transition-transform hover:scale-105 hover:-rotate-1"
            >
              <div className="aspect-video bg-muted mb-6 relative overflow-hidden border-4">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

              </div>

              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="font-serif text-2xl md:text-3xl text-primary flex-1">{project.title}</h3>
                <div className="flex gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-accent text-background font-sans text-xs font-bold border-2 hover:bg-primary transition-colors"
                    title="View Demo"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-accent text-background font-sans text-xs font-bold border-2 hover:bg-primary transition-colors"
                    title="View GitHub"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <p className="font-sans text-secondary mb-4 leading-relaxed text-sm font-bold">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-secondary font-sans text-xs font-bold border-2 border-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {hoveredId === project.id && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent animate-wiggle border-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 left-10 w-16 h-16 border-4 border-accent doodle-border opacity-20 animate-wiggle" />
    </section>
  )
}

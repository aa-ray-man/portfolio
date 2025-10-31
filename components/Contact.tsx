"use client"

import { useState, useEffect } from "react"

export default function Contact() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="contact" className="relative py-20 px-4 min-h-screen flex items-center bg-muted-dark/50">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-primary mb-4 inline-block">Contact Me</h2>
          <div className="h-1 bg-accent doodle-border w-32 mx-auto mb-6" />
          <p className="font-sans text-xl text-secondary text-pretty">
            Got a job opportunity? A project idea? Or just want to say hi? Let's connect
          </p>
        </div>

        <div className="bg-muted/30 border-4 border-secondary doodle-border p-8 md:p-12 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-8">
            <p className="font-sans text-lg text-secondary text-center max-w-2xl">
              Feel free to reach out and ask me for my resume
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
              <a
                href="https://github.com/aa-ray-man"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-primary text-background font-sans font-semibold text-lg doodle-border transition-transform hover:scale-105 hover:-rotate-1 border-4"
              >
                <span className="relative z-10">GitHub</span>
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity doodle-border" />
              </a>

              <a
                href="https://www.linkedin.com/in/aryamanmohindru/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-primary text-background font-sans font-semibold text-lg doodle-border transition-transform hover:scale-105 hover:-rotate-1 border-4"
              >
                <span className="relative z-10">LinkedIn</span>
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity doodle-border" />
              </a>

              <a
                href="https://x.com/areyyman"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-primary text-background font-sans font-semibold text-lg doodle-border transition-transform hover:scale-105 hover:-rotate-1 border-4"
              >
                <span className="relative z-10">X (Twitter)</span>
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity doodle-border" />
              </a>
            </div>

            <div className="pt-4 border-t-4 border-secondary w-full px-4 relative z-10">
              <p className="font-sans text-secondary text-center break-all sm:break-normal">
                Email:{" "}
                <span className="block sm:inline">
                  <a className="text-primary hover:text-accent transition-colors">
                    mohindruaryaman@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>

          <svg
            width="40"
            height="40"
            viewBox="0 0 30 30"
            className="absolute -bottom-4 -left-4 text-accent opacity-50 animate-wiggle -z-10"
            aria-hidden="true"
          >
            <path
              d="M15 0 L17 13 L30 15 L17 17 L15 30 L13 17 L0 15 L13 13 Z"
              fill="currentColor"
              className="doodle-border"
            />
          </svg>
        </div>

        <footer className="mt-14 text-center space-y-4 relative z-10">
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="inline-block group relative p-4 bg-primary text-background doodle-border transition-transform hover:scale-110 hover:rotate-1 border-4 animate-float"
              aria-label="Scroll to top"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="doodle-border"
              >
                <path d="M12 5v14M5 12l7-7 7 7" />
              </svg>
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity doodle-border border-4" />
            </button>
          )}

          <p className="mt-5 font-sans text-secondary">
            Made with <span className="text-accent">♥</span> by Aryaman
          </p>
        </footer>
      </div>

      <svg
        width="40"
        height="40"
        viewBox="0 0 30 30"
        className="absolute top-32 right-20 text-primary opacity-30 animate-wiggle -z-10"
        aria-hidden="true"
      >
        <path
          d="M15 0 L17 13 L30 15 L17 17 L15 30 L13 17 L0 15 L13 13 Z"
          fill="currentColor"
          className="doodle-border"
        />
      </svg>
    </section>
  )
}

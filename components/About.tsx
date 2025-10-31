"use client"
import Image from "next/image";


export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 bg-muted-dark/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-primary mb-4 inline-block">Hey There</h2>
          <div className="h-1 bg-accent doodle-border w-32 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Main circular image */}
            <div className="aspect-square bg-muted doodle-border relative overflow-hidden group border-4 border-accent rounded-full">
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity rounded-full" />
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/pfp-doodle.png"
                  alt="Aryaman"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Outer doodle accent circles */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-accent doodle-border -z-10 rounded-full" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-accent doodle-border -z-10 rounded-full" />
          </div>

          <div className="space-y-6">
            <p className="font-sans text-lg text-secondary leading-relaxed">
              I’m Aryaman Mohindru — I build clean, fast, and user-friendly stuff for the web. I enjoy crafting clean, intuitive web experiences using modern tech. 
            </p>

            <p className="font-sans text-lg text-secondary leading-relaxed">
              My interests don’t stop at frontend or backend. I also dive into DevOps, making sure the stuff I build runs smoothly in the wild 
              (because “it works on my machine” doesn’t cut it).
            </p>

            {/* <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-primary doodle-border" />
                <span className="font-sans text-secondary">React & Next.js</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent doodle-border" />
                <span className="font-sans text-secondary">JavaScript & TypeScript</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-primary doodle-border" />
                <span className="font-sans text-secondary">UI/UX Design & Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent doodle-border" />
                <span className="font-sans text-secondary">Data Structures & Algorithms</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-12 h-12 border-4 border-primary doodle-border opacity-20 animate-float" />
    </section>
  )
}

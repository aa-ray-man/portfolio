"use client"

export default function Skills() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Devops",
    "Jenkins",
    "Terraform",
    "Docker",
    "AWS",
    "Git",
    "MongoDB",
    "React",
    "Nextjs",
    "ExpressJS",
    "SpringBoot",
  ]

  return (
    <section id="skills" className="relative py-20 px-4 bg-muted-dark/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-primary mb-4 inline-block">Skills</h2>
          <div className="h-1 bg-accent doodle-border w-32 mx-auto" />
        </div>

        <div className="relative bg-background border-4 border-secondary doodle-border p-8 md:p-12">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 md:px-6 py-2 md:py-3 bg-muted text-secondary font-sans text-xs md:text-base border-2 hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 transform hover:scale-110"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-accent doodle-border opacity-50 animate-wiggle" />
          <div className="absolute -top-3 -left-3 w-8 h-8 border-3 border-primary doodle-border opacity-30 animate-float" />
        </div>
      </div>

      <div className="absolute top-20 right-10 w-12 h-12 border-4 border-primary doodle-border opacity-20 animate-float" />
      <div className="absolute bottom-32 left-5 w-10 h-10 border-3 border-accent doodle-border opacity-20 animate-wiggle" />
    </section>
  )
}

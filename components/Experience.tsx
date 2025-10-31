"use client"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "DevOps-AI Intern",
      company: "Development Bank of Singapore(DBS) Tech India",
      period: "2025 - present",
      description: [
        "Gaining practical experience with modern DevOps tools in a large-scale enterprise environment.",
        "Developing and maintaining microservices using Spring Framework to support backend automation and integration.",
      ],
    },
    {
      id: 2,
      title: "BTech Student",
      company: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      period: "2022 - 2026",
      description: [
        "Pursuing a Bachelor of Technology in Computer Science and Engineering.",
        "Built a solid foundation in data structures, algorithms, databases, and web technologies.",
        "Developed analytical and problem-solving skills through academic projects and hands-on coding assignments.",
      ],
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-primary mb-4 inline-block">Experience</h2>
          <div className="h-1 bg-accent doodle-border w-32 mx-auto" />
        </div>

        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative bg-muted/30 border-4 border-secondary doodle-border p-8 md:p-10 hover:border-primary transition-colors group rounded-xl"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left side */}
                <div className="md:col-span-1">
                  <h3 className="font-serif text-3xl text-primary mb-2">{exp.title}</h3>
                  <p className="font-sans text-lg text-accent mb-2">{exp.company}</p>
                  <p className="font-sans text-secondary text-sm">{exp.period}</p>
                </div>

                {/* Right side - bullet points */}
                <div className="md:col-span-2">
                  <ul className="list-disc list-inside space-y-2 text-lg text-secondary leading-relaxed font-sans">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent doodle-border opacity-0 group-hover:opacity-100 transition-opacity animate-wiggle" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating accent border */}
      <div className="absolute bottom-20 left-10 w-12 h-12 border-4 border-primary doodle-border opacity-20 animate-float" />
    </section>
  )
}

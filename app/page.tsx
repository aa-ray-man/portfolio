import Header from "@/components/Header"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import DoodleFilter from "@/components/DoodleFilter"

export default function Home() {
  return (
    <>
      <DoodleFilter />
      <Header />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">
            Portfolio<span className="text-primary">.</span>
          </div>
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="portfolio">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Aaryan Shrestha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

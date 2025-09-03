import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application built with Django and React. Features include user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Stripe"],
    image: "/ecommerce-dashboard.png",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management built with Spring Boot. Includes user management, project organization, and real-time notifications.",
    technologies: ["Java", "Spring Boot", "MySQL", "JWT", "WebSocket"],
    image: "/task-management-interface.png",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for data visualization using Python and modern web technologies. Processes large datasets and provides real-time insights.",
    technologies: ["Python", "Flask", "D3.js", "MongoDB", "Docker"],
    image: "/data-analytics-dashboard.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="portfolio" className="py-20 px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-3 text-foreground">{project.title}</CardTitle>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

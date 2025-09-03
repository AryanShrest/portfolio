import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Django", "Flask", "Spring Boot", "React", "Next.js"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "AWS", "Linux", "REST APIs"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-balance">Technical Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are the technologies and tools I work with to build amazing applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-accent/20 text-accent-foreground hover:bg-accent/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

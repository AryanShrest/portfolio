import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-between px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex-1 max-w-2xl">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">Aaryan Shrestha</h1>
        <p className="text-xl lg:text-2xl mb-6 text-primary font-medium">{"I'm a Full Stack Developer"}</p>
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl">
          Passionate full stack developer with expertise in modern web technologies. I create robust, scalable
          applications and love solving complex problems through clean, efficient code. Always eager to learn new
          technologies and contribute to innovative projects.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="border-border hover:bg-accent bg-transparent">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-border hover:bg-accent bg-transparent">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-border hover:bg-accent bg-transparent">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 justify-center items-center">
        <div className="relative">
          {/* Green circular border */}
          <div className="w-80 h-80 rounded-full border-4 border-primary/30 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/images/aaryan-profile.png"
                alt="Aaryan Shrestha"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
          <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

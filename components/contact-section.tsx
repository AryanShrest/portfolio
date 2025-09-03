import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-balance">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {"Let's discuss your next project or collaboration opportunity"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">{"Let's work together"}</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">aryanshrestha0307@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">9708059994</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">Kapan, Baluwakhani</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-input border-border" />
              <Input placeholder="Your Email" type="email" className="bg-input border-border" />
            </div>
            <Input placeholder="Subject" className="bg-input border-border" />
            <Textarea placeholder="Your Message" rows={5} className="bg-input border-border resize-none" />
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

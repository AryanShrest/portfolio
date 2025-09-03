export function AboutSection() {
  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 3 years of experience in full stack development, I specialize in creating scalable web
                applications using modern technologies. My expertise spans across frontend frameworks like React and
                Vue.js, backend technologies including Node.js and Python, and database management with PostgreSQL and
                MongoDB.
              </p>
              <p>
                I have a strong background in software engineering principles, having worked on projects ranging from
                e-commerce platforms to data visualization dashboards. I'm passionate about clean code, test-driven
                development, and creating intuitive user experiences.
              </p>
              <p>
                Currently focused on cloud technologies and DevOps practices, I enjoy mentoring junior developers and
                contributing to open-source projects. I believe in continuous learning and staying updated with the
                latest industry trends and best practices.
              </p>
            </div>
          </div>
          <div className="lg:order-first">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                  <p className="text-muted-foreground">Building the future, one line at a time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

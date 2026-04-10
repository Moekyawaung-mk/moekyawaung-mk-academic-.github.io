"use client"

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Python",
  "PostgreSQL",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-8">
          <span className="text-primary font-mono text-lg md:text-xl font-normal">01.</span>
          About Me
          <span className="flex-1 h-px bg-border max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {"Hello! I'm a developer who enjoys creating things that live on the internet. My interest in web development started back when I decided to try customizing a Tumblr theme — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!"}
            </p>
            <p>
              {"Fast-forward to today, and I've had the privilege of working at various organizations where I've contributed to building products that people love. My main focus these days is building accessible, inclusive products and digital experiences."}
            </p>
            <p>
              {"Here are a few technologies I've been working with recently:"}
            </p>
            
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li 
                  key={skill} 
                  className="flex items-center gap-2 font-mono text-sm"
                >
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group mx-auto md:mx-0">
            <div className="relative w-64 h-64 md:w-full md:h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-lg group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="font-mono text-6xl">MKW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

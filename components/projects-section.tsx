"use client"

import { Github, ExternalLink, Folder } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Project One",
    description:
      "A web application that provides users with an intuitive interface to manage their tasks and projects. Features include real-time collaboration, analytics dashboard, and integrations with popular tools.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/project-1.png",
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform built with modern technologies. Includes features like product search, filtering, shopping cart, secure checkout, and an admin dashboard for inventory management.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/project-2.png",
  },
]

const otherProjects = [
  {
    title: "Algorithm Visualizer",
    description: "An interactive tool for visualizing various sorting and pathfinding algorithms in real-time.",
    tech: ["JavaScript", "D3.js", "CSS"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "A clean weather application with location-based forecasts and interactive maps.",
    tech: ["React", "OpenWeather API", "Mapbox"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Portfolio Generator",
    description: "A CLI tool that generates a beautiful portfolio website from a JSON configuration file.",
    tech: ["Node.js", "Handlebars", "Commander.js"],
    github: "https://github.com",
    external: null,
  },
  {
    title: "Markdown Editor",
    description: "A minimalist markdown editor with live preview and export functionality.",
    tech: ["TypeScript", "React", "CodeMirror"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "API Rate Limiter",
    description: "A middleware package for Node.js applications to handle API rate limiting efficiently.",
    tech: ["Node.js", "Redis", "Express"],
    github: "https://github.com",
    external: null,
  },
  {
    title: "CSS Grid Generator",
    description: "A visual tool for creating CSS Grid layouts with drag-and-drop interface.",
    tech: ["Vue.js", "CSS Grid", "Vite"],
    github: "https://github.com",
    external: "https://example.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-lg md:text-xl font-normal">03.</span>
          Some Things I&apos;ve Built
          <span className="flex-1 h-px bg-border max-w-xs" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div 
                className={`md:col-span-7 relative aspect-video bg-muted rounded-lg overflow-hidden group ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground font-mono">Project Preview</span>
                </div>
              </div>

              {/* Project Content */}
              <div 
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1 ? "md:left-0" : "md:right-0"
                } z-20`}
              >
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
                  index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                }`}>
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-start" : "md:justify-end"}`}>
                  <Link 
                    href={project.github}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link 
                    href={project.external}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-bold text-foreground text-center mb-12">
          Other Noteworthy Projects
        </h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div 
              key={project.title}
              className="bg-card p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-4">
                  <Link 
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  {project.external && (
                    <Link 
                      href={project.external}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

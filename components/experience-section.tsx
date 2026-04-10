"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Current Company",
    title: "Senior Developer",
    url: "https://example.com",
    dates: "2023 — Present",
    description: [
      "Build and maintain critical components used across the product stack",
      "Work closely with cross-functional teams to implement and advocate for best practices in web accessibility",
      "Lead engineering initiatives to improve developer experience and code quality",
      "Mentor junior developers and conduct code reviews to maintain high standards",
    ],
    skills: ["React", "TypeScript", "Next.js", "Node.js"],
  },
  {
    company: "Previous Startup",
    title: "Frontend Engineer",
    url: "https://example.com",
    dates: "2021 — 2023",
    description: [
      "Developed and shipped highly interactive web applications for diverse clients",
      "Built reusable component libraries and design systems from scratch",
      "Collaborated with designers to implement pixel-perfect, responsive interfaces",
      "Optimized applications for maximum performance and scalability",
    ],
    skills: ["JavaScript", "React", "SCSS", "GraphQL"],
  },
  {
    company: "Tech Agency",
    title: "Web Developer",
    url: "https://example.com",
    dates: "2019 — 2021",
    description: [
      "Developed and maintained code for client websites using HTML, CSS, JavaScript, and jQuery",
      "Worked with a variety of CMS platforms including WordPress and Shopify",
      "Communicated with clients and project managers to ensure on-time delivery",
      "Tested sites for cross-browser compatibility and accessibility compliance",
    ],
    skills: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-lg md:text-xl font-normal">02.</span>
          {"Where I've Worked"}
          <span className="flex-1 h-px bg-border max-w-xs" />
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tab List - Horizontal scroll on mobile */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 font-mono text-sm whitespace-nowrap text-left transition-colors duration-200 ${
                  activeTab === index
                    ? "text-primary bg-primary/10 border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-4 md:py-0 min-h-80">
            <h3 className="text-xl text-foreground font-medium mb-1">
              {experiences[activeTab].title}
              <a 
                href={experiences[activeTab].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-2 inline-flex items-center gap-1"
              >
                @ {experiences[activeTab].company}
                <ExternalLink className="w-4 h-4" />
              </a>
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-6">
              {experiences[activeTab].dates}
            </p>
            
            <ul className="space-y-3">
              {experiences[activeTab].description.map((item, index) => (
                <li 
                  key={index} 
                  className="flex gap-3 text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary mt-1.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {experiences[activeTab].skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full font-mono text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

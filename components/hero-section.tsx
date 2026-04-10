"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wide">
          Hi, my name is
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Moe Kya Waung
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 text-balance">
          I build things for the web.
        </h2>
        
        <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed mb-8">
          {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. Currently focused on building digital experiences that are both beautiful and performant."}
        </p>
        
        <div className="flex items-center gap-6 mb-12">
          <Link 
            href="https://github.com" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link 
            href="https://linkedin.com" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link 
            href="mailto:hello@example.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>

        <Link 
          href="#about"
          className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded font-mono text-sm hover:bg-primary/10 transition-colors duration-200"
        >
          Learn more about me
          <ArrowDown className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary text-sm mb-4">04. What&apos;s Next?</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg mx-auto">
          {"I'm currently open to new opportunities and would love to hear from you. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!"}
        </p>
        
        <Link
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded font-mono hover:bg-primary/10 transition-colors duration-200"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </Link>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:hello@example.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24">
      {/* Mobile Social Links */}
      <div className="flex justify-center gap-6 mb-6 md:hidden">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>

      <div className="text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Built with{" "}
          <Link 
            href="https://nextjs.org" 
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            Next.js
          </Link>
          {" & "}
          <Link 
            href="https://tailwindcss.com" 
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            Tailwind CSS
          </Link>
        </p>
        <p className="font-mono text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} Moe Kya Waung. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
]

export function SideElements() {
  return (
    <>
      {/* Left Side - Social Links */}
      <div className="hidden md:flex fixed left-6 lg:left-12 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>

      {/* Right Side - Email */}
      <div className="hidden md:flex fixed right-6 lg:right-12 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        <Link
          href="mailto:hello@example.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
          style={{ writingMode: "vertical-rl" }}
        >
          hello@example.com
        </Link>
      </div>
    </>
  )
}

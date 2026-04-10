import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Portfolio | Developer & Designer",
  description: "Building accessible, pixel-perfect digital experiences for the web.",
  keywords: ["developer", "portfolio", "frontend", "software engineer", "web development"],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Portfolio | Developer & Designer",
    description: "Building accessible, pixel-perfect digital experiences for the web.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}

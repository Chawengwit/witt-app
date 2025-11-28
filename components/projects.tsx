"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from 'lucide-react'
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "E-Commerce Dashboard",
    role: "UX/UI & Fullstack",
    description: "A comprehensive analytics dashboard for online retailers. Features real-time data visualization, inventory management, and order processing.",
    tags: ["Next.js", "TypeScript", "Tremor", "Supabase"],
    metrics: "↑ 30% faster reporting",
    image: "/modern-dashboard-ui.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Travel Booking Platform",
    role: "Frontend Lead",
    description: "A modern booking engine for a boutique travel agency. Focused on immersive visuals and a seamless checkout flow.",
    tags: ["React", "Tailwind", "Stripe"],
    metrics: "↓ 15% cart abandonment",
    image: "/travel-website-ui.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    role: "Fullstack Developer",
    description: "SaaS application that uses AI to help marketers generate blog posts and social media captions.",
    tags: ["Next.js", "OpenAI API", "PostgreSQL", "Vercel"],
    metrics: "10k+ active users",
    image: "/ai-saas-interface.jpg",
    link: "#",
    github: "#",
  },
]

export function Projects() {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Project</h2>
            <p className="text-muted-foreground text-lg">
              A collection of projects focusing on quality, performance, and user experience.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary/20">
                <CardContent className="p-0 grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto overflow-hidden group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                        <p className="text-primary font-medium text-sm">{project.role}</p>
                      </div>
                      {project.metrics && (
                        <Badge variant="secondary" className="hidden sm:flex">
                          {project.metrics}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <Button className="rounded-full" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

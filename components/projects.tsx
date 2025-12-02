"use client"

import EmblaCarousel from "./project-carousel"
import { motion } from "framer-motion"
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Media Platform Template",
    role: "UX/UI • Fullstack Developer",
    description: "Landing page and admin panel blend marketing content with authenticated management workflows, serving responsive product galleries.",
    tags: ["Javascript", "Node.js", "PostgreSQL", "S3", "Docker"],
    metrics: "", //↓ 15% cart abandonment
    images: ["/d1.png", "/d2.png", "/d3.png"], // ["/modern-dashboard-ui.jpg", "/ai-saas-interface.jpg"],
    link: null,
    github: "https://github.com/Chawengwit/de-dilute",
  },
  {
    title: "Installment & Sales Management System",
    role: "UX/UI • Fullstack Developer",
    description: "A full-cycle installment and sales management platform designed for businesses that need customer tracking, product management, contract creation, and installment scheduling. Includes automated document generation and real-time insights for payment status and risk monitoring.",
    tags: ["Node.js", "SCSS", "PostgreSQL", "S3", "Docker"],
    metrics: "", 
    images: ["/travel-website-ui.jpg", "/modern-dashboard-ui.jpg"],
    link: null,
    github: null,
  },
  {
    title: "Personal Profile Web App",
    role: "UX/UI • Fullstack Developer",
    description: "A customizable personal portfolio web app with “Edit Mode” accessible via keyboard shortcut + password prompt. Built for creators who want a no-login, client-side editable template—ideal for digital product sales.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: "",
    images: ["/p1.png", "/p2.png", "/p3.png"], // ["/ai-saas-interface.jpg", "/travel-website-ui.jpg"]
    link: null,
    github: "https://github.com/Chawengwit/witt-app",
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
                  <div className="relative h-64 md:h-96 overflow-hidden">
                    <EmblaCarousel images={project.images} options={{ loop: true }} />
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
                      {
                        project.link ? (
                          <Button className="rounded-full" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              View Project <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                          </Button>
                        ) : null
                      }
                      {
                        project.github ? (  
                          <Button variant="ghost" size="icon" className="rounded-full" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5" />
                            </a>
                          </Button>
                        ) : null
                      }
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

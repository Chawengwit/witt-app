"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "UX/UI Design",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Figma",
      "Design Systems",
      "Information Architecture",
      "Interaction Design",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5/CSS3",
      "Redux/Zustand",
      "React Query",
    ],
  },
  {
    title: "Backend & DevOps",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Docker",
      "Vercel",
      "CI/CD",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A fullstack skillset with a focus on building scalable, user-centric applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border/50"
            >
              <h3 className="text-xl font-bold mb-6 text-center md:text-left">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

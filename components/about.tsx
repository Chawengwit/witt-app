"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Terminal } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">I am</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m a developer who cares deeply about the user experience. My journey started in graphic design, but I quickly fell in love with the logic and structure of coding. This hybrid background allows me to bridge the gap between design and engineering.
              </p>
              <p>
                I approach every project with a "research first" mentality. I believe that the best code is written to solve real user problems, not just to use the latest tech. I prototype, test, build, and iterate until the solution feels natural.
              </p>
              <p>
                Whether I'm tweaking a micro-interaction in Framer Motion or optimizing a database query in PostgreSQL, my goal is always the same: to build fast, accessible, and delightful digital products.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-primary/10 w-fit rounded-xl">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Design Focus</h3>
                    <p className="text-sm text-muted-foreground">UX-first approach, Design Systems, Accessibility</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-blue-500/10 w-fit rounded-xl">
                    <Terminal className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Engineering</h3>
                    <p className="text-sm text-muted-foreground">Fullstack Architecture, Performance, Scalability</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm sm:col-span-2">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-purple-500/10 w-fit rounded-xl">
                    <Code2 className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Preferred Stack</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Framer Motion"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

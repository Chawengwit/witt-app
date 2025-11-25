"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Layout, Server, Smartphone } from 'lucide-react'
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 -z-10 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-20 left-0 -z-10 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary w-fit text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            UX/UI Designer · Fullstack Developer
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Hi, I’m Chris. <br />
            I <span className="text-primary">design</span> and <span className="text-primary">build</span> modern web experiences.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            I blend user-centered design thinking with robust engineering to create products that look great and perform perfectly.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <Link href="#contact">
                Let’s work together <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
              <Link href="#work">View my work</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-card/50 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl max-w-md mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                CW
              </div>
              <div>
                <h3 className="text-xl font-bold">Chris Williams</h3>
                <p className="text-sm text-muted-foreground">Senior Fullstack Dev</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-background/50 rounded-xl">
                <span className="text-sm font-medium">Experience</span>
                <span className="font-bold">5+ Years</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background/50 rounded-xl">
                <span className="text-sm font-medium">Projects</span>
                <span className="font-bold">40+ Delivered</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
          >
            <Layout className="w-8 h-8 text-blue-500" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -left-12 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
          >
            <Code className="w-8 h-8 text-purple-500" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-8 right-10 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
          >
            <Database className="w-8 h-8 text-green-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Calendar } from 'lucide-react'
import { experience } from "@/lib/data"

export function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Journey</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 top-0 w-2.5 h-2.5 rounded-full bg-primary transform md:-translate-x-1/2 z-10 ring-4 ring-background" />
              <div className="md:w-1/2" />
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                  <div className={`flex items-center gap-2 text-sm text-primary font-medium mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <Calendar className="w-4 h-4" />
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground font-medium mb-2">{item.company}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

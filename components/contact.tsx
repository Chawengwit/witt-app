"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Instagram } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            I’m currently open to new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          
          <div className="inline-flex items-center gap-4 p-4 rounded-full bg-background/60 border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-muted-foreground">Email me at</p>
              <a href="mailto:Chawengwit.w@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                Chawengwit.w@gmail.com
              </a>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-base font-medium text-muted-foreground mb-4">or connect with me on social media</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
                <a href="https://github.com/Chawengwit" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
                <a href="https://www.linkedin.com/in/chawengwit-w" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
                <a href="https://www.instagram.com/wittupuu" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

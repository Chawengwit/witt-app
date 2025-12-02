"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Mail, Send, Github, Linkedin, Instagram } from 'lucide-react'
import { useState, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        formRef.current?.reset()
      } else {
        throw new Error("Failed to send message.")
      }
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s build something together</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I’m currently open to full-time roles and freelance projects. If you’re interested in working together or would like to discuss an opportunity, feel free to reach out — I’ll get back to you as soon as I can.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href="mailto:Chawengwit.w@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">
                    Chawengwit.w@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="pt-8">
                <p className="text-sm font-medium text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://github.com/Chawengwit" aria-label="GitHub">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://www.linkedin.com/in/chawengwit-w" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://www.instagram.com/wittupuu" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background p-8 rounded-3xl shadow-lg border border-border/50"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                <Button 
                  variant="outline" 
                  className="mt-8 rounded-full"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="John Cena" required className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john_007@mail.com" required className="rounded-xl" />
                </div>
                
                <div className="space-y-3">
                  <Label>I'm interested in...</Label>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="project" name="interest" value="project" />
                      <Label htmlFor="project" className="font-normal">Project Inquiry</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="collab" name="interest" value="collab" />
                      <Label htmlFor="collab" className="font-normal">Collaboration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hi" name="interest" value="hi" />
                      <Label htmlFor="hi" className="font-normal">Just saying hi</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your project..." 
                    className="min-h-[150px] rounded-xl resize-none" 
                    required 
                  />
                </div>

                <Button type="submit" className="w-full rounded-full cursor-pointer" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Chawengwit W.. Crafted with care.
        </p>
        
        <div className="flex items-center gap-6">
          <Link href="https://github.com/Chawengwit" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/chawengwit-w" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://www.instagram.com/wittupuu" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

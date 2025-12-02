// This file contains the hardcoded data for the application.
// In a real-world application, this data would likely be fetched from a CMS or a database.

export const projects = [
  {
    title: "Media Platform Template",
    role: "UX/UI • Fullstack Developer",
    description: "Landing page and admin panel blend marketing content with authenticated management workflows, serving responsive product galleries.",
    tags: ["Javascript", "Node.js", "PostgreSQL", "S3", "Docker"],
    metrics: "",
    images: ["/d1.png", "/d2.png", "/d3.png"],
    link: null,
    github: "https://github.com/Chawengwit/de-dilute",
  },
  {
    title: "Installment & Sales Management System",
    role: "UX/UI • Fullstack Developer",
    description: "A full-cycle installment and sales management platform designed for businesses that need customer tracking, product management, contract creation, and installment scheduling. Includes automated document generation and real-time insights for payment status and risk monitoring.",
    tags: ["Node.js", "SCSS", "PostgreSQL", "S3", "Docker"],
    metrics: "", 
    images: ["/i1.png", "/i2.png", "/i3.png", "/i4.png"],
    link: null,
    github: null,
  },
  {
    title: "Personal Profile Web App",
    role: "UX/UI • Fullstack Developer",
    description: "A customizable personal portfolio web app with “Edit Mode” accessible via keyboard shortcut + password prompt. Built for creators who want a no-login, client-side editable template—ideal for digital product sales.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: "",
    images: ["/p1.png", "/p2.png", "/p3.png"],
    link: null,
    github: "https://github.com/Chawengwit/witt-app",
  },
]

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5/CSS3",
      "JavaScript",
      "Python",
      "PHP"
    ],
  },
  {
    title: "Backend & DevOps",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Render",
      "Docker",
      "Vercel",
      "CI/CD",
      "Laravel",
      "RESTful",
      "Cloudflare R2",
      "AWS S3",
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      "SQL",
      "NoSQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Data Modeling",
      "Caching",
      "Disaster Recovery",
    ],
  },
]

export const experience = [
  {
    year: "2022 – Present",
    title: "Full-Stack Developer",
    company: "Orisma Technology",
    description: "Maintained enterprise systems—including HR platforms, FinOps dashboards. Responsible for system architecture, API development, database design, and UI implementation. Improved performance through optimized queries, scalable components, and streamlined user flows.",
  },
  {
    year: "2022 – 2023",
    title: "Front-End Developer",
    company: "Orisma Technology",
    description: "Crafted clean, responsive interfaces for HR, FinOps, and marketplace systems. Focused on usability, performance, and scalable UI architecture—building reusable components and smooth user flows that feel fast and intuitive.",
  },
  {
    year: "2020 – 2022",
    title: "Senior Survey Engineer",
    company: "Italian-Thai Development Public Company Limited (ITD)",
    description: "Led survey teams for major MRT underground railway projects.",
  },
    {
    year: "2017 – 2020",
    title: "Survey Engineer",
    company: "Italian-Thai Development Public Company Limited (ITD)",
    description: "On railway projects. Validated survey data, produced technical reports, and coordinated with multiple engineering teams to ensure precision and project accuracy.",
  },
  {
    year: "2016 – 2017",
    title: "Engineer",
    company: "Bhiraj Buri Group",
    description: "Supported site engineering operations, project reporting, and coordination with construction teams. Ensured technical accuracy and adherence to engineering standards.",
  },
]

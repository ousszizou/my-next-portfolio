import { Experience, Link, Project, SocialLink, Technology } from "./types";

export const links: Array<Link> = [
  { id: "01", name: "PROJECTS", href: "#projects" },
  { id: "02", name: "TECHNOLOGIES I USE", href: "#technologies" },
  { id: "03", name: "EXPERIENCES", href: "#experiences" },
];

export const socialLinks: Array<SocialLink> = [
  {
    name: "GitHub",
    href: "https://github.com/ousszizou",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oussama-djaidri",
  },
  {
    name: "Phone(WhatsApp)",
    href: "https://wa.me/213666358389",
  },
];

export const projects: Array<Project> = [
  {
    type: "FULLSTACK",
    title: "Notion Clone",
    description:
      "This clone tries to replicate some of the great note-taking features Notion has.",
    link: "",
    stack: [],
  },
  {
    type: "FULLSTACK",
    title: "Cameo Clone",
    description: "This clone tries to replicate some of the cameo's features",
    link: "",
    stack: [],
  },
  {
    type: "FULLSTACK",
    title: "Redesign TrustMe Platform",
    description: "description will be here",
    link: "",
    stack: [],
  },
  {
    type: "FRONTEND",
    title: "Arabic Markdown Editor",
    description: "Modern markdown editor support RTL",
    link: "https://github.com/ousszizou/arabic-markdown-editor",
    stack: [],
  },
  {
    type: "FRONTEND",
    title: "Vupa",
    description: "🚀 Beautiful and modern Vue 3 UI library.",
    link: "",
    stack: [],
  },
];

export const technologies: Array<Technology> = [
  {
    type: "(programing language)",
    title: "JavaScript",
    icon: "technologies_logos/js.svg",
  },
  {
    type: "(programing language)",
    title: "TypeScript",
    icon: "technologies_logos/ts.svg",
  },
  {
    type: "(programing language)",
    title: "Golang",
    icon: "technologies_logos/go.svg",
  },
  {
    type: "(programing language)",
    title: "PHP 8",
    icon: "technologies_logos/php8.svg",
  },
  {
    type: "(JavaScript runtime)",
    title: "Node.js",
    icon: "technologies_logos/nodejs.svg",
  },
  {
    type: "(PHP framework)",
    title: "Laravel",
    icon: "technologies_logos/laravel.svg",
  },
  {
    type: "(js framework)",
    title: "Vue.js",
    icon: "technologies_logos/vue.svg",
  },
  {
    type: "(js framework)",
    title: "React.js",
    icon: "technologies_logos/react.svg",
  },
  {
    type: "(css framework)",
    title: "Tailwindcss",
    icon: "technologies_logos/tailwindcss.svg",
  },
  {
    type: "(css preprocessor)",
    title: "Sass",
    icon: "technologies_logos/sass.svg",
  },
  {
    type: "(distributed version control)",
    title: "Git",
    icon: "technologies_logos/git.svg",
  },
  {
    type: "(Cloud Repository)",
    title: "GitHub",
    icon: "technologies_logos/github.svg",
  },
  {
    type: "(vue.js framework)",
    title: "Nuxt 3",
    icon: "technologies_logos/nuxt.svg",
  },
  {
    type: "(react.js framework)",
    title: "Next.js",
    icon: "technologies_logos/nextjs.svg",
  },
  {
    type: "(database)",
    title: "MongoDB",
    icon: "technologies_logos/mongodb.svg",
  },
  {
    type: "(database)",
    title: "MySQL",
    icon: "technologies_logos/mysql.svg",
  },
  // {
  //   type: "(devOps)",
  //   title: "Docker",
  //   icon: "technologies_logos/docker.svg",
  // },
];

export const experiences: Array<Experience> = [
  {
    id: "01",
    timeline: "Jan 2022 - Jul 2022",
    location: "Algeria",
    company: "TOP ACADEMIC SERVICES QUALITY",
    position: "Front-end Developer",
    colors: {
      left: "#9DECF9",
      right: "#9F7AEA",
    },
  },
  {
    id: "02",
    timeline: "Nov 2018 - Present",
    location: "Home",
    company: "YouTube",
    position: "Content Creator",
    colors: {
      left: "#FEB2B2",
      right: "#ED8936",
    },
  },
  {
    id: "03",
    timeline: "Jan 2017 - Present",
    location: "Home",
    company: "Freelancer",
    position: "Full-stack Developer",
    colors: {
      left: "#9AE6B4",
      right: "#4299E1",
    },
  },
];

import { Link, Project, SocialLink, Technology } from "./types";

export const links: Array<Link> = [
  { id: "01", name: "PROJECTS", href: "#projects" },
  { id: "02", name: "TECHNOLOGIES I USE", href: "#technologies" },
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
    type: "FRONTEND",
    title: "Arabic Markdown Editor",
    description: "Modern markdown editor support RTL",
    link: "https://github.com/ousszizou/arabic-markdown-editor",
    stack: [],
  },
  {
    type: "FRONTEND",
    title: "Vupa Framework",
    description: "Framework components for vue.js (v2/v3)",
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

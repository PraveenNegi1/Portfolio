import {
  meta,
  shopify,
  starbucks,
  tesla,
  digital360,
  rolafaceLogo,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "DIGITAL 360",
    icon: digital360,
    iconBg: "#1a1a1a",
    date: "Sep 2024 - Present",

    points: [
      "Working on distinct projects, Comparing schools and counseling for colleges",
      "This involves me to coordinating with team members, adhering to project timelines, multiple tasks simultaneously.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborated with designers and stakeholders, translating project requirements into efficient, scalable code while maintaining design consistency and functionality.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Rolaface Software",
    icon: rolafaceLogo,
    iconBg: "#ffffff",
    date: "Sep 2023 - Aug 2024",
    points: [
      "Developed procedures and modified existing packages to provide solutions for and banking systems",
      " Optimized existing MySQL database queries and designed new queries for efficient banking solutions.",
      " Created custom functionalities using PL/SQL procedures for banking solutions.",
      "Actively debugged issues reported by users, collaborating with teams to implement effective solutions quick.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/PraveenNegi1",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/feed/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Pastes App",
    description:
      "A Paste App for saving and organizing your work.A Paste App for Effortlessly Saving and Organizing Your Creative Work. A Paste App for Saving, Organizing, and Accessing Your Work Anytime.",
    link: "https://github.com/PraveenNegi1/React/tree/master/PasteApp",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "GoEdu",
    description:
      'Go Edu, India`s No. 1 AI counseling portal, revolutionizes college admissions with personalized guidance and expert support. Our AI-driven platform ensures students find their perfect college match effortlessly',
    link: "https://www.goedu.in/",
  },
];

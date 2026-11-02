import type { Tech } from "types";

// inventory items; "used in" is derived from project tags, notes are optional facts
export const techStack: Tech[] = [
  { name: "Python", category: "lang" },
  { name: "TypeScript", category: "lang" },
  { name: "JavaScript", category: "lang" },
  { name: "C", category: "lang" },
  { name: "React", category: "dev" },
  { name: "Next.js", category: "dev" },
  {
    name: "Vite",
    category: "dev",
    note: { en: "This portfolio is built with it", pt: "Este portfólio é feito com ele" },
  },
  { name: "Expo", category: "dev" },
  { name: "Figma", category: "dev" },
  { name: "Git", category: "dev" },
  { name: "Firebase", category: "infra" },
  { name: "MongoDB", category: "infra" },
  { name: "Docker", category: "infra" },
  { name: "LLMs", category: "ai" },
  { name: "Hugging Face", category: "ai" },
];

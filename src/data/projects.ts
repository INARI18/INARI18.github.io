import type { Project } from "types";

export const projects: Project[] = [
  {
    emoji: "🛡️",
    title: "MulitaMiner",
    desc: "LLM-powered pipeline that extracts structured vulnerability data from unstructured security reports. Research project at RNP CT Cybersecurity.",
    tags: ["Python", "LLMs", "Hugging Face", "Vulnerability Scanners"],
    repo: "https://github.com/AnonShield/MulitaMiner",
  },
  {
    emoji: "🕵️",
    title: "AnonLFI 2.0",
    desc: "Adaptation of the AnonLFI pipeline for anonymizing sensitive data in cybersecurity incident reports, using Presidio and custom recognizers.",
    tags: ["Python", "Presidio", "NLP", "LLMs", "SQLite"],
    repo: "https://github.com/AnonShield/tool",
  },
  {
    emoji: "🎮",
    title: "Learn From Incidents",
    desc: "Gamified educational platform that turns real cybersecurity incidents into interactive learning paths for students and professionals.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    repo: "https://gt-lfi-dev-hackersdb.unihacker.club",
  },
  {
    emoji: "🎓",
    title: "SAVE Egress@s",
    desc: "Graduate-monitoring tool for UNIPAMPA — from Figma prototypes to a production web app used by the coordination team.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Figma"],
    repo: "https://project-jdlbw.vercel.app",
  },
  {
    emoji: "👾",
    title: "Portfolio",
    desc: "This very portfolio — a retro pixel-art themed site built with Vite, React, and CSS Modules, deployed on GitHub Pages.",
    tags: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/INARI18/INARI18.github.io",
  },
];

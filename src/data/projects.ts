import type { Project } from "types";
import mulita from "assets/projects/mulita.jpg";
import anon from "assets/projects/anon.jpg";
import hb from "assets/projects/hb.jpg";
import pet from "assets/projects/pet.jpg";
import save from "assets/projects/save.jpg";
import portfolio from "assets/projects/portfolio.jpg";

export const projects: Project[] = [
  {
    emoji: "📋",
    title: "MulitaMiner",
    desc: {
      en: "LLM-powered pipeline for extracting and structuring vulnerability data from unstructured security reports at scale. Developed as part of a cybersecurity research project at RNP CT",
      pt: "Pipeline com LLMs para extração e estruturação de dados de vulnerabilidades a partir de relatórios de segurança não estruturados em larga escala. Desenvolvido como parte de um projeto de pesquisa no RNP CT",
    },
    tags: ["Python", "LLMs", "Vulnerabilities"],
    repo: "https://github.com/AnonShield/MulitaMiner",
    image: mulita,
  },
  {
    emoji: "🕵️",
    title: "AnonLFI 2.0",
    desc: {
      en: "Adapted and extended the AnonLFI pipeline to anonymize sensitive data in cybersecurity reports, combining NLP, custom recognizers, and scalable processing",
      pt: "Adaptação e extensão do pipeline AnonLFI para anonimização de dados sensíveis em relatórios de cibersegurança, combinando NLP, reconhecedores customizados e processamento escalável",
    },
    tags: ["Python", "Presidio", "NLP", "LLMs", "SQLite"],
    repo: "https://github.com/AnonShield/tool",
    image: anon,
  },
  {
    emoji: "🎮",
    title: "Learn From Incidents",
    desc: {
      en: "Gamified educational platform that turns real cybersecurity incidents into interactive learning paths for students and professionals",
      pt: "Plataforma educacional gamificada que transforma incidentes reais de cibersegurança em trilhas interativas de aprendizado para estudantes e profissionais",
    },
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    repo: "https://gt-lfi-dev-hackersdb.unihacker.club",
    image: hb,
  },
  {
    emoji: "🎓",
    title: "SAVE Egress@s",
    desc: {
      en: "Full-stack web application for tracking and managing alumni data at UNIPAMPA, supporting structured data collection and analysis. Registered software at INPI",
      pt: "Aplicação web full-stack para acompanhamento e gestão de egressos da UNIPAMPA, com suporte à coleta e análise de dados estruturados. Software com registro no INPI",
    },
    tags: ["Next.js", "TypeScript", "MongoDB", "Figma", "Tailwind"],
    repo: "https://project-jdlbw.vercel.app",
    image: save,
  },
  {
    emoji: "🐱",
    title: "My Daily Pet",
    desc: {
      en: "Mobile app to track and manage your pets' daily activities",
      pt: "App mobile para acompanhar e gerenciar as atividades diárias dos seus pets",
    },
    tags: ["Expo", "TypeScript", "Firebase", "Figma", "CSS"],
    repo: "https://github.com/INARI18/My-Daily-Pet-v2",
    image: pet,
  },
  {
    emoji: "👾",
    title: "Portfolio",
    desc: {
      en: "Personal portfolio with a custom pixel-art interface, focusing on interactive UI and visual design, built with Vite, React, and CSS Modules",
      pt: "Portfólio pessoal com interface pixel-art personalizada, focado em interatividade e design visual, desenvolvido com Vite, React e CSS Modules",
    },
    tags: ["React", "TypeScript", "Vite", "CSS"],
    repo: "https://github.com/INARI18/INARI18.github.io",
    image: portfolio,
  },
];

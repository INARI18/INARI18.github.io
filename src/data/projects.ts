import type { Project } from 'types';

export const projects: Project[] = [
  {
    emoji: '📋',
    title: 'MulitaMiner',
    desc: {
      en: 'LLM-powered pipeline that extracts structured vulnerability data from unstructured security reports. Research project at RNP CT Cybersecurity.',
      pt: 'Pipeline com LLMs que extrai dados estruturados de vulnerabilidades a partir de relatórios não estruturados de segurança. Projeto de pesquisa no RNP CT Cibersegurança.',
    },
    tags: ['Python', 'LLMs', 'Vulnerability Scanners'],
    repo: 'https://github.com/AnonShield/MulitaMiner',
  },
  {
    emoji: '🕵️',
    title: 'AnonLFI 2.0',
    desc: {
      en: 'Adaptation of the AnonLFI pipeline for anonymizing sensitive data in cybersecurity incident reports, using Presidio and custom recognizers.',
      pt: 'Adaptação do pipeline AnonLFI para anonimizar dados sensíveis em relatórios de incidentes de cibersegurança, usando Presidio e reconhecedores customizados.',
    },
    tags: ['Python', 'Presidio', 'NLP', 'LLMs', 'SQLite'],
    repo: 'https://github.com/AnonShield/tool',
  },
  {
    emoji: '🎮',
    title: 'Learn From Incidents',
    desc: {
      en: 'Gamified educational platform that turns real cybersecurity incidents into interactive learning paths for students and professionals.',
      pt: 'Plataforma educacional gamificada que transforma incidentes reais de cibersegurança em trilhas interativas de aprendizado para estudantes e profissionais.',
    },
    tags: ['Next.js', 'TypeScript', 'Firebase'],
    repo: 'https://gt-lfi-dev-hackersdb.unihacker.club',
  },
  {
    emoji: '🐱',
    title: 'MyDailyPet',
    desc: {
      en: "Mobile app to track and manage your pets' daily activities.",
      pt: 'App mobile para acompanhar e gerenciar as atividades diárias dos seus pets.',
    },
    tags: ['Expo Go', 'TypeScript', 'Firebase', 'Figma'],
    repo: 'https://github.com/INARI18/My-Daily-Pet-v2',
  },
  {
    emoji: '🎓',
    title: 'SAVE Egress@s',
    desc: {
      en: 'Graduate-monitoring tool for UNIPAMPA — from Figma prototypes to a production web app used by the coordination team.',
      pt: 'Ferramenta de acompanhamento de egressos da UNIPAMPA — dos protótipos em Figma até um app web em produção usado pela coordenação.',
    },
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Figma'],
    repo: 'https://project-jdlbw.vercel.app',
  },
  {
    emoji: '👾',
    title: 'Portfolio',
    desc: {
      en: 'This very portfolio — a retro pixel-art themed site built with Vite, React, and CSS Modules, deployed on GitHub Pages.',
      pt: 'Este próprio portfólio — um site com tema pixel-art retrô feito em Vite, React e CSS Modules, publicado no GitHub Pages.',
    },
    tags: ['React', 'TypeScript', 'Vite'],
    repo: 'https://github.com/INARI18/INARI18.github.io',
  },
];

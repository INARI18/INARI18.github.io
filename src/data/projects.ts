import type { Project } from "types";
import mulita from "assets/projects/mulita.jpg";
import anon from "assets/projects/anon.jpg";
import hb from "assets/projects/hb.jpg";
import save from "assets/projects/save.jpg";
import petCover from "assets/projects/pet/cover.jpg";
import petToday from "assets/projects/pet/today.png";
import petPets from "assets/projects/pet/pets.png";
import petPlanner from "assets/projects/pet/pet.png";
import petWeight from "assets/projects/pet/weight.png";

export const projects: Project[] = [
  {
    title: "MulitaMiner",
    org: {
      en: "UNIPAMPA · RNP CT Cybersecurity",
      pt: "UNIPAMPA · RNP CT Cibersegurança",
    },
    desc: {
      en: "LLM-powered pipeline for extracting and structuring vulnerability data from unstructured security reports at scale",
      pt: "Pipeline com LLMs para extração e estruturação de dados de vulnerabilidades a partir de relatórios de segurança não estruturados em larga escala",
    },
    details: {
      en: "Built to support CSIRT teams that keep years of scanner output in PDF reports, a format that makes extraction, analysis and prioritization of vulnerabilities painful. MulitaMiner reads the PDFs directly and returns a unified schema that standardizes data from different scanners. It evolved through three versions, evaluated over 450 runs with five LLMs, raising Exact Record Match from 37.5% to 90.4%.",
      pt: "Criado para apoiar times de CSIRT que guardam anos de saída de scanners em relatórios PDF, formato que dificulta extração, análise e priorização de vulnerabilidades. O MulitaMiner lê os PDFs diretamente e devolve um schema unificado que padroniza dados de scanners diferentes. Evoluiu por três versões, avaliadas em 450 execuções com cinco LLMs, com o Exact Record Match subindo de 37,5% para 90,4%.",
    },
    tags: [
      "Python",
      "UV Python",
      "LLMs",
      "Vulnerabilities Scanners",
      "BERTScore",
      "ROUGE-L",
    ],
    year: "2025",
    category: "research",
    cover: mulita,
    links: [
      { kind: "code", href: "https://github.com/AnonShield/MulitaMiner" },
      {
        kind: "paper",
        href: "https://sol.sbc.org.br/index.php/sbseg/article/view/44328",
      },
    ],
    result: {
      en: "2nd Best Paper at WRSEG 2025",
      pt: "2º Melhor Artigo no WRSEG 2025",
    },
  },
  {
    title: "AnonLFI 2.0",
    org: {
      en: "UNIPAMPA · RNP CT Cybersecurity",
      pt: "UNIPAMPA · RNP CT Cibersegurança",
    },
    desc: {
      en: "Adapted and extended the AnonLFI pipeline to anonymize sensitive data in cybersecurity reports, combining NLP, custom recognizers, and scalable processing",
      pt: "Adaptação e extensão do pipeline AnonLFI para anonimização de dados sensíveis em relatórios de cibersegurança, combinando NLP, reconhecedores customizados e processamento escalável",
    },
    details: {
      en: "Extends the original AnonLFI pipeline to new incident and vulnerability report formats, using Presidio plus custom recognizers for PII and technical security artifacts. The work grew into AnonShield, a high-throughput pseudonymization system with GPU-accelerated NER and streaming processing, reaching up to 738x speedup with F1 = 94.2%.",
      pt: "Estende o pipeline AnonLFI original para novos formatos de relatórios de incidentes e de vulnerabilidades, usando Presidio e reconhecedores customizados para PII e artefatos técnicos de segurança. O trabalho evoluiu para o AnonShield, sistema de pseudonimização de alta vazão com NER acelerado por GPU e processamento em streaming, chegando a 738x de speedup com F1 de 94,2%.",
    },
    tags: ["Python", "UV Python", "Presidio", "NLP", "LLMs", "SQLite"],
    year: "2025",
    category: "research",
    cover: anon,
    links: [
      { kind: "code", href: "https://github.com/AnonShield/tool" },
      {
        kind: "paper",
        href: "https://sol.sbc.org.br/index.php/sbrc_estendido/article/view/42580",
      },
    ],
    result: {
      en: "Best Artifact at SBRC 2026",
      pt: "Melhor Artefato no SBRC 2026",
    },
  },
  {
    title: "Learn From Incidents",
    org: {
      en: "RNP · Hackers do Bem program (GT-LFI) · UNIPAMPA",
      pt: "RNP · programa Hackers do Bem (GT-LFI) · UNIPAMPA",
    },
    desc: {
      en: "Gamified educational platform that turns real cybersecurity incidents into interactive learning paths for students and professionals",
      pt: "Plataforma educacional gamificada que transforma incidentes reais de cibersegurança em trilhas interativas de aprendizado para estudantes e profissionais",
    },
    details: {
      en: "Developed for RNP's Hackers do Bem program. Each real incident becomes a guided path with progress tracking and game elements, so learners practice on cases that actually happened.",
      pt: "Desenvolvido para o programa Hackers do Bem, da RNP. Cada incidente real vira uma trilha guiada, com progresso e elementos de jogo, para praticar em cima de casos que aconteceram de verdade.",
    },
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    year: "2025",
    category: "web",
    cover: hb,
    links: [
      { kind: "demo", href: "https://gt-lfi-dev-hackersdb.unihacker.club" },
    ],
  },
  {
    title: "SAVE Egress@s",
    org: { en: "UNIPAMPA", pt: "UNIPAMPA" },
    desc: {
      en: "Full-stack web application for tracking and managing university alumni data",
      pt: "Aplicação web full-stack para acompanhamento e gestão de egressos da universidade",
    },
    details: {
      en: "Taken from Figma prototypes to production. Graduates answer structured questionnaires about their academic and professional path, and course coordinators get analytics to support their decisions.",
      pt: "Levada dos protótipos em Figma até a produção. Formados respondem questionários estruturados sobre a trajetória acadêmica e profissional, e a coordenação dos cursos recebe analytics para apoiar suas decisões.",
    },
    tags: ["Next.js", "TypeScript", "MongoDB", "Figma", "Tailwind"],
    year: "2024",
    category: "web",
    cover: save,
    links: [{ kind: "demo", href: "https://project-jdlbw.vercel.app" }],
    result: {
      en: "Registered software at INPI",
      pt: "Software registrado no INPI",
    },
  },
  {
    title: "My Daily Pet",
    org: { en: "Personal project", pt: "Projeto pessoal" },
    desc: {
      en: "Mobile app to plan and track pets' daily care, with reminders, weight history and veterinary news. English and Portuguese, light and dark mode",
      pt: "App mobile para planejar e acompanhar os cuidados diários dos pets, com lembretes, histórico de peso e notícias veterinárias. Inglês e português, modo claro e escuro",
    },
    details: {
      en: "Android app published as an APK. The Today screen lists what is overdue, due today and due this week, with a calendar for all pets. Events can be recurring or one-time, with notes and a reminder with lead time.",
      pt: "App Android publicado como APK. A tela Hoje lista o que está atrasado, o que vence hoje e na semana, com um calendário de todos os pets. Eventos podem ser recorrentes ou únicos, com notas e lembrete com antecedência.",
    },
    tags: ["Expo", "React Native", "TypeScript", "Expo Router", "Firebase"],
    year: "2026",
    category: "app",
    cover: petCover,
    gallery: [petToday, petPets, petPlanner, petWeight],
    links: [
      { kind: "code", href: "https://github.com/INARI18/My-Daily-Pet" },
      {
        kind: "apk",
        href: "https://github.com/INARI18/My-Daily-Pet/releases/latest",
      },
    ],
    result: {
      en: "APK v1.1.0 published",
      pt: "APK v1.1.0 publicado",
    },
  },
];

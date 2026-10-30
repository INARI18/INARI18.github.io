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
      en: "Built to support CSIRT teams that keep years of scanner output in PDF reports, a format that makes extraction, analysis and prioritization of vulnerabilities painful. MulitaMiner reads the PDFs directly and returns a unified schema that standardizes data from different scanners. It evolved through three versions, evaluated over 450 runs with five LLMs, raising Exact Record Match from 37.5% to 90.4%. The work also produced a standardized dataset of 6,700 vulnerabilities.",
      pt: "Criado para apoiar times de CSIRT que guardam anos de saída de scanners em relatórios PDF, formato que dificulta extração, análise e priorização de vulnerabilidades. O MulitaMiner lê os PDFs diretamente e devolve um schema unificado que padroniza dados de scanners diferentes. Evoluiu por três versões, avaliadas em 450 execuções com cinco LLMs, com o Exact Record Match subindo de 37,5% para 90,4%. O trabalho também gerou um dataset padronizado com 6.700 vulnerabilidades.",
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
      en: "Extends the original AnonLFI pipeline to new incident and vulnerability report formats, using Presidio plus custom recognizers for PII and technical security artifacts. The line of work grew into AnonShield, a high-throughput on-premise pseudonymization system with GPU-accelerated NER, streaming processing and schema-aware configuration, reaching up to 738x speedup on datasets up to 550 MB with F1 = 94.2% and recall = 96.4%.",
      pt: "Estende o pipeline AnonLFI original para novos formatos de relatórios de incidentes e de vulnerabilidades, usando Presidio e reconhecedores customizados para PII e artefatos técnicos de segurança. A linha de trabalho evoluiu para o AnonShield, sistema de pseudonimização on-premise de alta vazão com NER acelerado por GPU, processamento em streaming e configuração por schema, chegando a 738x de speedup em datasets de até 550 MB, com F1 de 94,2% e recall de 96,4%.",
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
      en: "Developed for RNP within the Hackers do Bem program, as part of the GT-LFI working group. Real incidents become guided, gamified learning paths with progress tracking, so students and professionals practice on cases that actually happened. Full-stack work with Next.js, TypeScript, Firebase and Tailwind.",
      pt: "Desenvolvido para a RNP dentro do programa Hackers do Bem, no grupo de trabalho GT-LFI. Incidentes reais viram trilhas guiadas e gamificadas, com acompanhamento de progresso, para que estudantes e profissionais pratiquem em cima de casos que aconteceram de verdade. Trabalho full-stack com Next.js, TypeScript, Firebase e Tailwind.",
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
      en: "Full-stack web application for tracking and managing alumni data at UNIPAMPA, supporting structured data collection and analysis",
      pt: "Aplicação web full-stack para acompanhamento e gestão de egressos da UNIPAMPA, com suporte à coleta e análise de dados estruturados",
    },
    details: {
      en: "Alumni tracking tool for the university, taken from Figma prototypes to production. Graduates answer structured questionnaires about their academic and professional path, and the coordination team gets analytics to support decisions about the courses. Registered as software at INPI.",
      pt: "Ferramenta de acompanhamento de egressos da universidade, levada dos protótipos em Figma até a produção. Formados respondem questionários estruturados sobre a trajetória acadêmica e profissional, e a equipe de coordenação recebe analytics para apoiar decisões sobre os cursos. Software registrado no INPI.",
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
      en: "Android app published as an APK. Today shows what is overdue, due today and due in the next 7 days, plus a calendar for all pets. Each pet has a card with type, gender, birthdate, weight and weight history. Events can be recurring or one-time, with notes, last-done date and a reminder with lead time. Discover brings veterinary news and recent PubMed papers. Account handles language, theme, notifications and JSON export.",
      pt: "App Android publicado como APK. A tela Hoje mostra o que está atrasado, o que vence hoje e nos próximos 7 dias, mais um calendário com todos os pets. Cada pet tem um card com tipo, sexo, data de nascimento, peso e histórico de peso. Eventos podem ser recorrentes ou únicos, com notas, data da última vez e lembrete com antecedência. A aba Descobrir traz notícias veterinárias e artigos recentes do PubMed. A conta cuida de idioma, tema, notificações e exportação em JSON.",
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

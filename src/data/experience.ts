import type { Experience } from "types";

export const experience: Experience[] = [
  {
    year: "2025",
    pg: ["01", "02"],
    title: {
      en: "Cybersecurity Researcher · MulitaMiner",
      pt: "Pesquisadora em Cibersegurança · MulitaMiner",
    },
    company: {
      en: "at UNIPAMPA · RNP CT Cybersecurity",
      pt: "na UNIPAMPA · RNP CT Cibersegurança",
    },
    desc: {
      en: "Development of MulitaMiner, an LLM-based pipeline that supports CSIRT teams in processing historical scanner data stored as PDF reports, a format that complicates the extraction, analysis, and prioritization of vulnerabilities. The tool extracts data directly from PDFs and outputs a unified schema that allows data from different scanners to be merged and standardized",
      pt: "Desenvolvimento do MulitaMiner, um pipeline baseado em LLMs que apoia times de CSIRT no processamento de dados históricos de scanners armazenados em relatórios PDF, formato que dificulta a extração, análise e priorização de vulnerabilidades. A ferramenta extrai dados diretamente dos PDFs e devolve um schema unificado que permite acoplar e padronizar dados de scanners diferentes",
    },
    tech: [
      "Python",
      "UV Python",
      "LLMs",
      "Vulnerabilities Scanners",
      "BERTScore",
      "ROUGE-L",
    ],
    highlight: {
      en: "· 2nd Best Paper award at WRSEG 2025 as first author \n · Produced a standardized dataset of 6,700 vulnerabilities",
      pt: "Prêmio de 2º Melhor Artigo no WRSEG 2025 como primeira autora. Produziu um dataset padronizado com 6.700 vulnerabilidades",
    },
  },
  {
    year: "2025",
    pg: ["03", "04"],
    title: {
      en: "Cybersecurity Researcher · AnonLFI 2.0",
      pt: "Pesquisadora em Cibersegurança · AnonLFI 2.0",
    },
    company: {
      en: "at UNIPAMPA · RNP CT Cybersecurity",
      pt: "na UNIPAMPA · RNP CT Cibersegurança",
    },
    desc: {
      en: "Adaptation of the AnonLFI pipeline for anonymization of sensitive data in cybersecurity incident reports, using Presidio and custom recognizers. Co-authored a published paper on the work.",
      pt: "Adaptação do pipeline AnonLFI para anonimização de dados sensíveis em relatórios de incidentes de cibersegurança, usando Presidio e reconhecedores customizados. Coautora de um artigo publicado sobre o trabalho.",
    },
    tech: [
      "Python",
      "UV Python",
      "Microsoft Presidio",
      "Hugging Face",
      "NLP",
      "LLMs",
      "SQLite",
    ],
    highlight: {
      en: "Published paper at WRSEG 2025, extending the original AnonLFI to new incident-report formats.",
      pt: "Artigo publicado no WRSEG 2025, estendendo o AnonLFI original para novos formatos de relatórios de incidentes.",
    },
  },
  {
    year: "2025",
    pg: ["05", "06"],
    title: {
      en: "Full-Stack Developer",
      pt: "Desenvolvedora Full-Stack",
    },
    company: {
      en: "at UNIPAMPA · Hackers do Bem GT-LFI",
      pt: "na UNIPAMPA · Hackers do Bem GT-LFI",
    },
    desc: {
      en: "Building Learn From Incidents, an educational platform that turns real cybersecurity incidents into gamified learning experiences for students and professionals.",
      pt: "Construindo o Learn From Incidents, uma plataforma educacional que transforma incidentes reais de cibersegurança em experiências de aprendizado gamificadas para estudantes e profissionais.",
    },
    tech: ["Next.js", "TypeScript", "React", "Firebase"],
    highlight: { en: "", pt: "" },
  },
  {
    year: "2024",
    pg: ["07", "08"],
    title: {
      en: "Full-Stack Developer",
      pt: "Desenvolvedora Full-Stack",
    },
    company: {
      en: "at UNIPAMPA · SAVE Egress@s",
      pt: "na UNIPAMPA · SAVE Egress@s",
    },
    desc: {
      en: "Developed a graduate-monitoring web tool for the university, from Figma prototypes to production deployment. Focused on tracking alumni progress and providing analytics for the coordination team.",
      pt: "Desenvolvi uma ferramenta web de acompanhamento de egressos para a universidade, dos protótipos em Figma até a produção. Foco em rastrear o progresso dos formados e fornecer analytics para a equipe de coordenação.",
    },
    tech: ["Next.js", "TypeScript", "React", "MongoDB", "Figma"],
    highlight: { en: "", pt: "" },
  },
];

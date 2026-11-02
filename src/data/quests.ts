import type { Quest } from "types";

// chronological: the path reads left to right, the last one is the current role
export const QUEST_START = "2023";

export const quests: Quest[] = [
  {
    period: { en: "2024", pt: "2024" },
    title: { en: "Full-Stack Developer", pt: "Desenvolvedora Full-Stack" },
    org: { en: "UNIPAMPA · SAVE Egress@s", pt: "UNIPAMPA · SAVE Egress@s" },
    desc: {
      en: "Built the university's alumni tracking tool from Figma prototypes to production: graduates answer structured questionnaires and course coordinators get analytics to support their decisions.",
      pt: "Construí a ferramenta de acompanhamento de egressos da universidade, dos protótipos em Figma até a produção: formados respondem questionários estruturados e a coordenação dos cursos recebe analytics para apoiar decisões.",
    },
    tech: ["Next.js", "TypeScript", "React", "MongoDB", "Figma"],
    reward: { en: "Software registered at INPI", pt: "Software registrado no INPI" },
    projects: ["SAVE Egress@s"],
  },
  {
    period: { en: "2025", pt: "2025" },
    title: { en: "Full-Stack Developer", pt: "Desenvolvedora Full-Stack" },
    org: {
      en: "RNP · Hackers do Bem program (GT-LFI)",
      pt: "RNP · programa Hackers do Bem (GT-LFI)",
    },
    desc: {
      en: "Developed Learn From Incidents for RNP: an educational platform where real cybersecurity incidents become guided, gamified learning paths for students and professionals.",
      pt: "Desenvolvi o Learn From Incidents para a RNP: plataforma educacional em que incidentes reais de cibersegurança viram trilhas de aprendizado guiadas e gamificadas para estudantes e profissionais.",
    },
    tech: ["Next.js", "TypeScript", "React", "Firebase"],
    projects: ["Learn From Incidents"],
  },
  {
    period: { en: "2025 · today", pt: "2025 · hoje" },
    title: { en: "Cybersecurity Researcher", pt: "Pesquisadora em Cibersegurança" },
    org: { en: "UNIPAMPA · RNP CT Cybersecurity", pt: "UNIPAMPA · RNP CT Cibersegurança" },
    desc: {
      en: "Research on LLM-based extraction of vulnerability data from scanner reports (MulitaMiner), pseudonymization of sensitive data in CSIRT reports (AnonLFI 2.0, AnonShield) and large-scale scanning of Docker Hub images (ChimangoScan). First author and co-author of papers at WRSEG, SBSeg and SBRC.",
      pt: "Pesquisa em extração de dados de vulnerabilidades com LLMs a partir de relatórios de scanners (MulitaMiner), pseudonimização de dados sensíveis em relatórios de CSIRT (AnonLFI 2.0, AnonShield) e varredura em larga escala de imagens do Docker Hub (ChimangoScan). Primeira autora e coautora de artigos no WRSEG, SBSeg e SBRC.",
    },
    tech: ["Python", "LLMs", "NLP", "Presidio", "Vulnerability Scanners"],
    reward: {
      en: "2nd Best Paper at WRSEG 2025 · Best Artifact at SBRC 2026",
      pt: "2º Melhor Artigo no WRSEG 2025 · Melhor Artefato no SBRC 2026",
    },
    projects: ["MulitaMiner", "AnonLFI 2.0"],
  },
];

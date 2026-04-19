import type { Experience } from 'types';

export const experience: Experience[] = [
  {
    year: '2025',
    pg: ['01', '02'],
    title: {
      en: 'Cybersecurity Researcher · MulitaMiner',
      pt: 'Pesquisadora em Cibersegurança · MulitaMiner',
    },
    company: {
      en: 'at UNIPAMPA · RNP CT Cybersecurity',
      pt: 'na UNIPAMPA · RNP CT Cibersegurança',
    },
    desc: {
      en: 'Research and development of MulitaMiner, an LLM-based pipeline that extracts structured vulnerability data from unstructured security reports. Co-authored a published paper on the approach.',
      pt: 'Pesquisa e desenvolvimento do MulitaMiner, um pipeline baseado em LLMs que extrai dados estruturados de vulnerabilidades a partir de relatórios não estruturados de segurança. Coautora de um artigo publicado sobre a abordagem.',
    },
    tech: ['Python', 'LLMs', 'Vulnerability Scanners', ''],
    highlight: {
      en: '2nd Best Paper award at WRSEG 2025 as first author.',
      pt: 'Prêmio de 2º Melhor Artigo no WRSEG 2025 como primeira autora.',
    },
  },
  {
    year: '2025',
    pg: ['03', '04'],
    title: {
      en: 'Cybersecurity Researcher · AnonLFI 2.0',
      pt: 'Pesquisadora em Cibersegurança · AnonLFI 2.0',
    },
    company: {
      en: 'at UNIPAMPA · RNP CT Cybersecurity',
      pt: 'na UNIPAMPA · RNP CT Cibersegurança',
    },
    desc: {
      en: 'Adaptation of the AnonLFI pipeline for anonymization of sensitive data in cybersecurity incident reports, using Presidio and custom recognizers. Co-authored a published paper on the work.',
      pt: 'Adaptação do pipeline AnonLFI para anonimização de dados sensíveis em relatórios de incidentes de cibersegurança, usando Presidio e reconhecedores customizados. Coautora de um artigo publicado sobre o trabalho.',
    },
    tech: ['Python', 'Presidio', 'Hugging Face', 'NLP', 'LLMs', 'SQLite'],
    highlight: {
      en: 'Second published paper of the year at WRSEG 2025, extending the original AnonLFI to new incident-report formats.',
      pt: 'Segundo artigo publicado no ano no WRSEG 2025, estendendo o AnonLFI original para novos formatos de relatórios de incidentes.',
    },
  },
  {
    year: '2025',
    pg: ['05', '06'],
    title: {
      en: 'Full-Stack Developer',
      pt: 'Desenvolvedora Full-Stack',
    },
    company: {
      en: 'at UNIPAMPA · Hackers do Bem GT-LFI',
      pt: 'na UNIPAMPA · Hackers do Bem GT-LFI',
    },
    desc: {
      en: 'Building Learn From Incidents, an educational platform that turns real cybersecurity incidents into gamified learning experiences for students and professionals.',
      pt: 'Construindo o Learn From Incidents, uma plataforma educacional que transforma incidentes reais de cibersegurança em experiências de aprendizado gamificadas para estudantes e profissionais.',
    },
    tech: ['Next.js', 'TypeScript', 'React', 'Firebase'],
    highlight: { en: '', pt: '' },
  },
  {
    year: '2024',
    pg: ['07', '08'],
    title: {
      en: 'Full-Stack Developer',
      pt: 'Desenvolvedora Full-Stack',
    },
    company: {
      en: 'at UNIPAMPA · SAVE Egress@s',
      pt: 'na UNIPAMPA · SAVE Egress@s',
    },
    desc: {
      en: 'Developed a graduate-monitoring web tool for the university, from Figma prototypes to production deployment. Focused on tracking alumni progress and providing analytics for the coordination team.',
      pt: 'Desenvolvi uma ferramenta web de acompanhamento de egressos para a universidade, dos protótipos em Figma até a produção. Foco em rastrear o progresso dos formados e fornecer analytics para a equipe de coordenação.',
    },
    tech: ['Next.js', 'TypeScript', 'React', 'MongoDB', 'Figma'],
    highlight: { en: '', pt: '' },
  },
];

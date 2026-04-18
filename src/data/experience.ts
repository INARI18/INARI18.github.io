import type { Experience } from "types";

export const experience: Experience[] = [
  {
    year: "2025",
    pg: ["01", "02"],
    title: "Cybersecurity Researcher · MulitaMiner",
    company: "at UNIPAMPA · RNP CT Cybersecurity",
    desc: "Research and development of MulitaMiner, an LLM-based pipeline that extracts structured vulnerability data from unstructured security reports. Co-authored a published paper on the approach.",
    tech: ["Python", "LLMs", "Hugging Face", "Vulnerability Scanners"],
    highlight:
      "2nd Best Paper award at WRSEG 2025 as first author — recognized for the vulnerability extraction pipeline.",
  },
  {
    year: "2025",
    pg: ["03", "04"],
    title: "Cybersecurity Researcher · AnonLFI 2.0",
    company: "at UNIPAMPA · RNP CT Cybersecurity",
    desc: "Adaptation of the AnonLFI pipeline for anonymization of sensitive data in cybersecurity incident reports, using Presidio and custom recognizers. Co-authored a published paper on the work.",
    tech: ["Python", "Presidio", "NLP", "LLMs", "SQLite"],
    highlight:
      "Second published paper of the year at WRSEG 2025, extending the original AnonLFI to new incident-report formats.",
  },
  {
    year: "2025",
    pg: ["05", "06"],
    title: "Full-Stack Developer",
    company: "at UNIPAMPA · Hackers do Bem GT-LFI",
    desc: "Building Learn From Incidents, an educational platform that turns real cybersecurity incidents into gamified learning experiences for students and professionals.",
    tech: ["Next.js", "TypeScript", "React", "Firebase"],
    highlight: "",
  },
  {
    year: "2024",
    pg: ["07", "08"],
    title: "Full-Stack Developer",
    company: "at UNIPAMPA · SAVE Egress@s",
    desc: "Developed a graduate-monitoring web tool for the university, from Figma prototypes to production deployment. Focused on tracking alumni progress and providing analytics for the coordination team.",
    tech: ["Next.js", "TypeScript", "React", "MongoDB", "Figma"],
    highlight: "",
  },
];

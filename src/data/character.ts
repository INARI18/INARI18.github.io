import type { Award } from "types";

// trainer card: facts only, no self-scored stats
export const since = "2023";

export const awards: Award[] = [
  {
    label: { en: "WRSEG 2025 · 2nd Best Paper", pt: "WRSEG 2025 · 2º Melhor Artigo" },
    short: "WRSEG 2025",
    icon: "trophy",
    href: "https://sol.sbc.org.br/index.php/errc/article/view/39195",
  },
  {
    label: { en: "SBRC 2026 · Best Artifact", pt: "SBRC 2026 · Melhor Artefato" },
    short: "SBRC 2026",
    icon: "trophy",
    href: "https://sol.sbc.org.br/index.php/sbrc_estendido/article/view/42580",
  },
  {
    label: { en: "SBSeg 2026 · all 4 CTA artifact badges on two papers", pt: "SBSeg 2026 · 4 selos de artefato do CTA em dois artigos" },
    short: "SBSeg 2026",
    icon: "trophy",
    href: "https://doi.org/10.5753/sbseg_estendido.2026.29879",
  },
  {
    label: { en: "INPI · registered software", pt: "INPI · software registrado" },
    short: "INPI",
    icon: "shield",
  },
];

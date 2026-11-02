import type { Award, Equipment } from "types";

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
    label: { en: "INPI · registered software", pt: "INPI · software registrado" },
    short: "INPI",
    icon: "shield",
  },
];

export const equipped: Equipment[] = [
  { slot: { en: "WEAPON", pt: "ARMA" }, item: "Python" },
  { slot: { en: "ARMOR", pt: "ARMADURA" }, item: "TypeScript" },
  { slot: { en: "ITEM", pt: "ITEM" }, item: "LLMs" },
];

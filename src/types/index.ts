import type { Bilingual } from 'i18n/translations';

export type Quest = {
  period: Bilingual;    // "2024", "2025 · today"
  title: Bilingual;
  org: Bilingual;
  desc: Bilingual;
  tech: string[];
  reward?: Bilingual;   // awards and registrations earned in this role
  projects?: string[];  // titles of boxes on the shelf
};

export type ProjectCategory = 'research' | 'app' | 'web';
export type ProjectLinkKind = 'code' | 'demo' | 'apk' | 'paper';
export type ProjectLink = { kind: ProjectLinkKind; href: string };

export type Project = {
  title: string;
  org?: Bilingual;      // who it was built for / with
  desc: Bilingual;      // one-liner, shown on the cover
  details?: Bilingual;  // longer text, shown only on the back cover
  tags: string[];
  year: string;
  category: ProjectCategory;
  cover: string;
  links: ProjectLink[];
  result?: Bilingual;
  gallery?: string[];
};

export type PublicationIcon =
  | 'armadillo' | 'chart' | 'chip' | 'tag' | 'document' | 'mask' // codexIcons.ts
  | 'shield' | 'whale' | 'robot';                                   // shared icons

export type Publication = {
  year: string;
  title: string;
  short: string;          // index entry on the codex page
  icon: PublicationIcon;
  venue: string;
  award?: Bilingual;
  desc: Bilingual;
  tags: string[];
  link: string;
  project?: string;     // title of the related box on the shelf
};

export type TechCategory = 'lang' | 'dev' | 'infra' | 'ai';

export type Tech = {
  name: string;
  category: TechCategory;
  note?: Bilingual;      // optional fact shown on the item sheet
};

export type Social = {
  label: string;
  href: string;
};

export type Award = {
  label: Bilingual;
  short: string;
  icon: 'trophy' | 'shield';
  href?: string;
};

import type { Bilingual } from 'i18n/translations';

export type Experience = {
  year: string;
  pg: [string, string];
  title: Bilingual;
  company: Bilingual;
  desc: Bilingual;
  tech: string[];
  highlight: Bilingual;
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

export type Publication = {
  year: string;
  title: string;
  venue: string;
  award?: Bilingual;
  desc: Bilingual;
  tags: string[];
  link: string;
};

export type Social = {
  label: string;
  href: string;
};

export type Stat = {
  label: Bilingual;
  value: number;
};

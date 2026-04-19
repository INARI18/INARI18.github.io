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

export type Project = {
  emoji: string;
  title: string;
  desc: Bilingual;
  tags: string[];
  repo: string;
};

export type Social = {
  label: string;
  href: string;
};

export type Stat = {
  label: Bilingual;
  value: number;
};

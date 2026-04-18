export type Experience = {
  year: string;
  pg: [string, string];
  title: string;
  company: string;
  desc: string;
  tech: string[];
  highlight: string;
};

export type Project = {
  emoji: string;
  title: string;
  desc: string;
  tags: string[];
  repo: string;
};

export type Social = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
};

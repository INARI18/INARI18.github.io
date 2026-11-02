import type { ProjectCategory, ProjectLinkKind } from "types";

export type Lang = "en" | "pt";

export type Bilingual = Record<Lang, string>;

export type Dict = {
  nav: {
    about: string;
    experience: string;
    publications: string;
    projects: string;
    contact: string;
    toggleTheme: string;
    toggleLanguage: string;
    themes: { rose: string; violet: string; ice: string };
  };
  hero: {
    greeting: string;
    desc: string;
    viewProjects: string;
    contactMe: string;
    fillMug: string;
    coffees: (n: number) => string;
    overflow: string;
  };
  about: {
    section: string;
    title: string;
    titleEm: string;
    heading1: string;
    heading2: string;
    bio: string;
  };
  character: {
    name: string;
    class: string;
    since: string;
    badges: string;
    inventory: string;
    previousRole: string;
    nextRole: string;
  };
  experience: {
    section: string;
    titleEm: string;
    hint: string;
    start: string;
    log: string;
    techUsed: string;
    reward: string;
    select: (name: string) => string;
    viewProject: (name: string) => string;
  };
  publications: {
    section: string;
    title: string;
    titleEm: string;
    hint: string;
    codex: string;
    entry: string;
    award: string;
    abstract: string;
    select: (name: string) => string;
    read: string;
    soon: string;
    viewProject: string;
  };
  projects: {
    section: string;
    title: string;
    titleEm: string;
    open: (name: string) => string;
    close: string;
    prev: string;
    next: string;
    result: string;
    category: Record<ProjectCategory, string>;
    link: Record<ProjectLinkKind, string>;
  };
  contact: {
    section: string;
    title: string;
    titleEm: string;
    heading: string[];
    desc: string;
  };
  dialog: {
    defaultText: string;
    menuLabel: string;
    email: { label: string; flavor: string; prompt: string };
    github: { label: string; flavor: string; prompt: string };
    linkedin: { label: string; flavor: string; prompt: string };
    cv: { label: string; flavor: string; soon: string };
  };
  footer: {
    lastSync: string;
  };
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      publications: "Papers",
      projects: "Projects",
      contact: "Contact",
      toggleTheme: "Theme",
      toggleLanguage: "Switch language",
      themes: { rose: "Rose theme", violet: "Violet theme", ice: "Ice theme" },
    },
    hero: {
      greeting: "Hi, I'm",
      desc: "Computer Science student and cybersecurity researcher building full-stack apps and LLM-powered tools for real-world security problems",
      viewProjects: "▶ VIEW PROJECTS",
      contactMe: "CONTACT ME",
      fillMug: "Fill the mug",
      coffees: (n) => `COFFEES TODAY: ${n}`,
      overflow: "OVERFLOW!",
    },
    about: {
      section: "// SECTION 01",
      title: "About",
      titleEm: "Me",
      heading1: "Cybersecurity researcher &",
      heading2: "full-stack developer",
      bio: "I'm a Computer Science student at UNIPAMPA with experience in cybersecurity research and full-stack development. My work involves vulnerability data extraction and analysis, data anonymization, and LLM-based solutions for security applications, with a focus on real-world impact",
    },
    character: {
      name: "NAME",
      class: "CLASS",
      since: "SINCE",
      badges: "BADGES",
      inventory: "// INVENTORY",
      previousRole: "Previous class",
      nextRole: "Next class",
    },
    experience: {
      section: "// SECTION 02",
      titleEm: "Experience",
      hint: "▶ Pick a checkpoint",
      start: "START",
      log: "// QUEST LOG",
      techUsed: "// TECH USED",
      reward: "// REWARD",
      select: (name) => `Show ${name}`,
      viewProject: (name) => `▶ ${name}`,
    },
    publications: {
      section: "// SECTION 03",
      title: "Published",
      titleEm: "Papers",
      hint: "▶ Pick an entry",
      codex: "// CODEX",
      entry: "ENTRY",
      award: "// AWARD",
      abstract: "// ABSTRACT",
      select: (name) => `Show ${name}`,
      read: "Read paper →",
      soon: "Link soon",
      viewProject: "▶ Project",
    },
    projects: {
      section: "// SECTION 04",
      title: "My",
      titleEm: "Projects",
      open: (name) => `Open ${name}`,
      close: "Close",
      prev: "◀ PREV",
      next: "NEXT ▶",
      result: "// RESULT",
      category: { research: "RESEARCH", app: "APP", web: "WEB" },
      link: { code: "⌥ Code", demo: "▶ Live", apk: "⇩ APK", paper: "¶ Paper" },
    },
    contact: {
      section: "// SECTION 05",
      title: "Say",
      titleEm: "Hello",
      heading: ["LET'S BUILD", "SOMETHING", "TOGETHER!"],
      desc: "Have a project in mind, a question, or just want to say hi? My inbox is always open, even if I'm in the middle of a dungeon :]",
    },
    dialog: {
      defaultText: "* Hi! Thanks for stopping by\n* What would you like to do?",
      menuLabel: "Contact options",
      email: {
        label: "Email",
        flavor: "* Drop a line — I read every email I get",
        prompt: "* Send me a message at:",
      },
      github: {
        label: "GitHub",
        flavor: "* Take a peek at my code and projects",
        prompt: "* Find my code at:",
      },
      linkedin: {
        label: "LinkedIn",
        flavor: "* Let's connect professionally",
        prompt: "* Connect with me at:",
      },
      cv: {
        label: "CV",
        flavor: "* Grab a copy of my resume",
        soon: "* CV link coming soon!",
      },
    },
    footer: {
      lastSync: "last sync",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      publications: "Artigos",
      projects: "Projetos",
      contact: "Contato",
      toggleTheme: "Tema",
      toggleLanguage: "Trocar idioma",
      themes: { rose: "Tema rosa", violet: "Tema roxo", ice: "Tema gelo" },
    },
    hero: {
      greeting: "Oi, eu sou a",
      desc: "Estudante de Ciência da Computação e pesquisadora em cibersegurança construindo apps full-stack e ferramentas com LLMs para problemas reais de segurança",
      viewProjects: "▶ VER PROJETOS",
      contactMe: "ENTRE EM CONTATO",
      fillMug: "Encher a caneca",
      coffees: (n) => `CAFÉS HOJE: ${n}`,
      overflow: "TRANSBORDOU!",
    },
    about: {
      section: "// SEÇÃO 01",
      title: "Sobre",
      titleEm: "Mim",
      heading1: "Pesquisadora em cibersegurança &",
      heading2: "desenvolvedora full-stack",
      bio: "Sou estudante de Ciência da Computação na UNIPAMPA, com experiência em pesquisa em cibersegurança e desenvolvimento full-stack. Meu trabalho envolve extração e análise de vulnerabilidades, anonimização de dados e o uso de LLMs para aplicações em segurança, com foco em aplicações no mundo real",
    },
    character: {
      name: "NOME",
      class: "CLASSE",
      since: "DESDE",
      badges: "BADGES",
      inventory: "// INVENTÁRIO",
      previousRole: "Classe anterior",
      nextRole: "Próxima classe",
    },
    experience: {
      section: "// SEÇÃO 02",
      titleEm: "Experiência",
      hint: "▶ Escolha um ponto do caminho",
      start: "START",
      log: "// QUEST LOG",
      techUsed: "// TECNOLOGIAS",
      reward: "// RECOMPENSA",
      select: (name) => `Mostrar ${name}`,
      viewProject: (name) => `▶ ${name}`,
    },
    publications: {
      section: "// SEÇÃO 03",
      title: "Artigos",
      titleEm: "Publicados",
      hint: "▶ Escolha um registro",
      codex: "// CODEX",
      entry: "REGISTRO",
      award: "// PRÊMIO",
      abstract: "// RESUMO",
      select: (name) => `Mostrar ${name}`,
      read: "Ler artigo →",
      soon: "Link em breve",
      viewProject: "▶ Projeto",
    },
    projects: {
      section: "// SEÇÃO 04",
      title: "Meus",
      titleEm: "Projetos",
      open: (name) => `Abrir ${name}`,
      close: "Fechar",
      prev: "◀ ANT",
      next: "PRÓX ▶",
      result: "// RESULTADO",
      category: { research: "PESQUISA", app: "APP", web: "WEB" },
      link: { code: "⌥ Código", demo: "▶ Ao vivo", apk: "⇩ APK", paper: "¶ Artigo" },
    },
    contact: {
      section: "// SEÇÃO 05",
      title: "Mande um",
      titleEm: "Oi",
      heading: ["VAMOS CRIAR", "ALGO", "JUNTOS!"],
      desc: "Tem um projeto em mente, uma dúvida ou só quer dar um oi? Minha caixa de entrada está sempre aberta, mesmo que eu esteja no meio de uma dungeon :]",
    },
    dialog: {
      defaultText:
        "* Oi! Obrigada por olhar o meu trabalho\n* O que você quer fazer?",
      menuLabel: "Opções de contato",
      email: {
        label: "Email",
        flavor: "* Manda ver — leio todos os emails que recebo",
        prompt: "* Me mande uma mensagem em:",
      },
      github: {
        label: "GitHub",
        flavor: "* Dá uma espiada no meu código e projetos",
        prompt: "* Encontre meu código em:",
      },
      linkedin: {
        label: "LinkedIn",
        flavor: "* Vamos nos conectar profissionalmente",
        prompt: "* Conecte-se comigo em:",
      },
      cv: {
        label: "CV",
        flavor: "* Pegue uma cópia do meu currículo",
        soon: "* Link do CV em breve!",
      },
    },
    footer: {
      lastSync: "última sync",
    },
  },
};

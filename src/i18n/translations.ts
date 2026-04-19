export type Lang = "en" | "pt";

export type Bilingual = Record<Lang, string>;

export type Dict = {
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    toggleTheme: string;
    toggleLanguage: string;
  };
  hero: {
    greeting: string;
    desc: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    section: string;
    title: string;
    titleEm: string;
    heading1: string;
    heading2: string;
    bio: string;
    techStackLabel: string;
  };
  character: {
    previousRole: string;
    nextRole: string;
  };
  experience: {
    section: string;
    titleEm: string;
    page: string;
    techUsed: string;
    keyWin: string;
    prev: string;
    next: string;
    prevAria: string;
    nextAria: string;
  };
  projects: {
    section: string;
    title: string;
    titleEm: string;
    hint: string;
    shuffle: string;
    shuffleAria: string;
    view: (name: string) => string;
    code: string;
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
      projects: "Projects",
      contact: "Contact",
      toggleTheme: "Toggle theme",
      toggleLanguage: "Switch language",
    },
    hero: {
      greeting: "Hi, I'm",
      desc: "Computer Science student and cybersecurity researcher building full-stack apps and LLM-powered tools for real-world security problems",
      viewProjects: "▶ VIEW PROJECTS",
      contactMe: "CONTACT ME",
    },
    about: {
      section: "// SECTION 01",
      title: "About",
      titleEm: "Me",
      heading1: "Cybersecurity researcher &",
      heading2: "full-stack developer",
      bio: "I'm a Computer Science student at UNIPAMPA, researching how LLMs can extract and anonymize data from real cybersecurity incidents. Co-author of two published papers, one awarded 2nd Best Paper at WRSEG 2025",
      techStackLabel: "// TECH STACK",
    },
    character: {
      previousRole: "Previous role",
      nextRole: "Next role",
    },
    experience: {
      section: "// SECTION 02",
      titleEm: "Experience",
      page: "PAGE",
      techUsed: "// TECH USED",
      keyWin: "// KEY WIN",
      prev: "◀ PREV",
      next: "NEXT ▶",
      prevAria: "Previous experience",
      nextAria: "Next experience",
    },
    projects: {
      section: "// SECTION 03",
      title: "My",
      titleEm: "Projects",
      hint: "▶ Pick a card",
      shuffle: "▷ press me",
      shuffleAria: "Shuffle the deck",
      view: (name) => `View ${name}`,
      code: "⌥ Code",
    },
    contact: {
      section: "// SECTION 04",
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
      projects: "Projetos",
      contact: "Contato",
      toggleTheme: "Alternar tema",
      toggleLanguage: "Trocar idioma",
    },
    hero: {
      greeting: "Oi, eu sou a",
      desc: "Estudante de Ciência da Computação e pesquisadora em cibersegurança construindo apps full-stack e ferramentas com LLMs para problemas reais de segurança",
      viewProjects: "▶ VER PROJETOS",
      contactMe: "ENTRE EM CONTATO",
    },
    about: {
      section: "// SEÇÃO 01",
      title: "Sobre",
      titleEm: "Mim",
      heading1: "Pesquisadora em cibersegurança &",
      heading2: "desenvolvedora full-stack",
      bio: "Sou estudante de Ciência da Computação na UNIPAMPA, pesquisando como LLMs podem extrair e anonimizar dados de incidentes reais de cibersegurança. Coautora de dois artigos publicados, um deles premiado como 2º Melhor Artigo no WRSEG 2025",
      techStackLabel: "// STACK",
    },
    character: {
      previousRole: "Cargo anterior",
      nextRole: "Próximo cargo",
    },
    experience: {
      section: "// SEÇÃO 02",
      titleEm: "Experiência",
      page: "PÁGINA",
      techUsed: "// TECNOLOGIAS",
      keyWin: "// DESTAQUE",
      prev: "◀ ANT",
      next: "PRÓX ▶",
      prevAria: "Experiência anterior",
      nextAria: "Próxima experiência",
    },
    projects: {
      section: "// SEÇÃO 03",
      title: "Meus",
      titleEm: "Projetos",
      hint: "▶ Escolha uma carta",
      shuffle: "▷ clique aqui",
      shuffleAria: "Embaralhar as cartas",
      view: (name) => `Ver ${name}`,
      code: "⌥ Código",
    },
    contact: {
      section: "// SEÇÃO 04",
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

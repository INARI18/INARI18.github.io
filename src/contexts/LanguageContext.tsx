import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { translations, type Bilingual, type Dict, type Lang } from 'i18n/translations';

type LanguageCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
  tr: (b: Bilingual) => string;
};

const STORAGE_KEY = 'portfolio.lang';

const Context = createContext<LanguageCtx | null>(null);

function detect(): Lang {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved === 'en' || saved === 'pt') return saved;
  const nav = navigator.language?.toLowerCase() ?? '';
  return nav.startsWith('pt') ? 'pt' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detect);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'en' ? 'pt' : 'en'));
  const tr = (b: Bilingual) => b[lang];

  return (
    <Context.Provider
      value={{ lang, setLang, toggle, t: translations[lang], tr }}
    >
      {children}
    </Context.Provider>
  );
}

export function useLang() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}

import { useEffect, useState } from 'react';

export type Theme = 'rose' | 'violet' | 'ice';
export const THEMES: Theme[] = ['rose', 'violet', 'ice'];
const STORAGE_KEY = 'portfolio.theme';

function current(): Theme {
  const t = document.documentElement.dataset.theme;
  return t === 'violet' || t === 'ice' ? t : 'rose';
}

/** Theme is applied as html[data-theme]; index.html restores it before first paint. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current);

  useEffect(() => {
    if (theme === 'rose') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable: theme just does not persist */
    }
  }, [theme]);

  return { theme, setTheme };
}

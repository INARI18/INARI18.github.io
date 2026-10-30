import { useLang } from 'contexts/LanguageContext';
import { THEMES, useTheme } from 'hooks/useTheme';
import styles from './Nav.module.css';

export function Nav() {
  const { t, lang, toggle: toggleLang } = useLang();
  const { theme, setTheme } = useTheme();

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#publications', label: t.nav.publications },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className={styles.nav} aria-label="Primary">
      <a href="#hero" className={styles.logo}>
        beatriz.dev
      </a>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <div className={styles.tools}>
        <div className={styles.themes} role="group" aria-label={t.nav.toggleTheme}>
          {THEMES.map((th) => (
            <button
              key={th}
              type="button"
              className={`${styles.swatch} ${styles[th]} ${theme === th ? styles.swatchActive : ''}`}
              onClick={() => setTheme(th)}
              aria-label={t.nav.themes[th]}
              title={t.nav.themes[th]}
              aria-pressed={theme === th}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.langBtn}
          onClick={toggleLang}
          aria-label={t.nav.toggleLanguage}
          title={t.nav.toggleLanguage}
        >
          <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
          <span className={styles.langSep}>/</span>
          <span className={lang === 'pt' ? styles.langActive : ''}>PT</span>
        </button>
      </div>
    </nav>
  );
}

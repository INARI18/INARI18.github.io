import { useLang } from 'contexts/LanguageContext';
import styles from './Nav.module.css';

export function Nav() {
  const { t, lang, toggle: toggleLang } = useLang();

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
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
    </nav>
  );
}

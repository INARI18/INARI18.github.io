import { useEffect, useMemo, useState } from 'react';
import { useTypewriter } from 'hooks/useTypewriter';
import { roles } from 'data/roles';
import { badges } from 'data/badges';
import { RetroMug } from 'components/RetroMug/RetroMug';
import { useLang } from 'contexts/LanguageContext';
import styles from './Hero.module.css';

export function Hero() {
  const { t, tr } = useLang();
  const localizedRoles = useMemo(() => roles.map(tr), [tr]);
  const text = useTypewriter(localizedRoles);
  const [badgeIdx, setBadgeIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setBadgeIdx((i) => (i + 1) % badges.length),
      3500,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.badge}>{tr(badges[badgeIdx])}</div>
        <h1 className={styles.name}>
          {t.hero.greeting} <em>Beatriz Machado</em>
        </h1>
        <div className={styles.typewriter}>
          <span>{text}</span>
          <span className={styles.cursor}>_</span>
        </div>
        <p className={styles.desc}>{t.hero.desc}</p>
        <div className={styles.buttons}>
          <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
            {t.hero.viewProjects}
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.ghost}`}>
            {t.hero.contactMe}
          </a>
        </div>
      </div>

      <RetroMug />
    </section>
  );
}

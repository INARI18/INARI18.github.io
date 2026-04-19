import { CharacterCard } from 'components/CharacterCard/CharacterCard';
import { Reveal } from 'components/Reveal/Reveal';
import { techStack } from 'data/techStack';
import { useLang } from 'contexts/LanguageContext';
import styles from './About.module.css';

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t.about.section}</div>
          <div className="sec-title">
            {t.about.title} <em>{t.about.titleEm}</em>
          </div>
          <div className="sec-bar" />
        </Reveal>

        <div className={styles.grid}>
          <Reveal delay={1}>
            <CharacterCard />
          </Reveal>

          <Reveal delay={2} className={styles.bio}>
            <h2>
              {t.about.heading1}
              <br />
              <em>{t.about.heading2}</em>
            </h2>
            <p>{t.about.bio}</p>
            <p></p>
            <div className={styles.stackSection}>
              <div className={styles.stackLabel}>{t.about.techStackLabel}</div>
              <div className={styles.tagCloud}>
                {techStack.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { CharacterCard } from 'components/CharacterCard/CharacterCard';
import { Inventory } from 'components/Inventory/Inventory';
import { Reveal } from 'components/Reveal/Reveal';
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

        <Reveal delay={1} className={styles.intro}>
          <h2>
            {t.about.heading1}
            <br />
            <em>{t.about.heading2}</em>
          </h2>
          <p>{t.about.bio}</p>
        </Reveal>

        {/* character and bag side by side, same height */}
        <div className={styles.row}>
          <Reveal delay={2} className={styles.cell}>
            <CharacterCard />
          </Reveal>
          <Reveal delay={3} className={styles.cell}>
            <Inventory />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { CharacterCard } from 'components/CharacterCard/CharacterCard';
import { Inventory } from 'components/Inventory/Inventory';
import { WindowHead } from 'components/WindowHead/WindowHead';
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

        {/* one status screen: the character on the left, the bag on the right */}
        <Reveal delay={2} className={styles.window}>
          <WindowHead url="beatriz.dev/status" />
          <div className={styles.panes}>
            <div className={styles.pane}>
              <CharacterCard />
            </div>
            <div className={styles.pane}>
              <Inventory />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

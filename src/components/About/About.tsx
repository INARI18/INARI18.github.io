import { CharacterCard } from 'components/CharacterCard/CharacterCard';
import { Reveal } from 'components/Reveal/Reveal';
import { techStack } from 'data/techStack';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">// SECTION 01</div>
          <div className="sec-title">
            About <em>Me</em>
          </div>
          <div className="sec-bar" />
        </Reveal>

        <div className={styles.grid}>
          <Reveal delay={1}>
            <CharacterCard />
          </Reveal>

          <Reveal delay={2} className={styles.bio}>
            <h2>
              Cybersecurity researcher &amp;<br />
              <em>full-stack developer.</em>
            </h2>
            <p>
              I&apos;m a Computer Science student at UNIPAMPA, researching how
              LLMs can extract and anonymize data from real cybersecurity
              incidents. Co-author of two published papers — one awarded 2nd
              Best Paper at WRSEG 2025.
            </p>
            <p>
              On the dev side, I build full-stack web apps with Next.js,
              TypeScript and Firebase/MongoDB for research groups at my
              university. I care about clean code, accessibility, and turning
              complex problems into interfaces people actually want to use.
            </p>
            <p>📍 Alegrete, RS · Open to research &amp; dev opportunities.</p>

            <div className={styles.stackSection}>
              <div className={styles.stackLabel}>// TECH STACK</div>
              <div className={styles.tagCloud}>
                {techStack.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
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

import { useTypewriter } from 'hooks/useTypewriter';
import { roles } from 'data/roles';
import { GhostSprite } from 'components/GhostSprite/GhostSprite';
import styles from './Hero.module.css';

export function Hero() {
  const text = useTypewriter(roles);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.badge}>PLAYER ONE READY</div>
        <h1 className={styles.name}>
          Hi, I&apos;m <em>Beatriz Machado</em>
        </h1>
        <div className={styles.typewriter}>
          <span>{text}</span>
          <span className={styles.cursor}>_</span>
        </div>
        <p className={styles.desc}>
          Computer Science student and cybersecurity researcher building
          full-stack apps and LLM-powered tools for real-world security
          problems — one commit at a time.
        </p>
        <div className={styles.buttons}>
          <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
            ▶ VIEW PROJECTS
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.ghost}`}>
            CONTACT ME
          </a>
        </div>
      </div>

      <GhostSprite />
    </section>
  );
}

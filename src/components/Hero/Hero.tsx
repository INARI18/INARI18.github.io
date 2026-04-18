import { useEffect, useState } from "react";
import { useTypewriter } from "hooks/useTypewriter";
import { roles } from "data/roles";
import { badges } from "data/badges";
import { RetroMug } from "components/RetroMug/RetroMug";
import styles from "./Hero.module.css";

export function Hero() {
  const text = useTypewriter(roles);
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
        <div className={styles.badge}>{badges[badgeIdx]}</div>
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
          problems.
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

      <RetroMug />
    </section>
  );
}

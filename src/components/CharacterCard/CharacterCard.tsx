import { useState } from "react";
import { stats } from "data/stats";
import { socials } from "data/socials";
import { roles } from "data/roles";
import styles from "./CharacterCard.module.css";

const SEG_COUNT = 10;

export function CharacterCard() {
  const [roleIdx, setRoleIdx] = useState(0);

  const cycleRole = (dir: 1 | -1) =>
    setRoleIdx((i) => (i + dir + roles.length) % roles.length);

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <span className={styles.headUrl}>beatriz.dev/character</span>
        <div className={styles.headBtns} aria-hidden="true">
          <span className={styles.headBtn}>_</span>
          <span className={styles.headBtn}>□</span>
          <span className={styles.headBtn}>×</span>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.leftCol}>
          <div className={styles.stats}>
            {stats.map((s) => {
              const filled = Math.round((s.value / 100) * SEG_COUNT);
              return (
                <div key={s.label} className={styles.statRow}>
                  <span className={styles.statLabel}>{s.label}</span>
                  <div
                    className={styles.segments}
                    role="meter"
                    aria-label={s.label}
                    aria-valuenow={s.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {Array.from({ length: SEG_COUNT }).map((_, i) => (
                      <span
                        key={i}
                        className={`${styles.seg}${
                          i < filled ? ` ${styles.segOn}` : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.avatarFrame}>
            <img
              src="/avatar.jpg"
              alt="Beatriz Machado"
              className={styles.avatarImg}
            />
          </div>
          <div className={styles.selector}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => cycleRole(-1)}
              aria-label="Previous role"
            >
              ◀
            </button>
            <span className={styles.selText} title={roles[roleIdx]}>
              {roles[roleIdx]}
            </span>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => cycleRole(1)}
              aria-label="Next role"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      <div className={styles.socials}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} className={styles.socBtn}>
            {s.label}
          </a>
        ))}
      </div>

      <div className={styles.namePicker}>
        <span className={styles.nameArrow} aria-hidden="true">
          ◀
        </span>
        <span className={styles.nameText}>Beatriz Machado</span>
        <span className={styles.nameArrow} aria-hidden="true">
          ▶
        </span>
      </div>
    </div>
  );
}

import { useState } from "react";
import { stats } from "data/stats";
import { socials } from "data/socials";
import { roles } from "data/roles";
import { useLang } from "contexts/LanguageContext";
import styles from "./CharacterCard.module.css";

const SEG_COUNT = 10;

const poses = ["/cafe-pose.png", "/cat-pose.png", "/videogame-pose.png"];

export function CharacterCard() {
  const { t, tr } = useLang();
  const [roleIdx, setRoleIdx] = useState(0);
  const [poseIdx, setPoseIdx] = useState(0);

  const cycleRole = (dir: 1 | -1) =>
    setRoleIdx((i) => (i + dir + roles.length) % roles.length);

  const cyclePose = (dir: 1 | -1) =>
    setPoseIdx((i) => (i + dir + poses.length) % poses.length);

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
              const label = tr(s.label);
              return (
                <div key={label} className={styles.statRow}>
                  <span className={styles.statLabel}>{label}</span>
                  <div
                    className={styles.segments}
                    role="meter"
                    aria-label={label}
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
            <div className={styles.avatarGlow} aria-hidden="true" />
            <div className={styles.pedestal} aria-hidden="true" />
            <img
              key={poseIdx}
              src={poses[poseIdx]}
              alt="Beatriz Machado"
              className={styles.avatarImg}
            />
          </div>
          <div className={styles.selector}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => cycleRole(-1)}
              aria-label={t.character.previousRole}
            >
              ◀
            </button>
            <span className={styles.selText} title={tr(roles[roleIdx])}>
              {tr(roles[roleIdx])}
            </span>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => cycleRole(1)}
              aria-label={t.character.nextRole}
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
        <button
          type="button"
          className={styles.nameArrow}
          onClick={() => cyclePose(-1)}
          aria-label={t.character.previousPose}
        >
          ◀
        </button>
        <div className={styles.poseDots} aria-hidden="true">
          {poses.map((_, i) => (
            <span
              key={i}
              className={`${styles.poseDot}${
                i === poseIdx ? ` ${styles.poseDotOn}` : ""
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.nameArrow}
          onClick={() => cyclePose(1)}
          aria-label={t.character.nextPose}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

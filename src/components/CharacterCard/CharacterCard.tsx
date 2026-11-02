import { useState } from "react";
import cafePose from "assets/poses/cafe-pose.png";
import catPose from "assets/poses/cat-pose.png";
import videogamePose from "assets/poses/videogame-pose.png";
import { socials } from "data/socials";
import { roles } from "data/roles";
import { since, awards } from "data/character";
import { PixelIcon } from "components/PixelIcon/PixelIcon";
import { WindowHead } from "components/WindowHead/WindowHead";
import { useLang } from "contexts/LanguageContext";
import styles from "./CharacterCard.module.css";

// one pose per class, same order as data/roles
const poses = [cafePose, catPose, videogamePose];

/** Trainer card: identity and badges. Facts only, no self-scored stats. */
export function CharacterCard() {
  const { t, tr } = useLang();
  const [roleIdx, setRoleIdx] = useState(0);

  const cycleRole = (dir: 1 | -1) =>
    setRoleIdx((i) => (i + dir + roles.length) % roles.length);

  return (
    <div className={styles.card}>
      <WindowHead url="beatriz.dev/character" />

      <div className={styles.body}>
        <dl className={styles.fields}>
          <div className={styles.field}>
            <dt className={styles.fieldLabel}>{t.character.name}</dt>
            <dd className={styles.fieldValue}>Beatriz Machado</dd>
          </div>

          <div className={styles.field}>
            <dt className={styles.fieldLabel}>{t.character.class}</dt>
            <dd className={styles.selector}>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => cycleRole(-1)}
                aria-label={t.character.previousRole}
              >
                ◀
              </button>
              <span className={styles.selText} aria-live="polite">
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
            </dd>
          </div>

          <div className={styles.field}>
            <dt className={styles.fieldLabel}>{t.character.since}</dt>
            <dd className={styles.fieldValue}>{since}</dd>
          </div>

          <div className={styles.field}>
            <dt className={styles.fieldLabel}>{t.character.badges}</dt>
            <dd className={styles.badges}>
              {awards.map((a) => {
                const inner = (
                  <>
                    <PixelIcon name={a.icon} className={styles.badgeIcon} />
                    {a.short}
                  </>
                );
                return a.href ? (
                  <a
                    key={a.short}
                    className={styles.badge}
                    href={a.href}
                    target="_blank"
                    rel="noreferrer"
                    title={tr(a.label)}
                    aria-label={tr(a.label)}
                  >
                    {inner}
                  </a>
                ) : (
                  <span key={a.short} className={styles.badge} title={tr(a.label)}>
                    {inner}
                  </span>
                );
              })}
            </dd>
          </div>
        </dl>

        <div className={styles.avatarFrame}>
          <div className={styles.avatarGlow} aria-hidden="true" />
          <div className={styles.pedestal} aria-hidden="true" />
          <img
            key={roleIdx}
            src={poses[roleIdx]}
            alt="Beatriz Machado"
            className={styles.avatarImg}
          />
        </div>
      </div>

      <div className={styles.socials}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} className={styles.socBtn}>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

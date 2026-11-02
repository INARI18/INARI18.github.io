import { useState } from 'react';
import { quests, QUEST_START } from 'data/quests';
import { Reveal } from 'components/Reveal/Reveal';
import { PixelIcon } from 'components/PixelIcon/PixelIcon';
import { openProject } from 'components/Projects/openProject';
import { useLang } from 'contexts/LanguageContext';
import styles from './QuestPath.module.css';

const pad = (n: number) => String(n).padStart(2, '0');

/** Experience as a level-select map: checkpoints on a dashed path, the selected one opens its quest log. */
export function QuestPath() {
  const { t, tr } = useLang();
  const [selected, setSelected] = useState(quests.length - 1);
  const q = quests[selected];

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t.experience.section}</div>
          <div className="sec-title">
            <em>{t.experience.titleEm}</em>
          </div>
          <div className="sec-bar" />
        </Reveal>

        <Reveal delay={1} className={styles.wrap}>
          <ol className={styles.path}>
            <li className={styles.start}>
              <span className={styles.startMark} aria-hidden="true">
                <PixelIcon name="flag" />
              </span>
              <span className={styles.startLabel}>
                {t.experience.start} · {QUEST_START}
              </span>
            </li>
            {quests.map((quest, i) => {
              const active = i === selected;
              return (
                <li
                  key={tr(quest.title) + i}
                  className={`${styles.stop} ${i % 2 ? styles.below : styles.above}`}
                >
                  <button
                    type="button"
                    className={`${styles.node}${active ? ` ${styles.nodeActive}` : ''}`}
                    onClick={() => setSelected(i)}
                    aria-pressed={active}
                    aria-label={t.experience.select(tr(quest.title))}
                  >
                    <span className={styles.diamond} aria-hidden="true" />
                    <span className={styles.cursor} aria-hidden="true">
                      ▼
                    </span>
                    <span className={styles.label}>
                      <span className={styles.period}>{tr(quest.period)}</span>
                      <span className={styles.name}>{tr(quest.title)}</span>
                      <span className={styles.org}>{tr(quest.org)}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <article key={selected} className={styles.log} aria-live="polite">
            <header className={styles.logHead}>
              <span className={styles.logTag}>{t.experience.log}</span>
              <span className={styles.counter}>
                {pad(selected + 1)} / {pad(quests.length)}
              </span>
            </header>
            <h3 className={styles.title}>{tr(q.title)}</h3>
            <div className={styles.meta}>
              {tr(q.org)} · {tr(q.period)}
            </div>
            <p className={styles.desc}>{tr(q.desc)}</p>

            <div className={styles.row}>
              <div className={styles.block}>
                <div className={styles.blockLabel}>{t.experience.techUsed}</div>
                <div className={styles.chips}>
                  {q.tech.map((tech) => (
                    <span key={tech} className={styles.chip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {q.reward && (
                <div className={`${styles.block} ${styles.reward}`}>
                  <div className={styles.blockLabel}>{t.experience.reward}</div>
                  <div className={styles.rewardText}>
                    <PixelIcon name="trophy" className={styles.rewardIcon} />
                    {tr(q.reward)}
                  </div>
                </div>
              )}
            </div>

            {q.projects && (
              <div className={styles.links}>
                {q.projects.map((title) => (
                  <button
                    key={title}
                    type="button"
                    className={styles.link}
                    onClick={() => openProject(title)}
                  >
                    {t.experience.viewProject(title)}
                  </button>
                ))}
              </div>
            )}
          </article>
        </Reveal>
      </div>
    </section>
  );
}

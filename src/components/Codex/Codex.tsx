import { useState, type KeyboardEvent } from 'react';
import type { PublicationIcon } from 'types';
import { publications } from 'data/publications';
import { Reveal } from 'components/Reveal/Reveal';
import { PixelIcon } from 'components/PixelIcon/PixelIcon';
import { TechIcon } from 'components/Inventory/TechIcon';
import { CODEX_ICONS } from './codexIcons';
import { openProject } from 'components/Projects/openProject';
import { useLang } from 'contexts/LanguageContext';
import styles from './Codex.module.css';

const pad = (n: number) => String(n).padStart(2, '0');

function EntryIcon({ icon, size }: { icon: PublicationIcon; size: number }) {
  if (icon === 'shield') return <PixelIcon name="shield" className={styles.pixelIcon} />;
  if (icon === 'whale') return <TechIcon name="Docker" size={size} />;
  if (icon === 'robot') return <TechIcon name="LLMs" size={size} />;
  return <TechIcon rows={CODEX_ICONS[icon]} size={size} />;
}

/** Publications as a codex: the left page lists the entries, the right page shows the selected one. */
export function Codex() {
  const { t, tr } = useLang();
  const [selected, setSelected] = useState(0);
  const p = publications[selected];
  const total = publications.length;

  const onKeyDown = (e: KeyboardEvent<HTMLOListElement>) => {
    if (e.key === 'ArrowDown') setSelected((i) => Math.min(total - 1, i + 1));
    else if (e.key === 'ArrowUp') setSelected((i) => Math.max(0, i - 1));
    else return;
    e.preventDefault();
  };

  return (
    <section id="publications" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t.publications.section}</div>
          <div className="sec-title">
            {t.publications.title} <em>{t.publications.titleEm}</em>
          </div>
          <div className="sec-bar" />
          <p className={styles.hint}>{t.publications.hint}</p>
        </Reveal>

        <Reveal delay={1} className={styles.book}>
          {/* ---- left page: the index ---- */}
          <div className={`${styles.page} ${styles.left}`}>
            <div className={styles.pageHead}>
              <span>{t.publications.codex}</span>
              <span className={styles.count}>
                {pad(total)} / {pad(total)}
              </span>
            </div>
            <ol className={styles.entries} onKeyDown={onKeyDown}>
              {publications.map((pub, i) => {
                const active = i === selected;
                return (
                  <li key={pub.title}>
                    <button
                      type="button"
                      className={`${styles.entry}${active ? ` ${styles.entryActive}` : ''}`}
                      onClick={() => setSelected(i)}
                      aria-pressed={active}
                      aria-label={t.publications.select(pub.title)}
                    >
                      <span className={styles.cursor} aria-hidden="true">
                        ▶
                      </span>
                      <span className={styles.no}>{pad(i + 1)}</span>
                      <span className={styles.entryIcon}>
                        <EntryIcon icon={pub.icon} size={20} />
                      </span>
                      <span className={styles.short}>{pub.short}</span>
                      <span className={styles.entryYear}>{pub.year}</span>
                      {pub.award && (
                        <PixelIcon name="trophy" className={styles.entryTrophy} />
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className={styles.spine} aria-hidden="true" />

          {/* ---- right page: the selected entry ---- */}
          <article key={selected} className={`${styles.page} ${styles.right}`} aria-live="polite">
            <div className={styles.pageHead}>
              <span>
                {t.publications.entry} {pad(selected + 1)}
              </span>
              <span className={styles.count}>{p.year}</span>
            </div>

            <div className={styles.portrait}>
              <EntryIcon icon={p.icon} size={40} />
            </div>

            <h3 className={styles.title}>{p.title}</h3>
            <div className={styles.meta}>{p.venue}</div>

            {p.award && (
              <div className={styles.seal}>
                <PixelIcon name="trophy" className={styles.sealIcon} />
                <span>
                  <span className={styles.sealLabel}>{t.publications.award}</span>
                  {tr(p.award)} · {p.venue}
                </span>
              </div>
            )}

            <div className={styles.blockLabel}>{t.publications.abstract}</div>
            <p className={styles.abstract}>{tr(p.desc)}</p>

            <div className={styles.tags}>
              {p.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.actions}>
              {p.link && p.link !== '#' ? (
                <a
                  className={styles.read}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t.publications.read}: ${p.title}`}
                >
                  {t.publications.read}
                </a>
              ) : (
                <span className={styles.soon}>{t.publications.soon}</span>
              )}
              {p.project && (
                <button
                  type="button"
                  className={styles.project}
                  onClick={() => openProject(p.project!)}
                  aria-label={`${t.publications.viewProject}: ${p.project}`}
                >
                  {t.publications.viewProject}
                </button>
              )}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

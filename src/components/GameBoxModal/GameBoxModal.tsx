import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from 'react';
import type { Project } from 'types';
import { useLang } from 'contexts/LanguageContext';
import { Cover } from 'components/GameBox/Cover';
import { PixelIcon } from 'components/PixelIcon/PixelIcon';
import styles from './GameBoxModal.module.css';

type Props = {
  project: Project | null;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const pad = (n: number) => String(n).padStart(2, '0');

/** The clicked game case, opened: cover on the left, back cover with the details on the right. */
export function GameBoxModal({
  project,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const { t, tr } = useLang();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const onBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === ref.current) onClose();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'ArrowRight') onNext();
    else if (e.key === 'ArrowLeft') onPrev();
  };

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      onClose={onClose}
      onClick={onBackdropClick}
      onKeyDown={onKeyDown}
      aria-label={project?.title}
    >
      {project && (
        <div className={styles.case}>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label={t.projects.close}
          >
            ✕
          </button>

          <div className={styles.front}>
            <Cover project={project} />
          </div>

          <div className={styles.hinge} aria-hidden="true">
            <span>{project.title}</span>
          </div>

          <div key={project.title} className={styles.back}>
            {project.gallery && (
              <div className={styles.gallery}>
                {project.gallery.map((src, i) => (
                  <a
                    key={src}
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.thumb}
                  >
                    <img src={src} alt={`${project.title} screenshot ${i + 1}`} />
                  </a>
                ))}
              </div>
            )}

            <div className={styles.backBody}>
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.meta}>
                {project.year} · {t.projects.category[project.category]}
              </div>
              {project.org && <div className={styles.org}>{tr(project.org)}</div>}
              <p className={styles.desc}>{tr(project.desc)}</p>
              {project.details && (
                <p className={styles.details}>{tr(project.details)}</p>
              )}

              {project.result && (
                <div className={styles.result}>
                  <PixelIcon name="trophy" className={styles.resultIcon} />
                  <span>
                    <span className={styles.resultLabel}>{t.projects.result}</span>
                    {tr(project.result)}
                  </span>
                </div>
              )}

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                {project.links.map((l) => (
                  <a
                    key={l.kind}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.link} ${l.kind === 'code' ? styles.linkGhost : ''}`}
                  >
                    {t.projects.link[l.kind]}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.backFoot}>
              <span className={styles.barcode} aria-hidden="true" />
              <span className={styles.footMeta}>
                {project.year} · {t.projects.category[project.category]}
              </span>
              <span className={styles.nav}>
                <button
                  type="button"
                  className={styles.navBtn}
                  onClick={onPrev}
                  aria-label={t.projects.prev}
                >
                  {t.projects.prev}
                </button>
                <span className={styles.counter}>
                  {pad(index + 1)} / {pad(total)}
                </span>
                <button
                  type="button"
                  className={styles.navBtn}
                  onClick={onNext}
                  aria-label={t.projects.next}
                >
                  {t.projects.next}
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

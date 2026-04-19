import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useLang } from 'contexts/LanguageContext';
import styles from './DialogBox.module.css';

type Option = {
  label: string;
  dialog: string;
  info: ReactNode;
};

export function DialogBox() {
  const { t } = useLang();
  const [hovered, setHovered] = useState(-1);
  const [revealed, setRevealed] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);

  const OPTIONS = useMemo<Option[]>(
    () => [
      {
        label: t.dialog.email.label,
        dialog: t.dialog.email.flavor,
        info: (
          <>
            <p className={styles.dialogText}>{t.dialog.email.prompt}</p>
            <a
              className={styles.infoLink}
              href="mailto:beatrizrolandmachado@gmail.com"
            >
              beatrizrolandmachado@gmail.com
            </a>
          </>
        ),
      },
      {
        label: t.dialog.github.label,
        dialog: t.dialog.github.flavor,
        info: (
          <>
            <p className={styles.dialogText}>{t.dialog.github.prompt}</p>
            <a
              className={styles.infoLink}
              href="https://github.com/INARI18"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/INARI18
            </a>
          </>
        ),
      },
      {
        label: t.dialog.linkedin.label,
        dialog: t.dialog.linkedin.flavor,
        info: (
          <>
            <p className={styles.dialogText}>{t.dialog.linkedin.prompt}</p>
            <a
              className={styles.infoLink}
              href="https://www.linkedin.com/in/beatriz18/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/beatriz18
            </a>
          </>
        ),
      },
      {
        label: t.dialog.cv.label,
        dialog: t.dialog.cv.flavor,
        info: <p className={styles.dialogText}>{t.dialog.cv.soon}</p>,
      },
    ],
    [t],
  );

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === 'arrowdown' || k === 's') {
        e.preventDefault();
        setHovered((i) => (i < 0 ? 0 : (i + 1) % OPTIONS.length));
      } else if (k === 'arrowup' || k === 'w') {
        e.preventDefault();
        setHovered((i) =>
          i < 0
            ? OPTIONS.length - 1
            : (i - 1 + OPTIONS.length) % OPTIONS.length,
        );
      } else if (k === 'enter' || k === ' ') {
        e.preventDefault();
        if (hovered >= 0) setRevealed(hovered);
      }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [hovered, OPTIONS.length]);

  const showFlavor = hovered >= 0 && hovered !== revealed;
  const content = showFlavor ? (
    <p className={styles.dialogText}>{OPTIONS[hovered].dialog}</p>
  ) : revealed >= 0 ? (
    OPTIONS[revealed].info
  ) : (
    <p className={styles.dialogText}>{t.dialog.defaultText}</p>
  );

  return (
    <div
      ref={boxRef}
      className={styles.box}
      tabIndex={0}
      role="menu"
      aria-label={t.dialog.menuLabel}
    >
      <div className={styles.left}>{content}</div>

      <div className={styles.right}>
        {OPTIONS.map((opt, i) => {
          const isActive = showFlavor ? i === hovered : i === revealed;
          return (
            <button
              key={opt.label}
              type="button"
              role="menuitem"
              className={`${styles.option} ${isActive ? styles.optionActive : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(-1)}
              onClick={() => setRevealed(i)}
              tabIndex={-1}
            >
              <span className={styles.cursor} aria-hidden="true">
                {isActive ? '♥' : ''}
              </span>
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className={styles.hint} aria-hidden="true">
        ↑↓ · ENTER
      </div>
    </div>
  );
}

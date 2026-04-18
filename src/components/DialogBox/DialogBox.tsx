import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './DialogBox.module.css';

type Option = {
  label: string;
  dialog: string;
  info: ReactNode;
};

const DEFAULT_DIALOG =
  '* Hi! Thanks for stopping by.\n* What would you like to do?';

const OPTIONS: Option[] = [
  {
    label: 'Email',
    dialog: '* Drop a line — I read every email I get.',
    info: (
      <>
        <p className={styles.dialogText}>* Send me a message at:</p>
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
    label: 'GitHub',
    dialog: '* Take a peek at my code & projects.',
    info: (
      <>
        <p className={styles.dialogText}>* Find my code at:</p>
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
    label: 'LinkedIn',
    dialog: "* Let's connect professionally.",
    info: (
      <>
        <p className={styles.dialogText}>* Connect with me at:</p>
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
    label: 'CV',
    dialog: '* Grab a copy of my resume.',
    info: <p className={styles.dialogText}>* CV link coming soon!</p>,
  },
];

export function DialogBox() {
  const [hovered, setHovered] = useState(-1);
  const [revealed, setRevealed] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);

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
  }, [hovered]);

  const showFlavor = hovered >= 0 && hovered !== revealed;
  const content = showFlavor ? (
    <p className={styles.dialogText}>{OPTIONS[hovered].dialog}</p>
  ) : revealed >= 0 ? (
    OPTIONS[revealed].info
  ) : (
    <p className={styles.dialogText}>{DEFAULT_DIALOG}</p>
  );

  return (
    <div
      ref={boxRef}
      className={styles.box}
      tabIndex={0}
      role="menu"
      aria-label="Contact options"
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

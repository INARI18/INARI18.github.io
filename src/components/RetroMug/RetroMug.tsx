import { useEffect, useState } from 'react';
import { useLang } from 'contexts/LanguageContext';
import styles from './RetroMug.module.css';

// Classic space invader pattern (11 cols × 8 rows)
const INVADER = [
  '00100000100',
  '00010001000',
  '00111111100',
  '01101110110',
  '11111111111',
  '10111111101',
  '10100000101',
  '00011011000',
];

const CELL = 6;
const INV_X = 47;
const INV_Y = 86;

// mug interior: x 28..132, y 64..152 (the strip at y=64 is the rim line)
const INNER_TOP = 70;
const INNER_BOTTOM = 152;
const LEVELS = [0, 28, 56, INNER_BOTTOM - INNER_TOP]; // coffee height per level
const FULL = LEVELS.length - 1;
const COOL_MS = 20_000; // one level lost every 20s
const OVERFLOW_MS = 1400;
const STORAGE_KEY = 'portfolio.coffee';

function today() {
  return new Date().toISOString().slice(0, 10);
}

function loadCups(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const saved = JSON.parse(raw) as { date: string; cups: number };
    return saved.date === today() ? saved.cups : 0;
  } catch {
    return 0;
  }
}

export function RetroMug() {
  const { t } = useLang();
  const [level, setLevel] = useState(0);
  const [cups, setCups] = useState(loadCups);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    if (level === 0) return;
    const id = setTimeout(() => setLevel((l) => l - 1), COOL_MS);
    return () => clearTimeout(id);
  }, [level]);

  const fill = () => {
    if (level === FULL) {
      // already full: it spills, and spilled coffee does not count
      setOverflow(true);
      setTimeout(() => setOverflow(false), OVERFLOW_MS);
      return;
    }
    setLevel(FULL);
    setCups((c) => {
      const next = c + 1;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: today(), cups: next }));
      } catch {
        /* storage unavailable: count just does not persist */
      }
      return next;
    });
  };

  const coffeeH = LEVELS[level];
  const hot = level > 0;

  const invaderRects = INVADER.flatMap((row, y) =>
    row.split('').map((c, x) =>
      c === '1' ? (
        <rect
          key={`${x}-${y}`}
          x={INV_X + x * CELL}
          y={INV_Y + y * CELL}
          width={CELL}
          height={CELL}
          fill="var(--accent)"
        />
      ) : null,
    ),
  );

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={`${styles.btn} ${overflow ? styles.shake : ''}`}
        onClick={fill}
        aria-label={t.hero.fillMug}
        title={t.hero.fillMug}
      >
        <svg
          className={styles.svg}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* ====== STEAM (only while the coffee is hot) ====== */}
          <g className={`${styles.steamGroup} ${hot ? styles.steamOn : ''}`}>
            <g className={`${styles.steam} ${styles.steam1}`}>
              <rect x="56" y="32" width="6" height="6" fill="var(--text)" />
              <rect x="50" y="26" width="6" height="6" fill="var(--text)" />
              <rect x="56" y="20" width="6" height="6" fill="var(--text)" />
            </g>
            <g className={`${styles.steam} ${styles.steam2}`}>
              <rect x="92" y="28" width="6" height="6" fill="var(--text)" />
              <rect x="86" y="22" width="6" height="6" fill="var(--text)" />
              <rect x="92" y="16" width="6" height="6" fill="var(--text)" />
            </g>
            <g className={`${styles.steam} ${styles.steam3}`}>
              <rect x="122" y="32" width="6" height="6" fill="var(--text)" />
              <rect x="116" y="26" width="6" height="6" fill="var(--text)" />
              <rect x="122" y="20" width="6" height="6" fill="var(--text)" />
            </g>
          </g>

          {/* ====== COFFEE (fills from the bottom) ====== */}
          <rect
            className={styles.coffee}
            x="28"
            y={INNER_BOTTOM - coffeeH}
            width="104"
            height={coffeeH}
            fill="var(--rose-deep)"
          />

          {/* ====== MUG BODY (outline only) ====== */}
          <rect
            x="22"
            y="58"
            width="116"
            height="100"
            fill="none"
            stroke="var(--text)"
            strokeWidth="6"
          />

          {/* rim strip */}
          <rect x="28" y="64" width="104" height="6" fill="var(--accent)" />

          {/* ====== HANDLE (outline only) ====== */}
          <rect
            x="138"
            y="84"
            width="38"
            height="48"
            fill="none"
            stroke="var(--text)"
            strokeWidth="6"
          />

          {/* ====== INVADER DECAL (filled) ====== */}
          {invaderRects}

          {/* ====== SPILL: drips down the right side and a puddle at the base ====== */}
          {overflow && (
            <g className={styles.spill}>
              <rect className={styles.drip1} x="126" y="58" width="6" height="6" fill="var(--rose-deep)" />
              <rect className={styles.drip2} x="102" y="58" width="6" height="6" fill="var(--rose-deep)" />
              <rect className={styles.drip3} x="140" y="58" width="6" height="6" fill="var(--rose-deep)" />
              <rect className={styles.puddle} x="100" y="160" width="0" height="6" fill="var(--rose-deep)" />
            </g>
          )}
        </svg>
      </button>
      <div className={styles.counter} aria-live="polite">
        {overflow ? t.hero.overflow : t.hero.coffees(cups)}
      </div>
    </div>
  );
}

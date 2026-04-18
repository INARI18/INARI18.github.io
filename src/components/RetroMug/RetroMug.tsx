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

export function RetroMug() {
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
    <div className={styles.wrap} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ====== STEAM ====== */}
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

        {/* Coffee thin strip at top */}
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
      </svg>
    </div>
  );
}

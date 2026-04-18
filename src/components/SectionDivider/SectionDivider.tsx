import styles from './SectionDivider.module.css';

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

const CELL = 3;

export function SectionDivider() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <span className={styles.line} />
      <svg
        className={styles.invader}
        width={INVADER[0].length * CELL}
        height={INVADER.length * CELL}
        viewBox={`0 0 ${INVADER[0].length * CELL} ${INVADER.length * CELL}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {INVADER.flatMap((row, y) =>
          row.split('').map((c, x) =>
            c === '1' ? (
              <rect
                key={`${x}-${y}`}
                x={x * CELL}
                y={y * CELL}
                width={CELL}
                height={CELL}
                fill="currentColor"
              />
            ) : null,
          ),
        )}
      </svg>
      <span className={styles.line} />
    </div>
  );
}

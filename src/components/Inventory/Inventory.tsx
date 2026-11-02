import { useState } from 'react';
import { techStack } from 'data/techStack';
import { useLang } from 'contexts/LanguageContext';
import { TECH_ICONS } from './techIcons';
import styles from './Inventory.module.css';

const CAPACITY = 16;
const bag = techStack;
const pad = (n: number) => String(n).padStart(2, '0');

// grid characters: X = accent, x = darker shade, o = neutral (stems, metal)
const SHADES: Record<string, string> = {
  X: 'currentColor',
  x: 'var(--rose)',
  Y: 'var(--rose-pale)',
  o: 'var(--text-muted)',
};

function TechIcon({ name }: { name: string }) {
  const rows = TECH_ICONS[name];
  if (!rows) return <span className={styles.fallback}>{name[0]}</span>;
  return (
    <svg viewBox={`0 0 ${rows.length} ${rows.length}`} className={`${styles.icon}${rows.length > 16 ? ` ${styles.iconFine}` : ''}`} aria-hidden="true" shapeRendering="crispEdges">
      {rows.flatMap((row, y) =>
        [...row].map((c, x) =>
          c in SHADES ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={SHADES[c]} /> : null,
        ),
      )}
    </svg>
  );
}

/** Stardew-style bag grid for the tech stack, with a few empty slots to close the last row. */
export function Inventory() {
  const { t } = useLang();
  // the item that was just clicked does a little squash-and-stretch hop
  const [used, setUsed] = useState<string | null>(null);
  const use = (item: string) => {
    setUsed(null);
    requestAnimationFrame(() => setUsed(item));
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.labelRow}>
        <span className={styles.label}>{t.character.inventory}</span>
        <span className={styles.count}>
          {pad(bag.length)} / {pad(CAPACITY)}
        </span>
      </div>
      <ul className={styles.bag}>
        {bag.map((item) => (
          <li key={item} className={styles.cell}>
            <button
              type="button"
              className={`${styles.slot}${used === item ? ` ${styles.used}` : ''}`}
              title={item}
              onClick={() => use(item)}
              onAnimationEnd={() => setUsed(null)}
            >
              <span className={styles.itemName}>{item}</span>
              <TechIcon name={item} />
            </button>
          </li>
        ))}
        {Array.from({ length: Math.max(0, CAPACITY - bag.length) }).map((_, i) => (
          <li key={`empty-${i}`} className={`${styles.slot} ${styles.empty}`} aria-hidden="true" />
        ))}
      </ul>
    </div>
  );
}

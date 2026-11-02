import { techStack } from 'data/techStack';
import { useLang } from 'contexts/LanguageContext';
import { TECH_ICONS } from './techIcons';
import styles from './Inventory.module.css';

const CAPACITY = 16;
const bag = techStack;
const pad = (n: number) => String(n).padStart(2, '0');

function TechIcon({ name }: { name: string }) {
  const rows = TECH_ICONS[name];
  if (!rows) return <span className={styles.fallback}>{name[0]}</span>;
  return (
    <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden="true" shapeRendering="crispEdges">
      {rows.flatMap((row, y) =>
        [...row].map((c, x) =>
          c === 'X' ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" /> : null,
        ),
      )}
    </svg>
  );
}

/** Stardew-style bag grid for the tech stack, with a few empty slots to close the last row. */
export function Inventory() {
  const { t } = useLang();
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
          <li key={item} className={styles.slot} title={item}>
            <span className={styles.itemName}>{item}</span>
            <TechIcon name={item} />
          </li>
        ))}
        {Array.from({ length: Math.max(0, CAPACITY - bag.length) }).map((_, i) => (
          <li key={`empty-${i}`} className={`${styles.slot} ${styles.empty}`} aria-hidden="true" />
        ))}
      </ul>
    </div>
  );
}

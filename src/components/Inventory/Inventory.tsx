import { techStack } from 'data/techStack';
import { equipped } from 'data/character';
import { useLang } from 'contexts/LanguageContext';
import { TECH_ICONS } from './techIcons';
import styles from './Inventory.module.css';

const CAPACITY = 16;
const bag = techStack.filter((item) => !equipped.some((e) => e.item === item));
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

/** Equipment screen: three equipped slots and a Stardew-style bag grid for the rest of the stack. */
export function Inventory() {
  const { t, tr } = useLang();
  return (
    <div className={styles.wrap}>
      <div className={styles.label}>{t.character.equipped}</div>
      <ul className={styles.equipped}>
        {equipped.map((e) => (
          <li key={e.item} className={`${styles.slot} ${styles.slotBig}`} title={e.item}>
            <span className={styles.slotName}>{tr(e.slot)}</span>
            <TechIcon name={e.item} />
            <span className={styles.itemName}>{e.item}</span>
          </li>
        ))}
      </ul>

      <div className={styles.labelRow}>
        <span className={styles.label}>{t.character.inventory}</span>
        <span className={styles.count}>
          {pad(bag.length)} / {pad(CAPACITY)}
        </span>
      </div>
      <ul className={styles.bag}>
        {bag.map((item) => (
          <li key={item} className={styles.slot} title={item}>
            <TechIcon name={item} />
            <span className={styles.itemName}>{item}</span>
          </li>
        ))}
        {Array.from({ length: Math.max(0, CAPACITY - bag.length) }).map((_, i) => (
          <li key={`empty-${i}`} className={`${styles.slot} ${styles.empty}`} aria-hidden="true" />
        ))}
      </ul>
    </div>
  );
}

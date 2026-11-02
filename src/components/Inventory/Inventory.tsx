import { useState } from 'react';
import { techStack } from 'data/techStack';
import { useLang } from 'contexts/LanguageContext';
import { TechIcon } from './TechIcon';
import styles from './Inventory.module.css';

const CAPACITY = 16;
const bag = techStack;
const pad = (n: number) => String(n).padStart(2, '0');

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
              <TechIcon name={item} size={26} className={styles.icon} />
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

import { useState, type KeyboardEvent } from 'react';
import type { TechCategory } from 'types';
import { techStack } from 'data/techStack';
import { projects } from 'data/projects';
import { openProject } from 'components/Projects/openProject';
import { useLang } from 'contexts/LanguageContext';
import { TechIcon } from './TechIcon';
import styles from './Inventory.module.css';

const CAPACITY = 16;
const CATEGORIES: TechCategory[] = ['lang', 'dev', 'infra', 'ai'];
const pad = (n: number) => String(n).padStart(2, '0');

// a project "uses" a tech when a tag is the tech name or starts with it ("React Native", "Expo Router")
const usedIn = (name: string) =>
  projects.filter((p) => p.tags.some((tag) => tag === name || tag.startsWith(`${name} `))).map((p) => p.title);

/** RPG bag: category tabs, an icon grid and an inspection sheet for the selected item. */
export function Inventory() {
  const { t, tr } = useLang();
  const [tab, setTab] = useState<TechCategory | 'all'>('all');
  const [selected, setSelected] = useState(techStack[0].name);
  // the item that was just clicked does a little squash-and-stretch hop
  const [hopping, setHopping] = useState<string | null>(null);

  const items = tab === 'all' ? techStack : techStack.filter((i) => i.category === tab);
  const item = techStack.find((i) => i.name === selected) ?? techStack[0];
  const uses = usedIn(item.name);

  const pick = (name: string) => {
    setSelected(name);
    setHopping(null);
    requestAnimationFrame(() => setHopping(name));
  };

  // a tab change moves the selection into that tab, so the sheet always matches what is shown
  const showTab = (c: TechCategory | 'all') => {
    setTab(c);
    const visible = c === 'all' ? techStack : techStack.filter((i) => i.category === c);
    if (!visible.some((i) => i.name === selected)) setSelected(visible[0].name);
  };

  const onGridKey = (e: KeyboardEvent<HTMLUListElement>) => {
    const i = items.findIndex((x) => x.name === selected);
    let next = i;
    if (e.key === 'ArrowRight') next = Math.min(items.length - 1, i + 1);
    else if (e.key === 'ArrowLeft') next = Math.max(0, i - 1);
    else return;
    e.preventDefault();
    pick(items[next].name);
  };

  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <span>{t.inventory.title}</span>
        <span className={styles.count}>
          {pad(techStack.length)} / {pad(CAPACITY)}
        </span>
      </div>

      <div className={styles.tabs} role="tablist">
        {(['all', ...CATEGORIES] as const).map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={tab === c}
            className={`${styles.tab}${tab === c ? ` ${styles.tabActive}` : ''}`}
            onClick={() => showTab(c)}
          >
            {c === 'all' ? t.inventory.all : t.inventory.category[c]}
          </button>
        ))}
      </div>

      <ul className={styles.bag} onKeyDown={onGridKey}>
        {items.map((it) => {
          const active = it.name === selected;
          return (
            <li key={it.name} className={styles.cell}>
              <button
                type="button"
                className={`${styles.slot}${active ? ` ${styles.slotActive}` : ''}${hopping === it.name ? ` ${styles.hop}` : ''}`}
                onClick={() => pick(it.name)}
                onAnimationEnd={() => setHopping(null)}
                aria-pressed={active}
                aria-label={t.inventory.select(it.name)}
              >
                <TechIcon name={it.name} size={30} className={styles.icon} />
              </button>
            </li>
          );
        })}
        {tab === 'all' &&
          Array.from({ length: Math.max(0, CAPACITY - techStack.length) }).map((_, i) => (
            <li key={`empty-${i}`} className={`${styles.slot} ${styles.empty}`} aria-hidden="true" />
          ))}
      </ul>

      <div className={styles.sheet} aria-live="polite">
        <div className={styles.portrait}>
          <TechIcon name={item.name} size={44} className={styles.icon} />
        </div>
        <div key={item.name} className={styles.sheetBody}>
          <div className={styles.sheetHead}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemCat}>{t.inventory.category[item.category]}</span>
          </div>
          {item.note && <p className={styles.note}>{tr(item.note)}</p>}
          {uses.length > 0 && (
            <div className={styles.uses}>
              <span className={styles.usesLabel}>{t.inventory.usedIn}</span>
              {uses.map((title) => (
                <button key={title} type="button" className={styles.use} onClick={() => openProject(title)}>
                  ▶ {title}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

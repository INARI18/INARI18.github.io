import { useEffect, useState } from 'react';
import { experience } from 'data/experience';
import { Reveal } from 'components/Reveal/Reveal';
import styles from './Experience.module.css';

export function Experience() {
  const [idx, setIdx] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    setFlipping(true);
    const t1 = setTimeout(() => setDisplayed(idx), 230);
    const t2 = setTimeout(() => setFlipping(false), 460);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [idx]);

  const e = experience[displayed];
  const total = experience.length;

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">// SECTION 02</div>
          <div className="sec-title">
            <em>Experience</em>
          </div>
          <div className="sec-bar" />
        </Reveal>

        <Reveal delay={1} className={styles.bookWrap}>
          <div
            className={`${styles.book}${flipping ? ` ${styles.flipping}` : ''}`}
          >
            <div className={`${styles.page} ${styles.pageLeft}`}>
              <div className={styles.pgNo}>— PAGE {e.pg[0]} —</div>
              <span className={styles.year}>{e.year}</span>
              <div className={styles.title}>{e.title}</div>
              <div className={styles.company}>{e.company}</div>
              <p className={styles.desc}>{e.desc}</p>
            </div>
            <div className={`${styles.page} ${styles.pageRight}`}>
              <div className={styles.pgNo}>— PAGE {e.pg[1]} —</div>
              <div className={styles.techHeading}>// TECH USED</div>
              <div className={styles.techList}>
                {e.tech.map((t) => (
                  <span key={t} className={styles.techChip}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.highlight}>
                <div className={styles.hlLabel}>// KEY WIN</div>
                <div className={styles.hlText}>{e.highlight}</div>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.btn}
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
              aria-label="Previous experience"
            >
              ◀ PREV
            </button>
            <span className={styles.counter}>
              {String(idx + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              className={styles.btn}
              onClick={() => setIdx((i) => Math.min(total - 1, i + 1))}
              disabled={idx === total - 1}
              aria-label="Next experience"
            >
              NEXT ▶
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

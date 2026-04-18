import { useStars } from 'hooks/useStars';
import styles from './Stars.module.css';
import type { CSSProperties } from 'react';

export function Stars() {
  const stars = useStars(90);
  return (
    <div className={styles.layer} aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className={styles.star}
          style={
            {
              width: `${s.size}px`,
              height: `${s.size}px`,
              top: `${s.top}%`,
              left: `${s.left}%`,
              '--d': `${s.duration}s`,
              '--dl': `${s.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

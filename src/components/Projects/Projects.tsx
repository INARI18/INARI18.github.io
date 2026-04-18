import { useEffect, useState, type CSSProperties } from 'react';
import { projects } from 'data/projects';
import { Reveal } from 'components/Reveal/Reveal';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

type Mode = 'fanned' | 'focused';

export function Projects() {
  const [mode, setMode] = useState<Mode>('fanned');
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (mode !== 'focused') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMode('fanned');
        setSelected(null);
      } else if (e.key === 'ArrowRight' && selected !== null) {
        setSelected((selected + 1) % projects.length);
      } else if (e.key === 'ArrowLeft' && selected !== null) {
        setSelected((selected - 1 + projects.length) % projects.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode, selected]);

  const selectCard = (i: number) => {
    setSelected(i);
    setMode('focused');
    setHovered(null);
  };

  const handleCardClick = (e: React.MouseEvent, i: number) => {
    if ((e.target as HTMLElement).closest('a')) return;
    selectCard(i);
  };

  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectCard(i);
    }
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">// SECTION 03</div>
          <div className="sec-title">
            My <em>Projects</em>
          </div>
          <div className="sec-bar" />
          <p className={styles.hint}>
            Hover a card to pull it out · click to focus · Esc / click outside
            to close
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div
            className={`${styles.stage} ${styles[mode]}`}
            aria-expanded={mode !== 'fanned'}
          >
            {mode === 'focused' && (
              <div
                className={styles.backdrop}
                onClick={() => {
                  setMode('fanned');
                  setSelected(null);
                }}
                aria-hidden="true"
              />
            )}
            {projects.map((p, i) => {
              const isHovered = hovered === i;
              const isActive = selected === i;
              return (
                <div
                  key={p.title}
                  className={`${styles.cardWrap} ${
                    isHovered ? styles.hovered : ''
                  } ${isActive ? styles.active : ''}`}
                  style={
                    {
                      '--i': i,
                      '--n': projects.length,
                    } as CSSProperties
                  }
                  onPointerEnter={() => {
                    if (mode === 'fanned') setHovered(i);
                  }}
                  onPointerLeave={() =>
                    setHovered((h) => (h === i ? null : h))
                  }
                  onClick={(e) => handleCardClick(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${p.title}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <ProjectCard project={p} />
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

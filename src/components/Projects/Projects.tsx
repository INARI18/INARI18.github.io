import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { projects } from 'data/projects';
import { Reveal } from 'components/Reveal/Reveal';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import { useLang } from 'contexts/LanguageContext';
import styles from './Projects.module.css';

type Mode = 'fanned' | 'focused';

export function Projects() {
  const { t } = useLang();
  const [mode, setMode] = useState<Mode>('fanned');
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [order, setOrder] = useState<number[]>(() => projects.map((_, i) => i));
  const [gathering, setGathering] = useState(false);
  const [redealing, setRedealing] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);

  const shuffle = () => {
    setMode('fanned');
    setSelected(null);
    setHovered(null);
    setGathering(true);
    setTimeout(() => {
      setOrder((prev) => {
        const next = [...prev];
        for (let i = next.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [next[i], next[j]] = [next[j], next[i]];
        }
        return next;
      });
      setRedealing(true);
      setTimeout(() => {
        setGathering(false);
        setRedealing(false);
      }, 600);
    }, 550);
  };

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

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
        if (best && best.isIntersecting) {
          const idx = Number(
            (best.target as HTMLElement).dataset.cardIdx ?? '0',
          );
          setActiveCard(idx);
        }
      },
      { root: stage, threshold: [0.5, 0.75, 1] },
    );
    const cards = stage.querySelectorAll<HTMLElement>('[data-card-idx]');
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [order]);

  const scrollToCard = (i: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const target = stage.querySelector<HTMLElement>(
      `[data-card-idx="${i}"]`,
    );
    target?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

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
          <div className="sec-label">{t.projects.section}</div>
          <div className="sec-title">
            {t.projects.title} <em>{t.projects.titleEm}</em>
          </div>
          <div className="sec-bar" />
          <p className={styles.hint}>{t.projects.hint}</p>
        </Reveal>

        <Reveal delay={1}>
          <div
            ref={stageRef}
            className={`${styles.stage} ${styles[mode]} ${
              gathering ? styles.gathering : ''
            } ${redealing ? styles.redealing : ''}`}
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
            {order.map((srcIdx, i) => {
              const p = projects[srcIdx];
              const isHovered = hovered === i;
              const isActive = selected === i;
              return (
                <div
                  key={p.title}
                  data-card-idx={i}
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
                  onPointerLeave={() => setHovered((h) => (h === i ? null : h))}
                  onClick={(e) => handleCardClick(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  tabIndex={0}
                  role="button"
                  aria-label={t.projects.view(p.title)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <ProjectCard project={p} />
                </div>
              );
            })}
          </div>

          <div className={styles.dots} aria-hidden="true">
            {order.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${
                  i === activeCard ? styles.dotActive : ''
                }`}
                onClick={() => scrollToCard(i)}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>

          <div className={styles.shuffleWrap}>
            <button
              type="button"
              className={styles.shuffleBtn}
              onClick={shuffle}
              aria-label={t.projects.shuffleAria}
            >
              {t.projects.shuffle}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

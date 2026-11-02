import { useEffect, useState } from 'react';
import { projects } from 'data/projects';
import { Reveal } from 'components/Reveal/Reveal';
import { Shelf } from 'components/Shelf/Shelf';
import { GameBoxModal } from 'components/GameBoxModal/GameBoxModal';
import { OPEN_PROJECT_EVENT } from './openProject';
import { useLang } from 'contexts/LanguageContext';
import styles from './Projects.module.css';

export function Projects() {
  const { t } = useLang();
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const n = projects.length;

  const openAt = (i: number) => {
    setSelected(i);
    setOpen(true);
  };

  useEffect(() => {
    const onRequest = (e: Event) => {
      const i = projects.findIndex((p) => p.title === (e as CustomEvent<string>).detail);
      if (i >= 0) openAt(i);
    };
    window.addEventListener(OPEN_PROJECT_EVENT, onRequest);
    return () => window.removeEventListener(OPEN_PROJECT_EVENT, onRequest);
  }, []);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t.projects.section}</div>
          <div className="sec-title">
            {t.projects.title} <em>{t.projects.titleEm}</em>
          </div>
          <div className="sec-bar" />
        </Reveal>

        <Reveal delay={1}>
          <Shelf projects={projects} selected={selected} onOpen={openAt} />
        </Reveal>
      </div>

      <GameBoxModal
        project={open ? projects[selected] : null}
        index={selected}
        total={n}
        onClose={() => setOpen(false)}
        onPrev={() => setSelected((i) => (i - 1 + n) % n)}
        onNext={() => setSelected((i) => (i + 1) % n)}
      />
    </section>
  );
}

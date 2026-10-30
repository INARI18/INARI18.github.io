import type { Project } from 'types';
import { useLang } from 'contexts/LanguageContext';
import { PixelIcon } from 'components/PixelIcon/PixelIcon';
import { Cover } from './Cover';
import styles from './GameBox.module.css';

type Props = { project: Project; active: boolean; onOpen: () => void };

/** Box standing on the shelf: spine out; turns to show the cover when active or hovered. */
export function GameBox({ project, active, onOpen }: Props) {
  const { t } = useLang();
  return (
    <button
      type="button"
      className={`${styles.box} ${styles[project.category]} ${active ? styles.active : ''}`}
      onClick={onOpen}
      aria-label={t.projects.open(project.title)}
      aria-current={active ? 'true' : undefined}
    >
      <div className={styles.body}>
        <div className={styles.spine}>
          <span className={styles.spineYear}>{project.year}</span>
          <span className={styles.spineTitle}>{project.title}</span>
          <span className={styles.spineBottom}>
            <PixelIcon name={project.category} className={styles.spineIcon} />
            <span className={styles.spineTag}>
              {t.projects.category[project.category]}
            </span>
          </span>
        </div>
        <div className={styles.coverFace}>
          <Cover project={project} />
        </div>
      </div>
    </button>
  );
}

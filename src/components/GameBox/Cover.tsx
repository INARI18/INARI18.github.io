import type { Project } from 'types';
import { useLang } from 'contexts/LanguageContext';
import styles from './Cover.module.css';

type Props = { project: Project };

/** Game-case cover shared by the turned box on the shelf and the modal. */
export function Cover({ project }: Props) {
  const { t, tr } = useLang();
  return (
    <div className={styles.cover}>
      <div className={styles.edge} aria-hidden="true">
        {project.title}
      </div>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.badge}>
            {t.projects.category[project.category]}
          </span>
        </div>
        <div className={styles.window}>
          <img src={project.cover} alt="" className={styles.img} />
        </div>
        <p className={styles.desc}>{tr(project.desc)}</p>
        <div className={styles.tags}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.foot}>
          <span className={styles.year}>{project.year}</span>
        </div>
      </div>
    </div>
  );
}

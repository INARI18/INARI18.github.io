import type { Project } from 'types';
import { useLang } from 'contexts/LanguageContext';
import styles from './ProjectCard.module.css';

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  const { t, tr } = useLang();
  return (
    <article className={styles.card}>
      <div className={styles.img}>
        <span aria-hidden="true">{project.emoji}</span>
        <div className={styles.overlay}>
          <a href={project.repo} className={styles.link}>
            {t.projects.code}
          </a>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{project.title}</div>
        <p className={styles.desc}>{tr(project.desc)}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

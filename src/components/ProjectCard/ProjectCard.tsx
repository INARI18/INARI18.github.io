import type { Project } from 'types';
import styles from './ProjectCard.module.css';

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.img}>
        <span aria-hidden="true">{project.emoji}</span>
        <div className={styles.overlay}>
          <a href={project.repo} className={styles.link}>
            ⌥ Code
          </a>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{project.title}</div>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

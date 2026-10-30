import type { Project } from 'types';
import { GameBox } from 'components/GameBox/GameBox';
import styles from './Shelf.module.css';

type Props = {
  projects: Project[];
  selected: number;
  onOpen: (i: number) => void;
};

/** Version A: boxes standing spine-out on a shelf, the selected one turned front. */
export function Shelf({ projects, selected, onOpen }: Props) {
  return (
    <div className={styles.shelf}>
      {projects.map((p, i) => (
        <GameBox
          key={p.title}
          project={p}
          active={i === selected}
          onOpen={() => onOpen(i)}
        />
      ))}
    </div>
  );
}

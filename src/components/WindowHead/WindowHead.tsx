import styles from './WindowHead.module.css';

/** Title bar shared by the character card and the inventory, so they read as windows of the same system. */
export function WindowHead({ url }: { url: string }) {
  return (
    <div className={styles.head}>
      <span className={styles.url}>{url}</span>
      <div className={styles.btns} aria-hidden="true">
        <span className={styles.btn}>_</span>
        <span className={styles.btn}>□</span>
        <span className={styles.btn}>×</span>
      </div>
    </div>
  );
}

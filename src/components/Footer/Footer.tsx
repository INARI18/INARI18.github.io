import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>[ last sync: {__BUILD_DATE__} ]</p>
    </footer>
  );
}

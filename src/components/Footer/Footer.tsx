import { useLang } from 'contexts/LanguageContext';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className={styles.footer}>
      <p>[ {t.footer.lastSync}: {__BUILD_DATE__} ]</p>
    </footer>
  );
}

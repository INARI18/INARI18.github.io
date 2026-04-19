import { Reveal } from 'components/Reveal/Reveal';
import { DialogBox } from 'components/DialogBox/DialogBox';
import { Avatar } from 'components/Avatar/Avatar';
import { useLang } from 'contexts/LanguageContext';
import styles from './Contact.module.css';

export function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t.contact.section}</div>
          <div className="sec-title">
            {t.contact.title} <em>{t.contact.titleEm}</em>
          </div>
          <div className="sec-bar" />
        </Reveal>

        <Reveal delay={1} className={styles.grid}>
          <div className={styles.copy}>
            <h3>
              {t.contact.heading.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.contact.heading.length - 1 && <br />}
                </span>
              ))}
            </h3>
            <p>{t.contact.desc}</p>
          </div>

          <div className={styles.dialogColumn}>
            <Avatar />
            <DialogBox />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

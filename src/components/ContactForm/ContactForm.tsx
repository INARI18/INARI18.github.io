import { useState, type FormEvent } from 'react';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form className={styles.term} onSubmit={handleSubmit}>
      <div className={styles.bar}>
        <div className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className={styles.title}>SEND_MESSAGE.exe</span>
      </div>
      <div className={styles.body}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="cf-name">
            NAME
          </label>
          <input id="cf-name" type="text" placeholder="player_one" />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="cf-email">
            EMAIL
          </label>
          <input id="cf-email" type="email" placeholder="hero@domain.com" />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="cf-msg">
            MESSAGE
          </label>
          <textarea
            id="cf-msg"
            rows={4}
            placeholder="Your quest begins here..."
          />
        </div>
        <button
          type="submit"
          className={`${styles.submit}${sent ? ` ${styles.sent}` : ''}`}
        >
          {sent ? '✓ MESSAGE SENT!' : '▶ SEND MESSAGE'}
        </button>
      </div>
    </form>
  );
}

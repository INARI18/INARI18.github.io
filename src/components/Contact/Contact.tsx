import { Reveal } from 'components/Reveal/Reveal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { contactItems } from 'data/contactItems';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">// SECTION 04</div>
          <div className="sec-title">
            Say <em>Hello.</em>
          </div>
          <div className="sec-bar" />
        </Reveal>

        <Reveal delay={1} className={styles.grid}>
          <div className={styles.copy}>
            <h3>
              LET&apos;S BUILD<br />
              SOMETHING<br />
              TOGETHER.
            </h3>
            <p>
              Have a project in mind, a question, or just want to say hi? My
              inbox is always open — even if I&apos;m in the middle of a
              dungeon.
            </p>
            <ul className={styles.items}>
              {contactItems.map((item) => (
                <li key={item.text}>
                  <span className={styles.icon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

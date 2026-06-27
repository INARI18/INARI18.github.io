import { publications } from 'data/publications';
import { Reveal } from 'components/Reveal/Reveal';
import { useLang } from 'contexts/LanguageContext';
import styles from './PublicationsList.module.css';

export function PublicationsList() {
  const { t, tr } = useLang();

  return (
    <section id="publications" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t.publications.section}</div>
          <div className="sec-title">
            {t.publications.title} <em>{t.publications.titleEm}</em>
          </div>
          <div className="sec-bar" />
          <p className={styles.hint}>{t.publications.hint}</p>
        </Reveal>

        <div className={styles.list}>
          {publications.map((p, i) => {
            return (
              <Reveal key={p.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className={styles.sheet}>
                  <span className={styles.fold} aria-hidden="true" />

                  <div className={styles.side}>
                    <span className={styles.year}>{p.year}</span>
                  </div>

                  <div className={styles.body}>
                    <h3 className={styles.title}>{p.title}</h3>

                    <div className={styles.meta}>
                      <span className={styles.venue}>{p.venue}</span>
                      {p.award && (
                        <span className={styles.award}>🏆 {tr(p.award)}</span>
                      )}
                    </div>

                    <p className={styles.desc}>{tr(p.desc)}</p>

                    <div className={styles.tags}>
                      {p.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.action}>
                    {p.link && p.link !== '#' ? (
                      <a
                        className={styles.read}
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${t.publications.read}: ${p.title}`}
                      >
                        {t.publications.read}
                      </a>
                    ) : (
                      <span className={styles.soon}>{t.publications.soon}</span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

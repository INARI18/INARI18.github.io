import { useEffect, useState, type CSSProperties } from "react";
import { projects } from "data/projects";
import { Reveal } from "components/Reveal/Reveal";
import { ProjectCard } from "components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

type Mode = "fanned" | "focused";

export function Projects() {
  const [mode, setMode] = useState<Mode>("fanned");
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [order, setOrder] = useState<number[]>(() => projects.map((_, i) => i));
  const [gathering, setGathering] = useState(false);
  const [redealing, setRedealing] = useState(false);

  const shuffle = () => {
    setMode("fanned");
    setSelected(null);
    setHovered(null);
    setGathering(true);
    setTimeout(() => {
      // pile is uniform, so the order swap is invisible
      setOrder((prev) => {
        const next = [...prev];
        for (let i = next.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [next[i], next[j]] = [next[j], next[i]];
        }
        return next;
      });
      // add .redealing on top of .gathering so the transform changes from
      // gather→fan and the transition actually fires
      setRedealing(true);
      setTimeout(() => {
        setGathering(false);
        setRedealing(false);
      }, 600);
    }, 550);
  };

  useEffect(() => {
    if (mode !== "focused") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMode("fanned");
        setSelected(null);
      } else if (e.key === "ArrowRight" && selected !== null) {
        setSelected((selected + 1) % projects.length);
      } else if (e.key === "ArrowLeft" && selected !== null) {
        setSelected((selected - 1 + projects.length) % projects.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, selected]);

  const selectCard = (i: number) => {
    setSelected(i);
    setMode("focused");
    setHovered(null);
  };

  const handleCardClick = (e: React.MouseEvent, i: number) => {
    if ((e.target as HTMLElement).closest("a")) return;
    selectCard(i);
  };

  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectCard(i);
    }
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className="sec-label">// SECTION 03</div>
          <div className="sec-title">
            My <em>Projects</em>
          </div>
          <div className="sec-bar" />
          <p className={styles.hint}>
            Hover a card to pull it out · click to focus · Esc / click outside
            to close
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div
            className={`${styles.stage} ${styles[mode]} ${
              gathering ? styles.gathering : ""
            } ${redealing ? styles.redealing : ""}`}
            aria-expanded={mode !== "fanned"}
          >
            {mode === "focused" && (
              <div
                className={styles.backdrop}
                onClick={() => {
                  setMode("fanned");
                  setSelected(null);
                }}
                aria-hidden="true"
              />
            )}
            {order.map((srcIdx, i) => {
              const p = projects[srcIdx];
              const isHovered = hovered === i;
              const isActive = selected === i;
              return (
                <div
                  key={p.title}
                  className={`${styles.cardWrap} ${
                    isHovered ? styles.hovered : ""
                  } ${isActive ? styles.active : ""}`}
                  style={
                    {
                      "--i": i,
                      "--n": projects.length,
                    } as CSSProperties
                  }
                  onPointerEnter={() => {
                    if (mode === "fanned") setHovered(i);
                  }}
                  onPointerLeave={() => setHovered((h) => (h === i ? null : h))}
                  onClick={(e) => handleCardClick(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${p.title}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <ProjectCard project={p} />
                </div>
              );
            })}
          </div>

          <div className={styles.shuffleWrap}>
            <button
              type="button"
              className={styles.shuffleBtn}
              onClick={shuffle}
              aria-label="Shuffle the deck"
            >
              ▷ press me
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

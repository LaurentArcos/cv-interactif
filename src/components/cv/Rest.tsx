"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cv } from "@/data/cv";
import { useCv } from "./context";
import { Reveal } from "./ui";

export function Education() {
  const { t, lang } = useCv();
  return (
    <section id="education">
      <div className="wrap split">
        <Reveal>
          <div className="head">
            <h2>{t.h.edu}</h2>
          </div>
          <ul className="edu">
            {cv.education.map((e) => (
              <li key={e.degree.en}>
                <div className="y">{e.date[lang]}</div>
                <div>
                  <b>{e.degree[lang]}</b>
                  <span>
                    {e.school}
                    {e.note ? `. ${e.note[lang]}` : ""}{" "}
                    {e.link && e.linkLabel && (
                      <a href={e.link} target="_blank" rel="noopener noreferrer">
                        {e.linkLabel[lang]}
                      </a>
                    )}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="head">
            <h2>{t.h.lang}</h2>
          </div>
          <ul className="lang">
            {t.langs.map(([a, b]) => (
              <li key={a}>
                <b>{a}</b>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Life() {
  const { t, lang } = useCv();
  return (
    <section id="life">
      <div className="wrap">
        <Reveal className="head">
          <h2>{t.h.life}</h2>
        </Reveal>
        <Reveal className="life">
          {cv.life.map((l) => (
            <div key={l.h.en}>
              <h3>{l.h[lang]}</h3>
              <p>
                {l.t[lang]}{" "}
                {l.link && (
                  <a href={l.link} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                )}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function FilterBar() {
  const { t, tag, toggleTag, match } = useCv();
  const n = cv.experiences.filter((e) => match(e.tags)).length + cv.projects.filter((p) => match(p.tags)).length;
  return (
    <AnimatePresence>
      {tag && (
        <motion.div
          className="bar"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
        >
          <span>
            {t.results(n)}
            {tag}
          </span>
          <button type="button" onClick={() => toggleTag(null)}>
            {t.clear}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

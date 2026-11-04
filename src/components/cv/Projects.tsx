"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cv } from "@/data/cv";
import { useCv } from "./context";
import { Chip, Reveal, Tabs } from "./ui";

type G = "all" | "seagale" | "perso";

export function Projects() {
  const { t, lang, match } = useCv();
  const [group, setGroup] = useState<G>("all");
  const list = cv.projects.filter((p) => group === "all" || p.group === group);
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="head">
          <h2>{t.h.proj}</h2>
          <Tabs<G>
            id="group"
            value={group}
            onChange={setGroup}
            items={[
              { key: "all", label: t.groups.all },
              { key: "seagale", label: t.groups.seagale },
              { key: "perso", label: t.groups.perso },
            ]}
          />
        </Reveal>
        <motion.div className="cards" layout>
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((p) => (
              <motion.article
                key={p.title.en}
                layout
                className={`card${match(p.tags) ? "" : " dim"}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: match(p.tags) ? 1 : 0.3, scale: 1 }}
                viewport={{ once: false, margin: "-20px" }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 340, damping: 32 }}
              >
                <span className={`pill ${p.status}`}>{t.status[p.status]}</span>
                <h3>
                  {p.page ? (
                    <Link href={p.page}>{p.title[lang]}</Link>
                  ) : p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.title[lang]}
                    </a>
                  ) : (
                    p.title[lang]
                  )}
                </h3>
                <p>{p.desc[lang]}</p>
                {p.page && (
                  <Link className="card-case" href={p.page}>
                    {t.caseLink} →
                  </Link>
                )}
                {p.tags.length > 0 && (
                  <div className="chips">
                    {p.tags.map((x) => (
                      <Chip key={x} tag={x} />
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {group !== "seagale" && (
          <Reveal className="learn">
            <h3>{t.learn}</h3>
            <ul>
              {cv.learning.map((p) => (
                <li key={p.link}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    {p.title[lang]}
                  </a>
                  <span>{p.desc[lang]}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}

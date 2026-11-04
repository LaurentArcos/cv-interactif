"use client";

import { cv } from "@/data/cv";
import { useCv } from "./context";

export function PrintCv() {
  const { t, lang } = useCv();
  const site = "cv-interactif-laurentarcos.vercel.app";
  return (
    <div className="print-cv">
      <header>
        <div>
          <h1>Laurent Arcos</h1>
          <p className="p-role">{t.role}</p>
        </div>
        <p className="p-links">
          {t.place}
          <br />
          linkedin.com/in/laurentarcos
          <br />
          github.com/LaurentArcos
          <br />
          {site}
        </p>
      </header>
      <p className="p-about">{t.about.slice(0, 2).join(" ")}</p>
      <h2>{t.h.exp}</h2>
      {cv.experiences.map((e, i) => (
        <article key={i}>
          <div className="p-line">
            <b>{e.title[lang]}</b>
            <span>{e.date[lang]}</span>
          </div>
          <p className="p-co">
            {e.company} · {e.loc}
            {e.contract ? ` · ${e.contract[lang]}` : ""}
          </p>
          {i === 0 ? (
            <ul>
              {e.groups.flatMap((g) => g.items[lang].slice(0, 3)).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          ) : (
            <p className="p-one">{e.one[lang]}</p>
          )}
        </article>
      ))}
      <h2>{t.h.skills}</h2>
      {cv.skills
        .filter((c) => c.items.length > 1)
        .map((c) => (
          <p key={c.name.en} className="p-skills">
            <b>{c.name[lang]} : </b>
            {c.items.map((s) => s[lang]).join(", ")}
          </p>
        ))}
      <div className="p-two">
        <div>
          <h2>{t.h.edu}</h2>
          {cv.education.map((e) => (
            <p key={e.degree.en} className="p-edu">
              <b>{e.degree[lang]}</b>
              <br />
              {e.school}, {e.date[lang]}
            </p>
          ))}
        </div>
        <div>
          <h2>{t.h.lang}</h2>
          {t.langs.map(([a, b]) => (
            <p key={a} className="p-edu">
              <b>{a} : </b>
              {b}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { cv } from "@/data/cv";
import { useCv } from "./context";
import { Chip, Reveal, Tabs } from "./ui";

export function Skills() {
  const { t, lang } = useCv();
  const [cat, setCat] = useState("core");
  const all = cv.skills.flatMap((c) => c.items);
  const list =
    cat === "core"
      ? cv.core.flatMap((n) => all.filter((s) => s.en === n))
      : cv.skills[Number(cat)].items;
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="head">
          <h2>{t.h.skills}</h2>
          <Tabs
            id="cat"
            value={cat}
            onChange={setCat}
            items={[
              { key: "core", label: t.core },
              ...cv.skills.map((c, i) => ({ key: String(i), label: c.name[lang] })),
            ]}
          />
        </Reveal>
        <div className="core" key={cat}>
          {list.map((s, i) => (
            <Chip key={s.en} tag={s.en} label={s[lang]} delay={i * 0.018} />
          ))}
        </div>
      </div>
    </section>
  );
}

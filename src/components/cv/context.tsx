"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang } from "@/data/cv";
import { UI } from "@/data/ui";

// Date de secours pour la page pré-générée, remplacée par la vraie date dès le chargement.
const FALLBACK_NOW = new Date("2026-11-04T12:00:00Z");

const norm = (s: string) =>
  s.toLowerCase().replace(/\.js$/, "").replace(/ css$/, "").replace(/^api /, "").replace(/ api$/, "").trim();

type Ctx = {
  lang: Lang;
  now: Date;
  t: (typeof UI)["fr"];
  setLang: (l: Lang) => void;
  tag: string | null;
  toggleTag: (t: string | null) => void;
  match: (tags?: string[]) => boolean;
  isTag: (t: string) => boolean;
};

const CvContext = createContext<Ctx | null>(null);

export function CvProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [tag, setTag] = useState<string | null>(null);
  const [now, setNow] = useState(FALLBACK_NOW);

  useEffect(() => {
    setNow(new Date());
    try {
      if (localStorage.getItem("cv-lang") === "en") setLangState("en");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("cv-lang", l);
    } catch {}
  }, []);

  const toggleTag = useCallback((t: string | null) => {
    setTag((cur) => (t === null || (cur && norm(cur) === norm(t)) ? null : t));
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      now,
      t: UI[lang],
      setLang,
      tag,
      toggleTag,
      match: (tags) => !tag || (tags ?? []).some((x) => norm(x) === norm(tag)),
      isTag: (x) => !!tag && norm(x) === norm(tag),
    }),
    [lang, now, setLang, tag, toggleTag],
  );

  return <CvContext.Provider value={value}>{children}</CvContext.Provider>;
}

export function useCv() {
  const c = useContext(CvContext);
  if (!c) throw new Error("useCv doit être utilisé dans CvProvider");
  return c;
}

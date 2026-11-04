"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useCv } from "./context";

export function Top() {
  const { t, lang, setLang } = useCv();
  const { scrollYProgress } = useScroll();

  return (
    <div className="top">
      <div className="wrap">
        <Link className="mark" href="/" aria-label="Laurent Arcos">
          LA
        </Link>
        <nav className="nav" aria-label="Sections">
          {t.nav.map(([href, label]) => (
            <a key={href} href={`/#${href}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="ctrl">
          <button type="button" onClick={() => window.print()}>
            PDF
          </button>
          <button type="button" aria-pressed={lang === "fr"} onClick={() => setLang("fr")}>
            FR
          </button>
          <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
            EN
          </button>
        </div>
      </div>
      <motion.div className="top-progress" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}

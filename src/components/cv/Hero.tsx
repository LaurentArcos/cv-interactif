"use client";

import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { faBluesky, faGithub, faLetterboxd, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { BARCODE_BITS } from "@/data/barcode";
import { cv } from "@/data/cv";
import { devYears, labelDate } from "@/data/dates";
import { useCv } from "./context";

const ICONS = { LinkedIn: faLinkedin, GitHub: faGithub, Bluesky: faBluesky, Letterboxd: faLetterboxd };
const PRINT_DELAY = 0.5;
const PRINT_TIME = 2.2;
const steps = (n: number) => (p: number) => Math.floor(p * n) / n;

export function BrandIcon({ name }: { name: string }) {
  const def = ICONS[name as keyof typeof ICONS];
  if (!def) return null;
  const [w, h, , , d] = def.icon;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} aria-hidden="true" fill="currentColor">
      <path d={d as string} />
    </svg>
  );
}

function Typed({ text, delay, className, as }: { text: string; delay: number; className: string; as: "h1" | "p" }) {
  const reduce = useReducedMotion();
  const Tag = as === "h1" ? motion.h1 : motion.p;
  return (
    <Tag
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={reduce ? { duration: 0 } : { delay, duration: text.length * 0.035, ease: steps(text.length) }}
    >
      {text}
    </Tag>
  );
}

function Count({ pre, n, suf }: { pre: string; n: number; suf: string }) {
  const reduce = useReducedMotion();
  const [v, setV] = useState(n);
  useEffect(() => {
    if (reduce) {
      setV(n);
      return;
    }
    const c = animate(0, n, {
      delay: PRINT_DELAY + 0.4,
      duration: PRINT_TIME,
      ease: "easeOut",
      onUpdate: (x) => setV(Math.round(x)),
    });
    return () => c.stop();
  }, [n, reduce]);
  return (
    <>
      {pre}
      {v}
      {suf}
    </>
  );
}

function Bars({ reduce }: { reduce: boolean | null }) {
  const rects = useMemo(() => {
    const out: { x: number; w: number }[] = [];
    for (const m of BARCODE_BITS.matchAll(/1+/g)) out.push({ x: m.index ?? 0, w: m[0].length });
    return out;
  }, []);
  return (
    <motion.svg
      className="bars"
      viewBox={`0 0 ${BARCODE_BITS.length} 10`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Code 128 : LAURENT ARCOS"
      fill="currentColor"
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={reduce ? { duration: 0 } : { delay: PRINT_DELAY + PRINT_TIME, duration: 0.7, ease: "linear" }}
    >
      {rects.map((r) => (
        <rect key={r.x} x={r.x} width={r.w} height="10" />
      ))}
    </motion.svg>
  );
}

function ShippingLabel() {
  const { t, lang, now } = useCv();
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  const L = t.label;
  return (
    <div className="printer">
      <div className="slot" aria-hidden="true">
        <span>ZPL</span>
        <motion.span
          className={`led${done ? " done" : ""}`}
          animate={done ? { opacity: 1 } : { opacity: [1, 0.25, 1] }}
          transition={done ? {} : { repeat: Infinity, duration: 0.5 }}
        />
      </div>
      <div className="paper">
        <motion.div
          className="label"
          initial={{ y: "-101%" }}
          animate={{ y: 0 }}
          transition={reduce ? { duration: 0 } : { delay: PRINT_DELAY, duration: PRINT_TIME, ease: steps(32) }}
          onAnimationComplete={() => setDone(true)}
        >
          <header>
            <span>{L.head}</span>
            <span>{labelDate(now, lang)}</span>
          </header>
          <div className="from">
            {L.from}
            <b>Laurent Arcos</b>
            {L.city}
          </div>
          <dl>
            {L.stats.map((s, i) => (
              <div key={i}>
                <dt>
                  <Count pre={s.pre} n={s.devYears ? devYears(now) : s.n} suf={s.suf} />
                </dt>
                <dd>{s.l}</dd>
              </div>
            ))}
          </dl>
          <div className="code">
            <Bars reduce={reduce} />
            <span>LAURENT ARCOS</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useCv();
  const reduce = useReducedMotion();
  return (
    <div className="wrap hero">
      <div>
        <Typed as="h1" className="" text="Laurent Arcos" delay={0.15} />
        <Typed as="p" className="role" text={t.role} delay={0.7} />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { delay: 1.6, duration: 0.5 }}
        >
          <p className="place">{t.place}</p>
          <div className="about">
            {t.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="social">
            {cv.social.map(([n, u]) => (
              <a key={n} href={u} target="_blank" rel="noopener noreferrer">
                <BrandIcon name={n} />
                <span>{n}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <ShippingLabel />
    </div>
  );
}

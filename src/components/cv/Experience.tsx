"use client";

import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { cv, type Experience as Exp } from "@/data/cv";
import { useCv } from "./context";
import { Chip, Reveal, Tabs } from "./ui";

type Lane = "all" | "dev" | "com";
type Geo = { d: string; h: number; splitY: number };

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

function Row({
  e,
  i,
  open,
  onToggle,
}: {
  e: Exp;
  i: number;
  open: boolean;
  onToggle: (i: number) => void;
}) {
  const { lang, t, match } = useCv();
  const dot = useRef<HTMLSpanElement>(null);
  const lit = useInView(dot, { once: true, margin: "0px 0px -25% 0px" });
  return (
    <motion.div className={`row ${e.lane}`} initial={false} animate={{ opacity: 1 }}>
      <span ref={dot} className={`dot${lit ? " lit" : ""}`} data-dot={e.lane} />
      <div className={`exp${match(e.tags) ? "" : " dim"}`}>
        <h3 className="exp-h">
          <button type="button" className="exp-btn" aria-expanded={open} onClick={() => onToggle(i)}>
            <span className="t">{e.title[lang]}</span>
            <span className="dt">{e.date[lang]}</span>
            <span className="co">
              {e.company} · {e.loc}
              {e.contract ? ` · ${e.contract[lang]}` : ""}
            </span>
            <span className="more">{open ? t.hide : t.details}</span>
            {!open && <span className="one">{e.one[lang]}</span>}
          </button>
        </h3>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="fold"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              <div className="body">
                {e.groups.map((g, n) => (
                  <div key={n}>
                    {g.h && <h4>{g.h[lang]}</h4>}
                    <ul>
                      {g.items[lang].map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="chips">
                  {e.tags.map((x) => (
                    <Chip key={x} tag={x} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const { t } = useCv();
  const reduce = useReducedMotion();
  const [lane, setLane] = useState<Lane>("all");
  const [open, setOpen] = useState<Set<number>>(
    () => new Set(cv.experiences.flatMap((e, i) => (e.open ? [i] : []))),
  );
  const graph = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<Geo | null>(null);

  const measure = useCallback(() => {
    const el = graph.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const dots = [...el.querySelectorAll<HTMLElement>("[data-dot]")].map((d) => {
      const r = d.getBoundingClientRect();
      return { lane: d.dataset.dot, x: r.left + r.width / 2 - box.left, y: r.top + r.height / 2 - box.top };
    });
    if (!dots.length) return;
    const first = dots[0];
    const last = dots[dots.length - 1];
    const merge = el.querySelector<HTMLElement>("[data-merge]")?.getBoundingClientRect();
    let d = `M${first.x} ${first.y}`;
    let splitY = box.height;
    if (merge && first.lane !== last.lane) {
      const top = merge.top - box.top;
      const bot = merge.bottom - box.top;
      const mid = (top + bot) / 2;
      d += ` V${top} C${first.x} ${mid} ${last.x} ${mid} ${last.x} ${bot} V${last.y}`;
      splitY = mid;
    } else {
      d += ` V${last.y}`;
      if (first.lane === "com") splitY = 0;
    }
    setGeo((g) => (g && g.d === d && g.h === box.height ? g : { d, h: box.height, splitY }));
  }, []);

  useIso(() => {
    measure();
    const el = graph.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      removeEventListener("resize", measure);
    };
  }, [measure, lane]);

  const { scrollYProgress } = useScroll({ target: graph, offset: ["start 75%", "end 70%"] });
  const drawn = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.3 });

  const toggle = useCallback((i: number) => {
    setOpen((cur) => {
      const n = new Set(cur);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  }, []);

  const allOpen = open.size === cv.experiences.length;
  const rows = cv.experiences.map((e, i) => ({ e, i })).filter(({ e }) => lane === "all" || e.lane === lane);
  const firstCom = rows.findIndex(({ e }) => e.lane === "com");

  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="head">
          <h2>{t.h.exp}</h2>
          <Tabs<Lane>
            id="lane"
            value={lane}
            onChange={setLane}
            items={[
              { key: "all", label: t.lanes.all },
              { key: "dev", label: t.lanes.dev },
              { key: "com", label: t.lanes.com },
            ]}
            after={
              <button
                type="button"
                aria-pressed={false}
                onClick={() => setOpen(allOpen ? new Set() : new Set(cv.experiences.map((_, i) => i)))}
              >
                <span className="tab-t">{allOpen ? t.closeAll : t.openAll}</span>
              </button>
            }
          />
        </Reveal>
        <div className="graph" ref={graph}>
          {geo && (
            <svg className="graph-svg" aria-hidden="true" fill="none">
              <defs>
                <linearGradient id="lanes" gradientUnits="userSpaceOnUse" x1="0" y1={geo.splitY - 40} x2="0" y2={geo.splitY + 40}>
                  <stop offset="0" stopColor="var(--dev)" />
                  <stop offset="1" stopColor="var(--com)" />
                </linearGradient>
              </defs>
              <path d={geo.d} stroke="var(--line)" strokeWidth="2" />
              <motion.path
                d={geo.d}
                stroke="url(#lanes)"
                strokeWidth="2"
                style={{ pathLength: reduce ? 1 : drawn }}
              />
            </svg>
          )}
          {rows.map(({ e, i }, n) => (
            <div key={i}>
              {lane === "all" && n === firstCom && (
                <div className="merge" data-merge>
                  <p>{t.merge}</p>
                </div>
              )}
              <Row e={e} i={i} open={open.has(i)} onToggle={toggle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

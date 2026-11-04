"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { caseUi, hub, reporting } from "@/data/cases";
import { useCv } from "./context";
import { Reveal } from "./ui";

function CaseHead({ title, lead, role, stack }: { title: string; lead: string; role: string; stack: string[] }) {
  const { lang } = useCv();
  return (
    <div className="wrap case-head">
      <Link className="case-back" href="/#projects">
        ← {caseUi.back[lang]}
      </Link>
      <p className="case-eyebrow">{caseUi.caseStudy[lang]} · Seagale</p>
      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        {title}
      </motion.h1>
      <p className="case-lead">{lead}</p>
      <p className="case-role">{role}</p>
      <div className="case-tags">
        {stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <div className="wrap">
        <Reveal className="head">
          <h2>{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Prose({ items }: { items: string[] }) {
  return (
    <Reveal className="case-prose">
      {items.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </Reveal>
  );
}

function CartGrid({ label }: { label: string }) {
  const rows = 4;
  const cols = 6;
  return (
    <figure className="cart" aria-label={label}>
      <div className="cart-grid">
        {Array.from({ length: rows * cols }, (_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          return (
            <motion.span
              key={i}
              className={(r + c) % 2 ? "bin b" : "bin a"}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.2 }}
            >
              {r + 1}
              {c + 1}
            </motion.span>
          );
        })}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function Journey() {
  const { lang } = useCv();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 65%"] });
  const p = useSpring(scrollYProgress, { stiffness: 130, damping: 30, mass: 0.3 });
  const top = useTransform(p, [0, 1], ["0%", "100%"]);
  return (
    <ol className="journey" ref={ref}>
      <span className="journey-track" aria-hidden="true" />
      <motion.span className="journey-fill" aria-hidden="true" style={{ scaleY: reduce ? 1 : p }} />
      {!reduce && <motion.span className="parcel" aria-hidden="true" style={{ top }} />}
      {hub.steps.map((s, i) => (
        <motion.li
          key={s.h.en}
          initial={{ opacity: 0.25, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -32% 0px" }}
          transition={{ duration: 0.35 }}
        >
          <span className="journey-n">{i + 1}</span>
          <h3>{s.h[lang]}</h3>
          <div className="journey-cols">
            <p>
              <b>{caseUi.floor[lang]}</b>
              {s.f[lang]}
            </p>
            <p>
              <b>{caseUi.tech[lang]}</b>
              {s.o[lang]}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

function Grid({ items }: { items: { h: string; p: string }[] }) {
  return (
    <div className="case-grid">
      {items.map((c, i) => (
        <motion.article
          key={c.h}
          className="card"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: (i % 3) * 0.07, duration: 0.35 }}
        >
          <h3>{c.h}</h3>
          <p>{c.p}</p>
        </motion.article>
      ))}
    </div>
  );
}

function Next({ href, label }: { href: string; label: string }) {
  const { lang } = useCv();
  return (
    <section>
      <div className="wrap case-next">
        <span>{caseUi.next[lang]}</span>
        <Link href={href}>{label} →</Link>
      </div>
    </section>
  );
}

export function HubPage() {
  const { lang } = useCv();
  return (
    <main id="top" className="case">
      <CaseHead title={hub.title[lang]} lead={hub.lead[lang]} role={hub.role[lang]} stack={hub.stack} />
      <Block title={caseUi.problem[lang]}>
        <Prose items={hub.problem.map((p) => p[lang])} />
      </Block>
      <Block title={caseUi.constraints[lang]}>
        <Grid items={hub.constraints.map((c) => ({ h: c.h[lang], p: c.p[lang] }))} />
        <Reveal>
          <CartGrid label={caseUi.cart[lang]} />
        </Reveal>
      </Block>
      <Block title={caseUi.journey[lang]}>
        <Journey />
      </Block>
      <Block title={caseUi.safety[lang]}>
        <Prose items={[hub.safetyIntro[lang]]} />
        <ol className="case-list">
          {hub.safety.map((s, i) => (
            <motion.li
              key={s.en}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {s[lang]}
            </motion.li>
          ))}
        </ol>
      </Block>
      <Block title={caseUi.modules[lang]}>
        <Reveal className="case-tags">
          {hub.modules.map((m) => (
            <span key={m.en}>{m[lang]}</span>
          ))}
        </Reveal>
      </Block>
      <Next href="/reporting" label={reporting.title[lang]} />
    </main>
  );
}

function DataFlow() {
  const { lang } = useCv();
  return (
    <div className="flow">
      {reporting.flow.map((f, i) => (
        <motion.div
          key={f.h.en}
          className="flow-step"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.22, duration: 0.4 }}
        >
          <h3>{f.h[lang]}</h3>
          <ul>
            {f.items.map((x) => (
              <li key={x.en}>{x[lang]}</li>
            ))}
          </ul>
          {i < reporting.flow.length - 1 && (
            <motion.span
              className="flow-arrow"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.22 + 0.25, duration: 0.3 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function ReportingPage() {
  const { lang } = useCv();
  return (
    <main id="top" className="case">
      <CaseHead title={reporting.title[lang]} lead={reporting.lead[lang]} role={reporting.role[lang]} stack={reporting.stack} />
      <Block title={caseUi.problem[lang]}>
        <Prose items={reporting.problem.map((p) => p[lang])} />
      </Block>
      <Block title={caseUi.flow[lang]}>
        <DataFlow />
      </Block>
      <Block title={caseUi.questions[lang]}>
        <Grid items={reporting.questions.map((c) => ({ h: c.h[lang], p: c.p[lang] }))} />
      </Block>
      <Block title={caseUi.use[lang]}>
        <Prose items={[reporting.use[lang]]} />
      </Block>
      <Next href="/hub" label={hub.title[lang]} />
    </main>
  );
}

"use client";

import { useRef, useState, type FormEvent } from "react";
import { useCv } from "./context";
import { Reveal } from "./ui";

type State = "idle" | "sending" | "sent" | "error" | "limited";

export function Contact() {
  const { t } = useCv();
  const c = t.contact;
  const [state, setState] = useState<State>("idle");
  const startedAt = useRef(Date.now());

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: d.get("name"),
          email: d.get("email"),
          message: d.get("message"),
          website: d.get("website"),
          startedAt: startedAt.current,
        }),
      });
      if (res.ok) {
        form.reset();
        setState("sent");
      } else {
        setState(res.status === 429 ? "limited" : "error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact">
      <div className="wrap contact">
        <Reveal>
          <div className="head">
            <h2>{t.h.contact}</h2>
          </div>
          <p className="contact-intro">{c.intro}</p>
        </Reveal>
        <Reveal>
          <form onSubmit={submit} className="form">
            <label>
              {c.name}
              <input name="name" required minLength={2} maxLength={80} autoComplete="name" />
            </label>
            <label>
              {c.email}
              <input name="email" type="email" required maxLength={120} autoComplete="email" />
            </label>
            <label className="hp" aria-hidden="true">
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              {c.message}
              <textarea name="message" required minLength={10} maxLength={2000} rows={5} />
            </label>
            <button type="submit" disabled={state === "sending"}>
              {state === "sending" ? c.sending : c.send}
            </button>
            <p className="form-note" role="status">
              {state === "sent" && <span className="ok">{c.sent}</span>}
              {state === "error" && <span className="ko">{c.error}</span>}
              {state === "limited" && <span className="ko">{c.limited}</span>}
              {(state === "idle" || state === "sending") && c.note}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useCv } from "./context";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Tabs<K extends string>({
  id,
  items,
  value,
  onChange,
  after,
}: {
  id: string;
  items: { key: K; label: string }[];
  value: K;
  onChange: (k: K) => void;
  after?: ReactNode;
}) {
  return (
    <div className="tabs">
      {items.map((i) => (
        <button key={i.key} type="button" aria-pressed={value === i.key} onClick={() => onChange(i.key)}>
          {value === i.key && (
            <motion.span layoutId={id} className="tab-on" transition={{ type: "spring", stiffness: 420, damping: 36 }} />
          )}
          <span className="tab-t">{i.label}</span>
        </button>
      ))}
      {after}
    </div>
  );
}

export function Chip({ tag, label, delay }: { tag: string; label?: string; delay?: number }) {
  const { toggleTag, isTag } = useCv();
  return (
    <motion.button
      type="button"
      className={`chip${isTag(tag) ? " on" : ""}`}
      onClick={() => toggleTag(tag)}
      whileTap={{ scale: 0.94 }}
      initial={delay === undefined ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay ?? 0, duration: 0.22 }}
    >
      {label ?? tag}
    </motion.button>
  );
}

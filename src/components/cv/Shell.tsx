"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { cv } from "@/data/cv";
import { CvProvider, useCv } from "./context";
import { BrandIcon } from "./Hero";
import { PrintCv } from "./PrintCv";
import { FilterBar } from "./Rest";
import { Top } from "./Top";

function Footer() {
  const { now } = useCv();
  return (
    <footer>
      <div className="wrap">
        <span>© {now.getFullYear()} Laurent Arcos</span>
        <div className="foot-links">
          {cv.footerSocial.map(([n, u]) => (
            <a key={n} href={u} target="_blank" rel="noopener noreferrer">
              <BrandIcon name={n} />
              {n}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <CvProvider>
        <div className="screen">
          <Top />
          {children}
          <Footer />
          <FilterBar />
        </div>
        <PrintCv />
      </CvProvider>
    </MotionConfig>
  );
}

import data from "./cv.json";

export type Lang = "fr" | "en";
export type L10n = Record<Lang, string>;

export type Experience = {
  lane: "dev" | "com";
  company: string;
  loc: string;
  contract?: L10n;
  title: L10n;
  date: L10n;
  one: L10n;
  open?: boolean;
  groups: { h?: L10n; items: Record<Lang, string[]> }[];
  tags: string[];
};
export type Project = {
  group: "seagale" | "perso";
  status: "live" | "internal" | "offline" | "partial";
  title: L10n;
  desc: L10n;
  tags: string[];
  link?: string;
  page?: string;
};
export type Cv = {
  experiences: Experience[];
  projects: Project[];
  learning: { title: L10n; desc: L10n; link: string }[];
  education: { school: string; date: L10n; degree: L10n; note?: L10n; link?: string; linkLabel?: L10n }[];
  skills: { name: L10n; items: L10n[] }[];
  core: string[];
  life: { h: L10n; t: L10n; link?: string; label?: string }[];
  social: [string, string][];
  footerSocial: [string, string][];
};

export const cv = data as unknown as Cv;

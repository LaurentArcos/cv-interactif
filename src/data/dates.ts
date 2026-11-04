import type { Lang } from "./cv";

const DEV_START_YEAR = 2022;
const DEV_START_MONTH = 2; // mars, compté depuis 0

export function devYears(now: Date) {
  const years = now.getFullYear() - DEV_START_YEAR;
  return now.getMonth() < DEV_START_MONTH ? years - 1 : years;
}

export function labelDate(now: Date, lang: Lang) {
  const locale = lang === "fr" ? "fr-FR" : "en-GB";
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(now).toLocaleUpperCase(locale);
}

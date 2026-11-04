import type { MetadataRoute } from "next";

const SITE = "https://cv-interactif-laurentarcos.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/hub", "/reporting"].map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: "monthly",
    priority: path ? 0.8 : 1,
  }));
}

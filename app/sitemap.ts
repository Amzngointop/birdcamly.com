import type { MetadataRoute } from "next";
import { getAllArticleSlugs } from "@/data/articles";
import { getAllGuideSlugs } from "@/data/guides";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const articleUrls = getAllArticleSlugs().map((slug) => ({
    url: `${base}/best/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guideUrls = getAllGuideSlugs().map((slug) => ({
    url: `${base}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/affiliate-disclosure`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...articleUrls,
    ...guideUrls,
  ];
}

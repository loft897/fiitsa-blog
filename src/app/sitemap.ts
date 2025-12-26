import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getAllPostSlugs, getCategories, getTags } from "@/lib/posts";
import { topics } from "@/lib/topics";

const staticRoutes = [
  "/",
  "/blog",
  "/articles",
  "/categories",
  "/tags",
  "/search",
  "/topics",
  "/features",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/legal",
  "/whatsapp-pricing",
  "/logistics-partners",
  "/become-logistic-partner",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const items: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
  }));

  try {
    const [slugs, categories, tags] = await Promise.all([
      getAllPostSlugs(),
      getCategories(),
      getTags(),
    ]);

    slugs.forEach((slug) => {
      items.push({
        url: absoluteUrl(`/articles/${encodeURIComponent(slug)}`),
        lastModified: now,
      });
    });

    categories.forEach((slug) => {
      items.push({
        url: absoluteUrl(`/categories/${encodeURIComponent(slug)}`),
        lastModified: now,
      });
    });

    tags.forEach((tag) => {
      items.push({
        url: absoluteUrl(`/tags/${encodeURIComponent(tag)}`),
        lastModified: now,
      });
    });

    topics.forEach((topic) => {
      items.push({
        url: absoluteUrl(`/topics/${topic.slug}`),
        lastModified: now,
      });
    });
  } catch {
    return items;
  }

  return items;
}

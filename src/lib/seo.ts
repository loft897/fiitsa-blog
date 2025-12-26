import type { Metadata } from "next";
import type { Post } from "@/lib/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fiitsa.com";
const defaultOgImage =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png";

function stripMarkdown(input: string) {
  return input
    .replace(/^---[\s\S]*?---\s*/m, "")
    .replace(/`{3}[\s\S]*?`{3}/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[[^\]]+]\([^)]+\)/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[#>*_~|-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toExcerpt(input: string, maxLength = 160) {
  if (!input) return "";
  if (input.length <= maxLength) return input;
  return `${input.slice(0, maxLength - 1).trim()}…`;
}

export function formatSlugTitle(slug: string) {
  const decoded = decodeURIComponent(slug || "");
  const cleaned = decoded.replace(/[-_]+/g, " ").trim();
  if (!cleaned) return slug;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function buildArticleMetadata(post: Post): Metadata {
  const canonical = absoluteUrl(`/articles/${post.slug}`);
  const fallbackDescription = post.description || toExcerpt(stripMarkdown(post.content || ""));
  return {
    title: post.title,
    description: fallbackDescription || undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: fallbackDescription || undefined,
      images: [
        {
          url: post.cover_url || defaultOgImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: fallbackDescription || undefined,
      images: [post.cover_url || defaultOgImage],
    },
  };
}

export function buildBreadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function buildArticleJsonLd(post: Post) {
  const fallbackDescription = post.description || toExcerpt(stripMarkdown(post.content || ""));
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: fallbackDescription || undefined,
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: {
      "@type": "Person",
      name: post.author_name || "Équipe Fiitsa",
    },
    image: post.cover_url ? [post.cover_url] : undefined,
    mainEntityOfPage: absoluteUrl(`/articles/${post.slug}`),
    publisher: {
      "@type": "Organization",
      name: "Fiitsa",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/fiitsa-logo.png"),
      },
    },
  };
}

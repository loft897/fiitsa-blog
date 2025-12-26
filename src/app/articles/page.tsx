import type { Metadata } from "next";
import { Suspense } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticlesFilters } from "@/components/ArticlesFilters";
import { Pagination } from "@/components/Pagination";
import { Trans } from "@/components/Trans";
import { getCategories, getTags, listPosts } from "@/lib/posts";

export const revalidate = 120;

export const metadata: Metadata = {
  title: "Articles",
  description: "Retrouvez les articles Fiitsa sur l'e-commerce, l'IA et la business en ligne en Afrique.",
  alternates: {
    canonical: "https://www.fiitsa.com/articles",
  },
  openGraph: {
    title: "Articles",
    description: "Retrouvez les articles Fiitsa sur l'e-commerce, l'IA et la business en ligne en Afrique.",
    url: "https://www.fiitsa.com/articles",
    type: "website",
    images: [
      {
        url: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
        width: 1200,
        height: 630,
        alt: "Fiitsa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles",
    description: "Retrouvez les articles Fiitsa sur l'e-commerce, l'IA et la business en ligne en Afrique.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    category?: string;
    tag?: string;
    sort?: "recent" | "popular";
    page?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page || 1);
  const pageSize = 9;
  const [categories, tags, result] = await Promise.all([
    getCategories(),
    getTags(),
    listPosts({
      query: resolvedSearchParams?.query,
      tag: resolvedSearchParams?.tag,
      category: resolvedSearchParams?.category,
      sort: resolvedSearchParams?.sort || "recent",
      page,
      pageSize,
    }),
  ]);

  const totalPages = result.count ? Math.ceil(result.count / pageSize) : 1;
  const queryParams = new URLSearchParams();
  if (resolvedSearchParams?.query) queryParams.set("query", resolvedSearchParams.query);
  if (resolvedSearchParams?.category) queryParams.set("category", resolvedSearchParams.category);
  if (resolvedSearchParams?.tag) queryParams.set("tag", resolvedSearchParams.tag);
  if (resolvedSearchParams?.sort) queryParams.set("sort", resolvedSearchParams.sort);

  return (
    <div className="space-y-10 [--primary:51_100%_50%] [--primary-foreground:45_100%_10%]">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-semibold text-primary md:text-left">
          <Trans fr="Tous les articles" en="All articles" />
        </h1>
        <p className="mt-2 text-sm text-primary/80 md:text-left">
          <Trans
            fr="Explorez tous nos contenus autour du business en ligne, e-commerce et IA en Afrique."
            en="Explore all our content about online business, e-commerce, and AI in Africa."
          />
        </p>
      </div>

      <Suspense
        fallback={
          <div className="rounded-3xl border border-border/60 bg-background/80 p-4 text-sm text-muted-foreground">
            <Trans fr="Chargement des articles filtrés..." en="Loading filtered articles..." />
          </div>
        }
      >
        <ArticlesFilters categories={categories} tags={tags} />
      </Suspense>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {result.data.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            <Trans
              fr="Aucun article ne correspond à votre recherche."
              en="No articles match your search."
            />
          </p>
        ) : (
          result.data.map((post) => <ArticleCard key={post.id} post={post} />)
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath="/articles"
        queryString={queryParams.toString()}
      />
    </div>
  );
}

import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";
import { Trans } from "@/components/Trans";
import { listPosts } from "@/lib/posts";
import { absoluteUrl, formatSlugTitle } from "@/lib/seo";

export const revalidate = 120;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const title = formatSlugTitle(slug);
  const description = `Articles Fiitsa dans la categorie ${title}.`;
  const canonical = absoluteUrl(`/categories/${slug}`);

  return {
    title: `Categorie ${title}`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `Categorie ${title}`,
      description,
      url: canonical,
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
      title: `Categorie ${title}`,
      description,
      images: [
        "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
      ],
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { page?: string };
}) {
  const { slug } = params;
  const page = Number(searchParams?.page || 1);
  const pageSize = 9;
  const title = formatSlugTitle(slug);

  const result = await listPosts({ category: slug, page, pageSize });
  const totalPages = result.count ? Math.ceil(result.count / pageSize) : 1;

  return (
    <div className="space-y-10 [--primary:51_100%_50%] [--primary-foreground:45_100%_10%]">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
          <Trans fr="Categorie" en="Category" />
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-primary">{title}</h1>
        <p className="mt-2 text-sm text-primary/80">
          <Trans
            fr={`Decouvre les articles et ressources Fiitsa sur ${title}.`}
            en={`Discover Fiitsa articles and resources about ${title}.`}
          />
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {result.data.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            <Trans fr="Aucun article pour cette categorie." en="No articles for this category." />
          </p>
        ) : (
          result.data.map((post) => <ArticleCard key={post.id} post={post} />)
        )}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} basePath={`/categories/${slug}`} />
      <div className="text-sm text-muted-foreground">
        <Trans fr="Voir aussi toutes les categories et tags." en="See all categories and tags." />{" "}
        <a className="text-primary underline" href="/categories">
          <Trans fr="Categories" en="Categories" />
        </a>{" "}
        <span>·</span>{" "}
        <a className="text-primary underline" href="/tags">
          <Trans fr="Tags" en="Tags" />
        </a>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleContent } from "@/components/ArticleContent";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocalizedDate } from "@/components/LocalizedDate";
import { Reviews } from "@/components/Reviews";
import { ShareBar } from "@/components/ShareBar";
import { TOC } from "@/components/TOC";
import { Trans } from "@/components/Trans";
import { ViewTracker } from "@/components/ViewTracker";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { getAllPostSlugs, getPostBySlug, getSimilarPosts, listApprovedReviews } from "@/lib/posts";
import { buildArticleJsonLd, buildArticleMetadata, buildBreadcrumbs } from "@/lib/seo";
import { estimateReadingTime } from "@/lib/content";

export const revalidate = 120;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return buildArticleMetadata(post);
}

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ reviewsPage?: string }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const reviewsPage = Number(resolvedSearchParams?.reviewsPage || 1);
  const pageSize = 6;
  const [reviewsResult, similarPosts] = await Promise.all([
    listApprovedReviews(post.id, reviewsPage, pageSize),
    getSimilarPosts(post),
  ]);

  const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://fiitsa.com"}/articles/${post.slug}`;
  const readingTime = post.reading_time || estimateReadingTime(post.content);

  return (
    <div className="space-y-10 md:space-y-14 [--primary:51_100%_50%] [--primary-foreground:45_100%_10%]">
      <ViewTracker postId={post.id} />
      <Breadcrumbs
        items={[
          { label: <Trans fr="Accueil" en="Home" />, href: "/" },
          { label: <Trans fr="Articles" en="Articles" />, href: "/articles" },
          { label: post.title, href: `/articles/${post.slug}` },
        ]}
      />

      <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="space-y-6 md:space-y-8">
          <div className="lg:hidden">
            <TOC content={post.content} />
          </div>
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-2xl font-semibold leading-tight text-primary sm:text-3xl md:text-4xl">
              {post.title}
            </h1>
            <p className="text-base text-primary/80 sm:text-lg">
              {post.description ? (
                post.description
              ) : (
                <Trans
                  fr="Un guide complet pour accélérer la croissance de votre business."
                  en="A complete guide to accelerate your business's growth."
                />
              )}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:gap-4 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author_name || <Trans fr="Équipe Fiitsa" en="Fiitsa Team" />}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.published_at ? <LocalizedDate date={post.published_at} /> : ""}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readingTime} min
              </span>
            </div>
          </div>
          <ShareBar url={articleUrl} title={post.title} embedSlug={post.slug} />
          <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-border/60 sm:h-64 md:h-72 lg:h-80">
            <Image
              src={post.cover_url || "/og-default.png"}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
          <ShareBar url={articleUrl} title={post.title} embedSlug={post.slug} />
          <ArticleContent content={post.content} />
          <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
            <p className="text-sm font-semibold text-primary">
              <Trans fr="Tags et catégories" en="Tags and categories" />
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
              {post.category_slug && (
                <Link
                  href={`/categories/${post.category_slug}`}
                  className="rounded-full border border-[#FFD700]/50 bg-[#FFD700]/15 px-3 py-1 text-xs font-semibold text-[#2D0A49]"
                >
                  Categorie: #{post.category_slug}
                </Link>
              )}
              {(post.tags || []).map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="rounded-full border border-[#2D0A49]/20 bg-[#2D0A49]/5 px-3 py-1 text-xs font-medium text-[#2D0A49]"
                >
                  Tag: #{tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6 lg:sticky lg:top-24">
          <div className="hidden lg:block">
            <TOC content={post.content} />
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
            <p className="text-sm font-semibold text-primary">
              <Trans fr="Partager" en="Share" />
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              <Trans
                fr="Partagez cet article avec votre équipe."
                en="Share this article with your team."
              />
            </p>
            <div className="mt-3">
              <ShareBar url={articleUrl} title={post.title} embedSlug={post.slug} />
            </div>
          </div>
        </div>
      </section>

      <Reviews
        postId={post.id}
        postSlug={post.slug}
        reviews={reviewsResult.data}
        count={reviewsResult.count}
        page={reviewsPage}
        pageSize={pageSize}
      />

      {similarPosts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-primary">
              <Trans fr="Articles similaires" en="Related articles" />
            </h2>
            <Link href="/articles" className="text-sm text-muted-foreground">
              <Trans fr="Voir tous les articles" en="See all articles" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {similarPosts.map((item) => (
              <ArticleCard key={item.id} post={item} />
            ))}
          </div>
        </section>
      )}

      <SEOJsonLd data={buildArticleJsonLd(post)} />
      <SEOJsonLd
        data={buildBreadcrumbs([
          { name: "Accueil", url: "/" },
          { name: "Articles", url: "/articles" },
          { name: post.title, url: `/articles/${post.slug}` },
        ])}
      />
    </div>
  );
}

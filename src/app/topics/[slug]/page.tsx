import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { listPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/seo";
import { getTopic, topics } from "@/lib/topics";

export const revalidate = 120;

export async function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const topic = getTopic(params.slug);
  if (!topic) {
    return {
      title: "Topic",
      description: "Topic Fiitsa",
    };
  }
  const canonical = absoluteUrl(`/topics/${topic.slug}`);
  return {
    title: topic.title,
    description: topic.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: topic.title,
      description: topic.description,
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
      title: topic.title,
      description: topic.description,
      images: [
        "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
      ],
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic = getTopic(params.slug);
  if (!topic) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">Topic</h1>
        <p className="text-sm text-muted-foreground">Topic introuvable.</p>
      </div>
    );
  }

  const result = await listPosts({
    tag: topic.tag,
    category: topic.category,
    query: topic.query,
    page: 1,
    pageSize: 12,
  });

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Topic</p>
        <h1 className="mt-2 text-3xl font-semibold">{topic.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{topic.intro}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {result.data.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucun article pour ce topic.</p>
        ) : (
          result.data.map((post) => <ArticleCard key={post.id} post={post} />)
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        Voir tous les articles{" "}
        <Link href="/articles" className="text-primary underline">
          ici
        </Link>
        .
      </div>

      {topic.faqs && topic.faqs.length > 0 && (
        <SEOJsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: topic.faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }}
        />
      )}
    </div>
  );
}

import { SearchClient } from "@/components/SearchClient";
import { listPosts } from "@/lib/posts";

export const revalidate = 120;

export const metadata = {
  title: "Recherche",
  description: "Trouvez rapidement un sujet, un tag ou une categorie.",
  alternates: {
    canonical: "https://www.fiitsa.com/search",
  },
  openGraph: {
    title: "Recherche",
    description: "Trouvez rapidement un sujet, un tag ou une categorie.",
    url: "https://www.fiitsa.com/search",
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
    title: "Recherche",
    description: "Trouvez rapidement un sujet, un tag ou une categorie.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export default async function SearchPage() {
  const { data } = await listPosts({ pageSize: 200 });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Recherche</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Trouvez rapidement un sujet, un tag ou une catégorie.
        </p>
      </div>
      <SearchClient posts={data} />
    </div>
  );
}

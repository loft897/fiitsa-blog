import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Trans } from "@/components/Trans";
import { getCategories } from "@/lib/posts";

export const revalidate = 300;

export const metadata = {
  title: "Categories",
  description: "Retrouvez tous nos sujets classes par categorie.",
  alternates: {
    canonical: "https://www.fiitsa.com/categories",
  },
  openGraph: {
    title: "Categories",
    description: "Retrouvez tous nos sujets classés par categorie.",
    url: "https://www.fiitsa.com/categories",
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
    title: "Categories",
    description: "Retrouvez tous nos sujets classés par categorie.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6 [--primary:51_100%_50%] [--primary-foreground:45_100%_10%]">
      <div>
        <h1 className="text-3xl font-semibold text-primary">
          <Trans fr="Catégories" en="Categories" />
        </h1>
        <p className="mt-2 text-sm text-primary/80">
          <Trans
            fr="Retrouvez tous nos sujets classés par catégorie."
            en="Browse all topics grouped by category."
          />
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge key={category} variant="secondary" className="text-sm">
            <Link href={`/categories/${category}`}>{category}</Link>
          </Badge>
        ))}
      </div>
    </div>
  );
}

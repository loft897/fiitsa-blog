import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Trans } from "@/components/Trans";
import { getCategories } from "@/lib/posts";

export const revalidate = 300;

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
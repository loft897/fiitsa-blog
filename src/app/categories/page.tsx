import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getCatégories } from "@/lib/posts";

export const revalidate = 300;

export default async function CatégoriesPage() {
  const catégories = await getCatégories();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Catégories</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Retrouvez tous nos sujets classes par catégories.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {catégories.map((category) => (
          <Badge key={category} variant="secondary" className="text-sm">
            <Link href={`/catégories/${category}`}>{category}</Link>
          </Badge>
        ))}
      </div>
    </div>
  );
}

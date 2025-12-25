import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getTags } from "@/lib/posts";

export const revalidate = 300;

export const metadata = {
  title: "Tags",
  description: "Explorez les articles par tags.",
  alternates: {
    canonical: "https://www.fiitsa.com/tags",
  },
  openGraph: {
    title: "Tags",
    description: "Explorez les articles par tags.",
    url: "https://www.fiitsa.com/tags",
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
    title: "Tags",
    description: "Explorez les articles par tags.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Tags</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Explorez les articles par tags.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-sm">
            <Link href={`/tags/${tag}`}>{tag}</Link>
          </Badge>
        ))}
      </div>
    </div>
  );
}

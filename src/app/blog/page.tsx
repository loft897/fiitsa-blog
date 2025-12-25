import type { Metadata } from "next";

export { default } from "../articles/page";

export const metadata: Metadata = {
  title: "Blog",
  description: "Retrouvez les articles Fiitsa sur l'e-commerce, l'IA et la business en ligne en Afrique.",
  alternates: {
    canonical: "https://www.fiitsa.com/blog",
  },
  openGraph: {
    title: "Blog",
    description: "Retrouvez les articles Fiitsa sur l'e-commerce, l'IA et la croissance en Afrique.",
    url: "https://www.fiitsa.com/blog",
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
    title: "Blog",
    description: "Retrouvez les articles Fiitsa sur l'e-commerce, l'IA et la croissance en Afrique.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export const revalidate = 120;

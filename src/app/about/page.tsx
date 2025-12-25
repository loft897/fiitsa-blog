import type { Metadata } from "next";
import AboutClient from "@/app/about/AboutClient";

export const metadata: Metadata = {
  title: "A propos de Fiitsa",
  description:
    "Découvrez la mission de Fiitsa et notre engagement pour l'entrepreneuriat africain.",
  alternates: {
    canonical: "https://www.fiitsa.com/about",
  },
  openGraph: {
    title: "A propos de Fiitsa",
    description:
      "Découvrez la mission de Fiitsa et notre engagement pour l'entrepreneuriat africain.",
    url: "https://www.fiitsa.com/about",
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
    title: "A propos de Fiitsa",
    description:
      "Découvrez la mission de Fiitsa et notre engagement pour l'entrepreneuriat africain.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

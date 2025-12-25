import type { Metadata } from "next";
import LegalClient from "@/app/legal/LegalClient";

const ogImage =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png";

export const metadata: Metadata = {
  title: "Mentions legales Fiitsa",
  description: "Informations légales et éditeur du site Fiitsa.",
  alternates: {
    canonical: "https://www.fiitsa.com/legal",
  },
  openGraph: {
    title: "Mentions legales Fiitsa",
    description: "Informations légales et éditeur du site Fiitsa.",
    url: "https://www.fiitsa.com/legal",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Fiitsa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions legales Fiitsa",
    description: "Informations légales et éditeur du site Fiitsa.",
    images: [ogImage],
  },
};

export default function LegalPage() {
  return <LegalClient />;
}

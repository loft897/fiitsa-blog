import type { Metadata } from "next";
import TermsClient from "@/app/terms/TermsClient";

const ogImage =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png";

export const metadata: Metadata = {
  title: "Conditions d'utilisation Fiitsa",
  description: "Consultez les conditions d'utilisation et les règles de la plateforme Fiitsa.",
  alternates: {
    canonical: "https://www.fiitsa.com/terms",
  },
  openGraph: {
    title: "Conditions d'utilisation Fiitsa",
    description: "Consultez les conditions d'utilisation et les règles de la plateforme Fiitsa.",
    url: "https://www.fiitsa.com/terms",
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
    title: "Conditions d'utilisation Fiitsa",
    description: "Consultez les conditions d'utilisation et les règles de la plateforme Fiitsa.",
    images: [ogImage],
  },
};

export default function TermsPage() {
  return <TermsClient />;
}

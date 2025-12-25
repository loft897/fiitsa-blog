import type { Metadata } from "next";
import PrivacyClient from "@/app/privacy/PrivacyClient";

const ogImage =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png";

export const metadata: Metadata = {
  title: "Politique de confidentialité Fiitsa",
  description: "Consultez la politique de confidentialiteé et la protection des donnees chez Fiitsa.",
  alternates: {
    canonical: "https://www.fiitsa.com/privacy",
  },
  openGraph: {
    title: "Politique de confidentialite Fiitsa",
    description: "Consultez la politique de confidentialité et la protection des données chez Fiitsa.",
    url: "https://www.fiitsa.com/privacy",
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
    title: "Politique de confidentialite Fiitsa",
    description: "Consultez la politique de confidentialité et la protection des données chez Fiitsa.",
    images: [ogImage],
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}

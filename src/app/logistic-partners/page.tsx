import type { Metadata } from "next";
import LogisticsPartnersClient from "@/app/logistic-partners/LogisticsPartnersClient";

const ogImage =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png";

export const metadata: Metadata = {
  title: "Partenaires logistiques Fiitsa",
  description: "Trouvez un transitaire Chine-Afrique ou un partenaire local pour votre logistique.",
  alternates: {
    canonical: "https://www.fiitsa.com/logistics-partners",
  },
  openGraph: {
    title: "Partenaires logistiques Fiitsa",
    description: "Trouvez un transitaire Chine-Afrique ou un partenaire local pour votre logistique.",
    url: "https://www.fiitsa.com/logistics-partners",
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
    title: "Partenaires logistiques Fiitsa",
    description: "Trouvez un transitaire Chine-Afrique ou un partenaire local pour votre logistique.",
    images: [ogImage],
  },
};

export default function LogisticsPartnersPage() {
  return <LogisticsPartnersClient />;
}

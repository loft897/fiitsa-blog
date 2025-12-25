import type { Metadata } from "next";
import BecomeLogisticPartnerClient from "@/app/become-logistic-partner/BecomeLogisticPartnerClient";

const ogImage =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png";

export const metadata: Metadata = {
  title: "Devenir partenaire logistique Fiitsa",
  description: "Rejoignez le reseau de partenaires logistiques Fiitsa en Afrique.",
  alternates: {
    canonical: "https://www.fiitsa.com/become-logistic-partner",
  },
  openGraph: {
    title: "Devenir partenaire logistique Fiitsa",
    description: "Rejoignez le reseau de partenaires logistiques Fiitsa en Afrique.",
    url: "https://www.fiitsa.com/become-logistic-partner",
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
    title: "Devenir partenaire logistique Fiitsa",
    description: "Rejoignez le reseau de partenaires logistiques Fiitsa en Afrique.",
    images: [ogImage],
  },
};

export default function BecomeLogisticPartnerPage() {
  return <BecomeLogisticPartnerClient />;
}

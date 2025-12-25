import type { Metadata } from "next";
import WhatsappPricingClient from "@/app/whatsapp-pricing/WhatsappPricingClient";

const ogImage =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png";

export const metadata: Metadata = {
  title: "Tarifs WhatsApp Business API Afrique 2025",
  description:
    "Decouvrez les tarifs WhatsApp Business API pour l'Afrique, simulateur de prix et exemples concrets.",
  alternates: {
    canonical: "https://www.fiitsa.com/whatsapp-pricing",
  },
  openGraph: {
    title: "Tarifs WhatsApp Business API Afrique 2025",
    description:
      "Decouvrez les tarifs WhatsApp Business API pour l'Afrique, simulateur de prix et exemples concrets.",
    url: "https://www.fiitsa.com/whatsapp-pricing",
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
    title: "Tarifs WhatsApp Business API Afrique 2025",
    description:
      "Decouvrez les tarifs WhatsApp Business API pour l'Afrique, simulateur de prix et exemples concrets.",
    images: [ogImage],
  },
};

export default function WhatsappPricingPage() {
  return <WhatsappPricingClient />;
}

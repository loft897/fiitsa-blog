import type { Metadata } from "next";
import BetaTestingClient from "@/app/beta-testing-program/BetaTestingClient";

const ogImage =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png";

export const metadata: Metadata = {
  title: "Programme Beta-Testeurs Fiitsa",
  description:
    "Rejoignez les beta-testeurs Fiitsa avec 0% commission pendant 3 mois et un acces aux fonctionnalités premium.",
  alternates: {
    canonical: "https://www.fiitsa.com/beta-testing-program",
  },
  openGraph: {
    title: "Programme Beta-Testeurs Fiitsa",
    description:
      "Rejoignez les beta-testeurs Fiitsa avec 0% commission pendant 3 mois et un acces aux fonctionnalités premium.",
    url: "https://www.fiitsa.com/beta-testing-program",
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
    title: "Programme Beta-Testeurs Fiitsa",
    description:
      "Rejoignez les beta-testeurs Fiitsa avec 0% commission pendant 3 mois et un acces aux fonctionnalités premium.",
    images: [ogImage],
  },
};

export default function BetaTestingPage() {
  return <BetaTestingClient />;
}

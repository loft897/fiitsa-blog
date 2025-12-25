import type { Metadata } from "next";
import ContactsClient from "@/app/contacts/ContactsClient";

export const metadata: Metadata = {
  title: "Contact Fiitsa",
  description: "Contactez Fiitsa pour une démo, un accompagnement ou une question.",
  alternates: {
    canonical: "https://www.fiitsa.com/contact",
  },
  openGraph: {
    title: "Contact Fiitsa",
    description: "Contactez Fiitsa pour une démo, un accompagnement ou une question.",
    url: "https://www.fiitsa.com/contact",
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
    title: "Contact Fiitsa",
    description: "Contactez Fiitsa pour une démo, un accompagnement ou une question.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export default function ContactPage() {
  return <ContactsClient />;
}

export type TopicConfig = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  tag?: string;
  category?: string;
  query?: string;
  faqs?: { question: string; answer: string }[];
};

export const topics: TopicConfig[] = [
  {
    slug: "ecommerce",
    title: "E-commerce en Afrique",
    description: "Guides et strategies pour vendre en ligne en Afrique.",
    intro:
      "Decouvre les meilleures pratiques pour lancer, gerer et faire grandir un business e-commerce en Afrique.",
    tag: "ecommerce",
    faqs: [
      {
        question: "Quels sont les meilleurs canaux pour vendre en Afrique ?",
        answer:
          "WhatsApp, les marketplaces et les boutiques en ligne sont les canaux les plus efficaces selon le type de produit.",
      },
      {
        question: "Quels paiements fonctionnent le mieux ?",
        answer:
          "Le Mobile Money reste le standard, complete par la carte bancaire pour la diaspora et l'urbain.",
      },
    ],
  },
  {
    slug: "whatsapp",
    title: "WhatsApp Business",
    description: "Vente, support et automatisation via WhatsApp Business.",
    intro:
      "Tout ce qu'il faut pour utiliser WhatsApp comme canal de vente et de support client en Afrique.",
    query: "WhatsApp",
  },
  {
    slug: "mobile-money",
    title: "Mobile Money",
    description: "Paiements Mobile Money et conversion en Afrique.",
    intro:
      "Conseils pratiques pour activer, optimiser et securiser les paiements Mobile Money.",
    query: "Mobile Money",
  },
  {
    slug: "ia",
    title: "IA et automatisation",
    description: "IA, automatisation et croissance pour les e-commercants.",
    intro:
      "Automatise la vente et le support avec l'IA pour gagner du temps et scaler.",
    tag: "IA",
  },
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug) || null;
}

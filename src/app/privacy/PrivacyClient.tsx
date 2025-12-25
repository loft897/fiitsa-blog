"use client";

import MarketingLayout from "@/components/marketing/MarketingLayout";

export default function PrivacyClient() {
  const updatedAt = new Date().toLocaleDateString("fr-FR");

  return (
    <MarketingLayout>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-fiitsa-dark">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-lg text-gray-600">
            Dernière mise à jour : {updatedAt}
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">
              1. Collecte des données
            </h2>
            <p className="leading-relaxed text-gray-600">
              Fiitsa collecte uniquement les données nécessaires au bon fonctionnement
              de sa plateforme de vente en ligne. Nous respectons strictement le RGPD
              ainsi que les législations locales africaines en matière de protection
              des données.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">
              2. Utilisation des données
            </h2>
            <p className="leading-relaxed text-gray-600">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              <li>Gérer votre compte et vos boutiques</li>
              <li>Traiter vos commandes et paiements</li>
              <li>Vous fournir un support client</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">
              3. Protection des données
            </h2>
            <p className="leading-relaxed text-gray-600">
              Nous utilisons des technologies de chiffrement avancées ainsi que des
              serveurs sécurisés pour protéger vos données. Aucune donnée n’est
              vendue, louée ou partagée avec des tiers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">
              4. Vos droits
            </h2>
            <p className="leading-relaxed text-gray-600">
              Vous disposez d’un droit d’accès, de modification, de suppression
              de vos données, ainsi que d’un droit de limitation de leur traitement.
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:hello@fiitsa.com"
                className="text-fiitsa-purple hover:underline"
              >
                hello@fiitsa.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">
              5. Contact
            </h2>
            <p className="leading-relaxed text-gray-600">
              Pour toute question concernant cette politique de confidentialité,
              vous pouvez nous contacter :
            </p>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Thementor Solutions LLC</strong>
              </p>
              <p>
                1704 LLANO ST STE B-1430, SANTA FE, Nouveau-Mexique,
                87505, États-Unis
              </p>
              <p>Email : hello@fiitsa.com</p>
              <p>WhatsApp : +33 7 63 47 79 07</p>
              <p>Directeur de la publication : Galus FOTSO</p>
            </div>
          </section>
        </div>
      </div>
    </MarketingLayout>
  );
}

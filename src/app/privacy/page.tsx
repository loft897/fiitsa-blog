"use client";

import MarketingLayout from "@/components/marketing/MarketingLayout";

export default function PrivacyPage() {
  const updatedAt = new Date().toLocaleDateString("fr-FR");

  return (
    <MarketingLayout>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-fiitsa-dark">Politique de confidentialité</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-lg text-gray-600">Derniere mise a jour : {updatedAt}</p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">1. Collecte des données</h2>
            <p className="text-gray-600 leading-relaxed">
              Fiitsa collecte uniquement les données necessaires au fonctionnement de notre plateforme de vente en ligne.
              Nous respectons strictement le RGPD et les legislations locales africaines en matiere de protection des
              données.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">2. Utilisation des données</h2>
            <p className="text-gray-600 leading-relaxed">Vos données sont utilisées pour :</p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              <li>Gerer votre compte et vos boutiques</li>
              <li>Traiter vos commandes et paiements</li>
              <li>Vous fournir un support client</li>
              <li>Ameliorer nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">3. Protection des données</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous utilisons des technologies de cryptage avancées et des serveurs sécurisés pour protéger vos données.
              Aucune donnée n'est vendue à des tiers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">4. Vos droits</h2>
            <p className="text-gray-600 leading-relaxed">
              Vous avez le droit d'accéder, modifier, supprimer vos données ou de limiter leur traitement. Contactez-nous
              a <a href="mailto:hello@fiitsa.com" className="text-fiitsa-purple hover:underline">hello@fiitsa.com</a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">5. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité, contactez-nous :
            </p>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Thementor Solutions LLC</strong>
              </p>
              <p>1704 LLANO ST STE B-1430, SANTA FE, Nouveau-Mexique, 87505, États-Unis</p>
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

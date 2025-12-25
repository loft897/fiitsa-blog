"use client";

import MarketingLayout from "@/components/marketing/MarketingLayout";

export default function LegalPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-fiitsa-dark">Mentions légales</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">Editeur du site</h2>
            <ul className="list-none space-y-2 text-gray-600">
              <li>
                <strong>Raison sociale :</strong> Thementor Solutions LLC
              </li>
              <li>
                <strong>Siège social :</strong> 1704 LLANO ST STE B-1430 SANTA FE, Nouveau-Mexique, 87505, États-Unis
              </li>
              <li>
                <strong>Email :</strong> hello@fiitsa.com
              </li>
              <li>
                <strong>Telephone (WhatsApp) :</strong> +33 7 63 47 79 07
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">Directeur de publication</h2>
            <p className="text-gray-600">
              Le directeur de publication est Galus FOTSO, représentant légal de Thementor Solutions LLC.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">Hebergement</h2>
            <ul className="list-none space-y-2 text-gray-600">
              <li>
                <strong>Hebergeur :</strong> Vercel Inc.
              </li>
              <li>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur.
              Toute reproduction, même partielle, est interdite sans autorisation préalable écrite de Fiitsa.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">Données personnelles</h2>
            <p className="text-gray-600 leading-relaxed">
              Conformément à la loi sur la protection des données, vous disposez d'un droit d'accès, de rectification et de
              suppression des données vous concernant. Pour exercer ce droit, contactez-nous a hello@fiitsa.com
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite.
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site
              pourraient ne plus fonctionner correctement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">Droit applicable</h2>
            <p className="text-gray-600 leading-relaxed">Les présentes mentions légales sont soumises au droit américain.</p>
          </section>
        </div>
      </div>
    </MarketingLayout>
  );
}

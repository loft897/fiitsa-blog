"use client";

import MarketingLayout from "@/components/marketing/MarketingLayout";

export default function TermsClient() {
  const updatedAt = new Date().toLocaleDateString("fr-FR");

  return (
    <MarketingLayout>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-fiitsa-dark">Conditions d&apos;utilisation</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-lg text-gray-600">Dernière mise à jour : {updatedAt}</p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">1. Acceptation des conditions</h2>
            <p className="text-gray-600 leading-relaxed">
              En utilisant Fiitsa, vous acceptez les présentes conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces
              conditions, veuillez ne pas utiliser notre service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">2. Description du service</h2>
            <p className="text-gray-600 leading-relaxed">
              Fiitsa est une plateforme de vente en ligne qui permet aux créateurs africains de vendre des produits
              numériques, physiques et des services. Nous proposons des outils de gestion, de marketing et de paiement
              adaptés au marché africain.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">3. Comptes utilisateurs</h2>
            <p className="text-gray-600 leading-relaxed">
              Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion et de toutes les
              activités qui se produisent sous votre compte.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">4. Tarification et commissions</h2>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              <li>Plan unique avec commission dégressive :</li>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>0 à 19&nbsp;999&nbsp;FCFA : 12&nbsp;% de commission</li>
                <li>20&nbsp;000 à 49&nbsp;999&nbsp;FCFA : 9&nbsp;% de commission</li>
                <li>50&nbsp;000&nbsp;FCFA et plus : 7&nbsp;% de commission</li>
              </ul>
              <li>Option Premium — Agent IA + Meta : 49&nbsp;900&nbsp;FCFA/mois</li>
              <li>Accès gratuit pour commencer</li>
              <li>Aucun frais caché ni surprise</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">5. Contenu interdit</h2>
            <p className="text-gray-600 leading-relaxed">
              Il est interdit de vendre sur Fiitsa des contenus illégaux, contrefaits ou violant les droits d&apos;auteur.
              Nous nous réservons le droit de suspendre tout compte en violation de ces règles.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">6. Limitation de responsabilité</h2>
            <p className="text-gray-600 leading-relaxed">
              Fiitsa fournit la plateforme &quot;en l&apos;état&quot; et ne peut être tenue responsable des pertes indirectes ou des
              dommages spéciaux résultant de l&apos;utilisation du service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">7. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Pour toute question concernant ces conditions, contactez-nous :
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

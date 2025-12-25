"use client";

import MarketingLayout from "@/components/marketing/MarketingLayout";

export default function TermsPage() {
  const updatedAt = new Date().toLocaleDateString("fr-FR");

  return (
    <MarketingLayout>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-fiitsa-dark">Conditions d'utilisation</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-lg text-gray-600">Derniere mise a jour : {updatedAt}</p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">1. Acceptation des conditions</h2>
            <p className="text-gray-600 leading-relaxed">
              En utilisant Fiitsa, vous acceptez les présentes conditions d'utilisation. Si vous n'acceptez pas ces
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
                <li>0 a 19 999 FCFA : 12% de commission</li>
                <li>20 000 a 49 999 FCFA : 9% de commission</li>
                <li>50 000 FCFA et plus : 7% de commission</li>
              </ul>
              <li>Option Premium - Agent IA + Meta : 49 900 FCFA/mois</li>
              <li>Accès gratuit pour commencer</li>
              <li>Aucun frais cache ou surprise</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">5. Contenu interdit</h2>
            <p className="text-gray-600 leading-relaxed">
              Il est interdit de vendre sur Fiitsa des contenus illegaux, contrefaits, ou violant les droits d'auteur.
              Nous nous reservons le droit de suspendre tout compte en violation de ces règles.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">6. Limitation de responsabilite</h2>
            <p className="text-gray-600 leading-relaxed">
              Fiitsa fournit la plateforme "en l'etat" et ne peut être tenu responsable des pertes indirectes ou des
              dommages spéciaux resultant de l'utilisation du service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-fiitsa-dark">7. Contact</h2>
            <p className="text-gray-600 leading-relaxed">Pour toute question concernant ces conditions, contactez-nous :</p>
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

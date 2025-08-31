import { CONTACT_MAIL } from "@/data/config";

function ChartPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Charte éditoriale - Ripoulitique.com
        </h1>
        <p className="text-gray-600">
          Document de référence pour la protection juridique et l'éthique
          éditoriale
        </p>
      </header>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            1
          </span>
          Principes fondamentaux
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-800">Objectif</h3>
            <p>
              Informer le public sur les affaires judiciaires impliquant des
              personnalités politiques françaises, dans un souci de transparence
              démocratique et d'intérêt général.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Neutralité</h3>
            <p>
              Le site s'engage à traiter toutes les personnalités politiques de
              manière équitable, sans distinction de parti ou d'orientation
              politique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            2
          </span>
          Critères de publication stricts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">
              ✓ Seront publiées :
            </h3>
            <ul className="space-y-2 text-green-700">
              <li>
                • Les condamnations définitives (après épuisement des voies de
                recours)
              </li>
              <li>• Les affaires en cours devant une juridiction compétente</li>
              <li>• Les mises en examen et renvois devant un tribunal</li>
              <li>
                • Les relaxes et acquittements (pour transparence complète)
              </li>
              <li>• Les non-lieux et classements sans suite motivés</li>
              <li>• Les compositions pénales et transactions judiciaires</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">
              ✗ Ne seront PAS publiées :
            </h3>
            <ul className="space-y-2 text-red-700">
              <li>• Les rumeurs non vérifiées par une source judiciaire</li>
              <li>• Les allégations sans fondement juridique</li>
              <li>• Les plaintes non instruites ou classées sans suite</li>
              <li>• Les accusations sans saisine d'une autorité judiciaire</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            3
          </span>
          Sources et vérification
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Sources autorisées exclusivement :
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Documents judiciaires officiels (jugements, arrêts)</li>
              <li>Communiqués du ministère de la Justice</li>
              <li>
                Articles de la presse institutionnelle et généraliste
                (privilégiant les sources à ligne éditoriale neutre)
              </li>
              <li>
                Encyclopédies collaboratives uniquement pour le contexte, à
                condition que l'information judiciaire provienne d'une des trois
                sources ci-dessus
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Procédure de vérification :
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Vérification approfondie et documentée de chaque source</li>
              <li>Citation obligatoire de toutes les sources</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded mt-3 text-sm">
          <p className="text-blue-800">
            <strong>Note sur les sources de presse :</strong> Sont privilégiées
            les publications reconnues pour leur neutralité éditoriale et leur
            traitement factuel de l'information judiciaire (ex: AFP, Le
            Monde...). Les médias d'opinion marquée, qu'ils soient
            d'investigation militante ou idéologiquement orientés, ne
            constituent pas des sources primaires acceptables.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            4
          </span>
          Rédaction et présentation
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Règles rédactionnelles :
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Ton neutre et factuel</li>
              <li>Pas de commentaires ou d'interprétations</li>
              <li>Utilisation du conditionnel pour les appels en cours</li>
              <li>Respect de la présomption d'innocence</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">
              Structure type d'une fiche :
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
              <li>Nom et fonction de la personne</li>
              <li>Nature des faits reprochés</li>
              <li>Date et juridiction de condamnation</li>
              <li>Peine prononcée</li>
              <li>État des voies de recours</li>
              <li>Sources</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            5
          </span>
          Engagements et mentions légales
        </h2>
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-3">
              Cette charte éditoriale, publiée sur le site, constitue nos
              mentions légales et engagements envers les utilisateurs :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                • Les informations publiées concernent des procédures
                judiciaires officielles et vérifiées
              </li>
              <li>
                • Ce site n'a pas vocation à porter atteinte à l'honneur ou à la
                réputation des personnes mentionnées
              </li>
              <li>
                • Toute erreur signalée sera corrigée dans les plus brefs délais
              </li>
              <li>
                • La présomption d'innocence s'applique à toute procédure en
                cours
              </li>
              <li>
                • Le site respecte le droit à l'oubli et à la réhabilitation
                judiciaire
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Droit de réponse :
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Demande de correction via la section 'Contact' du site</li>
              <li>
                Délai de traitement : dans les 3 jours ouvrés (conformément à la
                loi)
              </li>
              <li>Engagement de meilleur effort pour un traitement rapide</li>
              <li>Publication du droit de réponse si justifié</li>
              <li>
                Traçage de la rectification dans la section 'Statistiques et
                évolutions' pour plus de transparence
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            6
          </span>
          Transparence et mise à jour
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Traçabilité éditoriale :
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Publication individuelle sous responsabilité personnelle</li>
              <li>
                Historique complet des modifications (patchnotes publiques)
              </li>
              <li>Code source auditable sur GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Processus d'actualisation :
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>
                Vérifications régulières dans la limite des moyens disponibles
              </li>
              <li>Système de signalement par les lecteurs encouragé</li>
              <li>Traitement prioritaire des annulations signalées</li>
              <li>Ajout systématique des mentions de réhabilitation</li>
              <li>
                Délai de traitement : meilleur effort, généralement sous 7 jours
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 p-3 rounded mt-4 text-sm">
          <p className="text-amber-800">
            <strong>Note :</strong> Ce site est géré par une personne seule. Les
            mises à jour dépendent des informations portées à ma connaissance.
            J'encourage les lecteurs à signaler toute évolution judiciaire.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            7
          </span>
          Limitations et transparence
        </h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">
            Moyens et ressources :
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Site géré par une personne physique à titre individuel</li>
            <li>
              Veille juridique effectuée dans la limite des moyens disponibles
            </li>
            <li>
              Dépendance aux sources publiques et signalements des lecteurs
            </li>
            <li>Absence de conseil juridique permanent</li>
            <li>Financement personnel sans structure commerciale</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">
            Engagements de bonne foi :
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Traitement équitable de toutes les personnalités politiques</li>
            <li>Correction rapide des erreurs signalées et vérifiées</li>
            <li>Publication transparente de toutes les modifications</li>
            <li>Respect scrupuleux des décisions de justice</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">
            Le site s'interdit :
          </h3>
          <ul className="list-disc list-inside space-y-1 text-red-700 ml-4">
            <li>La publication de photos judiciaires</li>
            <li>Les liens vers des contenus diffamatoires</li>
            <li>La mention de la vie privée ou familiale</li>
            <li>Les commentaires sur l'apparence physique</li>
            <li>Toute forme de classement ou notation</li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            8
          </span>
          Clause de responsabilité
        </h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-700 italic">
            "Ce site a une vocation strictement informative. Il compile des
            informations publiques issues de sources judiciaires officielles. Il
            ne constitue en aucun cas un jugement de valeur sur les personnes
            mentionnées ni une incitation à la haine ou à la discrimination."
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            9
          </span>
          Contact et réclamations
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>Email dédié pour les signalements: {CONTACT_MAIL}</li>
          <li>Délai de traitement visé : 5 jours ouvrés</li>
          <li>Registre public des modifications effectuées</li>
          <li>Accusé de réception automatique pour toute demande</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
            10
          </span>
          Conformité légale
        </h2>
        <p className="text-gray-700 mb-2">Le site s'engage à respecter :</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
          <li>La loi sur la presse du 29 juillet 1881</li>
          <li>Le RGPD</li>
          <li>Les décisions de la CNIL</li>
          <li>La jurisprudence en matière de diffamation</li>
        </ul>
      </section>
    </div>
  );
}

export default ChartPage;

import TechnologyItem from "@/components/service/TechnologyItem";

module.exports = [
  {
    id: 1,
    no: "01",
    title: "Views-builder",
    text: "Une plateforme WYSIWYG permettant de créer des interfaces utilisateur par glisser-déposer.",
    largeImg: "/img/projects/views-builder/components.png",
    largeTitle:
      "Views-builder : Créez des interfaces utilisateur sans écrire de code",
    descriptions: (
      <>
        <p>
          Views-builder est une interface WYSIWYG visant à offrir une expérience
          de création de sites web similaire à Wix. Elle permet aux utilisateurs
          de créer des vues par glisser-déposer, offrant ainsi une grande
          flexibilité et simplicité d'utilisation.
        </p>
        <p>
          Elle offre la possibilité de changer les styles des composants, de
          charger ses propres images.
        </p>
        <p>
          Actuellement, on peut générer le code du site en HTML et en React. Le
          site a été développé en Mithril et JavaScript.
        </p>
        <p>La création des composants se déroule de cette façon:</p>
        <img
          src="/img/projects/views-builder/views-builder.gif"
          alt="Aperçu 1"
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
        <p>
          Vous pouvez visualiser la structure de votre site à partir d'un arbre
          représentant votre DOM. Vous pouvez de cette façon accéder directement
          à un composant cible.
        </p>
        <img
          src="/img/projects/views-builder/root.png"
          alt="Aperçu 2"
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
        <p>
          A la fin de la création du site, l'interface donne la possibilité de
          visualiser le code HTML ou React avec le fichier CSS, et ensuite les
          télécharger dans un dossier zippé. Voici un exemple de génération de
          code HTML:
        </p>
        <img
          src="/img/projects/views-builder/code-html.png"
          alt="Aperçu 2"
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
        <div
          style={{
            marginTop: "10px",
          }}
        >
          L'interface n'étant qu'à ses débuts, il y a plusieurs améliorations à
          venir:
          <ul>
            <li className="improvement">
              Ajout de la possibilité de créer des composants personnalisés.
              Ajouté à cela, l'interface permet pour l'instant d'utiliser les
              composants HTML basiques (span, h1, p, div, etc...). Pour utiliser
              les composants complexes comme les outlet, dropdown, il faut le
              faire soit même. Une amélioration à venir serait les
              configurations de ces composants sur la page.
            </li>
            <li className="improvement">
              L'onglet visuel permettant de changer les styles des composants
              sera grandement amélioré avec principalement des icones pour
              permettre à un utilisateur n'ayant pas de bases en CSS de vite se
              retrouver et de comprendre chaque propriété.
            </li>
            <li className="improvement">
              VS Code sera ajouté pour pouvoir écrire différents scripts même si
              ça ajoute un côté plus "développeur" à l'interface.
            </li>
            <li className="improvement">
              Toute interface WYSIWYG dispose d'une IA permettant de faciliter
              le travail de l'utilisateur. Un LLM sera donc ajouté pour créer
              initialement la page selon les désirs de l'utilisateur. Il n'aura
              qu'à modifier les composants déjà créés.
            </li>
          </ul>
        </div>
        <div className="tokyo_tm_skill_list" style={{ marginTop: "10px" }}>
          <strong>Technologies utilisées :</strong>
          <ul>
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="Mithril"
            />
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="CSS"
            />
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="Express"
            />
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="MongoDB"
            />
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 2,
    no: "02",
    title: "Blog",
    text: "Un blog qui intègre un chatbot se basant sur les articles du site pour répondre à l'utilisateur.",
    largeImg: "/img/projects/blog/question-1.png",
    largeTitle:
      "Blog : Intégration d'un chatbot intelligent basé sur les articles",
    descriptions: (
      <>
        <p>
          Ce blog affiche des articles et intègre un chatbot utilisant le LLM
          d'OpenAI et{" "}
          <a
            href="https://python.langchain.com/v0.2/docs/introduction/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            LangChain
          </a>
          . Le principal but du site est l'implémentation de la fonctionnalité
          RAG (Retrieval-Augmented Generation).
        </p>
        <p>
          La fonctionnalité RAG permet au chatbot d'agir comme un assistant en
          chargeant les articles du site via LangChain et les vectorstores. Le
          chatbot utilise ces articles pour répondre aux questions des
          utilisateurs, fournissant des réponses basées sur le contenu
          disponible. L'intérêt de cette fonctionnalité ici est de pouvoir
          fournir des réponses à jour basées sur les données se trouvant sur
          notre page.
        </p>
        <p>
          Etant donné que la fonctionnalité RAG est celle qu'on cherche à tester
          sur ce site, le visuel n'a pas été optimisé. Il s'agit donc
          d'améliorer grandement le visuel.
        </p>
        <div className="tokyo_tm_skill_list">
          <strong>Technologies utilisées :</strong>
          <ul>
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="Django"
            />
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="SQLite"
            />
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 3,
    no: "03",
    title: "Task manager",
    text: "Une application de gestion des tâches.",
    largeImg: "/img/projects/todo/creation.png",
    largeTitle: "Task Manager : Gérez vos tâches efficacement",
    descriptions: (
      <>
        <p>
          Task Manager est une application conçue pour aider les utilisateurs à
          organiser et à gérer leurs tâches quotidiennes de manière efficace.
          Avec une interface simple et intuitive, vous pouvez facilement
          ajouter, modifier et suivre l'avancement de vos tâches sur plusieurs
          jours voire mois.
        </p>
        <p>
          L'application propose également des fonctionnalités telles que des
          priorités et des étiquettes pour une organisation optimale.
        </p>
        <div className="tokyo_tm_skill_list">
          <strong>Technologies utilisées :</strong>
          <ul>
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="NextJS"
            />
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="Tailwind"
            />
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="PostgreSQL"
            />
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 4,
    no: "04",
    title: "Démineur",
    text: "Une version classique du jeu Le Démineur.",
    largeImg: "/img/projects/demineur/jeu.png",
    largeTitle: "Démineur : Le classique jeu de puzzle",
    descriptions: (
      <>
        <p>
          Redécouvrez le plaisir du jeu classique Le Démineur. Ce projet a été
          réalisé par une équipe de trois personnes dans le cadre d'un projet
          académique.
        </p>
        <img
          src="/img/projects/Demineur/menu-démineur.png"
          alt="Aperçu 2"
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
        <img
          src="/img/projects/Demineur/menu.png"
          alt="Aperçu 2"
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
        <p>
          Le jeu propose trois niveaux de difficulté : facile, moyen et
          difficile. Chaque niveau augmente le nombre de mines et la taille de
          la grille, offrant un défi adapté à chaque joueur.
        </p>
        <p>
          Que vous soyez un débutant ou un expert, Démineur offre plusieurs
          niveaux de difficulté pour vous tenir en haleine.
        </p>
        <img
          src="/img/projects/Demineur/difficulté.png"
          alt="Aperçu 2"
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
        <img
          src="/img/projects/Demineur/partie-facile.png"
          alt="Aperçu 2"
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
        <p>
          Dans le menu principal, vous pouvez accéder aux statistiques
          détaillées de vos parties. Suivez votre temps de jeu, le nombre de
          mines découvertes et vos meilleurs scores pour chaque niveau de
          difficulté.
        </p>
        <img
          src="/img/projects/Demineur/statistiques.png"
          alt="Aperçu 2"
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
        <p>
          Le but est simple : trouvez toutes les mines cachées sans en
          déclencher une seule.
        </p>
        <div className="tokyo_tm_skill_list">
          <strong>Technologies utilisées :</strong>
          <ul>
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="C"
            />
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 5,
    no: "05",
    title: "Page Produit E-commerce",
    text: "Une page produit d'un site d'e-commerce, réalisée dans le cadre d'un défi Frontend Mentor.",
    largeImg: "/img/projects/e-commerce/e-commerce.png",
    largeTitle: "Page Produit E-commerce : Défi Frontend Mentor",
    descriptions: (
      <>
        <p>
          Ce projet est une page produit pour un site d'e-commerce, réalisée
          dans le cadre d'un défi Frontend Mentor.
        </p>
        <div className="tokyo_tm_skill_list">
          <strong>Technologies utilisées :</strong>
          <ul>
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="React"
            />
            <TechnologyItem
              src="/img/svg/rightarrow.svg"
              alt="arrow"
              name="Tailwind"
            />
          </ul>
        </div>
      </>
    ),
  },
];

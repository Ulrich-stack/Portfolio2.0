import React from "react";

const Intro = () => {
  const introContent = {
    name: "COCOSSOU Ulrich",
    designation: "Ingénieur développeur",
    text: (
      <>
        <p>
          Actuellement en première année de cycle d'ingénieurs, je recherche une
          alternance de <strong>2 ans</strong> en développement logiciel avec un rythme souhaité
          de 2 semaines en entreprise suivies de 2 semaines de cours.
        </p>
        <p>
          Titulaire d'une <strong>licence en informatique</strong> et ayant également effectué
          une année en <strong>Master 1 Data Science</strong>, j'ai acquis des connaissances
          solides en développement logiciel et en science des données. En 2023,
          j'ai réalisé un stage de 3 mois en tant que développeur frontend, où
          j'ai perfectionné mes techniques de développement web en équipe.
        </p>
        <p>
          Passionné par le développement web, j'ai appris de nombreux langages
          et frameworks à travers mes projets. Je suis méticuleux, créatif et
          curieux, toujours à la recherche de nouvelles technologies. Je suis
          motivé à rejoindre une entreprise dynamique pour contribuer à des
          projets innovants et stimulants, et je suis certain que mes
          compétences techniques et ma passion pour le développement web seront
          des atouts précieux.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;

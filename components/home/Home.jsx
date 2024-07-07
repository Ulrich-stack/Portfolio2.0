"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          {/*<div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.jpg)",
              }}
            ></div>
          </div>*/}
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">COCOSSOU Ulrich</h3>
            <h4 className="typer">
              <ReactTyped
                strings={[
                  "Développeur",
                  "Développeur web",
                  "Développeur web front-end",
                  "Développeur web fullstack",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              Passionné par la création d'applications web modernes et
              réactives, j'aime transformer des idées innovantes en solutions
              numériques efficaces. Avec une expertise en développement
              front-end et back-end, je suis toujours à la recherche de nouveaux
              défis pour améliorer mes compétences et contribuer à des projets
              inspirants.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;

import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Parcours",
      resume: [
        {
          id: 1,
          year: "2023 - 2026",
          institute: "EILCO",
          degree: "Diplôme d'ingénieur",
        },
        {
          id: 2,
          year: "2022 - 2023",
          institute: "IMSP Bénin",
          degree: "Master I Data Science",
        },
        {
          id: 3,
          year: "2021 - 2022",
          institute: "IMSP Bénin",
          degree: "Licence Informatique",
        },
        {
          id: 4,
          year: "2019 - 2021",
          institute: "IMSP Bénin",
          degree: "Classes préparatoires MPSI",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2023",
          institute: "Startup Alitcha",
          degree: "Développeur web frontend",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;

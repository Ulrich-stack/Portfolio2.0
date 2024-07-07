import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programmation",
      progress: [
        {
          id: 1,
          skillName: "HTML",
          skillValue: "95",
        },
        {
          id: 2,
          skillName: "CSS",
          skillValue: "80",
        },
        {
          id: 3,
          skillName: "TypeScript",
          skillValue: "80",
        },
        {
          id: 4,
          skillName: "Java",
          skillValue: "80",
        },
        {
          id: 5,
          skillName: "SQL",
          skillValue: "80",
        },
        {
          id: 6,
          skillName: "PHP",
          skillValue: "60",
        },
        {
          id: 7,
          skillName: "Python",
          skillValue: "70",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Langues",
      progress: [
        {
          id: 1,
          skillName: "Français",
          skillValue: "100",
        },
        {
          id: 2,
          skillName: "Anglais",
          skillValue: "80",
        },
        {
          id: 3,
          skillName: "Italien",
          skillValue: "20",
        },
      ],
    },
  ];
  
  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="tokyo_progress">
            {item?.progress?.map((skill) => (
              <div
                className="progress_inner"
                data-value={item.skillValue}
                key={skill.id}
              >
                <span>
                  <span className="label">{skill?.skillName}</span>
                  <span className="number">{skill?.skillValue}%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div
                      className="bar_in"
                      style={{ width: skill?.skillValue + "%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;

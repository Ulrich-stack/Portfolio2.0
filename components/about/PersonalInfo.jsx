import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Addresse",
          content: "Calais(62100), Evry-courcouronnes(91000)",
        },
        {
          id: 2,
          name: "Email",
          content: (
            <>
              <a href="mailto:cocossouu1@mail.com">cocossouu1@mail.com</a>
            </>
          ),
        },
        {
          id: 3,
          name: "Phone",
          content: (
            <>
              <a href="tel:+33 7 78 00 84 36">+33 7 78 00 84 36</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 2,
          name: "Etude",
          content: "Diplôme d'ingénieur",
        },
        {
          id: 3,
          name: "Ecole",
          content: (
            <>
              <a href="https://eilco.univ-littoral.fr/" target="_blank">EILCO</a>
            </>
          ),
        },
        {
          id: 4,
          name: "Rythme",
          content: "2 semaines/2 semaines",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;

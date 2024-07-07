import React from "react";

const SocialShare = [
  {
    iconName: "github",
    link: "https://github.com/Ulrich-stack",
  },
  { iconName: "linkedin", 
    link: "https://www.linkedin.com/in/ulrich-cocossou-41a68a24a/" },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;

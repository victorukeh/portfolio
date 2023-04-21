import React from "react";
import "../../styles/css/experience.css";
const Skill = ({ text, logo, color, tooltip }) => {
  return (
    <>
      <div
        className="experience_skill tooltip"
        data-tooltip={tooltip}
        style={{ backgroundColor: color }}
      >
          <img alt="" src={logo} className="experience__image" />
          {/* <p>{text}</p> */}
        </div>
    </>
  );
};

export default Skill;

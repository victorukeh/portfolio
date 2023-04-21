import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../styles/css/experience.css";
const Skill = ({ text, logo, color, tooltip }) => {
  return (
    <>
      <div
        className="experience_skill tooltip"
        data-tooltip={tooltip}
        style={{ backgroundColor: color }}
      >
        <LazyLoadImage className="experience__image" src={logo} alt="Logo" />
        </div>
    </>
  );
};

export default Skill;

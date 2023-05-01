import React from "react";
import "../../styles/css/header.css";
const IconButton = ({ icon, background, color, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className="icon__button"
        style={{
          backgroundColor: `${background}`,
          color: `${color}`,
          marginBottom: "5px",
          cursor: "pointer",
        }}
      >
        {icon}
      </div>
    </a>
  );
};

export default IconButton;

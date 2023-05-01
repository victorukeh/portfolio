import React, {useState} from "react";
import "../../styles/css/header.css";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ScrollNavbar = () => {
  const [active, setActive] = useState("home")
  const changeActive = async(id) => {
    await setActive(id)
  }
  return (
    <div className="scroll__navbar">
      <LazyLoadImage
        src="https://drive.google.com/uc?export=view&id=1fwGjDgOaE4Nn3yBNL2cAQz5W-bRBj8Hv"
        height={100}
        alt="Me"
      />
      <div className="scroll__navbar__links">
        <a
          href="#home"
          id="#home"
          className={
            active === "home" ? "scrollbar__active" : "scrollbar__inactive"
          }
          onClick={() => changeActive("home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={
            active === "about" ? "scrollbar__active" : "scrollbar__inactive"
          }
          onClick={() => changeActive("about")}
        >
          About
        </a>
        <a
          href="#educate"
          className={
            active === "educate" ? "scrollbar__active" : "scrollbar__inactive"
          }
          onClick={() => changeActive("educate")}
        >
          Education
        </a>
        <a
          href="#exp"
          className={
            active === "exp" ? "scrollbar__active" : "scrollbar__inactive"
          }
          onClick={() => changeActive("exp")}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={
            active === "projects" ? "scrollbar__active" : "scrollbar__inactive"
          }
          onClick={() => changeActive("projects")}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={
            active === "contact" ? "scrollbar__active" : "scrollbar__inactive"
          }
          onClick={() => changeActive("contact")}
        >
          Contact
        </a>
      </div>
      <IconButton style={{ marginRight: "3%" }}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default ScrollNavbar;

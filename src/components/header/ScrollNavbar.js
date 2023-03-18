import React from "react";
import "../../styles/css/header.css";
import victor from "../../styles/images/v.png";
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const ScrollNavbar = () => {
  return (
    <div className="scroll__navbar">
      <img alt="" src={victor} height="100" style={{ marginTop: "-22px" }} />
      {/* <div>
            <h2>Logo</h2>
        </div> */}

      <div className="scroll__navbar__links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Education</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </div>
        <IconButton style={{marginRight:"3%"}}>
          <MenuIcon />
        </IconButton>
    </div>
  );
};

export default ScrollNavbar;

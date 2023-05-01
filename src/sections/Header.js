import React from "react";
import "../styles/css/header.css";
import Navbar from "../components/header/Navbar";
import Hello from "../components/header/Hello";
import Jobs from "../components/header/Jobs";
import IconList from "../components/header/IconList";
import Ball from "../components/items/Ball";
import Circle from "../components/header/Circle";
import Person from "../components/header/Person";
import ScrollNavbar from "../components/header/ScrollNavbar";
import MiniNavbar from "../components/header/MiniNavbar";
import TypeWriter from "../components/header/TypeWriter";

const Header = ({windowDimensions, navBg}) => {
  
  return (
    // </div>
    <>
      <div className="container-fluid" id="home">
        <div className="background">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          {windowDimensions.width > 900 ? <Navbar /> : <MiniNavbar />}
          {windowDimensions.width > 800 && navBg && <ScrollNavbar />}
          {windowDimensions.width > 979 && <Hello />}
         {windowDimensions.width < 430 && <TypeWriter/>}
          <Person width={windowDimensions.width} />
          {windowDimensions.width > 979 && <Jobs />}
          {windowDimensions.width > 979 && <IconList />}
          {windowDimensions.width > 979 && <Ball />}
          {windowDimensions.width > 979 && (
            <Circle
              radius="80px"
              text="protector"
              marginLeft={windowDimensions.width < 1100 ? "76vw" : "70vw"}
              marginTop={windowDimensions.width < 1100 ? "340px" : "270px"}
              photo="https://drive.google.com/uc?export=view&id=1alkGVwrJw8fi0Sd_cj6PvCroZ0VpoOum"
            />
          )}
          {windowDimensions.width > 979 && (
            <Circle
              radius="160px"
              text="programmer"
              marginLeft={windowDimensions.width < 1100 ? "80vw" : "75vw"}
              marginTop={windowDimensions.width < 1100 ? "120px" : "50px"}
              photo="https://drive.google.com/uc?export=view&id=1fZSdUiGAQZgS9byNHuD4meWLbjoljzBo"
            />
          )}
          {windowDimensions.width > 979 && (
            <Circle
              radius="100px"
              text="Designer"
              marginLeft={windowDimensions.width < 1100 ? "72vw" : "65vw"}
              marginTop="-15px"
              photo="https://drive.google.com/uc?export=view&id=1lcF9GfR46RwlHc3fF69qZY-JqB_Dn2zc"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

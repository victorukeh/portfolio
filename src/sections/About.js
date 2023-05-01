import React from "react";
import "../styles/css/about.css";
import AboutHeader from "../components/about/AboutHeader";
import AboutBody from "../components/about/AboutBody";
const About = ({ windowDimensions }) => {
  return (
    <div className="about" id="about">
      <AboutHeader />
      <AboutBody windowDimensions={windowDimensions} />
    </div>
  );
};

export default About;

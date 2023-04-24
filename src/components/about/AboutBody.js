import React from "react";
import AboutBodyLarge from "./AboutBodyLarge";
import AboutBodyMini from "./AboutBodyMini";
const AboutBody = ({ windowDimensions }) => {
  return (
    <>{windowDimensions.width > 979 ? <AboutBodyLarge /> : <AboutBodyMini />}</>
  );
};

export default AboutBody;

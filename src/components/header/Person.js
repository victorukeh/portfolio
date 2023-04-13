import React from "react";
import Bounce from "./Bounce";
import Avater from "./Avater";
const Person = ({ width }) => {
  return (
    <div className={width < 901 ? "person1" : "person"}>
      {width > 500 && <Bounce />}
      <Avater />
    </div>
  );
};

export default Person;

import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div className="typewriter">
      <Typewriter
        options={{
          strings: ["Software Engineer", "Security Analyst", "Cloud Engineer"],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </div>
  );
};

export default TypeWriter;

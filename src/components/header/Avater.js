import React from "react";
import Avatar from "../../styles/images/avater2.png"
// import { LazyLoadImage } from "react-lazy-load-image-component";

const Avater = () => {
  return (
    <div className="avater">
      <img
        src={Avatar}
        alt="Avater"
      />
      {/* <LazyLoadImage
        src="https://drive.google.com/uc?export=view&id=1v28fC-Yhh1nwVbZt9CClUo2ypvLU9icf"
        alt="Avater"
      /> */}
    </div>
  );
};

export default Avater;

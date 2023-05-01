import React from "react";
import { BsServer } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutBodyMini = () => {
  return (
    <div>
      <div className="about__content__left">
        <LazyLoadImage src="https://drive.google.com/uc?export=view&id=1gxrL3vIUS9EtXE1E_IY9FgHBfHbM8Hlx" alt="Boy" />
      </div>

      <div className="card-mini">
        <div className="card__items">
          <div className="card__item">
            <div className="card__item__component">
              <BsServer size={30} />
              <p>Server Management</p>
            </div>
            <div className="card__item__component">
              <AiFillCloud size={30} />
              <p>Cloud Engineering</p>
            </div>
          </div>
          {/* <hr /> */}
          <div className="card__item">
            {" "}
            <div className="card__item__component">
              <BsFileEarmarkCodeFill size={30} />
              <p>Frontend Development</p>
            </div>
            <div className="card__item__component">
              <FaNetworkWired size={30} />
              <p>Network Engineering</p>
            </div>
          </div>
          {/* <hr /> */}
          <div className="card__item">
            {" "}
            <div className="card__item__component">
              <AiFillCode size={30} />
              <p>Backend Development</p>
            </div>
            <div className="card__item__component">
              <GiPadlock size={30} />
              <p>Security Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBodyMini;

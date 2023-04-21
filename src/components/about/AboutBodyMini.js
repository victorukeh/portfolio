import React from "react";
import Boy from "../../styles/images/boy.png";
import { BsServer } from "react-icons/bs"
import { AiFillCloud } from "react-icons/ai"
import { GiPadlock } from "react-icons/gi"
import { AiFillCode } from "react-icons/ai"
import { BsFileEarmarkCodeFill } from "react-icons/bs"
import { FaNetworkWired } from "react-icons/fa"

const AboutBodyMini = () => {
  return (
    <div>
      <div className="about__content__left">
        <img alt="" src={Boy} />
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

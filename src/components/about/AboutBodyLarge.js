import React from "react";

import Boy from "../../styles/images/boy.png";
import { BsServer } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AboutBodyLarge = () => {
  return (
    <div className="about__content">
      <div className="about__content__left">
      <LazyLoadImage src={Boy}
        alt="Image Alt"
      />
      </div>
      <div className="about__content__right">
        <div className="card">
          <h2>An Engineer ready to turn your dream into your reality</h2>
          <p>
            Software engineer with about 3 years of experience in cloud
            engineering, software and web development, and automated testing.
            Proven to be an individual that has leadership traits and works well
            within a team. Possesses demonstrable knowledge of web-first
            application development and deployment. Key achievement: created 3
            different web applications currently used by top companies in
            Nigeria
          </p>
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
    </div>
  );
};

export default AboutBodyLarge;

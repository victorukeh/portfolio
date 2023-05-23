import React from "react";
import { BsServer } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
const AboutBodyLarge = () => {
  return (
    <motion.div
      className="about__content"
      animate={{ scale: 1 }}
      transition={{ type: "spring", damping: 3, delay: 0.3}}
      whileHover={{ scale: 1.02}}
    >
      <div className="about__content__left">
        <img
          src="https://drive.google.com/uc?export=view&id=1gxrL3vIUS9EtXE1E_IY9FgHBfHbM8Hlx"
          alt="cartoon"
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
    </motion.div>
  );
};

export default AboutBodyLarge;

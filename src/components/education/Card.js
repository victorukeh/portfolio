import React from "react";
import { Button } from "@mui/material";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
const Card = ({ logo, title, type, color, date, size, view }) => {
  return (
    <motion.div
      className="education__card"
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className="education__card__top">
        <div className="education__info">
          <div
            className="education__info__logo"
            style={{ backgroundColor: color }}
          >
            <img
              src={logo}
              className="education__info__image"
              alt="Logo"
            />
          </div>
          <div className="education__info__details">
            <h3>{title}</h3>
            <p>{type}</p>
          </div>
        </div>
        <div className="education__date">
          <p>{date}</p>
        </div>
      </div>
      <div className="education__card__bottom">
        <Button disabled={!view ? true : false}>
          <a
            href={view}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            VIEW CERTIFICATE
          </a>
        </Button>
      </div>
    </motion.div>
  );
};
export default Card;

import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
const ProjectCarousel = () => {
  const images = [900, 800, 700, 600, 500].map((size) => ({
    src: `https://placedog.net/${size}/${size}`,
  }));
  return <Carousel images={images} />;
};

export default ProjectCarousel;

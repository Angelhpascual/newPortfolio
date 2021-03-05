import React from "react";
import content from "../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Work = () => {
  return (
    <div>
      <h1>{content.work.title}</h1>
      <p>I have done</p>
      <div>
        <LazyLoadImage effect="blur" src={content.work.img} alt="my projects" />
      </div>
    </div>
  );
};

export default Work;

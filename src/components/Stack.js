import React from "react";
import content from "../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Stack = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      id="stack"
      style={{ background: "#eee" }}
    >
      <h1 className="text-5xl font-bold font-dosis mb-10">Stack I use</h1>
      <div className="flex flex-wrap justify-center">
        {content.stack.tech.map((tech, index) => {
          return (
            <a href={tech.to}>
              <span
                key={index}
                className={` ${
                  index % 2 === 0 ? "animate-float" : "animate-refloat"
                } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
              >
                <LazyLoadImage
                  src={tech.img}
                  alt={tech.alt}
                  className="rounded-full"
                />
              </span>
            </a>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-20 ">
        {content.stack.desc}
      </p>
    </div>
  );
};

export default Stack;

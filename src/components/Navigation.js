import content from "../content";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  return (
    <div
      style={{
        background: "#091c29",
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
        <ScrollLink to="header" smooth={true}>
          <h1 className="text-3xl font-bold cursor-pointer">
            {content.nav.logo}{" "}
            <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
          </h1>
        </ScrollLink>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span key={index} className="text-xl mr-4 cursor-pointer">
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;

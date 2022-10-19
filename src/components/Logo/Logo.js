import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Tilt
      className="Tilt br2 shadow-2"
      style={{
        height: "150px",
        width: "150px",
      }}
    >
      <div>
        <h1>
          <img style={{ paddingTop: "23px" }} src={brain} alt="logo" />
        </h1>
      </div>
    </Tilt>
  );
};

export default Logo;

import React from "react";
import "../Banner/banner.css";
import img1 from "../images/image1.png";
import img2 from "../images/image2.png";
import img3 from "../images/image3.png";
import img4 from "../images/image4.png";

function banner() {
  return (
    <div className="banner">
      <div className="img1">
        <img src={img1} alt="hh" />
        <img src={img2} alt="hh" />
      </div>

      <div className="hero-title">
        <span>HEY,I AM</span>
        <span>
          <span className="alffy">ALFRED </span>JIMMY
        </span>
        <span>PASSIONATE,</span>
        <span>
          SELF-TAUGHT <span className="dev">DEVOLOPER</span>
        </span>
      </div>
      <div className="img2">
        <img src={img4} alt="hh" />
        <img src={img3} alt="hh" />
      </div>
    </div>
  );
}
export default banner;

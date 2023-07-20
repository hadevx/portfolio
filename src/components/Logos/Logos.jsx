import React from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
} from "./imports";
import "./Logos.css";
function Logos() {
  return (
    <>
      <div className="logos">
        <div className="logos__logo-ktb">
          <img src={img6} className="img" />
        </div>
        <div className="logos__logo-es">
          <img src={img5} className="img" />
        </div>
        <div className="logos__logo-baroud1">
          <img src={img4} className="img" />
        </div>
        <div className="logos__logo-taleha">
          <img src={img7} className="img" />
        </div>
        <div className="logos__logo-as">
          <img src={img2} className="img" />
        </div>
        <div className="logos__logo-fl">
          <img src={img1} className="img" />
        </div>
        <div className="logos__logo-seven">
          <img src={img8} className="img" />
        </div>
        <div className="logos__logo-eight">
          <img src={img9} className="img" />
        </div>
        <div className="logos__logo-abaya">
          <img src={img10} className="img" />
        </div>
        <div className="logos__logo-pi">
          <img src={img11} className="img" />
        </div>
        <div className="logos__logo-soug">
          <img src={img12} className="img" />
        </div>
        <div className="logos__logo-jana">
          <img src={img13} className="img" />
        </div>
      </div>
    </>
  );
}

export default Logos;

import React from "react";
import "./Header.css";
import { skill1, skill2, skill3 } from "./imports";
function Header() {
  return (
    <>
      <div id="header" className="header">
        <div className="header__title gradient__text">
          <h1>I'm Hussain Al-Osaimi</h1>
        </div>
        <div className="header__paragraph">
          <p>
            I'm senior computer engineering student with a great passion towards
            graphic design and designing LOGOS in particular.
          </p>
        </div>
        <div className="header__skills">
          <div className="header__skills-title">
            <h3>Skills</h3>
          </div>
          <div className="header__skills-img">
            <img src={skill1} alt="" />
            <img src={skill2} alt="" />
            <img src={skill3} alt="" />
          </div>
        </div>
        <div className="header__card">
          <div className="header__card-1">
            <h1>20</h1>
            <p>Clients</p>
          </div>
          <div className="header__card-2">
            <h1>50</h1>
            <p>Designs</p>
          </div>
          <div className="header__card-3">
            <a href="https://www.instagram.com/engstux/">Request a design</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

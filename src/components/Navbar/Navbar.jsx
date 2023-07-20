import React from "react";
import "./Navbar.css";
import logo from "./../../assets/engstux.png";
import { BiMenu } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { RiInstagramFill } from "react-icons/ri";
import { useState } from "react";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const NavbarLinks = () => (
    <>
      <p>
        <a href="#header">Home</a>
      </p>
      <p>
        <a href="#header">About</a>
      </p>
      <p>
        <a href="https://www.instagram.com/engstux/">Contact</a>
      </p>
    </>
  );
  return (
    <>
      <div className="navbar">
        <div className="left-section">
          <div className="navbar-logo">
            <h1>engstux</h1>
          </div>
        </div>
        <div className="right-section">
          <a href="https://www.instagram.com/engstux/">
            <RiInstagramFill title="instagram" className="insta" />
          </a>
          <div className="navbar-links display-none">
            <NavbarLinks />
          </div>
          {toggle ? (
            <CiMenuKebab
              className="ham-menu"
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : (
            <BiMenu
              className="ham-menu"
              onClick={() => {
                setToggle(true);
              }}
            />
          )}
          {toggle && (
            <div className="navbar-links">
              <NavbarLinks />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

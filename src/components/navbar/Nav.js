import React from "react";
import logo from "../../images/logo.svg";
import anwar from "../../images/mahedi-removebg-preview(1).png";
import Button from "../Button.js";
import Link from "./Link";

const Nav = (props) => {
  const data = props.data.data;
  const button = props.button.data;
  return (
    <header className="header">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="left flex items-center">
            <div className="branding">
              <img src={logo} alt="logo" />
            </div>
            <Link />
          </div>
          <Button button={button} />
        </nav>
        <div className="hero flex items-center">
          <div className="left flex-1">
            <h6>{data.name}</h6>
            <h1>
              I am a <span>{data.role}</span>
            </h1>
            <p>{data.shortDes}</p>
            <button className="btn btn-secondary">Download CV</button>
          </div>
          <div className="right">
            <img src={anwar} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

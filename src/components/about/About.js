import React from "react";
import anwar from "../../images/mahedi.jpg";
import Social from "./Social";

const About = (props) => {
  const data = props.data.data;
  return (
    <section className="about" id="about">
      <div className="container flex items-center">
        <div className="flex1">
          <img className="about-me-img" src={anwar} alt="" />
        </div>
        <div className="flex1">
          <h1>
            About <span>Me</span>
          </h1>
          <h3>
            I am <span>{data.name}</span>
          </h3>
          <p>{data.description}</p>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default About;

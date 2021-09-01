import React from "react";

const Frelance = (props) => {
  return (
    <section className="frelancer" id="freelance">
      <h1>I am available for Frelance</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, vero?
      </p>
      <button className="btn">{props.button.data[1].title}</button>
    </section>
  );
};

export default Frelance;

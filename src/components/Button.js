import React from "react";

const Button = (props) => {
  return (
    <div className="right">
      <button className="btn">{props.button[0].title}</button>
    </div>
  );
};

export default Button;

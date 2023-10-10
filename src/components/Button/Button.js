import React from "react";
import "./Button.css";

function Button({ text }) {
  return (
    <button className="button" style={{ width: "254px" }} type="button">
      <p className="text-button">{text}</p>
    </button>
  );
}

export default Button;

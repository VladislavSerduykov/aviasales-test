import React from "react";
import './Input.css'

function Input() {
  return (
    <input
      type="email"
      name="email"
      required
      placeholder="Ввести email"
      className="form-input"
    />
  );
}

export default Input;

import React from "react";
import './Input.css'

function Input() {
  return (
    <div className="input-container">
    <input
      type="email"
      name="email"
      required
      className="form-input"
      placeholder="Введите email"
    />
    </div>
  );
}

export default Input;

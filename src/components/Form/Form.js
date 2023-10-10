import React from "react";
import "./Form.css";
import Button from "../Button/Button";
import {
  BUTTON_TEXT,
  COUNT,
  INPUT_TEXT,
  ERROR_TEXT,
} from "../../utils/text-config";
import Input from "../Input/Input";

function Form() {
  return (
    <form className="form">
      <div className="form-container">
        <h2 className="form-title">
          <span className="count">{COUNT.FIRST}</span>
          {INPUT_TEXT.EMAIL_TEXT}
        </h2>
        <Input />
        <span className="input-error">{ERROR_TEXT.EMAIL_ERROR}</span>
        <Button text={BUTTON_TEXT.EMAIL_BUTTON} />
      </div>
    </form>
  );
}

export default Form;

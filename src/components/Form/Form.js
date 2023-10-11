import { useState } from "react";
import "./Form.css";
import Button from "../Button/Button";

function Form({ disabled,children, count, title_text, button_text, error_text }) {
  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <form className={`form ${disabled ? '' : 'form-disabled'}`}>
      <div className="form-container">
        <h2 className="form-title">
          <span className={`count ${disabled ? '' : 'count-disabled'}`}>{count}</span>
          {title_text}
        </h2>
        {children}
        <span className="input-error"></span>
        <Button text={button_text} />
      </div>
    </form>
  );
}

export default Form;

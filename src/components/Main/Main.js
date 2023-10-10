import React from "react";
import "./Main.css";
import Form from "../Form/Form";
import { TITLE_TEXT } from "../../utils/text-config";

function Main() {
  return (
    <section className="main">
      <div className="text-container">
        <h1 className="title title-casual">
          {TITLE_TEXT.NOT_COMPLITED.MAIN_TEXT}
        </h1>
        <h2 className="title title-gradient">
          {TITLE_TEXT.NOT_COMPLITED.SECONDARY_TEXT}
        </h2>
        <p className="text">{TITLE_TEXT.PARAGRAPH_TEXT.MAIN_TEXT}</p>
        <Form />
      </div>
    </section>
  );
}

export default Main;

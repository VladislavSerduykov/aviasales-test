import React from "react";
import "./Main.css";
import Form from "../Form/Form";
import { TITLE_TEXT,INPUT_TEXT, BUTTON_TEXT  } from "../../utils/text-config";
import Input from "../Input/Input";
import ShareButtons from "../ShareButtons/ShareButtons";

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
      </div>
      <div className="main-container">
        <Form disabled={true} children={<Input/>} count={1} title_text={INPUT_TEXT.EMAIL_TEXT} button_text={BUTTON_TEXT.EMAIL_BUTTON} />
        <Form disabled={false} children={<ShareButtons/>} count={2} title_text={INPUT_TEXT.SHARE_TEXT} button_text={BUTTON_TEXT.SHARE_BUTTON} />
        </div>
    </section>
  );
}

export default Main;

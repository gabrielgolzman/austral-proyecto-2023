import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { TranslationContext } from "../../../services/translations/translation.context";
import useTranslate from "../../../custom/useTranslate";

const ComboLanguage = () => {
  const { language, changeLanguage } = useContext(TranslationContext);
  const translate = useTranslate();

  const changeLanguageHandler = (event) => {
    changeLanguage(event.target.value);
  };
  return (
    <Form.Select
      onChange={changeLanguageHandler}
      value={language}
      className="w-50 mb-4"
      aria-label="Select a language"
    >
      <option value="en">{translate("english_lang")}</option>
      <option value="es">{translate("spanish_lang")}</option>
    </Form.Select>
  );
};

export default ComboLanguage;

import React from "react";
import styles from "../../styles/scss/Input.module.scss";
import { InputModel } from "../Interfaces/globa";
import TogglePasswordButton from "./UiElements/TogglePasswordButton";

const Input = ({
  type = "text",
  placeholder,
  name,
  id,
  className,
  value,
  required,
  autoComplete,
}: InputModel) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={`${className} ${styles.input}`}
        defaultValue={value}
        required={required}
        autoComplete={autoComplete}
      />
      {type === "password" && <TogglePasswordButton passwordInput={id} />}
    </>
  );
};

export default Input;

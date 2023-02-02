import React from "react";
import styles from "../../styles/scss/Input.module.scss";
import { InputModel } from "../Interfaces/globa";

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
    </>
  );
};

export default Input;

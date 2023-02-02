import React from "react";
import styles from "../../styles/scss/Input.module.scss";

interface InputModel {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name: string;
  id: string;
  className?: string;
  value?: string;
  required?: boolean;
  autoComplete?: string;
}

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

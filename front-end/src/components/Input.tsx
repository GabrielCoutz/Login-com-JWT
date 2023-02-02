import React from "react";

interface InputModel {
  type?: string;
  placeholder?: string;
  name: string;
  id: string;
  className?: string;
  value?: string;
  required?: boolean;
}

const Input = ({
  type = "text",
  placeholder,
  name,
  id,
  className,
  value,
  required,
}: InputModel) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={className}
        defaultValue={value}
        required={required}
      />
    </>
  );
};

export default Input;

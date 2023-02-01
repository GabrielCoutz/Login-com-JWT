import React from "react";

interface InputModel {
  type?: string;
  placeholder?: string;
  name: string;
  id: string;
  className?: string;
}

const Input = ({
  type = "text",
  placeholder,
  name,
  id,
  className,
}: InputModel) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={className}
      />
    </>
  );
};

export default Input;

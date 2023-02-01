import React from "react";

export interface LabelModel {
  htmlFor: string;
  className?: string;
  text: string;
}

const Label = ({ htmlFor, className, text }: LabelModel) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
};

export default Label;

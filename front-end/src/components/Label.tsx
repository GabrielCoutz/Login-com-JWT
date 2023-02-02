import React from "react";

export interface LabelModel {
  htmlFor: string;
  className?: string;
  children?: string;
}

const Label = ({ htmlFor, className, children }: LabelModel) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children || htmlFor}
    </label>
  );
};

export default Label;

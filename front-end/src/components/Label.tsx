import React from "react";
import { LabelModel } from "../Interfaces/globa";

const Label = ({ htmlFor, className, children }: LabelModel) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children || htmlFor}
    </label>
  );
};

export default Label;

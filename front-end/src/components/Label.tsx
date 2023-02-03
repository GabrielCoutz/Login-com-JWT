import React from "react";
import { LabelModel } from "../Interfaces/global";

const Label = ({ htmlFor, className, children }: LabelModel) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children || htmlFor}
    </label>
  );
};

export default Label;

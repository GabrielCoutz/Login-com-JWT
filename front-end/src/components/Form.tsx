import React, { ReactNode } from "react";

interface FormModel {
  children: ReactNode;
  onSubmit: React.FormEventHandler;
}

const Form = ({ children, onSubmit }: FormModel) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;

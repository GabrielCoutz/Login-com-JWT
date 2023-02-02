import React, { ReactNode } from "react";
import styles from "../../styles/scss/Form.module.scss";

interface FormModel {
  children: ReactNode;
  onSubmit: React.FormEventHandler;
}

const Form = ({ children, onSubmit }: FormModel) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {children}
    </form>
  );
};

export default Form;

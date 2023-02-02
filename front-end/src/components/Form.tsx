import React from "react";
import styles from "../../styles/scss/Form.module.scss";
import { FormModel } from "../Interfaces/globa";

const Form = ({ children, onSubmit }: FormModel) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {children}
    </form>
  );
};

export default Form;

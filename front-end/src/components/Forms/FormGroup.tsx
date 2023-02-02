import React, { ReactNode } from "react";
import styles from "../../../styles/scss/FormGroup.module.scss";

const FormGroup = ({
  children,
  row,
}: {
  children: ReactNode;
  row?: boolean;
}) => {
  return (
    <div className={`${styles.formGroup} ${row ? styles.row : ""}`}>
      {children}
    </div>
  );
};

export default FormGroup;

import React from "react";
import styles from "../../../styles/scss/Button.module.scss";

interface ButtonModel {
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  children: string;
  disabled?: boolean;
}

const Button = ({
  children,
  primary,
  secondary,
  className = "",
  disabled,
}: ButtonModel) => {
  const classes: string = `${styles.btn} ${primary ? styles.primary : ""} ${
    secondary ? styles.secondary : ""
  }`;

  return (
    <button className={classes + className} disabled={disabled}>
      {disabled ? "Carregando..." : children}
    </button>
  );
};

export default Button;

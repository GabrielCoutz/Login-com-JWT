import React from "react";
import styles from "../../../styles/scss/Button.module.scss";

interface ButtonModel {
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  children: string;
  disabled?: boolean;
  danger?: boolean;
  onClick?: React.MouseEventHandler;
}

const Button = ({
  children,
  primary,
  secondary,
  className = "",
  disabled,
  danger,
  onClick,
}: ButtonModel) => {
  const classes: string = `${styles.btn} ${danger ? styles.danger : ""} ${
    primary ? styles.primary : ""
  } ${secondary ? styles.secondary : ""}`;

  return (
    <button
      className={classes + className}
      disabled={disabled}
      onClick={onClick}
    >
      {disabled ? "Carregando..." : children}
    </button>
  );
};

export default Button;

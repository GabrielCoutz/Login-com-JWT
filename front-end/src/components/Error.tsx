import React from "react";
import styles from "../../styles/scss/Error.module.scss";

interface ErroModel {
  message: string;
}

const ErroIsFilled = (erro: any): erro is ErroModel => {
  if (erro?.message) return true;
  return false;
};

const Error = ({ erro }: any) => {
  if (!ErroIsFilled(erro)) return null;

  return <div className={`${styles.error} alert`}>{erro.message}</div>;
};

export default Error;

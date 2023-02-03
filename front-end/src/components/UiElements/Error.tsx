import React from "react";
import styles from "../../../styles/scss/Error.module.scss";

const Error = ({ erro }: { erro: string }) => {
  return <div className={`${styles.error} alert`}>{erro}</div>;
};

export default Error;

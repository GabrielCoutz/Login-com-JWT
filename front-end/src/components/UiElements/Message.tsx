import React from "react";
import styles from "../../../styles/scss/Message.module.scss";

const Message = ({ message }: { message: string }) => {
  if (message)
    return <div className={`${styles.message} alert`}>{message}</div>;
  return null;
};

export default Message;

import React, { ReactNode } from "react";
import styles from "../../styles/scss/Modal.module.scss";

interface ModalModel {
  children: ReactNode;
  active: boolean;
}

const Modal = ({ children, active }: ModalModel) => {
  return (
    <div className={`${styles.wrapperModal} ${active ? styles.active : ""}`}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;

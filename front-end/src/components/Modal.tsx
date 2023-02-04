import React, { ReactNode } from "react";
import styles from "../../styles/scss/Modal.module.scss";

interface ModalModel {
  children: ReactNode;
  active: boolean;
  toggleModal: Function;
}

const Modal = ({ children, active, toggleModal }: ModalModel) => {
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.currentTarget === e.target) toggleModal();
  }

  return (
    <div
      className={`${styles.wrapperModal} ${active ? styles.active : ""}`}
      onClick={handleClick}
    >
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;

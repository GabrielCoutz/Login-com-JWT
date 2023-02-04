import React from "react";
import Button from "./UiElements/Button";
import styles from "../../styles/scss/Dangerzone.module.scss";
import Modal from "./Modal";

const Dangerzone = () => {
  const [active, setActive] = React.useState(false);

  function toggleModal() {
    setActive(!active);
  }

  return (
    <div className={styles.dangerZone}>
      <Modal active={active}>
        <h1>title</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsa.
        </span>
        <Button secondary onClick={toggleModal}>
          Cancelar
        </Button>
      </Modal>
      <Button danger onClick={toggleModal}>
        Apagar conta
      </Button>
    </div>
  );
};

export default Dangerzone;

import React from "react";
import Button from "./UiElements/Button";
import styles from "../../styles/scss/Dangerzone.module.scss";
import Modal from "./Modal";
import useFetch from "../Hooks/useFetch";
import Error from "./UiElements/Error";
import { useRouter } from "next/router";
import { UserContext } from "./UserContext";

const Dangerzone = () => {
  const [active, setActive] = React.useState(false);
  const { request, erro, message, setErro } = useFetch();
  const { setUser } = React.useContext(UserContext);
  const { push } = useRouter();

  function toggleModal() {
    setErro("");
    setActive(!active);
  }

  async function deleteAccount() {
    const token = localStorage.getItem("token");

    const response = await request("/api/user", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response) return;

    setUser(null);
    localStorage.removeItem("token");
    push("/");
  }

  return (
    <div className={styles.dangerZone}>
      <Modal active={active} toggleModal={toggleModal}>
        <h1>Deletar conta</h1>
        <p>
          Tem certeza que deseja <span className={styles.atencao}>deletar</span>{" "}
          sua conta?
        </p>
        <p>
          Esta ação é <span className={styles.atencao}>irreversível</span>!
        </p>
        {erro && <Error erro={erro} />}
        <div className={styles.buttons}>
          <Button primary onClick={toggleModal}>
            Cancelar
          </Button>
          <Button secondary onClick={deleteAccount}>
            Sim, quero deletar
          </Button>
        </div>
      </Modal>
      <Button danger onClick={toggleModal}>
        Apagar conta
      </Button>
    </div>
  );
};

export default Dangerzone;

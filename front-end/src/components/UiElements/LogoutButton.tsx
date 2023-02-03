import Link from "next/link";
import React from "react";
import styles from "../../../styles/scss/LogoutButton.module.scss";
import { UserContext } from "../UserContext";
import Button from "./Button";

const LogoutButton = () => {
  const { setUser } = React.useContext(UserContext);

  function cleanData() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <Link
      href="/"
      onClick={cleanData}
      className={`${styles.logout} btn secondary`}
    >
      <Button secondary>Sair</Button>
    </Link>
  );
};

export default LogoutButton;

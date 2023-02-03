import Link from "next/link";
import React from "react";
import styles from "../../../styles/scss/LogoutButton.module.scss";
import { UserContext } from "../UserContext";

const LogoutButton = () => {
  const { setUser, setUserIsLogged } = React.useContext(UserContext);

  function cleanData() {
    localStorage.removeItem("token");
    setUser(null);
    setUserIsLogged(false);
  }

  return (
    <Link
      href="/"
      onClick={cleanData}
      className={`${styles.logout} btn secondary`}
    >
      Sair
    </Link>
  );
};

export default LogoutButton;

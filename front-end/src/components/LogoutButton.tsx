import Link from "next/link";
import React from "react";
import styles from "../../styles/scss/LogoutButton.module.scss";

function clearToken() {
  localStorage.removeItem("token");
}

const LogoutButton = () => {
  return (
    <Link
      href="/"
      onClick={clearToken}
      className={`${styles.logout} btn secondary`}
    >
      Sair
    </Link>
  );
};

export default LogoutButton;

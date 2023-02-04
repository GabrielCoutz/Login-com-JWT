import Link from "next/link";
import React from "react";
import styles from "../../styles/scss/Header.module.scss";
import LogoutButton from "./UiElements/LogoutButton";
import { UserContext } from "./UserContext";

const Header = () => {
  const { user } = React.useContext(UserContext);

  return (
    <header className={`${styles.header} container`}>
      <Link href="/">Home</Link>
      {user && <LogoutButton />}
    </header>
  );
};

export default Header;

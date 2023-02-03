import Link from "next/link";
import React from "react";
import styles from "../../styles/scss/Header.module.scss";
import { UserContext } from "./UserContext";

const Header = () => {
  const { user } = React.useContext(UserContext);
  console.log(user);

  return (
    <header className={`${styles.header} container`}>
      <Link href="/">Home</Link>
    </header>
  );
};

export default Header;

import Link from "next/link";
import React from "react";
import styles from "../../styles/scss/Header.module.scss";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Link href="/">Home</Link>
    </header>
  );
};

export default Header;

import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.heading}>Download apps to your XREAL Beam</h1>
      </div>
      <div>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;

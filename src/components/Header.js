import DarkModeToggle from "./DarkModeToggle";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Download DEVTEST apps to your XREAL Beam
        </h1>
      </div>
      <div>
        <DarkModeToggle active={localStorage.getItem("theme") === "dark"} />
      </div>
    </header>
  );
};

export default Header;

import { useTheme } from "../context/ThemeContext";
import styles from "./DarkModeToggle.module.css";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const toggleDarkMode = () => {
    toggleTheme();
    document.body.classList.toggle("light-mode");
    document.querySelector("header").classList.toggle("light-mode");
  };

  return (
    <button className={styles.btn} onClick={toggleDarkMode}>
      {theme ? "Toggle\nDark Mode" : "Toggle\nLight Mode"}
    </button>
  );
};

export default DarkModeToggle;

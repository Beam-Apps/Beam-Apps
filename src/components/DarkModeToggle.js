import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./DarkModeToggle.module.css";

const DarkModeToggle = ({ active }) => {
  const { theme, toggleTheme } = useTheme();

  const toggleDarkMode = () => {
    toggleTheme();
    document.body.classList.toggle("light-mode");
    document.querySelector("header").classList.toggle("light-mode");
    localStorage.setItem("theme", active ? "light" : "dark");
  };

  useEffect(() => {
    if (active) {
      toggleTheme();
      document.body.style.transition = "none";
      document.body.classList.toggle("light-mode");
      document.querySelector("header").classList.toggle("light-mode");
      setTimeout(() => {
        document.body.style.transition = "opacity 1s, background 1s";
      }, 500);
    }
  }, []);

  return (
    <button className={styles.btn} onClick={toggleDarkMode}>
      {theme ? "Toggle\nDark Mode" : "Toggle\nLight Mode"}
    </button>
  );
};

export default DarkModeToggle;

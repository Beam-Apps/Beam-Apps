import { useTheme } from "../context/ThemeContext";
import styles from "./CategoryButton.module.scss";
import cn from "classnames";

export const CategoryButton = ({ active, category, onClick }) => {
  const { theme } = useTheme();

  return (
    <button
      key={category}
      onClick={onClick}
      className={cn(styles.button, {
        [styles.active]: active,
        [styles.dark]: theme === "dark",
      })}
    >
      {category}
    </button>
  );
};

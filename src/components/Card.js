import cn from "classnames";
import styles from "./Card.module.scss";
import { useTheme } from "../context/ThemeContext";

export const Card = ({ icon, name, version, download, size }) => {
  const { theme } = useTheme();

  return (
    <div
      key={name}
      className={cn(styles.card, {
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={styles["top-section"]}>
        <img className={styles.img} src={icon} alt={name} />
      </div>
      <div className={styles.border}></div>
      <div className={styles.icons}></div>
      <div className={styles["bottom-section"]}>
        <span className={styles.title}>{name}</span>
        <div className={styles.row}>
          <div className={styles.col}>
            <span>Version</span>
            <span className={styles["small-text"]}>{version}</span>
          </div>
          <div className={styles.col}>
            <img
              className={cn(styles.img, styles["download-image"])}
              src={require("../assets/dwld.png")}
              onClick={() => (window.location.href = download)}
              alt="Download"
            />
          </div>
          <div className={styles.col}>
            <span>Size </span>
            <span className={styles["small-text"]}>{size}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

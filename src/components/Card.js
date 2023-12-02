import cn from "classnames";
import styles from "./Card.module.scss";
import Shield from "../assets/icons/shield.svg";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export const Card = ({
  icon,
  name,
  version,
  download,
  size,
  description,
  virusTotal,
}) => {
  const [flipped, setFlipped] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      key={name}
      className={cn(styles.card, {
        [styles.dark]: theme === "dark",
        [styles.flipped]: flipped,
      })}
    >
      <div className={styles.content}>
        <div
          className={styles.lightbarContainer}
          onClick={() => setFlipped(!flipped)}
        >
          <div className={styles.lightBar} />
        </div>

        <div className={styles.front}>
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
        <div className={styles.back}>
          <div className={styles.backContent}>
            <div className={styles.icons}>
              <a href={virusTotal} target="_blanK">
                {virusTotal && <img src={Shield} />}
              </a>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

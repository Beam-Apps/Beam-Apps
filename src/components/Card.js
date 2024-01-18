import cn from "classnames";
import styles from "./Card.module.scss";
import Shield from "../assets/icons/shield.svg";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export const Card = ({
  icon,
  iconDark,
  name,
  version,
  download,
  size,
  description,
  notes,
  virusTotal,
  color,
  darkColor,
}) => {
  const [flipped, setFlipped] = useState(false);
  const { theme } = useTheme();

  const handleTouchStart = () => {
    setFlipped(!flipped);
  };

  const statusImages = {
    yes: require("../assets/yes.png"),
    caution: require("../assets/caution.png"),
    exclamation: require("../assets/exclamation.png"),
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setFlipped(flipped);
    }, 10);
  };

  const getIcon = () => {
    return theme === "dark" && iconDark ? iconDark : icon;
  };

  return (
    <div
      key={name}
      className={cn(styles.card, {
        [styles.dark]: theme === "dark",
        [styles.flipped]: flipped,
      })}
      style={{ color: theme === "dark" ? darkColor : color }}
    >
      <div className={styles.content} onClick={() => setFlipped(!flipped)}>
        {/*SVG on the left side */}
        <svg
          style={{
            width: "20px",
            height: "100px",
            transform: "rotate(180deg)",
            flexShrink: "0",
            fill: "#0026ED",
            position: "absolute",
            zIndex: "1",
            marginTop: "50px",
            marginLeft: "110px",
          }}
        >
          <path
            d="M5 0C4.35773 0 1.59337 4.28879 0.999996 6.5C0.406622 8.71121 0.563342 9.19724 0.109193 13.283L0.10947 27.3962C-0.136313 32.7346 0.109236 38.2218 0.109236 44C0.109236 49.7782 -0.136546 55.2654 0.109237 60.6038L0.109369 75.5472C0.563518 79.6329 0.406626 79.7888 1 82C1.59337 84.2112 4.35773 88 5 88L5 44L5 0Z"
            fill="#0026ED"
          />
        </svg>
        {/*SVG on the right side */}
        <svg
          style={{
            width: "50px",
            height: "50px",
            transform: "rotate(180deg)",
            flexShrink: "0",
            fill: "#FD0808",
            position: "absolute",
            zIndex: "1",
            marginTop: "70px",
            marginLeft: "-175px",
          }}
        >
          <path
            d="M4.52987e-07 29C0.393966 29 0.784074 28.6249 1.14805 27.8963C1.51203 27.1676 1.84275 26.0995 2.12132 24.753C2.3999 23.4066 2.62088 21.8081 2.77164 20.0489C2.9224 18.2897 3 16.4042 3 14.5C3 12.5958 2.9224 10.7103 2.77164 8.95109C2.62087 7.19187 2.3999 5.5934 2.12132 4.24695C1.84274 2.9005 1.51203 1.83244 1.14805 1.10375C0.784073 0.375053 0.393965 -1.48355e-07 -5.52375e-07 -1.31134e-07L8.14406e-08 14.5L4.52987e-07 29Z"
            fill="#FD0808"
          />
        </svg>
        {!flipped && (
          <div className={styles.lightbarContainer}>
            <div className={styles.lightBar} />
          </div>
        )}
        <div className={styles.front}>
          <div className={styles["top-section"]}>
            <img className={styles.img} src={getIcon()} alt={name} />
          </div>
          <div className={styles.border}></div>
          <div className={styles.icons}></div>
          <div
            className={styles["bottom-section"]}
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = download;
            }}
          >
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
            <p style={{ fontSize: "18px" }}>{name}</p>
            <p style={{ fontSize: "14px" }}>verified with</p>
            <img
              src={require("../assets/VirusTotal_logo.png")}
              alt="VirusTotal Logo"
            />
            <div className={styles["row-of-elements"]}>
              {virusTotal ? (
                virusTotal.split(" ").map((count, index) => (
                  <div key={index} className={styles["element-container"]}>
                    <img
                      src={
                        statusImages[
                          index === 0
                            ? "yes"
                            : index === 1
                            ? "caution"
                            : "exclamation"
                        ]
                      }
                      alt={`${
                        index === 0
                          ? "Yes"
                          : index === 1
                          ? "Caution"
                          : "Exclamation"
                      } Icon`}
                    />
                    <span>{count}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className={styles["element-container"]}>
                    <img src={statusImages["yes"]} alt="Yes Icon" />
                    <span>-</span>
                  </div>
                  <div className={styles["element-container"]}>
                    <img src={statusImages["caution"]} alt="Caution Icon" />
                    <span>-</span>
                  </div>
                  <div className={styles["element-container"]}>
                    <img
                      src={statusImages["exclamation"]}
                      alt="Exclamation Icon"
                    />
                    <span>-</span>
                  </div>
                </>
              )}
            </div>
            <div
              style={{
                width: "99%",
                height: "0%",
                border: "1.5px #D2D2D2 solid",
              }}
            ></div>
            <div className={styles["column-of-elements"]}>
              <div>
                <span>{description}</span>
              </div>
              <div>
                <span>
                  {notes
                    ? notes
                        .split("\n")
                        .map((el, index) => <p key={index}>{el}</p>)
                    : "No notes found."}
                </span>
              </div>
              <div className={styles["version-size-container"]}>
                <span>{"Version: " + version}</span>
                <br />
                <span>{"Size: " + size}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

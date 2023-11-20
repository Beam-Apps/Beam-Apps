import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with <i className="fas fa-heart"></i> by{" "}
        <a className={styles.link} href="https://discord.gg/HV8Uh8cCnn">
          Your XREAL Discord Community
        </a>
      </p>
    </footer>
  );
};

export default Footer;

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      © {new Date().getFullYear()} MonPortfolio. Tous droits réservés.
    </div>
    <div className={styles.socials}>
      <a href="#" aria-label="LinkedIn">LinkedIn</a>
      <a href="#" aria-label="GitHub">GitHub</a>
      <a href="#" aria-label="Twitter">Twitter</a>
    </div>
  </footer>
);

export default Footer; 
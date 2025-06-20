import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      © {new Date().getFullYear()} MonPortfolio. Tous droits réservés.
    </div>
    <div className={styles.socials}>
      <a href="#" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
      <a href="#" aria-label="GitHub"><FaGithub size={22} /></a>
      <a href="#" aria-label="Twitter"><FaTwitter size={22} /></a>
    </div>
  </footer>
);

export default Footer; 
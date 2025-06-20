import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>MonPortfolio</div>
    <nav>
      <ul className={styles.navList}>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#services">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header; 
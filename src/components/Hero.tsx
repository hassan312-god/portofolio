import styles from "./Hero.module.css";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Hero = () => (
  <section className={styles.hero} id="home">
    <div className={styles.heroContent}>
      <h1>Salut ! Je suis <span className={styles.name}>Votre Nom</span></h1>
      <p>Développeur web & mobile, Créatif, Passionné par l'UI/UX et la technologie.</p>
      <div className={styles.socials}>
        <a href="#" aria-label="LinkedIn"><FaLinkedin size={28} color="#2563eb" /></a>
        <a href="#" aria-label="GitHub"><FaGithub size={28} color="#2563eb" /></a>
        <a href="#" aria-label="Twitter"><FaTwitter size={28} color="#2563eb" /></a>
      </div>
      <a href="#contact" className={styles.cta}>Contactez-moi</a>
    </div>
    <div className={styles.heroImage}>
      <Image src="/images/profile.jpg" alt="Votre photo" width={300} height={300} />
    </div>
  </section>
);

export default Hero; 
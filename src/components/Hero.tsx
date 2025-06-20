import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => (
  <section className={styles.hero} id="home">
    <div className={styles.heroContent}>
      <h1>Salut ! Je suis <span className={styles.name}>Votre Nom</span></h1>
      <p>Développeur web & mobile, Créatif, Passionné par l'UI/UX et la technologie.</p>
      <div className={styles.socials}>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
        <a href="#" aria-label="GitHub">GitHub</a>
        <a href="#" aria-label="Twitter">Twitter</a>
      </div>
      <a href="#contact" className={styles.cta}>Contactez-moi</a>
    </div>
    <div className={styles.heroImage}>
      <Image src="/images/profile.jpg" alt="Votre photo" width={300} height={300} />
    </div>
  </section>
);

export default Hero; 
import styles from "./About.module.css";
import Image from "next/image";

const About = () => (
  <section className={styles.about} id="about">
    <h2>À propos de moi</h2>
    <div className={styles.aboutContent}>
      <div className={styles.aboutImage}>
        <Image src="/images/profile.jpg" alt="Votre photo" width={200} height={200} />
      </div>
      <div className={styles.aboutText}>
        <p>Je suis un développeur passionné par la création d'expériences numériques modernes et efficaces. J'aime relever de nouveaux défis et apprendre en continu.</p>
        <ul>
          <li>+3 ans d'expérience</li>
          <li>Spécialisé en React & Next.js</li>
          <li>Basé à [Votre Ville]</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About; 
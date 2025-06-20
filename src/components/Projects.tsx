import styles from "./Projects.module.css";
import Image from "next/image";

const projects = [
  { img: "/images/projet1.jpg", title: "Projet 1", desc: "Application web de gestion." },
  { img: "/images/projet2.jpg", title: "Projet 2", desc: "Site vitrine moderne." },
  { img: "/images/projet3.jpg", title: "Projet 3", desc: "Plateforme e-commerce." },
];

const Projects = () => (
  <section className={styles.projects} id="projects">
    <h2>Mes Projets</h2>
    <div className={styles.projectsList}>
      {projects.map((p, i) => (
        <div className={styles.projectCard} key={i}>
          <Image src={p.img} alt={p.title} width={300} height={200} />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 
import styles from "./Services.module.css";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaCogs } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode size={36} color="#2563eb" />, title: "Web", desc: "Développement de sites web modernes et performants." },
  { icon: <FaMobileAlt size={36} color="#2563eb" />, title: "Mobile", desc: "Applications mobiles réactives et intuitives." },
  { icon: <FaPaintBrush size={36} color="#2563eb" />, title: "UI/UX", desc: "Design d'interfaces élégantes et expérience utilisateur." },
  { icon: <FaCogs size={36} color="#2563eb" />, title: "API", desc: "Intégration et création d'API robustes." },
];

const Services = () => (
  <section className={styles.services} id="services">
    <h2>Compétences</h2>
    <div className={styles.servicesList}>
      {services.map((s, i) => (
        <div className={styles.serviceCard} key={i}>
          <span className={styles.icon}>{s.icon}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services; 
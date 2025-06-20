import styles from "./Testimonials.module.css";
import Image from "next/image";

const testimonials = [
  { img: "/images/client1.jpg", name: "Client 1", text: "Super travail, très professionnel !" },
  { img: "/images/client2.jpg", name: "Client 2", text: "Je recommande vivement pour tout projet web." },
];

const Testimonials = () => (
  <section className={styles.testimonials} id="testimonials">
    <h2>Témoignages</h2>
    <div className={styles.testimonialsList}>
      {testimonials.map((t, i) => (
        <div className={styles.testimonialCard} key={i}>
          <Image src={t.img} alt={t.name} width={60} height={60} className={styles.avatar} />
          <p>"{t.text}"</p>
          <span className={styles.name}>{t.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 
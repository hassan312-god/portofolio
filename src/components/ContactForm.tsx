"use client";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation simple
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      // Ici, tu pourrais envoyer les données à une API ou un service email
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <h2>Contactez-moi</h2>
      {submitted ? (
        <p>Merci pour votre message !</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </section>
  );
};

export default ContactForm; 
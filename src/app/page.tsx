import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ContactForm />
    </>
  );
}

import Link from "next/link";
import styles from "./Formulario.module.css";

export default function Formulario() {
  return (
    <section
      id="contact-form"
      className={styles.container}
    >
      <div className={`wrapper ${styles.formulario}`}>
        <div className={`flow ${styles.contenido}`}>
          <h2>Vamos a ver sí juntos podemos hacer que funcione...</h2>
          <p>
            Si estás buscando a un desarrollador frontend junior con quién te
            gustaría trabajar o simplemente deseas conectarte/hacer una
            pregunta, no dudes en escribirme.
          </p>
          <div className={styles.misEnlaces}>
            <Link href="https://github.com/drkedrkedjon">GitHub</Link> |{" "}
            <Link href="https://www.linkedin.com/in/sasa-savic-perusina/">
              LinkedIn
            </Link>
          </div>
        </div>
        <form className={styles.form}>
          <label
            className={styles.label}
            htmlFor="name"
          >
            Nombre:
          </label>
          <input
            className={styles.input}
            type="text"
            name="Nombre"
            id="name"
            placeholder="¿Cómo te gustaría que te llamara?"
          />
          <label
            className={styles.label}
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className={styles.input}
            type="text"
            id="email"
            name="Email"
            placeholder="¿Cuál es tu dirección de correo?"
          />
          <label
            className={styles.label}
            htmlFor="mensaje"
          >
            Mensaje:
          </label>
          <textarea
            className={styles.input}
            name="Mensaje"
            id="mensaje"
            cols="30"
            rows="6"
            placeholder="Escribe aquí tu mensaje..."
          />
          <button className={styles.button}>Enviar mensaje, gracias</button>
        </form>
      </div>
    </section>
  );
}

import Link from "next/link";
import styles from "./Formulario.module.css";

export default function Formulario() {
  return (
    <section className={styles.container}>
      <div className={`wrapper ${styles.formulario}`}>
        <div className={`flow ${styles.contenido}`}>
          <h2>Vamos a ver sí juntos podemos hacer que funcione...</h2>
          <p>
            Si estás buscando a un desarrollador frontend junior con quién te
            gustaría trabajar o simplemente deseas conectarte/hacer una
            pregunta, no dudes en escribirme.
          </p>
          <div className={styles.misEnlaces}>
            <Link href="https://github.com/drkedrkedjon">GitHub</Link>{" "}
            <Link href="https://www.linkedin.com/in/sasa-savic-perusina/">
              LinkedIn
            </Link>
          </div>
        </div>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="Nombre"
            id="name"
            placeholder="¿Cómo te gustaría que te llamara?"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="Email"
            placeholder="¿Cuál es tu dirección de correo?"
          />
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            name="Mensaje"
            id="mensaje"
            cols="30"
            rows="6"
            placeholder="Escribe aquí tu mensaje..."
          />
          <button>Muchas gracias</button>
        </form>
      </div>
    </section>
  );
}

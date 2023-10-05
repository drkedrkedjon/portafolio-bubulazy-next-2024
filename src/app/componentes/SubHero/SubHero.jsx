import Link from "next/link";
import styles from "./SubHero.module.css";

export default function SubHero() {
  return (
    <>
      <section className={styles.sectionSuperior}>
        <div className={`wrapper ${styles.wrapperSuperior}`}>
          <h2 className={styles.h2}>Sobre mi</h2>
          <p>
            Me inicié en el mundo del desarrollo FrontEnd en 1997 y hasta 2002
            he trabajado como freelancer. Entonces he cambiado mi profesión a
            turísmo y ahora regreso con muchas ganas de llevar a cabo todo lo
            nuevo aprendido en diferentes cursos, como en{" "}
            <Link href="https://freecodecamp.org">FreeCodeCamp</Link> y{" "}
            <Link href="https://scrimba.com">Scrimba</Link> de CSS, HTML,
            JavaScript, React 18, React Router 6 & Firebase. Con mucha
            disposición, determinación y ganas de aprender. Espero a que os
            animéis a contactarme.
          </p>
        </div>
      </section>
      <section className={styles.sectionInferior}>
        <div className={`wrapper ${styles.wrapperInferior}`}>
          <h2 className={styles.h2}>Mis habilidades</h2>
          <ul>
            <li>JavaScript ES6</li>
            <li>React 18</li>
            <li>React Router</li>
            <li>Git</li>
            <li>Firebase</li>
            <li>CSS & HTML</li>
          </ul>
        </div>
      </section>
    </>
  );
}

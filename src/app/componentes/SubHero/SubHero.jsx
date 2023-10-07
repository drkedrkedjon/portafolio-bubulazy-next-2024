import Link from "next/link";
import styles from "./SubHero.module.css";

// type: single, single-link, doble-una-lista, doble-tres-listas,
export default function SubHero({ type }) {
  return (
    <>
      <section className={styles.sectionSuperior}>
        <div
          className={`wrapper ${styles.wrapperSuperior} ${
            (type === "single" || type === "single-link") &&
            styles.wrapperSuperiorSingle
          }`}
        >
          <h2 className={styles.h2}>Sobre mi</h2>
          <div className={styles.contenidoSuperior}>
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
            {type === "single-link" && (
              <Link
                className={styles.singleLink}
                href="/"
              >
                Button de prueba
              </Link>
            )}
          </div>
        </div>
      </section>

      {type === "doble-una-lista" && (
        <section className={styles.sectionInferior}>
          <div className={`wrapper ${styles.wrapperInferior}`}>
            <h2 className={styles.h2}>Mis habilidades</h2>
            <ul className={styles.unaListaUl}>
              <li>JavaScript ES6</li>
              <li>React 18</li>
              <li>React Router</li>
              <li>Git</li>
              <li>Firebase</li>
              <li>CSS & HTML</li>
            </ul>
          </div>
        </section>
      )}
      {type === "doble-tres-listas" && (
        <section className={styles.sectionInferior}>
          <div className={`wrapper ${styles.wrapperInferiorTresListas}`}>
            <div>
              <h2 className={styles.tresListasH2}>Tipo:</h2>
              <ul className={styles.tresListasUl}>
                <li>Web App</li>
                <li>Diseño responsive</li>
              </ul>
            </div>
            <div>
              <h2 className={styles.tresListasH2}>Herramientas:</h2>
              <ul className={styles.tresListasUl}>
                <li>CSS & HTML</li>
                <li>React 18</li>
                <li>React Router 6</li>
                <li>Firebase backend</li>
                <li>Git & GitHub</li>
                <li>Netlifly</li>
              </ul>
            </div>
            <div>
              <h2 className={styles.tresListasH2}>En vivo:</h2>
              <ul className={styles.tresListasUl}>
                <li>
                  <a
                    target="_blank"
                    href="https://reminders-app-sasa.netlify.app"
                  >
                    Visitar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

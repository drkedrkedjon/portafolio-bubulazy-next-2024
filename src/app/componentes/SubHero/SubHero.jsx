import Link from "next/link";
import styles from "./SubHero.module.css";

// type: single, single-btn, doble-una-lista, doble-tres-listas,
export default function SubHero({ type, color }) {
  return (
    <>
      <section className={styles.sectionSuperior}>
        <div className={`wrapper ${styles.wrapperSuperior}`}>
          <h2 className={styles.h2}>Sobre mi</h2>
          <div>
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
            {type === "single-btn" && <button>Button de prueba</button>}
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
        <section className="fondo-asento-dos color-oscuro-negro">
          <div className="container proyecto-detalles flex color-oscuro">
            <div className="flow">
              <h2 className="fs-800 f-str-75 f-wei-600">Tipo:</h2>
              <ul className="ul-detalles fs-400 f-wei-600">
                <li>Web App</li>
                <li>Optimisada para móviles</li>
              </ul>
            </div>
            <div className="flow">
              <h2 className="fs-800 f-str-75 f-wei-600">Herramientas:</h2>
              <ul className="ul-detalles fs-400 f-wei-600">
                <li>CSS & HTML</li>
                <li>React 18</li>
                <li>React Router 6</li>
                <li>Firebase backend</li>
                <li>Git & GitHub</li>
                <li>Netlifly</li>
              </ul>
            </div>
            <div className="flow">
              <h2 className="fs-800 f-str-75 f-wei-600">En vivo:</h2>
              <ul className="ul-detalles fs-400 f-wei-600">
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

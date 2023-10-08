import Link from "next/link";
import styles from "./SubHero.module.css";

// type: single, single-link, doble-una-lista, doble-tres-listas,
export default function SubHero({ type, contenido }) {
  const {
    tituloSuperior,
    contenidoSuperior,
    tituloInferior,
    contenidoInferior,
  } = contenido;

  return (
    <>
      <section className={styles.sectionSuperior}>
        <div
          className={`wrapper ${styles.wrapperSuperior} ${
            (type === "single" || type === "single-link") &&
            styles.wrapperSuperiorSingle
          }`}
        >
          <h2 className={styles.h2}>{tituloSuperior}</h2>
          <div className={styles.contenidoSuperior}>
            <p>{contenidoSuperior}</p>
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
            <h2 className={styles.h2}>{tituloInferior}</h2>
            <ul className={styles.unaListaUl}>
              {contenidoInferior.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
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

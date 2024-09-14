// import Link from "next/link";
import { Link } from "@/i18n/routing";
import styles from "./SubHero.module.css";
import { useTranslations } from "next-intl";

// type: single, single-link, doble-una-lista, doble-tres-listas,
export default function SubHero({ type, contenido }) {
  const t = useTranslations("SubHero");
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
              <h3 className={styles.tresListasH2}>{tituloInferior[0]}</h3>
              <ul className={styles.tresListasUl}>
                {contenidoInferior.colUno.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.tresListasH2}>{tituloInferior[1]}</h3>
              <ul className={styles.tresListasUl}>
                {contenidoInferior.colDos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.tresListasH2}>{tituloInferior[2]}</h3>
              <ul className={styles.tresListasUl}>
                {contenidoInferior.colTres.map((item, index) => (
                  <li key={index}>
                    <a
                      target="_blank"
                      href={item}
                    >
                      {t("liveBtn")}
                    </a>
                  </li>
                ))}
                <li></li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

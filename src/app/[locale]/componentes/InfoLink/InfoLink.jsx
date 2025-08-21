import { Link } from "@/i18n/navigation";
import styles from "./infoLink.module.css";

export default function InfoLink({ contenido, type }) {
  const { titulo, content, url, urlText } = contenido;

  return (
    <section className={styles.sectionSuperior}>
      <div
        className={`wrapper ${styles.wrapperSuperior} ${
          (type === "single" || type === "single-link") &&
          styles.wrapperSuperiorSingle
        }`}
      >
        <h2 className={styles.h2}>{titulo}</h2>
        <div className={styles.contenidoSuperior}>
          <p>{content}</p>
          {type === "single-link" && (
            <Link
              className={styles.singleLink}
              href={url}
            >
              {urlText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

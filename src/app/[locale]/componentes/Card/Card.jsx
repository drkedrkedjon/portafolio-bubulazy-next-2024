import { Link } from "@/i18n/routing";
import styles from "./Card.module.css";
import Image from "next/image";

export default function Card({ type, contenido }) {
  const { titulo, descripcion, imageSrc, url, linkText } = contenido;

  if (type === "con-imagen") {
    return (
      <section className={styles.container}>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src={imageSrc}
            alt="Sasa"
          />
          <div className={`flow ${styles.cardContent}`}>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <Link href={url}>{linkText}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (type === "sin-imagen") {
    return (
      <section className={styles.containerSinImagen}>
        <div className={`flow ${styles.cardSinImagen}`}>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <Link href={url}>{linkText}</Link>
        </div>
      </section>
    );
  }
}

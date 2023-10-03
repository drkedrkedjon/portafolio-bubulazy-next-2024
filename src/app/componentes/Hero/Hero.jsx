import styles from "./Hero.module.css";
import Image from "next/image";

// con-imagen, sin-imagen
export default function Hero({ type, image, alt, title, about }) {
  if (type === "con-imagen") {
    return (
      <section>
        <div class={`wrapper ${styles.containerTypeImagen}`}>
          <div className={styles.imageRoundFrame}>
            <Image
              src={image}
              alt={alt}
            />
          </div>
          <h1 className={styles.h1}>{title}</h1>
        </div>
      </section>
    );
  }

  if (type === "sin-imagen") {
    return (
      <section>
        <div class={`wrapper ${styles.containerTypeSinImagen}`}>
          <h1 className={styles.h1}>
            <span className={styles.about}>{about}</span> {title}
          </h1>
        </div>
      </section>
    );
  }
}

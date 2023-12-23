import Image from "next/image";
import styles from "./proyectos-aside.module.css";

export default function ProyectosAside({ contenido }) {
  const { bloqueUno, bloqueDos, bloqueTres } = contenido;

  return (
    <aside className={styles.asideContainer}>
      <div className={`wrapper ${styles.flexContainer}`}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          {bloqueUno.contenido.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={styles.bloqueDos}>
          <picture>
            <source
              srcSet={bloqueDos.imgDos.src}
              media="(max-width: 54.999rem)"
              alt=""
            />
            <source
              srcSet={bloqueDos.imgUno.src}
              media="(min-width: 55rem)"
              alt=""
            />
            <Image
              className={styles.bloqueDosImage}
              src={bloqueDos.imgDos}
              alt=""
            />
          </picture>
        </div>
        <div className={`flow ${styles.bloqueTres}`}>
          <h3 className={styles.h3}>{bloqueTres.title}</h3>
          {bloqueTres.contenido.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </aside>
  );
}

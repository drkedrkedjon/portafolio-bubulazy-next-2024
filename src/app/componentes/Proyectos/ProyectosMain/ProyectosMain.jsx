import Image from "next/image";
import styles from "./proyectosMain.module.css";

export default function ProyectosMain({ contenido }) {
  const { bloqueUno, bloqueDos, bloqueTres, bloqueCuatro, bloqueCinco } =
    contenido;
  return (
    <main className={`wrapper ${styles.proyectosMainWrapper}`}>
      <div className={styles.gridContainer}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          {bloqueUno.contenido.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={`flow ${styles.bloqueDos}`}>
          <h3 className={styles.h3}>{bloqueDos.title}</h3>
          {bloqueDos.contenido.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={`flow ${styles.bloqueTres}`}>
          <picture>
            <source
              media="(max-width: 49.99rem)"
              srcSet={bloqueTres.imgDos.src}
            />
            <source
              media="(min-width: 50rem)"
              srcSet={bloqueTres.imgUno.src}
            />
            <Image
              src={bloqueTres.imgDos}
              alt="Tres tarjetas de ofertas"
            />
          </picture>
        </div>
        <div className={`flow ${styles.bloqueCuatro}`}>
          <h3 className={styles.h3}>{bloqueCuatro.title}</h3>
          {bloqueCuatro.contenido.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <Image
          src={bloqueCinco.imgUno}
          alt=""
        />
      </div>
    </main>
  );
}

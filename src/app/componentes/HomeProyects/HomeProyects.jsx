import styles from "./HomeProyects.module.css";
import Image from "next/image";

export default function HomeProyects({ contenido }) {
  const ultimosProyectos = contenido.slice(0, 3);

  return (
    <section>
      <div className={`wrapper`}>
        <h2 className={styles.h2}>Últimos proyectos</h2>
      </div>
    </section>
  );
}

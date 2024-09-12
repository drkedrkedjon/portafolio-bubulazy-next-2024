import Card from "@/app/[locale]/componentes/Card";
import styles from "./proyectosOtros.module.css";
import Link from "next/link";

export default function Otros({ contenido, id }) {
  let firstProyectID = "";
  let secondProyectID = "";

  for (let i = 0; i < 2; i++) {
    const randomNum = Math.floor(Math.random() * contenido.length);

    // Si el proyecto A es el mismo que el que se está mostrando, se vuelve a generar un número aleatorio
    // Si el proyecto A es el mismo que el proyecto B, se vuelve a generar un número aleatorio
    if (
      contenido[randomNum].id === id ||
      firstProyectID === contenido[randomNum].id
    ) {
      i--;
      continue;
    }
    // En la primera iteración se guarda el id del primer proyecto
    if (i === 0) {
      firstProyectID = contenido[randomNum].id;
      continue;
    }
    // Se guarda el id del segundo proyecto
    secondProyectID = contenido[randomNum].id;
  }

  const firstProyect = contenido.find(
    (proyect) => proyect.id === firstProyectID
  );
  const secondProyect = contenido.find(
    (proyect) => proyect.id === secondProyectID
  );

  return (
    <aside>
      <div className={`wrapper flow ${styles.container}`}>
        <h2 className={styles.h2}>Otros Proyectos</h2>
        <div className={styles.flexContainer}>
          <div className="flow">
            <h3 className={styles.h3}>{firstProyect.titulo}</h3>
            <p>{firstProyect.descripcion}</p>
            <Link href={firstProyect.url}>{firstProyect.linkText}</Link>
          </div>
          <div className="flow">
            <h3 className={styles.h3}>{secondProyect.titulo}</h3>
            <p>{secondProyect.descripcion}</p>
            <Link href={secondProyect.url}>{secondProyect.linkText}</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

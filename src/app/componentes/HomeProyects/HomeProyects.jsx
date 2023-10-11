import Card from "../Card";
import styles from "./homeProyects.module.css";

export default function HomeProyects({ contenido }) {
  const ultimosProyectos = contenido.slice(0, 3);
  const otrosProyectos = contenido.slice(3);

  return (
    <section>
      <div className={`wrapper ${styles.proyectsWrapper}`}>
        <h2 className={styles.h2}>Últimos proyectos</h2>
        <div className={styles.cardsContainer}>
          {ultimosProyectos.map((proyecto) => (
            <Card
              type="con-imagen"
              contenido={proyecto}
              key={proyecto.url}
            />
          ))}
        </div>
        <h2 className={styles.h2}>Otros proyectos</h2>
        <div className={styles.cardsSinImagen}></div>
      </div>
    </section>
  );
}

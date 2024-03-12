import Link from "next/link";
import Card from "@/app/componentes/Card";
import Hero from "@/app/componentes/Hero";
import styles from "./homeProyects.module.css";

// type opcion: "full" / "reduced"
export default function HomeProyects({ contenido, type }) {
  if (type === "reduced") {
    const ultimosProyectos = contenido.slice(0, 3);
    const otrosProyectos = contenido.slice(3, 7);

    return (
      <section>
        <div className={`wrapper flow ${styles.proyectsWrapper}`}>
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
          <div className={styles.cardsSinImagen}>
            {otrosProyectos.map((proyecto) => (
              <Card
                type="sin-imagen"
                contenido={proyecto}
                key={proyecto.url}
              />
            ))}
          </div>
          <Link
            className="link-btn"
            href="/proyectos"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </section>
    );
  }

  if (type === "full") {
    const ultimosProyectos = contenido.slice(0, 3);
    const otrosProyectos = contenido.slice(3);

    return (
      <section>
        <div className={`wrapper flow ${styles.proyectsWrapperFull}`}>
          <Hero
            type="sin-imagen"
            about="Mis proyectos personales."
            title="Todos los proyectos."
          />
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
          <div className={styles.cardsSinImagen}>
            {otrosProyectos.map((proyecto) => (
              <Card
                type="sin-imagen"
                contenido={proyecto}
                key={proyecto.url}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

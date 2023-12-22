import styles from "./proyectos-aside.module.css";

export default function ProyectosAside({ contenido }) {
  const { bloqueUno, bloqueDos, bloqueTres } = contenido;

  return (
    <aside className="wrapper">
      <div className={styles.gridContainer}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          {bloqueUno.contenido.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </aside>
  );
}

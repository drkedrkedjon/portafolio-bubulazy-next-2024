import styles from "./ProyectosMain.module.css";

export default function ProyectosMain({ contenido }) {
  const { bloqueUno, bloqueDos, bloqueTres, bloqueCuatro, bloqueCinco } =
    contenido;
  return (
    <main className={`wrapper ${styles.proyectosMainWrapper}`}>
      <div className={styles.gridContainer}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          <p>{bloqueUno.contenido}</p>
        </div>
        <div className={`flow ${styles.bloqueDos}`}>
          <h3 className={styles.h3}>{bloqueDos.title}</h3>
          <p>{bloqueDos.contenido}</p>
        </div>
      </div>
    </main>
  );
}

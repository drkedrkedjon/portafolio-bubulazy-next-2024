import Hero from "@/app/componentes/Hero";
import styles from "./page.module.css";
import sasaMemoji from "@/app/assets/images/generales/sasa-memoji.png";

export default function CvPage() {
  return (
    <main>
      <Hero
        image={sasaMemoji}
        alt="Mi foto de CV"
        type="con-imagen"
        title="Currículum Vitae: Desarrollador FrontEnd"
      />

      <section className="wrapper flow">
        <p>
          <span className="bold-text">Desarrollador Web Front-End</span> junior
          con conocimientos de{" "}
          <span className="bold-text">React, Nextjs, React Router</span>,
          JavaScript, CSS, HTML, Firebase y{" "}
          <span className="bold-text">Accesibilidad web</span>.
        </p>
        <p>
          A lo largo de mi trayectoria personal y profesional, he demostrado una
          firme determinación para alcanzar mis objetivos. Como el de cambiar la
          profesión a desallador web. Aprendo rápidamente y estoy comprometido
          con seguir evolucionando en este campo, buscando oportunidades como
          desarrollador Front-End en una empresa que comparta mis valores y
          donde puedo seguir aprendiendo y aportando.
        </p>
      </section>

      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={styles.flexContainer}>
          <h2 className={`${styles.h2} ${styles.right}`}>Experencia laboral</h2>
          <div className={styles.jobDetails}>
            <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
            <p>Freelance | 2021 - Actualidad</p>
            <p>Desarrollo de la pagina web con HTML y CSS</p>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={styles.flexContainer}>
          <div className={styles.jobDetails}>
            <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
            <p>Freelance | 2021 - Actualidad</p>
            <p>Desarrollo de la pagina web con HTML y CSS</p>
          </div>
          <h2 className={`${styles.h2} ${styles.left}`}>Experencia laboral</h2>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={styles.flexContainer}>
          <h2 className={`${styles.h2} ${styles.right}`}>Experencia laboral</h2>
          <div className={styles.jobDetails}>
            <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
            <p>Freelance | 2021 - Actualidad</p>
            <p>Desarrollo de la pagina web con HTML y CSS</p>
          </div>
        </div>
      </section>
    </main>
  );
}

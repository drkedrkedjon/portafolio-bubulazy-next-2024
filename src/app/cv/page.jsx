import Hero from "@/app/componentes/Hero";
import styles from "./page.module.css";
import sasaMemoji from "@/app/assets/images/generales/sasa-memoji.png";
import Link from "next/link";

export default function CvPage() {
  return (
    <main>
      <Hero
        image={sasaMemoji}
        alt="Mi foto de CV"
        type="con-imagen"
        title="Currículum Vitae: Sasha Savic Perusina"
        // about="Sasha Savic Perusina"
      />

      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Resumen</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Profesión</h3>
              <p>
                <span className="bold-text">Desarrollador Web Front-End</span>{" "}
                junior con conocimientos de{" "}
                <span className="bold-text">React, Nextjs, React Router</span>,
                JavaScript, CSS, HTML, Firebase y{" "}
                <span className="bold-text">Accesibilidad web</span>.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Sobre mi</h3>
              <p>
                A lo largo de mi trayectoria personal y profesional, he
                demostrado una firme determinación para alcanzar mis objetivos.
                Como el de cambiar la profesión a desallador web. Aprendo
                rápidamente y estoy comprometido con seguir evolucionando en
                este campo, buscando oportunidades como desarrollador Front-End
                en una empresa que comparta mis valores y donde puedo seguir
                aprendiendo y aportando.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Detalles</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Conocimientos:</h3>
              <p>
                React, NEXT.js, React Router, JavaScript, CSS, HTML, Firebase,
                Git, GitHub, Accesibilidad Web y Agile{" "}
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Datos de contacto:</h3>
              <p>
                <Link href="/#contact-form">Formulario de contacto</Link>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sasa-savic-perusina/"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://github.com/drkedrkedjon"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Úbicacion:</h3>
              <p>Las Palmas de Gran Canaria, España</p>
              <p>Disponibilidad geografica: Unión Europea y España imediata</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Experencia laboral</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Varios proyectos</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Formacíon</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Datos de interés</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2021 - Actualidad</p>
              <p>Desarrollo de la pagina web con HTML y CSS</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

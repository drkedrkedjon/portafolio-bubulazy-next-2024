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
                <span className="bold-text">React, NEXTjs, React Router</span>,
                JavaScript, CSS, HTML, Firebase y{" "}
                <span className="bold-text">Accesibilidad web</span>, Web Design
                y Figma.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Sobre mi</h3>
              <div className="flow">
                <p>
                  Me inicié en FrontEnd en 1996 y hasta el 2008 he trabajado
                  ocasionalmente como freelancer. Luego he cambiado mi profesión
                  a turísmo y ahora regreso con muchas ganas de llevar a cabo
                  todo lo nuevo aprendido en diferentes cursos.
                </p>
                <p>
                  {" "}
                  A lo largo de mi trayectoria personal y profesional, he
                  demostrado una firme determinación para alcanzar mis
                  objetivos. Aprendo con rapidez y estoy comprometido a seguir
                  evolucionando en este campo, buscando oportunidades como
                  desarrollador Front-End en una empresa que comparta mis
                  valores y donde pueda continuar aprendiendo y aportando.
                </p>
              </div>
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
                Git, GitHub, Accesibilidad Web, Agile, Web Design y Figma{" "}
              </p>
            </div>
            <div className={styles.cvLinks}>
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
              <h3 className={styles.h3}>Holiday World Centro de Ocio</h3>
              <p>Encargado de Departamento | 2008 - Actualidad</p>
              <p>Sector de turismo.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Freelance Web Developer</h3>
              <p>Freelance | 1996 / 2008 y de 2022 - Actualidad</p>
              <p>Desarrollo FrontEnd. Proyectos comerciales.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Gran Canaria Segway Tours</h3>
              <p>Autónomo, Empresa propia. | 2006 / 2008</p>
              <p>Servicio de excursiones turisticas con Segways</p>
            </div>
            <div>
              <h3 className={styles.h3}>Holiday World Centro de Ocio</h3>
              <p>Administrativo, Recepción. | 2003 / 2006</p>
              <p>Sector de turismo</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clínica Dental Blancodent</h3>
              <p>Informático. Relaciones publicas. | 2000 / 2003</p>
              <p>Sector de Salud</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Varios proyectos</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>En mi portafolio personal</h3>
              <p>2021 - Actualidad</p>
              <p>
                Desarollo FrontEnd:{" "}
                <Link
                  about="_blank"
                  href="https://bubulazy.com"
                >
                  GitHub
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Web development proyectos en mi GitHub
              </h3>
              <p>2017 - Actualidad</p>
              <p>
                Desarollo FrontEnd:{" "}
                <Link
                  about="_blank"
                  href="https://github.com/drkedrkedjon"
                >
                  GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Formacíon</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>
                Practical Accessibility for web designers and developers by Sara
                Soueidan
              </h3>
              <p>Curso Online USA | 2024 - Actualidad</p>
              <p>
                Accessibilidad Web:{" "}
                <Link
                  about="_blank"
                  href="http://practical-accessibility.today"
                >
                  Web site
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Joy of React by Josh W Comeau: React Framework
              </h3>
              <p>Curso Online Canada | 2023 - Actualidad</p>
              <p>
                React framework:{" "}
                <Link
                  about="_blank"
                  href="https://www.joyofreact.com"
                >
                  Web site
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Scrimba FrontEnd bootcamp: React / React Router / JS / HTML /
                CSS
              </h3>
              <p>Cursos Online Norway | 2021 - 2023</p>
              <p>
                Web Developer Bootcamp:{" "}
                <Link
                  about="_blank"
                  href="https://scrimba.com"
                >
                  Web site
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                FreeCodeCamp FrontEnd developer: React / JavaScript / HTML / CSS
              </h3>
              <p>Cursos Online USA | 2020 - 2023</p>
              <p>
                Web Developer Bootcamp:{" "}
                <Link
                  about="_blank"
                  href="https://www.freecodecamp.org"
                >
                  Web site
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Grado de Industrial & Product Design
              </h3>
              <p>
                The Academy of Fine Arts, University of Sarajevo, Bosnia | 1988
                - 1991
              </p>
              <p>
                Industrial Design:{" "}
                <Link
                  about="_blank"
                  href="https://alu.unsa.ba/"
                >
                  Web site
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Datos de interés</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div className="flow">
              <p>
                En mis tiempos libres practico varios deportes: esquí alpino,
                ciclismo de touring, senderismo...
              </p>
              <p>
                Disfruto de la lectura, especialmente historia y filosofía.
                También sobre temas interesantes relacionados con la
                documentación de todo aquello que estoy aprendiendo.
              </p>
              <p>
                Toco la guitarra, hago fotografías, vídeos y ediciones de los
                mismos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

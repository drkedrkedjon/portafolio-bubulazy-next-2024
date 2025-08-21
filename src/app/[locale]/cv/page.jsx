import { use } from "react";
import Hero from "@/app/[locale]/componentes/Hero";
import styles from "./page.module.css";
import sasaFoto from "@/app/[locale]/assets/images/generales/sasa-mugshot-cv.jpg";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { BASE_METADATA } from "../utilities/constants";

export const metadata = {
  title: `Alejandro Sasha S. Perusina CV • ${BASE_METADATA.title}`,
};

export default function CvPage(props) {
  const params = use(props.params);

  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("CV");

  const CV_ES = (
    <main className={styles.main}>
      <Hero
        type="con-imagen"
        title={t("heroTitle")}
        image={sasaFoto}
        alt={t("heroAlt")}
      />

      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Resumen</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Profesión</h3>
              <p>
                <span className="bold-text">Desarrollador Web FrontEnd</span>{" "}
                con habilidades de{" "}
                <span className="bold-text">NEXTjs, React,</span> JavaScript,{" "}
                <span className="bold-text">CSS, HTML, a11y, i18n</span>,{" "}
                Firebase, Lit Element, Web Components, Git, GitHub, Figma y Jest
                testing.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Interés especial:</h3>
              <p>
                <span className="bold-text">Accesibilidad web</span>, CSS
                moderno y HTML semántico, diseño web de UI & UX con Figma y
                desarrollo con NEXTjs. Páginas responsivas optimizadas para
                diferentes dispositivos. Disfruto trabajar en equipo. Formación
                continua para estar al día con las últimas tecnologías.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Sobre mí</h3>
              <div className="flow">
                <p>
                  Me inicié en FrontEnd en 1996 y hasta 2008 trabajé
                  ocasionalmente como freelancer. Luego cambié de profesión y en
                  2020 volví a FrontEnd con muchas ganas de aplicar todo lo
                  nuevo aprendido en diferentes cursos como Joy of React de Josh
                  W. Comeau, Practical Accessibility de Sara Soueidan,
                  FreeCodeCamp y Scrimba, entre otros.
                </p>
                <p>
                  A lo largo de mi trayectoria personal y profesional, he
                  demostrado una firme determinación para alcanzar mis
                  objetivos. Aprendo con rapidez y estoy comprometido a seguir
                  evolucionando en este campo, buscando oportunidades como
                  desarrollador FrontEnd en una empresa que comparta mis valores
                  y donde pueda continuar aprendiendo y aportando.
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
              <h3 className={styles.h3}>Ubicación:</h3>
              <p>Actualmente en Las Palmas de Gran Canaria, España</p>
              <p>
                Disponibilidad geográfica: Unión Europea y España: inmediata
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Experiencia laboral</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Freelance Web Developer</h3>
              <p>Part Time Freelancer | 2020 / Actualidad</p>
              <p>Desarrollo FrontEnd. Proyectos comerciales.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Holiday World Centro de Ocio</h3>
              <p>Encargado de Departamento | 2008 - 2024</p>
              <p>Sector turismo.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Gran Canaria Segway Tours</h3>
              <p>Autónomo, Empresa propia. | 2006 / 2008</p>
              <p>Excursiones turísticas con Segways.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Holiday World Centro de Ocio</h3>
              <p>Informático, Recepción. | 2003 / 2006</p>
              <p>Sector turismo.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clínica Dental Blancodent</h3>
              <p>Informático. Relaciones públicas. | 2000 / 2003</p>
              <p>Sector salud.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Freelance Web Developer</h3>
              <p>Part Time Freelancer | 1996 / 2008</p>
              <p>Desarrollo FrontEnd. Proyectos comerciales.</p>
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
                Desarrollo FrontEnd:{" "}
                <Link
                  about="_blank"
                  href="/proyectos"
                >
                  Proyectos
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Proyectos de desarrollo web en mi GitHub
              </h3>
              <p>2017 - Actualidad</p>
              <p>
                Desarrollo FrontEnd:{" "}
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
          <h2 className={styles.h2}>Formación</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>
                CSS for JS Developers by Josh W. Comeau: CSS
              </h3>
              <p>Curso online - Canadá | 2024 - Actualidad</p>
              <p>
                CSS:{" "}
                <Link
                  about="_blank"
                  href="https://css-for-js.dev/"
                >
                  Sitio web
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                a11y - Practical Accessibility for Developers by Sara Soueidan
              </h3>
              <p>Curso online - EE.UU. | 2024 - Actualidad</p>
              <p>
                Accesibilidad web:{" "}
                <Link
                  about="_blank"
                  href="http://practical-accessibility.today"
                >
                  Sitio web
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Joy of React by Josh W. Comeau: React Framework
              </h3>
              <p>Curso online - Canadá | 2023 - Actualidad</p>
              <p>
                React framework:{" "}
                <Link
                  about="_blank"
                  href="https://www.joyofreact.com"
                >
                  Sitio web
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Scrimba FrontEnd Bootcamp: React / React Router / JS / HTML /
                CSS
              </h3>
              <p>Bootcamp online - Noruega | 2021 - 2023</p>
              <p>
                Web Developer Bootcamp:{" "}
                <Link
                  about="_blank"
                  href="https://scrimba.com"
                >
                  Sitio web
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                FreeCodeCamp FrontEnd Developer: React / JavaScript / HTML / CSS
              </h3>
              <p>Cursos online - EE.UU. | 2020 - 2023</p>
              <p>
                Web Developer Bootcamp:{" "}
                <Link
                  about="_blank"
                  href="https://www.freecodecamp.org"
                >
                  Sitio web
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Grado en Diseño Industrial y de Producto
              </h3>
              <p>
                The Academy of Fine Arts, University of Sarajevo - Bosnia | 1988
                - 1991
              </p>
              <p>
                Completé la mitad de los créditos; no finalicé por la guerra.
              </p>
              <p>
                Product Design:{" "}
                <Link
                  about="_blank"
                  href="https://alu.unsa.ba/"
                >
                  Sitio web
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Idiomas</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Castellano</h3>
              <p>Nivel avanzado - Bilingüe</p>
              <p>Vivo en España desde 1995 - Actualidad</p>
            </div>
            <div>
              <h3 className={styles.h3}>Inglés</h3>
              <p>Nivel C1</p>
            </div>
            <div>
              <h3 className={styles.h3}>Alemán</h3>
              <p>Nivel básico, conversacional</p>
            </div>
            <div>
              <h3 className={styles.h3}>Bosnio</h3>
              <p>Nativo</p>
            </div>
            <div>
              <h3 className={styles.h3}>Croata y Serbio</h3>
              <p>Bilingual</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Otros detalles</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div className="flow">
              <p>
                Practico varios deportes: esquí alpino, ciclismo de ruta y
                senderismo.
              </p>
              <p>
                Disfruto de la lectura, especialmente de ciencia y filosofía.
                También me interesan temas relacionados con documentar todo lo
                que estoy aprendiendo.
              </p>
              <p>
                Toco la guitarra, hago fotografías, grabo vídeos y los edito con
                DaVinci Resolve y Pixelmator Pro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
  const CV_EN = (
    <main className={styles.main}>
      <Hero
        type="con-imagen"
        title={t("heroTitle")}
        image={sasaFoto}
        alt={t("heroAlt")}
      />

      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Resumen</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Profession</h3>
              <p>
                <span className="bold-text">FrontEnd Web Developer</span> with
                skills in <span className="bold-text">NEXTjs, React,</span>{" "}
                JavaScript,
                <span className="bold-text">CSS, HTML, a11y, i18n</span>,
                Firebase, Lit Element, Web Components, Git, GitHub, Figma, and
                Jest testing.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Special Interest:</h3>
              <p>
                <span className="bold-text">Web Accessibility</span>, modern CSS
                and semantic HTML, UI & UX Web Design with Figma, and
                development with NEXTjs. Responsive pages optimized for
                different screen sizes. I enjoy working in a team. Continuous
                learning to stay up to date with the latest technologies.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>About Me</h3>
              <div className="flow">
                <p>
                  I started in FrontEnd in 1996 and until 2008 I worked
                  part-time as a freelancer. Then I changed my profession, and
                  in 2020 I returned to FrontEnd development with great
                  enthusiasm to apply everything new I learned in various
                  courses such as Joy of React by Josh W. Comeau, Practical
                  Accessibility by Sara Soueidan, FreeCodeCamp, and Scrimba,
                  among others.
                </p>
                <p>
                  Throughout my personal and professional journey, I have
                  demonstrated a strong determination to achieve my goals. I
                  learn quickly and am committed to continuing to grow in this
                  field, seeking opportunities as a FrontEnd developer in a
                  company that shares my values and where I can continue
                  learning and contributing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Details</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div className={styles.cvLinks}>
              <h3 className={styles.h3}>Contact Information:</h3>
              <p>
                <Link href="/#contact-form">Contact Form</Link>
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
              <h3 className={styles.h3}>Location:</h3>
              <p>Las Palmas de Gran Canaria, Spain</p>
              <p>
                Geographical availability: European Union and Spain, immediate
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Work Experience</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Freelance Web Developer</h3>
              <p>Part-time Freelance | 2020 / Present</p>
              <p>Front-End Development. Commercial projects.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Holiday World Leisure Centre</h3>
              <p>Department Manager | 2008 - 2024</p>
              <p>Tourism sector.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Gran Canaria Segway Tours</h3>
              <p>Self-employed, Business owner | 2006 / 2008</p>
              <p>Tourist excursions with Segways.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Holiday World Leisure Centre</h3>
              <p>IT, Reception. | 2003 / 2006</p>
              <p>Tourism sector.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Blancodent Dental Clinic</h3>
              <p>IT, Public Relations | 2000 / 2003</p>
              <p>Health sector.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Freelance Web Developer</h3>
              <p>Part Time Freelance | 1996 / 2008</p>
              <p>Front-End Development. Commercial projects.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Various Projects</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>In My Personal Portfolio</h3>
              <p>2021 - Present</p>
              <p>
                Front-End Development:{" "}
                <Link
                  about="_blank"
                  href="/proyectos"
                >
                  Projects
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Web Development Projects on My GitHub
              </h3>
              <p>2017 - Present</p>
              <p>
                Front-End Development:{" "}
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
          <h2 className={styles.h2}>Education</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>
                CSS for JS Developers by Josh W. Comeau: CSS
              </h3>
              <p>Online Course - Canada | 2024 - Present</p>
              <p>
                CSS:{" "}
                <Link
                  about="_blank"
                  href="https://css-for-js.dev/"
                >
                  Website
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                a11y - Practical Accessibility for Developers by Sara Soueidan
              </h3>
              <p>Online Course - USA | 2024 - Present</p>
              <p>
                Web Accessibility:{" "}
                <Link
                  about="_blank"
                  href="http://practical-accessibility.today"
                >
                  Website
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Joy of React by Josh W. Comeau: React Framework
              </h3>
              <p>Online Course - Canada | 2023 - Present</p>
              <p>
                React framework:{" "}
                <Link
                  about="_blank"
                  href="https://www.joyofreact.com"
                >
                  Website
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Scrimba Front-End Bootcamp: React / React Router / JS / HTML /
                CSS
              </h3>
              <p>Online Bootcamp - Norway | 2021 - 2023</p>
              <p>
                Web Developer Bootcamp:{" "}
                <Link
                  about="_blank"
                  href="https://scrimba.com"
                >
                  Website
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                FreeCodeCamp Front-End Developer: React / JavaScript / HTML /
                CSS
              </h3>
              <p>Online Courses - USA | 2020 - 2023</p>
              <p>
                Web Developer Bootcamp:{" "}
                <Link
                  about="_blank"
                  href="https://www.freecodecamp.org"
                >
                  Website
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Degree in Industrial & Product Design
              </h3>
              <p>
                The Academy of Fine Arts, University of Sarajevo - Bosnia | 1988
                - 1991
              </p>
              <p>
                Completed half of the credits; did not finish due to the war.
              </p>
              <p>
                Product Design:{" "}
                <Link
                  about="_blank"
                  href="https://alu.unsa.ba/"
                >
                  Website
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Languages</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Spanish</h3>
              <p>Advanced level - Bilingual</p>
              <p>Living in Spain since 1995 - Present</p>
            </div>
            <div>
              <h3 className={styles.h3}>English</h3>
              <p>C1 level</p>
            </div>
            <div>
              <h3 className={styles.h3}>German</h3>
              <p>Basic, conversational level</p>
            </div>
            <div>
              <h3 className={styles.h3}>Bosnian</h3>
              <p>Native</p>
            </div>
            <div>
              <h3 className={styles.h3}>Croatian & Serbian</h3>
              <p>Bilingual</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper ${styles.containerQuery}`}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Other Details</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div className="flow">
              <p>
                I practice several sports: alpine skiing, touring cycling, and
                hiking.
              </p>
              <p>
                I enjoy reading, especially science and philosophy. I am also
                interested in topics related to documenting everything I am
                learning.
              </p>
              <p>
                I play the guitar, take photographs, record videos, and edit
                them with DaVinci Resolve and Pixelmator Pro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
  return locale === "es" ? CV_ES : CV_EN;
}

import proyectoGrande from "./images/proyecto-primera-grande.png";
import proyectoPequeno from "./images/proyecto-primera-peque.png";
import proyectoUltima from "./images/proyecto-ultima.png";
import problemasLargo from "./images/problemas-largo.png";
import problemasCorto from "./images/problemas-corto.png";

export const contenidoDePagina_ES = {
  id: "015",
  hero: {
    about: "Proyecto:",
    title: "Formulario web multipágina",
  },
  subHero: {
    tituloSuperior: "Introducción",
    contenidoSuperior:
      "Esta aplicación sirve como un proyecto de ejercicio dirigido a construir un formulario de varias páginas con autenticación de Firebase, almacenamiento e integración de bases de datos como backend. Esencialmente, simula el proceso de solicitud de una oportunidad de trabajo.",
    tituloInferior: ["Tipo:", "Herramientas:", "En vivo:"],
    contenidoInferior: {
  colUno: ["Aplicación web", "Diseño responsivo"],
      colDos: ["CSS & HTML", "React 18", "Firebase", "Git & GitHub", "Netlify"],
      colTres: ["https://multipage-form-sasa.netlify.app/"],
    },
  },
  main: {
    bloqueUno: {
  title: "Propósito del proyecto",
      contenido: [
        "Inspirado por la multitud de formularios complejos que los usuarios deben completar al solicitar un trabajo, creé esta aplicación sencilla que expresa cómo creo que debería ser el proceso.",
        "El flujo de UX se divide en dos caminos: si el usuario es nuevo, pasa por el registro y la solicitud, y si ya está registrado, pasa por el inicio de sesión y verifica si ya ha solicitado el puesto.",
        "Al final, hay una opción para eliminar todos los datos y solicitudes del mismo usuario.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      contenido: [
  "Utilizando la app Figma se creó el diseño y la UI de la aplicación.",
  "Posteriormente, paso a paso fui construyendo la estructura de la app y el flujo de UX. La conexión con Firebase se utilizó como backend. Luego se añadieron diferentes características. Al final, se utilizó Netlify vía GitHub para el despliegue.",
  "La idea es seguir añadiendo nuevas características y mejorar el diseño.",
      ],
    },
    bloqueTres: {
      imgUno: proyectoGrande,
      imgDos: proyectoPequeno,
    },
    bloqueCuatro: {
  title: "Web stack y explicación",
      contenido: [
  "Lugar de trabajo: Visual Studio Code. Utilicé Vite como entorno de desarrollo rápido junto con ESLint y Prettier para mantener un código limpio y consistente.",
  "Figma: Utilicé Figma para diseñar y crear interfaces de usuario atractivas, centrándome en la experiencia del usuario y la interfaz de usuario.",
  "CSS: Transformé diseños en aplicaciones funcionales utilizando CSS moderno. Hice uso de Flexbox, Grid y la nueva container query para lograr un diseño fluido y responsivo.",
  "React: Componentes reutilizables, props. Uso de renderizado condicional. Control de formularios con estado a través de value y onChange. useEffect para consultas de red y otras oportunidades. useState.",
  "Firebase: Implementé registro de usuarios, envío de datos a la base de datos en tiempo real, inicio y cierre de sesión, así como funcionalidad para eliminar datos.",
  "Netlify: Logré una implementación continua y sin problemas a través de GitHub, asegurando actualizaciones constantes.",
  "Extras: Integré react-markdown y react-feather para mejorar la funcionalidad y el aspecto visual de la aplicación. También paquetes como remove-scroll y focus-lock para optimizar la accesibilidad y experiencia del usuario.",
  "Git: Gestioné eficazmente el control de versiones utilizando commits, ramas, merge, restore y push para colaborar de manera efectiva en equipos y mantener un historial de cambios coherente.",
      ],
    },
    bloqueCinco: {
      imgUno: proyectoUltima,
    },
  },
  aside: {
    bloqueUno: {
      title: "Problemas y soluciones",
      contenido: [
        "Durante todo el proceso de desarrollo, me encontré con una serie de desafíos que surgieron en diversas etapas.",
        "En numerosas ocasiones, me vi enfrentado a puntos de bloqueo donde el avance parecía detenerse por completo. En esos momentos, tuve que recurrir a estrategias como regresar a commits anteriores para poder comenzar de nuevo desde un punto más sólido.",
        "Una lección valiosa que extraigo de este proceso continuo de superar obstáculos es la adquisición de un enfoque mental hacia la resolución de problemas.",
      ],
    },
    bloqueDos: {
      imgUno: problemasLargo,
      imgDos: problemasCorto,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      contenido: [
        "Trabajar en equipo. Compartir ideas. Aceptar que el otro tiene la razón. Respetar cuando uno no sabe.",
  "Buscar soluciones en la web. Conectar puntos clave de documentación para adaptar a necesidades de este proyecto. Tomar decisiones sobre próximos pasos.",
  "Refactorizar y mejorar el código. Escribirlo de una manera que se entienda. Dedicar tiempo a los detalles, especialmente en CSS. Escribir HTML semántico y accesible para los lectores de pantalla.",
      ],
    },
  },
  infoLink: {
    titulo: "Vamos a trabajar juntos",
    content:
      "Si estás buscando a un desarrollador FrontEnd con quien te gustaría trabajar o simplemente deseas conectarte o hacer una pregunta, no dudes en escribirme.",
    url: "/#contact-form",
    urlText: "Contáctame",
  },
};
export const contenidoDePagina_EN = {
  id: "015",
  hero: {
    about: "Project:",
    title: "Multi-page web form",
  },
  subHero: {
    tituloSuperior: "Introduction",
    contenidoSuperior:
      "This application serves as an exercise project aimed at building a multi-page form with Firebase authentication, storage, and database integration as the backend. Essentially, it simulates the process of applying for a job opportunity.",
    tituloInferior: ["Type:", "Tools:", "Live:"],
    contenidoInferior: {
  colUno: ["Web App", "Responsive design"],
      colDos: ["CSS & HTML", "React 18", "Firebase", "Git & GitHub", "Netlify"],
      colTres: ["https://multipage-form-sasa.netlify.app/"],
    },
  },
  main: {
    bloqueUno: {
  title: "Project purpose",
      contenido: [
        "Inspired by the multitude of complex forms that users have to fill out when applying for a job, I created this simple app that expresses how I believe the process should be.",
        "The UX flow is divided into two paths: if the user is new, they go through registration and application, and if they are already registered, they go through login and check if they have already applied for the position.",
  "At the end, there is an option to delete all data and applications by the same user.",
      ],
    },
    bloqueDos: {
  title: "My role in the project",
      contenido: [
        "Using the Figma app, the design and UI of the app were created.",
        "Subsequently, step by step, the structure of the app and the UX flow were built. The connection with Firebase was used as the backend. Then, different features were added. Finally, Netlify was used via GitHub for deployment.",
        "The idea is to continue adding new features and improving the design.",
      ],
    },
    bloqueTres: {
      imgUno: proyectoGrande,
      imgDos: proyectoPequeno,
    },
    bloqueCuatro: {
  title: "Web stack and explanation",
      contenido: [
  "Workspace: Visual Studio Code. I used Vite as a fast development environment along with ESLint and Prettier to maintain clean and consistent code.",
        "Figma: I used Figma to design and create attractive user interfaces, focusing on user experience and user interface.",
        "CSS: I transformed designs into functional applications using modern CSS. I made use of Flexbox, Grid, and the new container query to achieve a fluid and responsive design.",
  "React: Reusable components, props. Use of conditional rendering. Form control with state through value and onChange. useEffect for network requests and other opportunities. useState.",
        "Firebase: I implemented user registration, data submission to the real-time database, login and logout, as well as functionality to delete data.",
        "Netlify: I achieved continuous and seamless deployment through GitHub, ensuring constant updates.",
  "Extras: I integrated react-markdown and react-feather to enhance the functionality and visual appeal of the application. Also, packages like remove-scroll and focus-lock to optimize accessibility and user experience.",
        "Git: I effectively managed version control using commits, branches, merge, restore, and push to collaborate effectively in teams and maintain a coherent change history.",
      ],
    },
    bloqueCinco: {
      imgUno: proyectoUltima,
    },
  },
  aside: {
    bloqueUno: {
      title: "Problems and solutions",
      contenido: [
        "Throughout the development process, I encountered a series of challenges that arose at various stages.",
        "On numerous occasions, I faced blocking points where progress seemed to come to a complete halt. At those times, I had to resort to strategies such as reverting to previous commits to start again from a more solid point.",
        "A valuable lesson I take from this continuous process of overcoming obstacles is the acquisition of a mental approach to problem-solving.",
      ],
    },
    bloqueDos: {
      imgUno: problemasLargo,
      imgDos: problemasCorto,
    },
    bloqueTres: {
      title: "Lessons learned",
      contenido: [
        "Working in a team. Sharing ideas. Accepting that the other person is right. Respecting when one does not know.",
        "Finding solutions on the web. Connecting key points of documentation to adapt to the needs of this project. Making decisions about next steps.",
        "Refactoring and improving the code. Writing it in a way that is understandable. Dedicating time to details, especially in CSS. Writing semantic HTML and making it accessible for screen readers.",
      ],
    },
  },
  infoLink: {
    titulo: "Let's work together",
    content:
      "If you are looking for a FrontEnd developer to work with or simply want to connect or ask a question, feel free to write to me.",
    url: "/#contact-form",
    urlText: "Contact me",
  },
};

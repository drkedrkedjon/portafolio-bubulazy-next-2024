import mainDesktop from "./images/proyecto-primera-grande.png";
import mainMovil from "./images/proyecto-primera-peque.png";
import mainUltima from "./images/proyecto-ultima.png";
import asideDesktop from "./images/problemas-largo.png";
import asideMovil from "./images/problemas-corto.png";

export const contenidoDePagina_ES = {
  id: "014",
  hero: {
    about: "Proyecto:",
    title: "App de Recordatorios para moviles",
  },
  subHero: {
    tituloSuperior: "Introducción",
    contenidoSuperior:
      "Proyecto app Recordatorios para móviles inspirada por recordatorios de iOS. Hecha con las siguiente tehnologias: React 18, React router, Firebase Auth, Realtime DB y Storage. Multiusuario.",
    tituloInferior: ["Tipo:", "Herramientas:", "En vivo:"],
    contenidoInferior: {
      colUno: ["Web App", "Optimisada para móviles"],
      colDos: [
        "CSS & HTML",
        "React 18",
        "React Router 6",
        "Firebase backend",
        "Git & GitHub",
        "Netlify",
      ],
      colTres: ["https://reminders-app-sasa.netlify.app/"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      contenido: [
        "Inspirado por app de recordatorios de iOS, he decidido recrearla parcialmente utilisando stack basado en React y Firebase como backend.",
        "La app pueden usar varios usuarios cada uno con su propio login. Se pueden crear y borrar listas y tambien los recordatorios con un retraso por si se cambia la intencion. Se pueden anadir las imagenes a cada recordatorio.",
        "Existen las lista predefinidas como las tareas de hoy y de los proximos tres dias...",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      contenido: [
        "Utilizando Figma app se ha creado el diseño y UI de la app.",
        "Posteriormente, paso a paso iba construyendo estructura de la app y el flujo de UX. La conexion con Firebase se utilizo como como backend. Luego se han anadido diferentes caracteristicas. Al final, se utilizo Netlify via GitHub para deploy.",
        "La idea es seguir añadiendo nuevas caracteristicas y mejorar el diseño.",
      ],
    },
    bloqueTres: {
      imgUno: mainDesktop,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack y la explicación",
      contenido: [
        "Lugar de trabajo: Visual Studio Code. Utilicé Vite como entorno de desarrollo rápido junto con EsLint y Prettier para mantener un código limpio y consistente.",
        "Figma: Utilicé Figma para diseñar y crear interfaces de usuario atractivas, centrándome en la experiencia del usuario y la interfaz de usuario.",
        "CSS: Transformé diseños en aplicaciones funcionales utilizando CSS moderno. Hice uso de Flexbox, Grid y la nueva query container para lograr un diseño fluido y responsivo.",
        "React: Componentes reutilizables, props. Uso de condicional rendering. Control de formulario con estado a través de value y onChange. useEffect para consulta de red y algunas otros oportunidades. useState. React Context.",
        "Firebase: Implementé registro de usuarios, envío de datos a la base de datos en tiempo real, inicio y cierre de sesión, así como funcionalidad para eliminar datos.",
        "Netlify: Logré una implementación continua y sin problemas a través de GitHub, asegurando actualizaciones fluidas y constantes.",
        "Extras: Integré react-markdown y react-feather para mejorar la funcionalidad y el aspecto visual de la aplicación.",
        "Git: Gestioné eficazmente el control de versiones utilizando commits, branches, merge, restore y push para mantener un historial de cambios coherente.",
      ],
    },
    bloqueCinco: {
      imgUno: mainUltima,
    },
  },
  aside: {
    bloqueUno: {
      title: "Problemas y soluciones",
      contenido: [
        "Organizar la experiencia de usuario en el código fue un desafío central. A menudo tuve que ajustar o regresar con el código para lograr coherencia. Cambiar de react state y props a react context en dos ocasiones demostró ser una solución más adecuada.",
        "Otro inconviniente era que con cada nueva caracteristica sugerian ideas de dos mas y tantas ideas tambien puede ser es un problema si primero uno no se termina cada caracteristica por completo.",
        "Una lección valiosa que extraigo de este proceso continuo de superar obstáculos es la adquisición de un enfoque mental hacia la resolución de problemas.",
      ],
    },
    bloqueDos: {
      imgUno: asideDesktop,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      contenido: [
        "Dedicar mas tiempo a la planificación y la organización de la app antes de sentrarse y escribir el código.",
        "Enfocarse a funcionalidad basica antes de añadir nuevas ideas. Organisacion de flujo de UX tambien, y eso antes de sentarse y escribir el codigo.",
        "Refactorar y mejorar el código. Escribirlo de una manera que se entienda. Dedicar tiempo para los detalles, especialmente en CSS. Escribir HTML semántico y así mismo accesible para los lectores de pantalla.",
      ],
    },
  },
  infoLink: {
    titulo: "Vamos a trabajar juntos",
    content:
      "Si estás buscando a un desarrollador FrontEnd con quién te gustaría trabajar o simplemente deseas conectarte o hacer una pregunta, no dudes en escribirme.",
    url: "/#contact-form",
    urlText: "Contáctame",
  },
};
export const contenidoDePagina_EN = {
  id: "014",
  hero: {
    about: "Project:",
    title: "Reminders App for mobiles",
  },
  subHero: {
    tituloSuperior: "Introduction",
    contenidoSuperior:
      "Reminders app project for mobiles inspired by iOS reminders. Made with the following technologies: React 18, React Router, Firebase Auth, Realtime DB and Storage. Multi-user.",
    tituloInferior: ["Type:", "Tools:", "Live:"],
    contenidoInferior: {
      colUno: ["Web App", "Optimised for mobiles"],
      colDos: [
        "CSS & HTML",
        "React 18",
        "React Router 6",
        "Firebase backend",
        "Git & GitHub",
        "Netlify",
      ],
      colTres: ["https://reminders-app-sasa.netlify.app/"],
    },
  },
  main: {
    bloqueUno: {
      title: "Purpose of the project",
      contenido: [
        "Inspired by the iOS reminders app, I decided to partially recreate it using a stack based on React and Firebase as the backend.",
        "The app can be used by multiple users, each with their own login. Users can create and delete lists and reminders with a delay in case they change their mind. Images can be added to each reminder.",
        "There are predefined lists such as tasks for today and the next three days...",
      ],
    },
    bloqueDos: {
      title: "My role in the project",
      contenido: [
        "Using the Figma app, I created the design and UI of the app.",
        "Subsequently, step by step, I built the structure of the app and the UX flow. Firebase was used as the backend. Then, different features were added. Finally, Netlify was used via GitHub for deployment.",
        "The idea is to continue adding new features and improving the design.",
      ],
    },
    bloqueTres: {
      imgUno: mainDesktop,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack and explanation",
      contenido: [
        "Workspace: Visual Studio Code. I used Vite as a fast development environment along with EsLint and Prettier to maintain clean and consistent code.",
        "Figma: I used Figma to design and create attractive user interfaces, focusing on user experience and user interface.",
        "CSS: I transformed designs into functional applications using modern CSS. I used Flexbox, Grid, and the new container query to achieve a fluid and responsive design.",
        "React: Reusable components, props. Use of conditional rendering. Form control with state through value and onChange. useEffect for network requests and other opportunities. useState. React Context.",
        "Firebase: Implemented user registration, data submission to the real-time database, login and logout, as well as functionality to delete data.",
        "Netlify: Achieved continuous and seamless deployment through GitHub, ensuring smooth and constant updates.",
        "Extras: Integrated react-markdown and react-feather to enhance the functionality and visual appearance of the application.",
        "Git: Effectively managed version control using commits, branches, merge, restore, and push to maintain a consistent change history.",
      ],
    },
    bloqueCinco: {
      imgUno: mainUltima,
    },
  },
  aside: {
    bloqueUno: {
      title: "Problems and solutions",
      contenido: [
        "Organising the user experience in the code was a central challenge. I often had to adjust or revert the code to achieve consistency. Switching from react state and props to react context on two occasions proved to be a more suitable solution.",
        "Another issue was that with each new feature, two more ideas were suggested, and so many ideas can also be a problem if each feature is not completed first.",
        "A valuable lesson I take from this ongoing process of overcoming obstacles is the acquisition of a mental approach to problem-solving.",
      ],
    },
    bloqueDos: {
      imgUno: asideDesktop,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lessons learned",
      contenido: [
        "Spend more time planning and organising the app before sitting down and writing the code.",
        "Focus on basic functionality before adding new ideas. Organise the UX flow as well, and do this before sitting down and writing the code.",
        "Refactor and improve the code. Write it in a way that is understandable. Spend time on details, especially in CSS. Write semantic HTML and thus accessible to screen readers.",
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

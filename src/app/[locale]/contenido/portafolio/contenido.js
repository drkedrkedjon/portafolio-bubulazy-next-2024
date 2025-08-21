import mainDesktop from "./images/proyecto-primera-grande.png";
import mainMovil from "./images/proyecto-primera-peque.png";
import mainUltima from "./images/proyecto-ultima.png";
import asideDesktop from "./images/problemas-largo.png";
import asideMovil from "./images/problemas-corto.png";

export const contenidoDePagina_ES = {
  id: "016",
  hero: {
    about: "Proyecto:",
    title: "Portafolio personal y blog",
  },
  subHero: {
    tituloSuperior: "Introducción",
    contenidoSuperior:
      "Aunque se recomienda 'no incluir' el mismo portafolio, la razón por la que está incluido es que este proyecto no es una simple plantilla de Squarespace, sino el siguiente paso en mi aprendizaje y me gustaría mostrarlo. Lo más importante que voy a aprender es NEXT.js, SSR rendering, APP Router y next-mdx-remote para cargar archivos markdown desde el servidor de Node.",
    tituloInferior: ["Tipo:", "Herramientas:", "En vivo:"],
    contenidoInferior: {
  colUno: ["Aplicación web", "Optimizada para móviles", "Portafolio y Blog"],
      colDos: [
        "CSS & HTML",
        "React 18",
        "NEXT.js",
        "Next-mdx-remote",
        "Framer-motion",
        "Git & GitHub",
        "Vercel",
      ],
      colTres: ["https://portafolio-bubulazy-next-2024.vercel.app"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      contenido: [
        "Crear un lugar en internet propio, controlado por mí mismo y fuera de silos comerciales, un lugar donde puedo mostrar mis conocimientos en programación y escribir sobre lo que me interesa.",
        "Poder presentarme de una manera correcta ante posibles oportunidades de empleo.",
        "También es un blog, poder escribir sobre las cosas que me interesan y compartirlo con el mundo.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      contenido: [
        "Utilizando la aplicación Figma, he creado el diseño y la interfaz de usuario.",
        "Algunas ideas provienen del curso de React 'Joy of React' de Joshua Comeau. El curso me ha dado una buena base para empezar con NEXT.js y el renderizado SSR.",
        "Excepto eso y la parte de reinicio de CSS, todo el código ha sido escrito por mí. Leer la documentación y buscarme la vida. Seguramente por eso hay errores de principiantes, pero la web funciona bien y he aprendido muchísimo.",
      ],
    },
    bloqueTres: {
      imgUno: mainDesktop,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack y la explicación",
      contenido: [
        "Lugar de trabajo: Visual Studio Code. Framework NEXT.js.",
        "Figma: diseño de UI y UX.",
  "CSS: La transformación del diseño en una aplicación real se realizó utilizando APIs modernas de CSS. Para el layout he usado flexbox, grid y container query, lo cual fue realmente divertido aprender y usar.",
        "NEXT APP Router: Rutas relativas, rutas anidadas, etc.",
        "React: Componentes reutilizables, props. Uso de renderizado condicional. Control de formularios con estado a través de value y onChange. useEffect para algunas otras oportunidades. useState, useRef.",
        "Next-mdx-remote: Por implementar para el blog como el siguiente paso, la idea es que lea los archivos markdown desde el mismo servidor.",
        "Vercel: Implementación continua a través de GitHub.",
        "Extras: Framer Motion para animaciones, React-Icons para iconos.",
        "Git: Commits, Branches, Merge, Restore, Push.",
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
        "Como siempre, los problemas aparecían por todas partes durante el desarrollo. Pero gracias a la buena documentación, poco a poco he ido solucionándolos.",
        "Más de una vez he llegado a un punto muerto y tuve que regresar a un commit anterior en git o borrar el branch y empezar de nuevo.",
        "Lo más que he aprendido con todo este proceso de ir para adelante y para atrás, es obtener un concepto mental sobre el proceso creativo de resolver un problema, que me parece un saber fundamental en la programación.",
      ],
    },
    bloqueDos: {
      imgUno: asideDesktop,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      contenido: [
  "Trabajar solo. Ser crítico consigo mismo, reevaluar ideas. Aceptar que no eres el más listo del mundo. Reconocer cuando uno no sabe.",
        "Buscar soluciones en la web. Conectar puntos clave de documentación para adaptar a las necesidades de este proyecto. Tomar decisiones sobre los próximos pasos.",
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
  id: "016",
  hero: {
    about: "Project:",
    title: "Personal portfolio and blog",
  },
  subHero: {
    tituloSuperior: "Introduction",
    contenidoSuperior:
      "Although it is recommended 'not to include' the same portfolio, the reason it is included is that this project is not a simple Squarespace template, but the next step in my learning and I would like to show it. The most important thing I am going to learn is NEXT.js, SSR rendering, APP Router and next-mdx-remote to load markdown files from the Node server.",
    tituloInferior: ["Type:", "Tools:", "Live:"],
    contenidoInferior: {
  colUno: ["Web App", "Optimized for mobile", "Portfolio & Blog"],
      colDos: [
        "CSS & HTML",
        "React 18",
        "NEXT.js",
        "Next-mdx-remote",
        "Framer-motion",
        "Git & GitHub",
        "Vercel",
      ],
      colTres: ["https://portafolio-bubulazy-next-2024.vercel.app"],
    },
  },
  main: {
    bloqueUno: {
      title: "Purpose of the project",
      contenido: [
        "Create a personal space on the internet, controlled by myself and outside commercial silos, a place where I can showcase my programming skills and write about what interests me.",
        "To present myself properly for potential job opportunities.",
        "It is also a blog, to write about things that interest me and share it with the world.",
      ],
    },
    bloqueDos: {
      title: "My role in the project",
      contenido: [
        "Using the Figma application, I created the design and user interface.",
        "Some ideas come from the React course 'Joy of React' by Joshua Comeau. The course gave me a good foundation to start with NEXT.js and SSR rendering.",
        "Except for that and the CSS reset part, all the code has been written by me. Reading the documentation and figuring things out on my own. Surely that's why there are beginner mistakes, but the website works well and I have learned a lot.",
      ],
    },
    bloqueTres: {
      imgUno: mainDesktop,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack and explanation",
      contenido: [
        "Workspace: Visual Studio Code. Framework NEXT.js.",
        "Figma: UI and UX design.",
        "CSS: The transformation of the design into a real application was done using modern CSS APIs. For the layout, I used flexbox, grid, and container query, which was really fun to learn and use.",
        "NEXT APP Router: Relative routes, nested routes, etc.",
        "React: Reusable components, props. Use of conditional rendering. Form control with state through value and onChange. useEffect for some other opportunities. useState, useRef.",
        "Next-mdx-remote: To be implemented for the blog as the next step, the idea is to read markdown files from the same server.",
        "Vercel: Continuous deployment through GitHub.",
        "Extras: Framer Motion for animations, React-Icons for icons.",
        "Git: Commits, Branches, Merge, Restore, Push.",
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
        "As always, problems appeared everywhere during development. But thanks to good documentation, I have gradually solved them.",
        "More than once I reached a dead end and had to go back to a previous commit in git or delete the branch and start again.",
        "The most I have learned from this whole process of going back and forth is to obtain a mental concept about the creative process of solving a problem, which I think is a fundamental knowledge in programming.",
      ],
    },
    bloqueDos: {
      imgUno: asideDesktop,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lessons learned",
      contenido: [
  "Working alone. Being critical of oneself, reevaluating ideas. Accepting that you are not the smartest in the world. Recognizing when you do not know.",
        "Looking for solutions on the web. Connecting key points of documentation to adapt to the needs of this project. Making decisions about the next steps.",
  "Refactoring and improving the code. Writing it in a way that is understandable. Spending time on details, especially in CSS. Writing semantic HTML and making it accessible to screen readers.",
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

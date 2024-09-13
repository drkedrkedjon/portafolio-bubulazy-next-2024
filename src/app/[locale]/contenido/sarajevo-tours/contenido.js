import mainDesktop from "./images/proyecto-primera-grande.png";
import mainMovil from "./images/proyecto-primera-peque.png";
import mainUltima from "./images/proyecto-ultima.png";
import asideDesktop from "./images/problemas-largo.png";
import asideMovil from "./images/problemas-corto.png";

export const contenidoDePagina_ES = {
  id: "013",
  hero: {
    about: "Proyecto:",
    title: "Sarajevo Tours, App con React y Firebase",
  },
  subHero: {
    tituloSuperior: "Introducción",
    contenidoSuperior:
      "Proyecto página web de una tienda (ficticia) online de guías GPS para turistas. Prácticas de: React 18, React router 6, Firebase Auth. y Firestore database como backend. Rutas protegidas para la administración. Carrito de compra interactivo, Formulario de contacto con statefull forms. Query parameters para filtrar los productos.",
    tituloInferior: ["Tipo:", "Herramientas:", "En vivo:"],
    contenidoInferior: {
      colUno: ["Web App", "Optimisada para móviles", "Compañia ficticia"],
      colDos: [
        "CSS & HTML",
        "React 18",
        "React Router 6",
        "Firebase backend",
        "Git & GitHub",
        "Netlify",
      ],
      colTres: ["https://sarajevo-tours.netlify.app/"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      contenido: [
        "En el proyecto hemos trabajado dos. Mi pareja y yo, ambos alumnos del bootcamp y con parecido nivel de conocimientos.",
        "Después de terminar el bootcamp quísimos crear un proyecto lo mas parecido a una web del mundo real. Hemos decidido crear una tienda online de venta de guías turísticas alrededor de la ciudad de Sarajevo. El contenido es real, las guías no.",
        "Los requisitos eran: React, React router y Firebase como backend de datos y Auth. y en el proceso, utilizar y aprender mas sobre VSC, Vite, EsLint, Prettier, GitHub y Netlify.",
        "Aprender a trabajar en equipo y sin guía.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      contenido: [
        "Utilizando Figma app he creado el diseño y UI.",
        "Posteriormente, fue analizar el diseño para traducirlo en HTML y CSS, estructurar el proyecto en VSC, investigar en la web como conectar con Firestore. Leer la documentación, aprender y escribir el código.",
        "Menos en la parte de CSS reset, todo el código ha sido escrito por mi. Era una promesa de no copiar el código de nadie, sino leer la documentación en MDN y buscarme la vida. Seguramente por eso hay errores de principiantes pero la web funciona bien y he aprendido muchísimo.",
      ],
    },
    bloqueTres: {
      imgUno: mainDesktop,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack y la explicación",
      contenido: [
        "Lugar de trabajo: Visual Studio Code. Vite con complementos EsLint y Prettier.",
        "Figma: diseño, UI y UX.",
        "CSS: La transformación del diseño en una app real se realizó utilizando API modernas de CSS. Para Layout he usado flexbox y grid y también query container que fue realmente divertida aprender y usar. Alguna experimentación con clip-path y CSS variables.",
        "React Router: Rutas relativas, rutas anidadas. Carga de rutas anidadas por defecto en outlet usando index. Query parameters para filtrado de datos, useLocation para capturar la ruta. Link, NavLink para enlaces. isActive en NavLinks. useNavegate para redirección si el usuario no está autenticado, etc...",
        "React: Componentes reutilizables, props. Uso de condicional rendering. Control de formulario con estado a través de value y onChange. useEffect para consulta de red y algunas otros oportunidades. useState, useRef. React context en dos lugares, uno para almacenar datos y segundo para carrito de compras.",
        "Firebase: Conexión con Firestore. Iniciar aplicación, obtener datos colección de formularios. Dado que el conjunto de datos es muy pequeño, he cargando todo a la vez y en un react context. Seguro que en una aplicación más seria, los datos se descargarán de firebase según sea necesario por filtrado en getDocs(). Autenticación, iniciar sesión con correo electrónico y contraseña y onAuthStateChanged listener para permitir que el usuario registrado ingrese en área protegida (rutas). Iniciar y cerrar sesión.",
        "Netlify: Conexión de mi formulario de React, Reglas de redirección para pushState en React. Implementación continúa a través de GitHub.",
        "Extras: reactMarkdown, vite-plugin-svgr",
        "Git: Git: commits, Branches, Merge, Restore, push",
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
        "Los problemas aparecian por todas parte durante del desarollo. Pero, con ayuda de lo aprendido en el bootcamp y de las documentaciones poco a poco hemos ido solucionándolos.",
        "Más de una vez he llegado a un punto muerto y tuve que regresar a un git commit anterior o a borrar el branch y empezar de nuevo.",
        "Lo más que he aprendido con todo este proceso de ir pa adelante y pa atrás, es obtener un concepto mental sobre el proceso creativo de resolver un problema que me parece un saber fundamental en la programación.",
      ],
    },
    bloqueDos: {
      imgUno: asideDesktop,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      contenido: [
        "Trabajar en equipo. Compartir ideas. Aceptar que el otro tiene la razón. Respetar cuando uno no sabe.",
        "Buscar soluciones en la web. Conectar puntos claves de documentación para adaptar a necesidades de este proyecto. Tomar decisiones sobre próximos pasos.",
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
  id: "013",
  hero: {
    about: "Project:",
    title: "Sarajevo Tours, App with React and Firebase",
  },
  subHero: {
    tituloSuperior: "Introduction",
    contenidoSuperior:
      "Project webpage for an (imaginary) online store of GPS guides for tourists. Practices with: React 18, React Router 6, Firebase Auth, and Firestore database as backend. Protected routes for administration. Interactive shopping cart, Contact form with stateful forms. Query parameters to filter products.",
    tituloInferior: ["Type:", "Tools:", "Live:"],
    contenidoInferior: {
      colUno: ["Web App", "Optimised for mobiles", "Imaginary company"],
      colDos: [
        "CSS & HTML",
        "React 18",
        "React Router 6",
        "Firebase backend",
        "Git & GitHub",
        "Netlify",
      ],
      colTres: ["https://sarajevo-tours.netlify.app/"],
    },
  },
  main: {
    bloqueUno: {
      title: "Purpose of the project",
      contenido: [
        "Two of us worked on the project. My partner and I, both students of the bootcamp with similar levels of knowledge.",
        "After finishing the bootcamp, we wanted to create a project as close as possible to a real-world website. We decided to create an online store selling tourist guides around the city of Sarajevo. The content is real, the guides are not.",
        "The requirements were: React, React Router, and Firebase as the backend for data and Auth. During the process, we used and learned more about VSC, Vite, EsLint, Prettier, GitHub, and Netlify.",
        "Learning to work as a team and without guidance.",
      ],
    },
    bloqueDos: {
      title: "My role in the project",
      contenido: [
        "Using the Figma app, I created the design and UI.",
        "Subsequently, I analysed the design to translate it into HTML and CSS, structured the project in VSC, researched how to connect with Firestore. Read the documentation, learned, and wrote the code.",
        "Except for the CSS reset part, all the code has been written by me. It was a promise not to copy anyone's code, but to read the documentation on MDN and figure things out myself. Surely that's why there are beginner mistakes, but the website works well and I have learned a lot.",
      ],
    },
    bloqueTres: {
      imgUno: mainDesktop,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack and explanation",
      contenido: [
        "Workspace: Visual Studio Code. Vite with EsLint and Prettier plugins.",
        "Figma: Design, UI, and UX.",
        "CSS: The transformation of the design into a real app was done using modern CSS APIs. For layout, I used flexbox and grid and also container query, which was really fun to learn and use. Some experimentation with clip-path and CSS variables.",
        "React Router: Relative routes, nested routes. Loading nested routes by default in outlet using index. Query parameters for data filtering, useLocation to capture the route. Link, NavLink for links. isActive in NavLinks. useNavigate for redirection if the user is not authenticated, etc...",
        "React: Reusable components, props. Use of conditional rendering. Form control with state through value and onChange. useEffect for network requests and some other opportunities. useState, useRef. React context in two places, one for storing data and the second for the shopping cart.",
        "Firebase: Connection with Firestore. Initialising the app, obtaining data collection from forms. Given that the dataset is very small, I loaded everything at once and in a react context. Surely in a more serious application, the data would be downloaded from firebase as needed by filtering in getDocs(). Authentication, logging in with email and password, and onAuthStateChanged listener to allow the registered user to enter the protected area (routes). Logging in and out.",
        "Netlify: Connection of my React form, Redirection rules for pushState in React. Continuous deployment through GitHub.",
        "Extras: reactMarkdown, vite-plugin-svgr",
        "Git: Commits, Branches, Merge, Restore, push",
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
        "Problems appeared everywhere during development. But, with the help of what we learned in the bootcamp and the documentation, we gradually solved them.",
        "More than once I reached a dead end and had to go back to a previous git commit or delete the branch and start again.",
        "The most I have learned from this whole process of going back and forth is to obtain a mental concept about the creative process of solving a problem, which I think is fundamental knowledge in programming.",
      ],
    },
    bloqueDos: {
      imgUno: asideDesktop,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lessons learned",
      contenido: [
        "Working as a team. Sharing ideas. Accepting that the other person is right. Respecting when you do not know.",
        "Looking for solutions on the web. Connecting key points of documentation to adapt to the needs of this project. Making decisions about the next steps.",
        "Refactoring and improving the code. Writing it in a way that is understandable. Spending time on details, especially in CSS. Writing semantic HTML and thus accessible to screen readers.",
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

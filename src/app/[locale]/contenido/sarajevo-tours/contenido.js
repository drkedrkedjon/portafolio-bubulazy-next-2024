import mainDesktop from "@/app/contenido/sarajevo-tours/images/proyecto-primera-grande.png";
import mainMovil from "@/app/contenido/sarajevo-tours/images/proyecto-primera-peque.png";
import mainUltima from "@/app/contenido/sarajevo-tours/images/proyecto-ultima.png";
import asideDesktop from "@/app/contenido/sarajevo-tours/images/problemas-largo.png";
import asideMovil from "@/app/contenido/sarajevo-tours/images/problemas-corto.png";

export const contenidoDePagina = {
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
      "Si estás buscando a un desarrollador junior con quién te gustaría trabajar o simplemente deseas conectarte o hacer una pregunta, no dudes en escribirme.",
    url: "/#contact-form",
    urlText: "Contáctame",
  },
};

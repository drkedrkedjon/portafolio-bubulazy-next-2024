import mainDesktop from "./images/proyecto-primera-grande.png";
import mainMovil from "./images/proyecto-primera-peque.png";
import mainUltima from "./images/proyecto-ultima.png";
import asideDesktop from "./images/problemas-largo.png";
import asideMovil from "./images/problemas-corto.png";

export const contenidoDePagina = {
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
      colUno: ["Web App", "Optimisada para móviles", "Portafolio & Blog"],
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
        "CSS: La transformación del diseño en una aplicación real se realizó utilizando API modernas de CSS. Para el layout he usado flexbox, grid y container query, lo cual fue realmente divertido aprender y usar.",
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
        "Refactorizar y mejorar el código. Escribirlo de una manera que se entienda. Dedicar tiempo a los detalles, especialmente en CSS. Escribir HTML semántico y así mismo accesible para los lectores de pantalla.",
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

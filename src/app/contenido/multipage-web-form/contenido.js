import proyectoGrande from "@/app/contenido/multipage-web-form/images/proyecto-primera-grande.png";
import proyectoPequeno from "@/app/contenido/multipage-web-form/images/proyecto-primera-peque.png";
import proyectoUltima from "@/app/contenido/multipage-web-form/images/proyecto-ultima.png";
import problemasLargo from "@/app/contenido/multipage-web-form/images/problemas-largo.png";
import problemasCorto from "@/app/contenido/multipage-web-form/images/problemas-corto.png";

export const contenidoDePagina = {
  id: "015",
  hero: {
    about: "Proyecto:",
    title: "Formulario web de varias paginas",
  },
  subHero: {
    tituloSuperior: "Introducción",
    contenidoSuperior:
      "Esta aplicación sirve como un proyecto de ejercicio dirigido a construir un formulario de varias páginas con autenticación de Firebase, almacenamiento e integración de bases de datos como backend. Esencialmente, simula el proceso de solicitud de una oportunidad de trabajo.",
    tituloInferior: ["Tipo:", "Herramientas:", "En vivo:"],
    contenidoInferior: {
      colUno: ["Web App", "Diseño responsive"],
      colDos: ["CSS & HTML", "React 18", "Firebase", "Git & GitHub", "Netlify"],
      colTres: ["https://multipage-form-sasa.netlify.app/"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      contenido: [
        "Inspirado por multitud de formularios complejos que usuarios tienen que rellenar a la hora de aplicar a un trabajo, he creado esta simple app que expresa la manera como yo creo que deberia ser el proceso.",
        "El flujo de UX esta dividido en dos caminos, si el usuario es nuevo va por registro y solicitud y si ya esta registrado, por login y chequeo si ya solicito el puesto",
        "Al final existe opcion de borrar todos los datos y solicitudes por el mismo usuario.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      contenido: [
        "Utilizando Figma app se ha creado el diseño y UI de la app.",
        "Posteriormente, paso a paso iba construyendo estructura de la app y el flujo de UX. La conexion con Firebase se utilizo como backend. Luego se han anadido diferentes caracteristicas. Al final, se utilizo Netlify via GitHub para deploy.",
        "La idea es seguir añadiendo nuevas caracteristicas y mejorar el diseño.",
      ],
    },
    bloqueTres: {
      imgUno: proyectoGrande,
      imgDos: proyectoPequeno,
    },
    bloqueCuatro: {
      title: "Web stack y la explicación",
      contenido: [
        "Lugar de trabajo: Visual Studio Code. Utilicé Vite como entorno de desarrollo rápido junto con EsLint y Prettier para mantener un código limpio y consistente.",
        "Figma: Utilicé Figma para diseñar y crear interfaces de usuario atractivas, centrándome en la experiencia del usuario y la interfaz de usuario.",
        "CSS: Transformé diseños en aplicaciones funcionales utilizando CSS moderno. Hice uso de Flexbox, Grid y la nueva query container para lograr un diseño fluido y responsivo.",
        "React: Componentes reutilizables, props. Uso de condicional rendering. Control de formulario con estado a través de value y onChange. useEffect para consulta de red y algunas otros oportunidades. useState.",
        "Firebase: Implementé registro de usuarios, envío de datos a la base de datos en tiempo real, inicio y cierre de sesión, así como funcionalidad para eliminar datos.",
        "Netlify: Logré una implementación continua y sin problemas a través de GitHub, asegurando actualizaciones constantes.",
        "Extras: Integré react-markdown y react-feather para mejorar la funcionalidad y el aspecto visual de la aplicación. Tanbien paquetes como remove-scroll y focus-lock para optimizar la accesibilidad y experiencia del usuario.",
        "Git: Gestioné eficazmente el control de versiones utilizando commits, branches, merge, restore y push para colaborar de manera efectiva en equipos y mantener un historial de cambios coherente.",
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

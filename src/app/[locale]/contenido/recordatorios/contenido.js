import mainDesktop from "@/app/contenido/recordatorios/images/proyecto-primera-grande.png";
import mainMovil from "@/app/contenido/recordatorios/images/proyecto-primera-peque.png";
import mainUltima from "@/app/contenido/recordatorios/images/proyecto-ultima.png";
import asideDesktop from "@/app/contenido/recordatorios/images/problemas-largo.png";
import asideMovil from "@/app/contenido/recordatorios/images/problemas-corto.png";

export const contenidoDePagina = {
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
      "Si estás buscando a un desarrollador junior con quién te gustaría trabajar o simplemente deseas conectarte o hacer una pregunta, no dudes en escribirme.",
    url: "/#contact-form",
    urlText: "Contáctame",
  },
};

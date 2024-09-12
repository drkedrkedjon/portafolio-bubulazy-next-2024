import mainDesktop from "./images/proyecto-primera-grande.png";
import mainMovil from "./images/proyecto-primera-peque.jpg";
import mainUltima from "./images/proyecto-ultima.jpg";
import asideDesktop from "./images/problemas-largo.png";
import asideMovil from "./images/problemas-corto.png";

export const contenidoDePagina = {
  id: "012",
  hero: {
    about: "Proyecto:",
    title: "Clínica Dental Blancodent",
  },
  subHero: {
    tituloSuperior: "Introducción",
    contenidoSuperior:
      "La web de la clínica dental Blancodent estaba publicada en squarespace con una de sus plantilla y el diseño bien modificado. El deseo del cliente era de mover la web a otra plataforma mateniendo el diseño, un nuevo código base y en el proceso hacer cambios en la organización del contenido (terminado), implementar un blog con un nuevo CMS (próximamente) y finalmente introducir una tienda online (última fase) para poder ofrecer a los clientes descuentos y venta de servicios online.",
    tituloInferior: ["Tipo:", "Herramientas:", "En vivo:"],
    contenidoInferior: {
      colUno: ["Página web", "Optimisada para móviles", "Cliente comercial"],
      colDos: ["CSS & HTML", "Git & GitHub", "Netlify"],
      colTres: ["https://blancodent.com"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      contenido: [
        "El proyecto se ha dividido en tres fases:",
        "En la primera (terminada), simplemente se ha copiado el diseño existente en Squarespace pasándolo al Netlify y haciendo un código base nuevo. En el proceso únicamente se ha añadido un nuevo segmento hero con varias ofertas.",
        "En la segunda parte (actualmente trabajando en este) se pasará el código base a Eleventy (generador de páginas estáticas), la cual ayudará con la reorganización de la web e implementación de un CMS.",
        "En la tercera (por hacer), se creará un carrito de compra y se conectará con la pasarela de pago Stripe.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      contenido: [
        "Utilizando Figma app he creado el diseño y UI.",
        "En el proyecto trabajamos dos.",
        "Mi papel en este proyecto ha sido encargarme de analizar el diseño actual y transferirlo al nuevo código utilizando las últimas tecnologías de CSS.",
        "Posteriormente, revisar y depurar todo el código para eliminar errores. Con esto hemos conseguido que la web mejore de una manera completa y eficiente.",
        "Colaborar con mi compañera del proyecto para elaborar diseño y la estructura para hacer que la página sea accesible y rápida ante todo.",
      ],
    },
    bloqueTres: {
      imgUno: mainDesktop,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack y la explicación",
      contenido: [
        "Teniendo el diseño existente en la primera fase nos hemos enfocado en lo siguiente:",
        "HTML: El uso de las etiquetas semánticas como section, main, article, nav... con la intención de hacer la página accesible desde las primeras líneas del nuevo código.",
        "CSS: utilización de Flexbox y Grid por defecto para organizar layout y transferir el diseño. Uso intensivo de variables CSS (con valores por defecto) y de las clases útiles. Nuevas seudo clases como por ejemplo :where() y :clamp().",
        "Uso de las propiedades modernas como backdrop-filter, margin-inline, aspect-ratio…",
        "JS: Implementación de la navegación tipo hamburger en pantallas pequeñas vía aria-hidden: y aria-selected: atributos para que sea accesible vía teclado. También implementación de un carrusel en la sección de hero con promociones.",
        "Git y GitHub: Uso continuo de git con varias ramas main/desarrollo y con pull request via GitHub.",
        "Netlify: Conexión y deploy vía GitHub.",
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
        "Inicialmente se trataba de una web estática pero el cliente cambió de idea y también ha querido implementar un blog. Eso nos ha llevado a decisiones de implementar la segunda fase (próximamente) de utilizar Eleventy SSG que es ideal para un blog no muy complejo.",
        "También utilizaremos un plug-in para las imágenes que automatizará la entrega en diferentes tamaños y formatos.",
        "En la conversación con agente de SEO se han encontrado unos puntos que se han corregido para mejorar el posicionamiento de la web en el buscador sin influir en la accesibilidad de la misma.",
      ],
    },
    bloqueDos: {
      imgUno: asideDesktop,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      contenido: [
        "La forma de trabajar de manera eficiente e inteligente, para lograr una mejor productividad y mejores resultados y mejor unión del equipo.",
        "Revisar frecuentemente, si estamos avanzando en la dirección correcta que necesitan nuestros clientes o si requiere que nos adaptemos a ellos.",
        "Aprender de cada lección es uno de los aspectos más importantes de la programación, pues así los errores y aciertos de los proyectos quedan registrados para ser usados en futuras iniciativas, y de esta manera se aprende a mejorar continuamente.",
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

import mainDesktop from "./images/proyecto-primera-grande.png";
import mainMovil from "./images/proyecto-primera-peque.jpg";
import mainUltima from "./images/proyecto-ultima.jpg";
import asideDesktop from "./images/problemas-largo.png";
import asideMovil from "./images/problemas-corto.png";

export const contenidoDePagina_ES = {
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
      "Si estás buscando a un desarrollador FrontEnd con quién te gustaría trabajar o simplemente deseas conectarte o hacer una pregunta, no dudes en escribirme.",
    url: "/#contact-form",
    urlText: "Contáctame",
  },
};
export const contenidoDePagina_EN = {
  id: "012",
  hero: {
    about: "Project:",
    title: "Blancodent Dental Clinic",
  },
  subHero: {
    tituloSuperior: "Introduction",
    contenidoSuperior:
      "The Blancodent dental clinic website was published on Squarespace with one of its templates and the design well modified. The client's desire was to move the website to another platform while maintaining the design, a new code base, and in the process make changes to the organisation of the content (completed), implement a blog with a new CMS (upcoming), and finally introduce an online store (final phase) to offer customers discounts and online service sales.",
    tituloInferior: ["Type:", "Tools:", "Live:"],
    contenidoInferior: {
      colUno: ["Website", "Optimised for mobiles", "Commercial client"],
      colDos: ["CSS & HTML", "Git & GitHub", "Netlify"],
      colTres: ["https://blancodent.com"],
    },
  },
  main: {
    bloqueUno: {
      title: "Purpose of the project",
      contenido: [
        "The project has been divided into three phases:",
        "In the first phase (completed), the existing design in Squarespace was simply copied over to Netlify and a new base code was created. In the process, a new hero segment with several offers was added.",
        "In the second phase (currently working on this), the base code will be transferred to Eleventy (static site generator), which will help with the reorganisation of the website and implementation of a CMS.",
        "In the third phase (to be done), a shopping cart will be created and connected to the Stripe payment gateway.",
      ],
    },
    bloqueDos: {
      title: "My role in the project",
      contenido: [
        "Using the Figma app, I created the design and UI.",
        "There are two of us working on the project.",
        "My role in this project has been to analyse the current design and transfer it to the new code using the latest CSS technologies.",
        "Subsequently, review and debug all the code to eliminate errors. With this, we have managed to improve the website in a complete and efficient manner.",
        "Collaborate with my project partner to develop the design and structure to make the page accessible and fast above all.",
      ],
    },
    bloqueTres: {
      imgUno: mainDesktop,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack and explanation",
      contenido: [
        "Having the existing design in the first phase, we have focused on the following:",
        "HTML: The use of semantic tags such as section, main, article, nav... with the intention of making the page accessible from the first lines of the new code.",
        "CSS: Use of Flexbox and Grid by default to organise layout and transfer the design. Intensive use of CSS variables (with default values) and utility classes. New pseudo-classes such as :where() and :clamp().",
        "Use of modern properties such as backdrop-filter, margin-inline, aspect-ratio…",
        "JS: Implementation of hamburger navigation on small screens via aria-hidden: and aria-selected: attributes to make it accessible via keyboard. Also implementation of a carousel in the hero section with promotions.",
        "Git and GitHub: Continuous use of git with several main/development branches and with pull requests via GitHub.",
        "Netlify: Connection and deployment via GitHub.",
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
        "Initially it was a static website but the client changed their mind and also wanted to implement a blog. This led us to decide to implement the second phase (coming soon) using Eleventy SSG which is ideal for a not very complex blog.",
        "We will also use a plug-in for images that will automate delivery in different sizes and formats.",
        "In conversation with the SEO agent, some points were found and corrected to improve the website's search engine positioning without affecting its accessibility.",
      ],
    },
    bloqueDos: {
      imgUno: asideDesktop,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lessons learned",
      contenido: [
        "The way to work efficiently and intelligently, to achieve better productivity and better results and better team unity.",
        "Frequently review if we are moving in the right direction that our clients need or if we need to adapt to them.",
        "Learning from each lesson is one of the most important aspects of programming, as this way the mistakes and successes of the projects are recorded to be used in future initiatives, and in this way continuous improvement is learned.",
      ],
    },
  },
  infoLink: {
    titulo: "Let's work together",
    content:
      "If you are looking for a FrontEnd developer you would like to work with or simply want to connect or ask a question, feel free to write to me.",
    url: "/#contact-form",
    urlText: "Contact me",
  },
};

import multiPageWebForm from "@/app/contenido/home-page/images/multipage-card.png";
import bubulazyPortafolio from "@/app/contenido/home-page/images/bubulazy-card.jpg";
import recordatorios from "@/app/contenido/home-page/images/recordatorios-card.jpg";
import sarajevoTours from "@/app/contenido/home-page/images/sarajevo-tours-card.png";
import blancodent from "@/app/contenido/home-page/images/blancodent-card.jpg";
import listillo from "@/app/contenido/home-page/images/listillo-card.png";
import pacMan from "@/app/contenido/home-page/images/pacman-card.png";

export const PROYECTOS = [
  {
    id: "016",
    titulo: "Portafolio y Blog personal",
    descripcion:
      "Este proyecto es una aplicación web que ha sido desarollada y diseñada utilizando Next.js, React.js, Vanilla CSS, framer-motion, next-mdx-remote y Figma. El objetivo principal de este proyecto es mostrar mis habilidades de desarrollo web y diseño de interfaces de usuario.",
    imageSrc: bubulazyPortafolio,
    url: "/pdsds",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo =>",
  },
  {
    id: "015",
    titulo: "Multipage Web Form",
    descripcion:
      "Esta aplicación sirve como un proyecto de ejercicio dirigido a construir un formulario de varias páginas con autenticación de Firebase, almacenamiento e integración de bases de datos como backend. Esencialmente, simula el proceso de solicitud de una oportunidad de trabajo..",
    imageSrc: multiPageWebForm,
    url: "/proyectos/multipage-web-form",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo =>",
  },
  {
    id: "014",
    titulo: "App de Recordatorios para moviles",
    descripcion:
      "Inspirado por app de Recordatorios de iOS. Uso de las siguientes tehnologias: React, React Router, Firebase Realtime DB, Auth y Storage. Funcionalidad basica implementada, se iran implementando varias ideas sobre como mejorar la funcionalidad",
    imageSrc: recordatorios,
    url: "/werwer",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo =>",
  },
  {
    id: "013",
    titulo: "Sarajevo Tours",
    descripcion:
      "Proyecto de una tienda online ficticia. Hecha con React, React Router + Firebase Firestore y Auth como backend. Diseño propio con Figma. Uso de: Flexbox, Grid, Container Query, Nested Routes, Relative Path, Query parameters, Stateful Forms, useEffect, useState, createContext, useRef, y etc...",
    imageSrc: sarajevoTours,
    url: "/ghjghjgh",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo =>",
  },
  {
    id: "012",
    titulo: "Clínica dental Blancodent",
    descripcion:
      "Web de una clínica dental (cliente comercial) diseño + UX/UI utilizando Figma. Un nuevo codigo de CSS, HTML y un poco de JS. La web original estaba en Squarespace y la hemos transferido a Netlify. En la próxima fase se pasará a utilizar NEXT.js y React.js manteniendo el diseño original.",
    imageSrc: blancodent,
    url: "/erxdgv",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo =>",
  },
  {
    id: "011",
    titulo: "ChatGPT API - Chat App",
    descripcion:
      "Conexion con la API de OpenAI (3.5-turbo model) para crear un chatbot. Firebase realtime database para backend & Auth. Netlify env. variables para proteger la API key. Netlify functions para conectar con API from OpenAI y obtener las respuestas.",
    imageSrc: listillo,
    url: "/uikk",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo =>",
  },
  {
    id: "010",
    titulo: "Juego de PacMan",
    descripcion:
      "Uno de mis primeros proyectos en JavaScript, aprendiendo a manipular DOM, insertando CSS desde JS, usando modus operator, etc... Necesitarás el teclado por lo que deberías hacerlo desde un ordenador.",
    imageSrc: pacMan,
    url: "/uikk",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo =>",
  },
];

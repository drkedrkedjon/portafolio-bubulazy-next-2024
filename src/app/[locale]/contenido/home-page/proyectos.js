import multiPageWebForm from "./images/multipage-card.png";
import bubulazyPortafolio from "./images/bubulazy-card.jpg";
import recordatorios from "./images/recordatorios-card.jpg";
import sarajevoTours from "./images/sarajevo-tours-card.png";
import blancodent from "./images/blancodent-card.jpg";
import listillo from "./images/listillo-card.png";
import pacMan from "./images/pacman-card.png";

export const PROYECTOS_EN = [
  {
    id: "016",
    titulo: "Multipage Web Form",
    descripcion:
      "This application serves as an exercise project aimed at building a multi-page form with Firebase authentication, storage, and database integration as the backend. Essentially, it simulates the job application process.",
    imageSrc: multiPageWebForm,
    url: "/proyectos/multipage-web-form",
    linkText: "View the detailed description of the project and my work →",
  },
  {
    id: "015",
    titulo: "Portfolio and personal blog",
    descripcion:
      "This project is a web application that was developed and designed using Next.js, React.js, Vanilla CSS, framer-motion, next-mdx-remote, and Figma. The main objective of this project is to showcase my web development and user interface design skills.",
    imageSrc: bubulazyPortafolio,
    url: "/proyectos/portafolio",
    linkText: "View the detailed description of the project and my work →",
  },
  {
    id: "014",
    titulo: "Reminder App for mobiles",
    descripcion:
      "Inspired by the iOS Reminders app. Using the following technologies: React, React Router, Firebase Realtime DB, Auth, and Storage. Basic functionality implemented; various ideas for improving functionality will be implemented over time.",
    imageSrc: recordatorios,
    url: "/proyectos/recordatorios",
    linkText: "View the detailed description of the project and my work →",
  },
  {
    id: "013",
    titulo: "Sarajevo Tours",
    descripcion:
      "Project for a fictitious online store. Made with React, React Router, and Firebase Firestore and Auth as the backend. Custom design with Figma. Uses: Flexbox, Grid, Container Query, Nested Routes, Relative Path, Query parameters, Stateful Forms, useEffect, useState, createContext, useRef, etc.",
    imageSrc: sarajevoTours,
    url: "/proyectos/sarajevo-tours",
    linkText: "View the detailed description of the project and my work →",
  },
  {
    id: "012",
    titulo: "Blancodent Dental Clinic",
    descripcion:
      "Website for a dental clinic (commercial client): design + UX/UI using Figma. A new code base of CSS, HTML, and a bit of JS. The original website was on Squarespace and we have transferred it to Netlify. In the next phase, it will be moved to use Next.js and React.js while maintaining the original design.",
    imageSrc: blancodent,
    url: "/proyectos/clinica-dental-blancodent",
    linkText: "View the detailed description of the project and my work →",
  },
  {
    id: "011",
    titulo: "ChatGPT API - Chat App",
    descripcion:
      "Connection with the OpenAI API (3.5-turbo model) to create a chatbot. Firebase Realtime Database for backend & Auth. Netlify environment variables to protect the API key. Netlify functions to connect with the OpenAI API and obtain responses.",
    imageSrc: listillo,
    url: "https://listillo-openai-api.netlify.app/",
    linkText: "Link to the app →",
  },
  {
    id: "010",
    titulo: "Pac-Man Game",
    descripcion:
      "One of my first projects in JavaScript, learning to manipulate the DOM, insert CSS from JS, use the modulus operator, etc. You will need a keyboard, so you should do it from a computer.",
    imageSrc: pacMan,
    url: "https://drkedrkedjon.github.io/juego-pac-man/",
    linkText: "Link to the game page",
  },
];

export const PROYECTOS_ES = [
  {
    id: "016",
    titulo: "Multipage Web Form",
    descripcion:
      "Esta aplicación sirve como un proyecto de ejercicio dirigido a construir un formulario de varias páginas con autenticación de Firebase, almacenamiento e integración de bases de datos como backend. Esencialmente, simula el proceso de solicitud de una oportunidad de trabajo.",
    imageSrc: multiPageWebForm,
    url: "/proyectos/multipage-web-form",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo →",
  },
  {
    id: "015",
    titulo: "Portafolio y Blog personal",
    descripcion:
      "Este proyecto es una aplicación web que ha sido desarrollada y diseñada utilizando Next.js, React.js, Vanilla CSS, framer-motion, next-mdx-remote y Figma. El objetivo principal de este proyecto es mostrar mis habilidades de desarrollo web y diseño de interfaces de usuario.",
    imageSrc: bubulazyPortafolio,
    url: "/proyectos/portafolio",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo →",
  },
  {
    id: "014",
    titulo: "App de Recordatorios para móviles",
    descripcion:
      "Inspirado por la app de Recordatorios de iOS. Uso de las siguientes tecnologías: React, React Router, Firebase Realtime DB, Auth y Storage. Funcionalidad básica implementada; se irán implementando varias ideas sobre cómo mejorar la funcionalidad.",
    imageSrc: recordatorios,
    url: "/proyectos/recordatorios",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo →",
  },
  {
    id: "013",
    titulo: "Sarajevo Tours",
    descripcion:
      "Proyecto de una tienda online ficticia. Hecha con React, React Router y Firebase Firestore y Auth como backend. Diseño propio con Figma. Uso de: Flexbox, Grid, Container Query, Nested Routes, Relative Path, Query parameters, Stateful Forms, useEffect, useState, createContext, useRef, etc.",
    imageSrc: sarajevoTours,
    url: "/proyectos/sarajevo-tours",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo →",
  },
  {
    id: "012",
    titulo: "Clínica dental Blancodent",
    descripcion:
      "Web de una clínica dental (cliente comercial): diseño + UX/UI utilizando Figma. Un nuevo código de CSS, HTML y un poco de JS. La web original estaba en Squarespace y la hemos transferido a Netlify. En la próxima fase se pasará a utilizar Next.js y React.js manteniendo el diseño original.",
    imageSrc: blancodent,
    url: "/proyectos/clinica-dental-blancodent",
    linkText: "Ver la descripción detallada del proyecto y mi trabajo →",
  },
  {
    id: "011",
    titulo: "ChatGPT API - Chat App",
    descripcion:
      "Conexión con la API de OpenAI (modelo 3.5-turbo) para crear un chatbot. Firebase Realtime Database para backend y Auth. Variables de entorno de Netlify para proteger la clave de la API. Funciones de Netlify para conectar con la API de OpenAI y obtener las respuestas.",
    imageSrc: listillo,
    url: "https://listillo-openai-api.netlify.app/",
    linkText: "Enlace a la app →",
  },
  {
    id: "010",
    titulo: "Juego de PacMan",
    descripcion:
      "Uno de mis primeros proyectos en JavaScript, aprendiendo a manipular el DOM, insertando CSS desde JS, usando el operador módulo, etc. Necesitarás el teclado, por lo que deberías hacerlo desde un ordenador.",
    imageSrc: pacMan,
    url: "https://drkedrkedjon.github.io/juego-pac-man/",
    linkText: "Enlace a la página del juego →",
  },
];

"use client";
import Link from "next/link";
import styles from "./Formulario.module.css";
import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/forms-and-stuff@bubulazy.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <section
      id="contact-form"
      className={styles.container}
    >
      <div className={`wrapper ${styles.formulario}`}>
        <div className={`flow ${styles.contenido}`}>
          <h2>Vamos a ver sí juntos podemos hacer que funcione...</h2>
          <p>
            Si estás buscando a un desarrollador frontend junior con quién te
            gustaría trabajar o simplemente deseas conectarte/hacer una
            pregunta, no dudes en escribirme.
          </p>
          <div className={styles.misEnlaces}>
            <Link href="https://github.com/drkedrkedjon">GitHub</Link> |{" "}
            <Link href="https://www.linkedin.com/in/sasa-savic-perusina/">
              LinkedIn
            </Link>
          </div>
        </div>
        <form
          onSubmit={submitForm}
          className={styles.form}
        >
          <label
            className={styles.label}
            htmlFor="name"
          >
            Nombre:
          </label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={styles.input}
            type="text"
            name="Nombre"
            id="name"
            placeholder="¿Cómo te gustaría que te llamara?"
          />
          <label
            className={styles.label}
            htmlFor="email"
          >
            Email:
          </label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={styles.input}
            type="text"
            id="email"
            name="Email"
            placeholder="¿Cuál es tu dirección de correo?"
          />
          <label
            className={styles.label}
            htmlFor="mensaje"
          >
            Mensaje:
          </label>
          <textarea
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            className={styles.input}
            name="Mensaje"
            id="mensaje"
            cols="30"
            rows="6"
            placeholder="Escribe aquí tu mensaje..."
          />
          <button className={styles.button}>Enviar mensaje, gracias</button>
        </form>
      </div>
    </section>
  );
}

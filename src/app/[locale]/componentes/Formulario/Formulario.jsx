"use client";
import Link from "next/link";
import styles from "./Formulario.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Formulario() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mensaje: "",
    formMessage: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const toSend = {
      name: form.name,
      email: form.email,
      mensaje: form.mensaje,
    };
    fetch("https://formsubmit.co/ajax/3dd87c5da201e54a5dd5ed1df893dbeb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toSend),
    })
      .then((response) => response.json())
      .then(() => {
        setForm({
          name: "",
          email: "",
          mensaje: "",
          formMessage: "Mensaje enviado, gracias",
        });
      })
      .catch((error) => {
        setForm({
          ...form,
          formMessage: "Ha ocurido un error, prueba de nuevo. Lo siento.",
        });
      });
  };

  return (
    <section
      id="contact-form"
      className={styles.container}
    >
      <div className={`wrapper ${styles.formulario}`}>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 5,
          }}
          className={`flow ${styles.contenido}`}
        >
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
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 5,
          }}
          onSubmit={handleSubmitForm}
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
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
          ></input>
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
          <p className={styles.formMessage}>{form.formMessage}</p>
          <button className={styles.button}>Enviar mensaje, gracias</button>
        </motion.form>
      </div>
    </section>
  );
}

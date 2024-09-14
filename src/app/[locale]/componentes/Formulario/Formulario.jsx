"use client";
import { Link } from "@/i18n/routing";
import styles from "./Formulario.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Formulario() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mensaje: "",
    formMessage: "",
  });
  const t = useTranslations("Formulario");

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
          formMessage: t("msgEnviado"),
        });
      })
      .catch((error) => {
        setForm({
          ...form,
          formMessage: t("msgError"),
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
          <h2>{t("title")}</h2>
          <p>{t("parafo")}</p>
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
            placeholder={t("nombrePlhol")}
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
            placeholder={t("emailPlhol")}
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
            placeholder={t("mensajePlhol")}
          />
          <p className={styles.formMessage}>{form.formMessage}</p>
          <button className={styles.button}>{t("btnEnviar")}</button>
        </motion.form>
      </div>
    </section>
  );
}

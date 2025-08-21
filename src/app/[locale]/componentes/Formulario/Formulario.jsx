"use client";
import { Link } from "@/i18n/routing";
import styles from "./Formulario.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Formulario() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    // formMessage: "",
  });
  const t = useTranslations("Formulario");

  // const handleSubmitForm = (e) => { // THIS IS FIRST SLOW SHIT
  //   e.preventDefault();
  //   const toSend = {
  //     name: form.name,
  //     email: form.email,
  //     messages: form.messages,
  //   };
  //   fetch("https://formsubmit.co/ajax/3dd87c5da201e54a5dd5ed1df893dbeb", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(toSend),
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       setForm({
  //         name: "",
  //         email: "",
  //         messages: "",
  //         formMessage: t("msgEnviado"),
  //       });
  //     })
  //     .catch((error) => {
  //       setForm({
  //         ...form,
  //         formMessage: t("msgError"),
  //       });
  //     });
  // };

  // const handleSubmitForm = async (e) => { // THIS IS SECOND SENDGRID SHIT
  //   e.preventDefault();
  //   setStatus("Sending...");

  //   try {
  //     const res = await fetch("/api/sendgrid", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         ...form,
  //         sender: "jobsearch@bubulazy.com",
  //         recipient: "jobsearch@bubulazy.com",
  //       }),
  //     });

  //     if (res.status === 200) {
  //       setStatus("Email sent successfully!");
  //       setForm({
  //         name: "",
  //         email: "",
  //         messages: "",
  //       });
  //     } else {
  //       setStatus("Failed to send email.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setStatus("An error occurred.");
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   // THIS IS NEW MAILJET SHIT, HOPE IT WORKS
  //   e.preventDefault();
  //   setStatus("Sending...");

  //   const res = await fetch("/api/mailjet", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(form),
  //   });

  //   if (res.ok) {
  //     setStatus("Message sent successfully!");
  //     setForm({ name: "", email: "", message: "" });
  //   } else {
  //     setStatus("Error sending message.");
  //   }
  // };

  const handleSubmit = async (e) => {
    // THIS IS NEW GMAIL SHIT, HOPE IT WORKS NOW - IT DOES...
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/nodemailer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Error sending message.");
    }
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
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <label
            className={styles.label}
            htmlFor="name"
          >
            Nombre:
          </label>
          <input
            required
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
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={styles.input}
            type="email"
            id="email"
            name="Email"
            placeholder={t("emailPlhol")}
          />
          <label
            className={styles.label}
            htmlFor="message"
          >
            Mensaje:
          </label>
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
          ></input>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={styles.input}
            name="Mensaje"
            id="message"
            cols="30"
            rows="6"
            placeholder={t("mensajePlhol")}
          />
          <p className={styles.formMessage}>{status}</p>
          {/* <p className={styles.formMessage}>{form.formMessage}</p> */}
          <button className={styles.button}>{t("btnEnviar")}</button>
        </motion.form>
      </div>
    </section>
  );
}

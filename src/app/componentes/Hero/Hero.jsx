"use client";
import styles from "./Hero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

// con-imagen, sin-imagen
export default function Hero({ type, image, alt, title, about }) {
  if (type === "con-imagen") {
    return (
      <section>
        <div class={`wrapper ${styles.containerTypeImagen}`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 8,
              duration: 0.8,
              delay: 0.1,
            }}
            className={styles.imageRoundFrame}
          >
            <Image
              src={image}
              alt={alt}
            />
          </motion.div>
          <h1 className={styles.h1}>{title}</h1>
        </div>
      </section>
    );
  }

  if (type === "sin-imagen") {
    return (
      <section>
        <div class={`wrapper ${styles.containerTypeSinImagen}`}>
          <h1 className={styles.h1}>
            <span className={styles.about}>{about}</span> {title}
          </h1>
        </div>
      </section>
    );
  }
}

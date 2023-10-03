import styles from "./Hero.module.css";
import Image from "next/image";
import sasaMemoji from "@/app/assets/images/generales/sasa-memoji.png";

// con-imagen, sin-imagen
export default function Hero({ type }) {
  return (
    <section>
      <div class={`wrapper ${styles.containerTypeImagen}`}>
        <div className={styles.imageRoundFrame}>
          <Image
            src={sasaMemoji}
            alt="Foto de mi"
          />
        </div>
        <h1 className={styles.h1}>
          Hola soy Sasa, desarrollador FrontEnd y algo más...
        </h1>
      </div>
    </section>
  );
}

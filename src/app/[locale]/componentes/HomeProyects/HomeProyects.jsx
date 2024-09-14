import { Link } from "@/i18n/routing";
import Card from "@/app/[locale]/componentes/Card";
import Hero from "@/app/[locale]/componentes/Hero";
import styles from "./homeProyects.module.css";
import { useTranslations } from "next-intl";

// type opcion: "full" / "reduced"
export default function HomeProyects({ contenido, type }) {
  const t = useTranslations("HomeProyects");

  if (type === "reduced") {
    const ultimosProyectos = contenido.slice(0, 3);
    const otrosProyectos = contenido.slice(3, 7);

    return (
      <section>
        <div className={`wrapper flow ${styles.proyectsWrapper}`}>
          <h2 className={styles.h2}>{t("title")}</h2>
          <div className={styles.cardsContainer}>
            {ultimosProyectos.map((proyecto) => (
              <Card
                type="con-imagen"
                contenido={proyecto}
                key={proyecto.url}
              />
            ))}
          </div>
          <h2 className={styles.h2}>{t("subTitle")}</h2>
          <div className={styles.cardsSinImagen}>
            {otrosProyectos.map((proyecto) => (
              <Card
                type="sin-imagen"
                contenido={proyecto}
                key={proyecto.url}
              />
            ))}
          </div>
          <Link
            className="link-btn"
            href="/proyectos"
          >
            {t("button")}
          </Link>
        </div>
      </section>
    );
  }

  if (type === "full") {
    const ultimosProyectos = contenido.slice(0, 3);
    const otrosProyectos = contenido.slice(3);

    return (
      <section>
        <div className={`wrapper flow ${styles.proyectsWrapperFull}`}>
          <Hero
            type="sin-imagen"
            about={t("fullHeroAbout")}
            title={t("fullHeroTitle")}
          />
          <h2 className={styles.h2}>{t("title")}</h2>
          <div className={styles.cardsContainer}>
            {ultimosProyectos.map((proyecto) => (
              <Card
                type="con-imagen"
                contenido={proyecto}
                key={proyecto.url}
              />
            ))}
          </div>
          <h2 className={styles.h2}>{t("subTitle")}</h2>
          <div className={styles.cardsSinImagen}>
            {otrosProyectos.map((proyecto) => (
              <Card
                type="sin-imagen"
                contenido={proyecto}
                key={proyecto.url}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

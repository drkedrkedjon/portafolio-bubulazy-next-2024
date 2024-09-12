import Hero from "./componentes/Hero";
import sasaMemoji from "@/app/[locale]/assets/images/generales/sasa-memoji.png";
import SubHero from "./componentes/SubHero";
import HomeProyects from "./componentes/HomeProyects";
import {
  SOBRE_MI_ES,
  SOBRE_MI_EN,
} from "@/app/[locale]/contenido/home-page/sobreMi";
import {
  PROYECTOS_EN,
  PROYECTOS_ES,
} from "@/app/[locale]/contenido/home-page/proyectos";
import Formulario from "./componentes/Formulario";
import { useTranslations } from "next-intl";

export default function Home({ params: { locale } }) {
  const SOBRE_MI = locale === "es" ? SOBRE_MI_ES : SOBRE_MI_EN;
  const PROYECTOS = locale === "es" ? PROYECTOS_ES : PROYECTOS_EN;
  const t = useTranslations("HomePage");

  return (
    <main>
      {/* con-imagen, sin-imagen */}
      <Hero
        type="con-imagen"
        image={sasaMemoji}
        title={t("title")}
        alt={t("alt")}
      />

      {/* type: single, single-link, doble-una-lista, doble-tres-listas, */}
      <SubHero
        type="doble-una-lista"
        contenido={SOBRE_MI}
      />
      <HomeProyects
        contenido={PROYECTOS}
        type="reduced"
      />
      <Formulario />
    </main>
  );
}

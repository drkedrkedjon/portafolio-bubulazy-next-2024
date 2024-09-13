import HomeProyects from "@/app/[locale]/componentes/HomeProyects";
import {
  PROYECTOS_EN,
  PROYECTOS_ES,
} from "@/app/[locale]/contenido/home-page/proyectos";

export default function ProyectosPage({ params: { locale } }) {
  const PROYECTOS = locale === "es" ? PROYECTOS_ES : PROYECTOS_EN;

  return (
    <>
      <HomeProyects
        contenido={PROYECTOS}
        type="full"
      />
    </>
  );
}

import HomeProyects from "@/app/[locale]/componentes/HomeProyects";
import {
  PROYECTOS_EN,
  PROYECTOS_ES,
} from "@/app/[locale]/contenido/home-page/proyectos";
import { BASE_METADATA } from "@/app/[locale]/utilities/constants";

export const metadata = {
  title: `Proyects • ${BASE_METADATA.title}`,
};

export default async function ProyectosPage(props) {
  const params = await props.params;

  const {
    locale
  } = params;

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

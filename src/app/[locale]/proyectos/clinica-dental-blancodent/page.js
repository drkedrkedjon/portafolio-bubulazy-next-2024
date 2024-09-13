import Hero from "@/app/[locale]/componentes/Hero";
import SubHero from "@/app/[locale]/componentes/SubHero";
import {
  contenidoDePagina_ES,
  contenidoDePagina_EN,
} from "@/app/[locale]/contenido/clinica-dental-blancodent/contenido";
import {
  PROYECTOS_ES,
  PROYECTOS_EN,
} from "@/app/[locale]/contenido/home-page/proyectos";
import ProyectosMain from "@/app/[locale]/componentes/Proyectos/ProyectosMain";
import ProyectosAside from "@/app/[locale]/componentes/Proyectos/ProyectosAside";
import ProyectosOtros from "@/app/[locale]/componentes/Proyectos/ProyectosOtros";
import InfoLink from "@/app/[locale]/componentes/InfoLink";

export default function Page({ params: { locale } }) {
  const PROYECTOS = locale === "es" ? PROYECTOS_ES : PROYECTOS_EN;
  const contenidoDePagina =
    locale === "es" ? contenidoDePagina_ES : contenidoDePagina_EN;
  const { id, hero, subHero, main, aside, infoLink } = contenidoDePagina;

  return (
    <>
      <Hero
        type="sin-imagen"
        title={hero.title}
        about={hero.about}
      />
      <SubHero
        type="doble-tres-listas"
        contenido={subHero}
      />
      <ProyectosMain contenido={main} />
      <ProyectosAside contenido={aside} />
      <ProyectosOtros
        contenido={PROYECTOS}
        id={id}
      />
      <InfoLink
        contenido={infoLink}
        type="single-link"
      />
    </>
  );
}

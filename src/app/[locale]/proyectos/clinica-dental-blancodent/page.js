import Hero from "@/app/[locale]/componentes/Hero";
import SubHero from "@/app/[locale]/componentes/SubHero";
import { contenidoDePagina } from "@/app/[locale]/contenido/clinica-dental-blancodent/contenido";
import { PROYECTOS } from "@/app/[locale]/contenido/home-page/proyectos";
import ProyectosMain from "@/app/[locale]/componentes/Proyectos/ProyectosMain";
import ProyectosAside from "@/app/[locale]/componentes/Proyectos/ProyectosAside";
import ProyectosOtros from "@/app/[locale]/componentes/Proyectos/ProyectosOtros";
import InfoLink from "@/app/[locale]/componentes/InfoLink";

export default function Page() {
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

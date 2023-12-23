import Hero from "@/app/componentes/Hero";
import SubHero from "@/app/componentes/SubHero";
import { contenidoDePagina } from "@/app/contenido/multipage-web-form/contenido";
import { PROYECTOS } from "@/app/contenido/home-page/proyectos";
import ProyectosMain from "@/app/componentes/Proyectos/ProyectosMain";
import ProyectosAside from "@/app/componentes/Proyectos/ProyectosAside";
import ProyectosOtros from "@/app/componentes/Proyectos/ProyectosOtros";

export default function Page() {
  const { hero, subHero, main, aside } = contenidoDePagina;
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
      <ProyectosOtros contenido={PROYECTOS} />
    </>
  );
}

import Hero from "@/app/componentes/Hero";
import SubHero from "@/app/componentes/SubHero";
import { contenidoDePagina } from "@/app/contenido/multipage-web-form/contenido";
import ProyectosMain from "@/app/componentes/Proyectos/ProyectosMain";

export default function Page() {
  const { hero, subHero } = contenidoDePagina;
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
      <ProyectosMain />
    </>
  );
}

import Hero from "@/app/componentes/Hero";
import HomeProyects from "@/app/componentes/HomeProyects";
import { PROYECTOS } from "@/app/contenido/home-page/proyectos";

export default function ProyectosPage() {
  return (
    <>
      {/* <Hero
        type="sin-imagen"
        about="Mis proyectos personales."
        title="Todos los proyectos."
      /> */}
      <HomeProyects
        contenido={PROYECTOS}
        type="full"
      />
    </>
  );
}

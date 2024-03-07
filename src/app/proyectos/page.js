import HomeProyects from "@/app/componentes/HomeProyects";
import { PROYECTOS } from "@/app/contenido/home-page/proyectos";

export default function ProyectosPage() {
  return (
    <>
      <HomeProyects
        contenido={PROYECTOS}
        type="full"
      />
    </>
  );
}

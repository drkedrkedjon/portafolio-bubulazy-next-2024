import HomeProyects from "@/app/[locale]/componentes/HomeProyects";
import { PROYECTOS } from "@/app/[locale]/contenido/home-page/proyectos";

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

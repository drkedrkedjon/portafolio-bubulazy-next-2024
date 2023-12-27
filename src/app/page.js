import styles from "./page.module.css";
import Hero from "./componentes/Hero";
import sasaMemoji from "@/app/assets/images/generales/sasa-memoji.png";
import SubHero from "./componentes/SubHero";
import HomeProyects from "./componentes/HomeProyects";
import { SOBRE_MI } from "@/app/contenido/home-page/sobreMi";
import { PROYECTOS } from "@/app/contenido/home-page/proyectos";
import Formulario from "./componentes/Formulario";

export default function Home() {
  return (
    <main>
      {/* con-imagen, sin-imagen */}
      <Hero
        type="con-imagen"
        image={sasaMemoji}
        about="Proyecto:"
        title="Hola, soy Sasha desarrollador FrontEnd y algo más..."
        alt={"Mi Memoji, frente de un ordenador"}
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

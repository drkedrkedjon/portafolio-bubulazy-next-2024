import styles from "./page.module.css";
import Hero from "./componentes/Hero";
import sasaMemoji from "@/app/assets/images/generales/sasa-memoji.png";
import SubHero from "./componentes/SubHero";

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

      {/* type: single, single-btn, doble-una-lista, doble-tres-listas, */}
      <SubHero type="single-link" />
    </main>
  );
}

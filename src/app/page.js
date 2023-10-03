import styles from "./page.module.css";
import Hero from "./componentes/Hero";
import sasaMemoji from "@/app/assets/images/generales/sasa-memoji.png";

export default function Home() {
  return (
    <main>
      <Hero
        type="con-imagen"
        image={sasaMemoji}
        about="Proyecto:"
        title="Hola, soy Sasha desarrollador FrontEnd y algo más..."
        alt={"Mi Memoji, frente de un ordenador"}
      />
    </main>
  );
}

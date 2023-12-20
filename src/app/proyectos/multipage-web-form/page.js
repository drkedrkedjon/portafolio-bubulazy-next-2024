import Hero from "@/app/componentes/Hero";
import { contenido } from "@/app/contenido/multipage-web-form/contenido";

export default function Page() {
  const { hero } = contenido;
  return (
    <>
      <Hero
        type="sin-imagen"
        title={hero.title}
        about={hero.about}
      />
    </>
  );
}

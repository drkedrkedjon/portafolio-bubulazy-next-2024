import Card from "@/app/componentes/Card";

export default function Otros({ contenido, id }) {
  let firstProyectID = "";
  let secondProyectID = "";

  for (let i = 0; i < 2; i++) {
    const randomNum = Math.floor(Math.random() * contenido.length);

    // Si el proyecto A es el mismo que el que se está mostrando, se vuelve a generar un número aleatorio
    if (contenido[randomNum].id === id) {
      i--;
      continue;
    }
    // Si el proyecto A es el mismo que el proyecto B, se vuelve a generar un número aleatorio
    if (firstProyectID === contenido[randomNum].id) {
      i--;
      continue;
    }
    // En la primera iteración se guarda el id del primer proyecto
    if (i === 0) {
      firstProyectID = contenido[randomNum].id;
      continue;
    }
    // Se guarda el id del segundo proyecto
    const secondProyectID = contenido[randomNum].id;
  }

  const firstProyect = contenido.find(
    (proyect) => proyect.id === firstProyectID
  );
  const secondProyect = contenido.find(
    (proyect) => proyect.id === secondProyectID
  );

  return (
    <div>
      <h1>Proyectos Otros</h1>
    </div>
  );
}

import { TrailPageComponent } from "../../../components/TrailPageComponent/TrailPageComponent.jsx";

export const DevsColetar = () => {
  return (
    <TrailPageComponent
      idTrilha={9}
      titulo="Trilha Coletar"
      descricao="Nesta trilha você encontrará conteúdos avançados sobre Desenvolvimento. Recomendamos seguir a ordem dos tópicos."
    />
  );
};

export const DevsSemear = () => {
  return (
    <TrailPageComponent
      idTrilha={7}
      titulo="Trilha Semear"
      descricao="Nesta trilha você encontrará conteúdos básicos sobre Desenvolvimento. Recomendamos seguir a ordem dos tópicos."
    />
  );
};

export const DevsRegar = () => {
  return (
    <TrailPageComponent
      idTrilha={8}
      titulo="Trilha Regar"
      descricao="Nesta trilha você encontrará conteúdos intermediários sobre Desenvolvimento. Recomendamos seguir a ordem dos tópicos."
    />
  );
};

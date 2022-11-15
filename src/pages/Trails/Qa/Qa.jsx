import { TrailPageComponent } from "../../../components/TrailPageComponent/TrailPageComponent";

export const QaColetar = () => {
  return (
    <TrailPageComponent
      idTrilha={6}
      titulo="Trilha Coletar"
      descricao="Nesta trilha você encontrará conteúdos avançados sobre Quality Assurance. Recomendamos seguir a ordem dos tópicos."
    />
  );
};

export const QaRegar = () => {
  return (
    <TrailPageComponent
      idTrilha={5}
      titulo="Trilha Regar"
      descricao="Nesta trilha você encontrará conteúdos intermediários sobre Quality Assurance. Recomendamos seguir a ordem dos tópicos."
    />
  );
};

export const QaSemear = () => {
  return (
    <TrailPageComponent
      idTrilha={4}
      titulo="Trilha Semear"
      descricao="Nesta trilha você encontrará conteúdos básicos sobre Quality Assurance. Recomendamos seguir a ordem dos tópicos."
    />
  );
};

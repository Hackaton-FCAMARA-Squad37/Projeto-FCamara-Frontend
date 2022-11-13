import { TrailPageComponent } from "../../../components/TrailPageComponent/TrailPageComponent";

export const QaColetar = () => {
  return (
    <TrailPageComponent
      titulo="Coletar"
      area="QA(Quality Assurance)"
      dificuldade="avançados"
    />
  );
};

export const QaRegar = () => {
  return (
    <TrailPageComponent
      titulo="Regar"
      area="QA(Quality Assurance)"
      dificuldade="intermediários"
    />
  );
};

export const QaSemear = () => {
  return (
    <TrailPageComponent
      titulo="Semear"
      area="QA(Quality Assurance)"
      dificuldade="básicos"
    />
  );
};

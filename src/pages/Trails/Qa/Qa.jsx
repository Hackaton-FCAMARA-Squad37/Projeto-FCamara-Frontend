import { Navigate } from "react-router-dom";
import { TrailPageComponent } from "../../../components/TrailPageComponent/TrailPageComponent";

export const QaColetar = ({ autorizado }) => {
  return !autorizado ? (
    <Navigate to="/" />
  ) : (
    <TrailPageComponent
      idTrilha={6}
      titulo="Trilha Coletar"
      descricao="Nesta trilha você encontrará conteúdos avançados sobre Quality Assurance. Recomendamos seguir a ordem dos tópicos."
    />
  );
};

export const QaRegar = ({ autorizado }) => {
  return !autorizado ? (
    <Navigate to="/" />
  ) : (
    <TrailPageComponent
      idTrilha={5}
      titulo="Trilha Regar"
      descricao="Nesta trilha você encontrará conteúdos intermediários sobre Quality Assurance. Recomendamos seguir a ordem dos tópicos."
    />
  );
};

export const QaSemear = ({ autorizado }) => {
  return !autorizado ? (
    <Navigate to="/" />
  ) : (
    <TrailPageComponent
      idTrilha={4}
      titulo="Trilha Semear"
      descricao="Nesta trilha você encontrará conteúdos básicos sobre Quality Assurance. Recomendamos seguir a ordem dos tópicos."
    />
  );
};

import { Navigate } from "react-router-dom";
import { TrailPageComponent } from "../../../components/TrailPageComponent/TrailPageComponent";

export const UxuiSemear = ({autorizado}) => {

  return (!autorizado ? <Navigate to="/" /> :
    <TrailPageComponent
      titulo="Trilha Semear"
      descricao="Nesta trilha você encontrará conteúdos básicos sobre UX/UI Designer. Recomendamos seguir a ordem dos tópicos."
      idTrilha={1}
    />
  );
};

export const UxuiColetar = ({autorizado}) => {

  return (!autorizado ? <Navigate to="/" /> :
    <TrailPageComponent
      titulo="Trilha Coletar"
      descricao="Nesta trilha você encontrará conteúdos avançados sobre UX/UI Designer. Recomendamos seguir a ordem dos tópicos."
      idTrilha={3}
    />
  );
};

export const UxuiRegar = ({autorizado}) => {

  return (!autorizado ? <Navigate to="/" /> :
    <TrailPageComponent
      titulo="Trilha Regar"
      descricao="Nesta trilha você encontrará conteúdos intermediários sobre UX/UI Designer. Recomendamos seguir a ordem dos tópicos."
      idTrilha={2}
    />
  );
};

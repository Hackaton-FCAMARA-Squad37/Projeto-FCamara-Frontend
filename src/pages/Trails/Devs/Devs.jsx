import { Box } from "@mui/system";
import { TrailPageComponent } from "../../../components/TrailPageComponent/TrailPageComponent";

export const DevsColetar = () => {
  return (
    <TrailPageComponent
      titulo="Coletar"
      area="Desenvolvimento"
      dificuldade="avançados"
    />
  );
};

export const DevsSemear = () => {
  return (
    <TrailPageComponent
      titulo="Semear"
      area="Desenvolvimento"
      dificuldade="básicos"
    />
  );
};

export const DevsRegar = () => {
  return (
    <TrailPageComponent
      titulo="Regar"
      area="Desenvolvimento"
      dificuldade="intermediários"
    />
  );
};

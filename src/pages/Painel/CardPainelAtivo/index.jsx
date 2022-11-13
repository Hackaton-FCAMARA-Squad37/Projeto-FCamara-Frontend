import { Box } from "@mui/system";
import { BotaoGenerico } from "../../../components/BotaoGenerico";
import axios from "axios";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import semear from "../../../assets/semearLogo.png";
import regar from "../../../assets/regarLogo.png";
import coletar from "../../../assets/coletarLogo.png";

export const CardPainelAtivo = (props) => {
  const [nivelTrilha, setNivelTrilha] = useState(null);

  const buscaNivelDaTrilha = async () => {
    const { data } = await axios.get(
      `https://orange-evolution-squad37.herokuapp.com/niveis/${props.trilha.idNivel}`
    );
    setNivelTrilha(data.titulo.charAt(0).toUpperCase() + data.titulo.slice(1));
  };

  useEffect(() => {
    buscaNivelDaTrilha();
  }, [nivelTrilha]);

  return (
    <Box>
      <Box
        sx={{
          padding: `${props.mobile ? "1.5rem 1rem" : "4rem 3rem"}`,
          backgroundColor: "vitamin.main",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "tea.main",
          display: "flex",
          flexDirection: "column",
          gap: `${props.mobile ? "1rem" : "1.5rem"}`,
          textAlign: "center",
        }}
      >
        <Typography
          fontSize={props.mobile ? "1rem" : "1.5rem"}
          sx={{
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          {nivelTrilha}
        </Typography>
        <Box
          sx={{
            backgroundImage: `url(${
              props.trilha.titulo == "semear"
                ? semear
                : props.trilha.titulo == "regar"
                ? regar
                : coletar
            })`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: `${props.mobile ? "3.5rem" : "4rem"}`,
            height: `${props.mobile ? "3.5rem" : "4rem"}`,
            margin: "0 auto",
          }}
        ></Box>
        <Typography
          fontSize={props.mobile ? "1rem" : "1.25rem"}
          sx={{ lineHeight: "1.5rem", color: "water.main" }}
        >
          {props.trilha.titulo.charAt(0).toUpperCase() +
            props.trilha.titulo.slice(1)}
        </Typography>
        <BotaoGenerico
          texto="Continuar estudando"
          mobile={props.mobile}
        ></BotaoGenerico>
      </Box>
    </Box>
  );
};

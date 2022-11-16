import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TituloSubtitulo } from "../../../components/TituloSubtitulo/TituloSubtitulo";
import { BotaoGenerico } from "../../../components/BotaoGenerico";
import { useNavigate } from "react-router-dom";

export const CardPainel = (props) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography
        fontSize="1.25rem"
        sx={{ fontWeight: "600", marginBottom: "0.5rem" }}
      >
        {props.cardTitulo}
      </Typography>

      <Box
        sx={{
          padding: `${props.mobile ? "1.5rem 1rem" : "4rem 3rem"}`,
          backgroundColor: "vitamin.main",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "tea.main",
          display: "flex",
          flexDirection: `${props.mobile ? "column" : "row"}`,
          gap: `${props.mobile ? "1rem" : "10rem"}`,
        }}
      >
        <TituloSubtitulo
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          titleFontSize={props.mobile ? "" : "1.5rem"}
          subtitleFontSize={props.mobile ? "" : "1.25rem"}
        />
        <BotaoGenerico
          clicado={() => navigate("/areas")}
          texto="Acessar trilhas"
          mobile={props.mobile}
        ></BotaoGenerico>
      </Box>
    </Box>
  );
};

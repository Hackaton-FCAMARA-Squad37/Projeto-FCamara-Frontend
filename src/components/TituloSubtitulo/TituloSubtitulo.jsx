import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const TituloSubtitulo = (props) => {
  return (
    <Box>
      <Typography
        fontSize={props.titleFontSize ? props.titleFontSize : "1rem"}
        sx={{
          fontWeight: "600",
          marginBottom: "1rem",
        }}
      >
        {props.titulo}
      </Typography>
      <Typography
        fontSize={props.subtitleFontSize ? props.subtitleFontSize : "1rem"}
        sx={{ lineHeight: "1.5rem", color: "water.main" }}
      >
        {props.nomeOn
          ? "Olá, " + props.nome + "!" + props.subtitulo
          : props.subtitulo}
      </Typography>
    </Box>
  );
};

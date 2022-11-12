import { Typography, useMediaQuery, Button } from "@mui/material";
import { Box } from "@mui/system";
import { BotaoGenerico } from "../../components/BotaoGenerico";
import { TituloSubtitulo } from "../../components/TituloSubtitulo";
import { CardPainel } from "./CardPainel";
import useUserState from "../../hook/useUserState";

export const Painel = () => {
  const mobile = useMediaQuery("(max-width: 768px)");
  const loged = useUserState()

  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "coffee.main",
        padding: `${mobile ? "4rem 1.5rem" : "9rem 4.5rem"}`,
        display: "flex",
        flexDirection: "column",
        gap: `${mobile ? "2rem" : "6rem"}`,
      }}
    >
      <TituloSubtitulo
      nome={loged.nome}
        titulo="Painel"
        subtitulo=" Este é seu painel, aqui você encontrará suas trilhas de
          estudo adicionadas"
        titleFontSize="1.5rem"
      />
      <CardPainel
        cardTitulo="Seus estudos"
        titulo="Inicie seus estudos"
        subtitulo="Você ainda não iniciou nenhum estudo, acesse as trilhas para escolher por onde começar"
        mobile={mobile}
      />
    </Box>
  );
};

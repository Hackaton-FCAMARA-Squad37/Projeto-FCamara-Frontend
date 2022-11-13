import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { TituloSubtitulo } from "../../components/TituloSubtitulo";
import { CardPainel } from "./CardPainel";
import useUserState from "../../hook/useUserState";
import axios from "axios";
import { useState, useEffect } from "react";
import { CardPainelAtivo } from "./CardPainelAtivo";

export const Painel = () => {
  const mobile = useMediaQuery("(max-width: 768px)");
  const loged = useUserState();
  const [trilhasAtivas, setTrilhasAtivas] = useState(null);

  const buscaTrilhasAtivas = async () => {
    await axios
      .post("https://orange-evolution-squad37.herokuapp.com/usuario-temas", {
        usuarioId: loged.id,
      })
      .then((response) => {
        setTrilhasAtivas(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    buscaTrilhasAtivas();
  }, []);

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
        nomeOn="true"
        nome={loged.nome}
        titulo="Painel"
        subtitulo=" Este é seu painel, aqui você encontrará suas trilhas de
          estudo adicionadas"
        titleFontSize="1.5rem"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: `${mobile ? "column" : "row"}`,
          gap: "1.5rem",
        }}
      >
        {trilhasAtivas ? (
          trilhasAtivas.map((trilha) => (
            <CardPainelAtivo
              key={trilha.id}
              trilha={trilha}
              mobile={mobile}
            ></CardPainelAtivo>
          ))
        ) : (
          <CardPainel
            cardTitulo="Seus estudos"
            titulo="Inicie seus estudos"
            subtitulo=" Você ainda não iniciou nenhum estudo, acesse as trilhas para escolher por onde começar"
            mobile={mobile}
          />
        )}
      </Box>
    </Box>
  );
};

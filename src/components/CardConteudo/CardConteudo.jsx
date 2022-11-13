import { Box, Typography, useMediaQuery } from "@mui/material";
import imgArtigo from "../../assets/imgArtigo.png";
import imgVideo from "../../assets/imgVideo.png";
import imgPodcast from "../../assets/imgPodecast.png";

export const CardConteudo = (props) => {
  const mobile = useMediaQuery("(max-width: 768px)");
  const conteudo = {
    titulo: "conteudo bacana",
    tipo: "artigo",
    duracao: "8:00",
    descricao: "conteúdo bacana sobre javascript",
    link: "https://www.youtube.com/watch?v=k85mRPqvMbE",
    donoConteudo: "FCamara",
    tags: "Legal, Maneiro, Irado",
    idTema: 1,
  };

  return (
    <a
      target="_blank"
      href={conteudo.link}
      style={{
        color: "black",
        textDecoration: "none",
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          height: `${mobile ? "22.5rem" : "18rem"}`,
          padding: `${mobile ? "1rem" : "2rem"}`,
          width: "fit-content",
        }}
      >
        <Box
          sx={{
            marginBottom: "0.5rem",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "cocktail.main",
              padding: "0.25rem",
              borderRadius: "4px",
              marginRight: "0.5rem",
            }}
          >
            {conteudo.tags.split(", ")[0]}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "smallMixture.main",
              padding: "0.25rem",
              borderRadius: "4px",
              marginRight: "0.5rem",
            }}
          >
            {conteudo.tags.split(", ")[1]}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "yogurt.main",
              padding: "0.25rem",
              borderRadius: "4px",
            }}
          >
            {conteudo.tags.split(", ")[2]}
          </Typography>
        </Box>
        <Box
          sx={{
            height: `${mobile ? "6.5rem" : "11rem"}`,
            width: `${mobile ? "16.375rem" : "18.688rem"}`,
            backgroundImage: `url(${
              conteudo.tipo == "podcast"
                ? imgPodcast
                : conteudo.tipo == "video"
                ? imgVideo
                : imgArtigo
            })`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box>
          <Typography>
            {conteudo.titulo.charAt(0).toUpperCase() + conteudo.titulo.slice(1)}
          </Typography>
          <Typography>
            {conteudo.descricao.charAt(0).toUpperCase() +
              conteudo.descricao.slice(1)}
          </Typography>
          <Typography
            sx={{
              fontSize: `${mobile ? "0.75rem" : "1rem"}`,
            }}
          >
            {conteudo.tipo.charAt(0).toUpperCase() +
              conteudo.tipo.slice(1) +
              " . " +
              (conteudo.duracao[0] + " minutos") +
              " . " +
              conteudo.donoConteudo}
          </Typography>
        </Box>
      </Box>
    </a>
  );
};

import { Box, Typography, useMediaQuery } from "@mui/material";
import imgArtigo from "../../assets/imgArtigo.png";
import imgVideo from "../../assets/imgVideo.png";
import imgPodcast from "../../assets/imgPodecast.png";

export const CardConteudo = (props) => {
  const mobile = useMediaQuery("(max-width: 768px)");
  const conteudo = {
    titulo: "Os diferentes tipos e funções dos Protótipos",
    tipo: "artigo",
    duracao: "8:00",
    descricao: "O que é esse entregável e quais benefícios eles podem oferecer para as equipes e para as empresas",
    link: "https://www.youtube.com/watch?v=k85mRPqvMbE",
    donoConteudo: "UX Collective BR",
    tags: "Ux Design, Ui Design, Protótipo",
    idTema: 1,
  };

  return (
    <a
      target="_blank"
      href={conteudo.link}
      style={{
        color: "black",
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          maxHeight: `${mobile ? "22.5rem" : "15rem"}`,
          padding: `${mobile ? "1rem" : "2rem"}`,
          color: `vitamin.main`,
          alignContent:'center',
          borderRadius:'8px'
        }}
      >
        <Box
          sx={{
            marginBottom: "0.5rem",
            display: "flex",
            height:`1.5rem`
          }}
        >
          <Typography
            sx={{
              backgroundColor: "cocktail.main",
              padding: `${mobile? '0.25rem':'0.05rem'} 0.50rem`,
              borderRadius: "4px",
              marginRight: "0.5rem",
              fontSize:`${mobile?'0.75rem':'1rem'}`
            }}
          >
            {conteudo.tags.split(", ")[0]}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "smallMixture.main",
              padding: `${mobile? '0.25rem':'0.05rem'} 0.50rem`,
              borderRadius: "4px",
              marginRight: "0.5rem",
              fontSize:`${mobile?'0.75rem':'1rem'}`
            }}
          >
            {conteudo.tags.split(", ")[1]}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "yogurt.main",
              padding: `${mobile? '0.25rem':'0.05rem'} 0.50rem`,
              borderRadius: "4px",
              fontSize:`${mobile?'0.75rem':'1rem'}`
            }}
          >
            {conteudo.tags.split(", ")[2]}
          </Typography>
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection:`${mobile?'column':'row-reverse'}`,
          justifyContent:'space-between'
        }}>
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
              backgroundSize: "cover",
              backgroundPosition:'center',
              backgroundRepeat: "no-repeat",
              borderRadius:'4px'
            }}
          />
          
            <Box>
              <Typography mt='8px' sx={{
                fontSize:`${mobile?'1rem':'1.25rem'}`,
                fontWeight:'600',
                marginBottom:`${mobile?'2rem':'2.5rem'}`
              }}>
                {conteudo.titulo.charAt(0).toUpperCase() + conteudo.titulo.slice(1).toLowerCase()}
              </Typography>
              <Typography sx={{
                marginBottom:`${mobile?'2rem':''}`,
                width:'80%'
              }}>
                {conteudo.descricao.charAt(0).toUpperCase() +
                  conteudo.descricao.slice(1).toLowerCase()}
              </Typography>
            </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: `${mobile ? "0.75rem" : "1rem"}`,
            }}
          >
            {conteudo.tipo.charAt(0).toUpperCase() +
              conteudo.tipo.slice(1).toLowerCase() +
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

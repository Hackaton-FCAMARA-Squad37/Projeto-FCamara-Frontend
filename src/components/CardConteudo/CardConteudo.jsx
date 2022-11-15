import { Box, Typography, useMediaQuery } from "@mui/material";
import imgArtigo from "../../assets/imgArtigo.png";
import imgVideo from "../../assets/imgVideo.png";
import imgPodcast from "../../assets/imgPodecast.png";
import DeleteIcon from "@mui/icons-material/Delete";
import useUserState from "../../hook/useUserState.jsx";
import axios from "axios";

export const CardConteudo = (props) => {
  const mobile = useMediaQuery("(max-width: 768px)");
  const admin = useUserState();

  const excluirConteudo = async () => {
    const conteudoExcluido = await axios.delete(
      `https://orange-evolution-squad37.herokuapp.com/conteudos/${props.id}`
    );
    const listaConteudoAtualizada = props.listaConteudos.map(
      (conteudo) => conteudo.id !== conteudoExcluido.id
    );

    props.setListaConteudos(listaConteudoAtualizada);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: `${mobile ? "22.5rem" : "15rem"}`,
        padding: `${mobile ? "1rem" : "2rem"}`,
        color: `vitamin.main`,
        alignContent: "center",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {props.tags ? (
          <Box
            sx={{
              marginBottom: "0.5rem",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                backgroundColor: "cocktail.main",
                padding: `${mobile ? "0.25rem" : "0.05rem"} 0.50rem`,
                borderRadius: "4px",
                marginRight: "0.5rem",
                fontSize: mobile ? "0.75rem" : "1rem",
              }}
            >
              {props.tags ? props.tags.split(", ")[0] : ""}
            </Typography>
            {props.tags.split(", ")[1] ? (
              <Typography
                sx={{
                  backgroundColor: "smallMixture.main",
                  padding: `${mobile ? "0.25rem" : "0.05rem"} 0.50rem`,
                  borderRadius: "4px",
                  marginRight: "0.5rem",
                  fontSize: `${mobile ? "0.75rem" : "1rem"}`,
                }}
              >
                {props.tags.split(", ")[1]}
              </Typography>
            ) : (
              <></>
            )}
            {props.tags.split(", ")[2] ? (
              <Typography
                sx={{
                  backgroundColor: "yogurt.main",
                  padding: `${mobile ? "0.25rem" : "0.05rem"} 0.50rem`,
                  borderRadius: "4px",
                  fontSize: `${mobile ? "0.75rem" : "1rem"}`,
                }}
              >
                {props.tags.split(", ")[2]}
              </Typography>
            ) : (
              <></>
            )}
          </Box>
        ) : (
          <></>
        )}
        <Box
          onClick={excluirConteudo}
          sx={{
            border: "1px solid #8A0300",
            color: "#8A0300",
            display: "flex",
            marginBottom: "5px",
            cursor: "pointer",
          }}
        >
          <DeleteIcon /> <Typography>Excluir conteúdo</Typography>
        </Box>
      </Box>
      <a
        target="_blank"
        href={props.link}
        style={{
          display: "flex",
          flexDirection: `${mobile ? "column" : "row-reverse"}`,
          justifyContent: "space-between",
          color: "black",
          textDecoration: "none",
        }}
      >
        {props.tipo ? (
          <Box
            sx={{
              height: `${mobile ? "6.5rem" : "11rem"}`,
              width: `${mobile ? "100%" : "60%"}`,
              minWidth: `${mobile ? "" : "11rem"}`,
              backgroundImage: `url(${
                props.tipo == "podcast"
                  ? imgPodcast
                  : props.tipo == "video"
                  ? imgVideo
                  : imgArtigo
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "4px",
            }}
          />
        ) : (
          <></>
        )}

        <Box
          sx={{
            marginBottom: `${mobile ? "" : "1.5rem"}`,
          }}
        >
          <Typography
            mt="8px"
            sx={{
              fontSize: `${mobile ? "1rem" : "1.25rem"}`,
              fontWeight: "600",
              marginBottom: `${mobile ? "2rem" : "2.5rem"}`,
            }}
          >
            {props.titulo
              ? props.titulo.charAt(0).toUpperCase() +
                props.titulo.slice(1).toLowerCase()
              : ""}
          </Typography>
          <Typography
            sx={{
              marginBottom: `${mobile ? "2rem" : ""}`,
              width: "80%",
            }}
          >
            {props.descricao
              ? props.descricao.charAt(0).toUpperCase() +
                props.descricao.slice(1).toLowerCase()
              : ""}
          </Typography>
        </Box>
      </a>
      <Box
        sx={{
          marginTop: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: `${mobile ? "0.75rem" : "1rem"}`,
          }}
        >
          {props.tipo && props.duracao && props.donoConteudo
            ? props.tipo.charAt(0).toUpperCase() +
              props.tipo.slice(1).toLowerCase() +
              " . " +
              (props.duracao[0] + " minutos") +
              " . " +
              props.donoConteudo
            : ""}
        </Typography>
      </Box>
    </Box>
  );
};

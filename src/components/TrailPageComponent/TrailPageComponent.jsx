import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { ReturnButton } from "../ReturnButton/ReturnButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { ThemeAccordion } from "../Accordion/Accordion";
import { useState, useEffect } from "react";
import axios from "axios";
import { BotaoGenerico } from "../BotaoGenerico";
import { useNavigate } from "react-router-dom";
import useUserState from "../../hook/useUserState";

export const TrailPageComponent = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const [listaConteudos, setListaConteudos] = useState([]);
  const [atualizaTela, setAtualizaTela] = useState(false);
  const navigate = useNavigate();
  const admin = useUserState();

  const onClick = () => {
    navigate("/adicionar-conteudos", {
      state: { titulo: "", idTema: props.idTrilha },
    });
  };

  const pegaConteudos = async () => {
    const { data } = await axios.get(
      "https://orange-evolution-squad37.herokuapp.com/conteudos"
    );
    const dataFiltrada = data.filter((data) => data.idTema === props.idTrilha);
    setListaConteudos(dataFiltrada);
  };

  useEffect(() => {
    pegaConteudos();
  }, [atualizaTela]);

  const listaTemasComTemasRepetidos = listaConteudos.map(
    (conteudo) => conteudo.divisao
  );
  const listaTemas = Array.from(new Set(listaTemasComTemasRepetidos));

  return (
    <Box
      sx={{
        padding: `${mobile ? "4rem 1.5rem" : "9rem 4.5rem"}`,
        color: "water.main",
        backgroundColor: "coffee.main",
      }}
    >
      <ReturnButton />
      <Typography
        sx={{
          fontSize: `${mobile ? "1.5rem" : "2rem"}`,
          fontWeight: "600",
          marginBottom: `${mobile ? "1.5rem" : "2.5rem"}`,
        }}
      >
        {props.titulo}
      </Typography>
      <Box
        sx={{
          color: "water.main",
          display: "flex",
          marginBottom: `${mobile ? "1rem" : "2rem"}`,
        }}
      >
        <MenuBookIcon
          sx={{
            margin: "auto 0",
            height: `${mobile ? "1.25rem" : "2.5rem"}`,
            width: `${mobile ? "1.25rem" : "2.5rem"}`,
          }}
        />
        <Typography
          sx={{
            marginLeft: "1rem",
            marginTop: "auto",
            marginBottom: "auto",
            fontSize: `${mobile ? "1rem" : "1.25rem"}`,
          }}
        >
          {props.descricao}
        </Typography>
      </Box>
      <Box
        sx={{
          color: "water.main",
          display: "flex",
          marginBottom: `${mobile ? "1rem" : "2rem"}`,
        }}
      >
        <AccessAlarmIcon
          sx={{
            margin: "auto 0",
            height: `${mobile ? "1.25rem" : "2.5rem"}`,
            width: `${mobile ? "1.25rem" : "2.5rem"}`,
          }}
        />
        <Typography
          sx={{
            marginLeft: "1rem",
            marginTop: "auto",
            marginBottom: "auto",
            fontSize: `${mobile ? "1rem" : "1.25rem"}`,
          }}
        >
          Tempo estimado para encerrar a trilha: 10 horas
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: `${mobile ? "1rem" : "2rem"}`,
        }}
      >
        <Typography
          sx={{
            fontSize: `${mobile ? "1rem" : "1.25rem"}`,
          }}
        >
          Conteúdos
        </Typography>
        <Typography
          sx={{
            fontSize: `${mobile ? "1rem" : "1.25rem"}`,
          }}
        >
          {listaTemas.length}
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "milkshake.main",
          marginBottom: `${mobile ? "1.5rem" : "4rem"}`,
        }}
      />
      {listaTemas.map((element, id) => {
        return (
          <ThemeAccordion
            conteudos={listaConteudos}
            setListaConteudos={setListaConteudos}
            setAtualizaTela={setAtualizaTela}
            atualizaTela={atualizaTela}
            key={id}
            number={id + 1}
            titulo={element}
          />
        );
      })}
      {admin.isAdmin ? (
        <Box sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
        }}>
          <Box
            sx={{
              padding: mobile ? "1rem" : "2rem",
              maxWidth: "22.688rem",
            }}
          >
            <BotaoGenerico clicado={onClick} texto="+ Adicionar tema" />
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

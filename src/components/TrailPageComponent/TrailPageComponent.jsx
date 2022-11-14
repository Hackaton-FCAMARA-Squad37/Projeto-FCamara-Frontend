import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { ReturnButton } from "../ReturnButton/ReturnButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { ThemeAccordion } from "../Accordion/Accordion";
import { useState, useEffect } from "react";
import axios from "axios";

export const TrailPageComponent = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const [listaConteudos, setListaConteudos] = useState([]);

  const temas = [
    { id: 1, titulo: "Introdução à UX Design" },
    { id: 2, titulo: "Metodologias do design" },
    { id: 3, titulo: "Frameworks de design" },
    { id: 4, titulo: "Introdução à pesquisa" },
    { id: 5, titulo: "Introdução à conceitos de UI" },
    { id: 6, titulo: "Introdução ao Figma" },
    { id: 7, titulo: "Introdução à ideação" },
  ];

  const conteudos = [
    {
      titulo: "O que é UX Design?",
      tipo: "artigo",
      duracao: "8:00",
      descricao: "Aprenda sobre ux",
      link: "https://www.hostinger.com.br/tutoriais/ux-o-que-e-user-experience",
      donoConteudo: "FCamara",
      tags: "UX Design, UI Design, Significado",
      idTema: "Introdução à UX Design",
    },
    {
      titulo: "O que é UX Design?",
      tipo: "artigo",
      duracao: "8:00",
      descricao: "Aprenda sobre ux",
      link: "https://www.hostinger.com.br/tutoriais/ux-o-que-e-user-experience",
      donoConteudo: "FCamara",
      tags: "UX Design, UI Design, Significado",
      idTema: "Introdução à UX Design",
    },
  ];

  const pegaConteudos = async () => {
    const response = await axios.get(
      "https://orange-evolution-squad37.herokuapp.com/conteudos"
    );
    console.log(response);
  };

  useEffect(() => {
    pegaConteudos();
  }, []);

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
          {temas.length}
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "milkshake.main",
          marginBottom: `${mobile ? "1.5rem" : "4rem"}`,
        }}
      />
      {temas.map((element, id) => {
        return (
          <ThemeAccordion
            conteudos={conteudos}
            key={id}
            number={id + 1}
            titulo={element.titulo}
          />
        );
      })}
    </Box>
  );
};

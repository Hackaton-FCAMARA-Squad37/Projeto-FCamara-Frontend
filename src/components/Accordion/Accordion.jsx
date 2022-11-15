import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useMediaQuery, Button, Typography } from "@mui/material";
import { CardConteudo } from "../CardConteudo/CardConteudo";
import { BotaoGenerico } from "../BotaoGenerico";
import { useNavigate } from "react-router-dom";

export function ThemeAccordion(props) {
  const mobile = useMediaQuery("(max-width:768px)");
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const idTema = props.conteudos[0] ? props.conteudos[0].idTema : "";

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onClick = () => {
    navigate("/adicionar-conteudos", {
      state: { titulo: props.titulo, idTema: idTema },
    });
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: "vitamin.main",
          color: "water.main",
          border: "1px solid",
          borderColor: "tea.main",
          marginBottom: `${mobile ? "1rem" : "1.5rem"}`,
          marginTop: `${mobile ? "1rem" : "1.5rem"}`,
          paddingBottom: ``,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "water.main" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>{props.number + "." + " " + props.titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props.conteudos
            ? props.conteudos.map((element, id) => {
                if (element.divisao == props.titulo) {
                  return (
                    <Box
                      key={id}
                      sx={{
                        backgroundColor: "water.main",
                        borderRadius: "8px",
                        marginBottom: `${mobile ? "1rem" : "2rem"}`,
                      }}
                    >
                      <CardConteudo
                        tipo={element.tipo}
                        link={element.link}
                        tags={element.tags}
                        titulo={element.titulo}
                        descricao={element.descricao}
                        duracao={`${element.duracao}`}
                        donoConteudo={element.donoConteudo}
                      />
                    </Box>
                  );
                }
              })
            : ""}
        </AccordionDetails>
        <Box
          sx={{
            padding: mobile ? "1rem" : "2rem",
          }}
        >
          <BotaoGenerico clicado={onClick} texto="+ Adicionar Conteúdo" />
        </Box>
      </Accordion>
    </Box>
  );
}

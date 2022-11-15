import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useMediaQuery, Typography, Button } from "@mui/material";
import { CardConteudo } from "../CardConteudo/CardConteudo";
import { useNavigate } from "react-router-dom";
import useUserState from "../../hook/useUserState";

export function ThemeAccordion(props) {
  const mobile = useMediaQuery("(max-width:768px)");
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const admin = useUserState();
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
                        id={element.id}
                        tipo={element.tipo}
                        link={element.link}
                        tags={element.tags}
                        titulo={element.titulo}
                        descricao={element.descricao}
                        duracao={`${element.duracao}`}
                        donoConteudo={element.donoConteudo}
                        setListaConteudos={props.setListaConteudos}
                        listaConteudos={props.conteudos}
                        setAtualizaTela={props.setAtualizaTela}
                        atualizaTela={props.atualizaTela}
                      />
                    </Box>
                  );
                }
              })
            : ""}
        </AccordionDetails>
        {admin.isAdmin ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: mobile ? "1rem" : "2rem",
                maxWidth: "22.688rem",
              }}
            >
              <Button onClick={onClick} variant='contained' sx={{
                            width: `100%`,
                            fontSize:'1.25rem',
                            backgroundColor:'vitamin.main',
                            color:'primary.main',
                            border:'1px solid',
                            borderRadius:'8px',
                            '&:hover':{
                                backgroundColor:'#141111'
                            }
                        }}>
                            + Adicionar conteúdo
                        </Button>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Accordion>
    </Box>
  );
}

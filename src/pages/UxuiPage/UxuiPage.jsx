import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import regar from "../../assets/regarLogo.png";
import semear from "../../assets/semearLogo.png";
import coletar from "../../assets/coletarLogo.png";
import { CardTrail } from "../../components/CardTrail/CardTrail";

export function UxuiPage() {
  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      bgcolor="coffee.main"
      color="water.main"
      textAlign="justify"
      sx={{
        padding: `${mobile ? "4rem" : "9rem"} ${mobile ? "1.5rem" : "4.5rem"} ${
          mobile ? "3rem" : "8rem"
        } ${mobile ? "1.5rem" : "4.5rem"}`,
      }}
    >
      <Link
        to="/areas"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            marginBottom: `${mobile ? "2rem" : "4rem"}`,
          }}
        >
          <ArrowBackIcon
            sx={{
              height: `${mobile ? "1.3rem" : "2.25rem"}`,
            }}
          />
          <Typography
            height={mobile ? "" : "1.5rem"}
            sx={{
              fontSize: `${mobile ? "1rem" : "1.5rem"}`,
              paddingLeft: `${mobile ? "0.5rem" : "1.375rem"}`,
              fontWeight:`${mobile?'':'600'}`
            }}
          >
            Voltar
          </Typography>
        </Box>
      </Link>
      <CardTrail imagem={semear} titulo='Semear' descricao='Semear é o primeiro nível da trilha, nela você vai aprender assuntos básicos que irão te preparar para os próximos níveis. Se você está iniciando seus estudos em tecnologia, essa trilha é para você'/>
      <CardTrail imagem={regar} titulo='Regar' descricao='Regar é o segundo nível da trilha, nela há conteúdos considerados intermediários pela nossa consultroria. Se você já possui algum tempo estudando tecnologia, essa trilha te ajudará'/>
      <CardTrail imagem={coletar} titulo='Coletar' descricao='Coletar  é o terceiro e último nível da trilha, nela têm conteúdos mais avançados. Se você busca por assuntos mais específicos ou linguagens de programação pouco usadas, essa trilha te auxiliará'/>
    </Box>
  );
}

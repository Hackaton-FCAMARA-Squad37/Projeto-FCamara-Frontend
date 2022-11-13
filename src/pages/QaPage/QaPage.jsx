import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import regar from "../../assets/regarLogo.png";
import semear from "../../assets/semearLogo.png";
import coletar from "../../assets/coletarLogo.png";
import { CardTrail } from "../../components/CardTrail/CardTrail";
import { ReturnButton } from "../../components/ReturnButton/ReturnButton";

export function QaPage() {
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
        <ReturnButton />
      </Link>
      <CardTrail caminho='/caminhoqa/semear' nivel='semear' titulo='Semear' descricao='Semear é o primeiro nível da trilha, nela você vai aprender assuntos básicos que irão te preparar para os próximos níveis. Se você está iniciando seus estudos em tecnologia, essa trilha é para você'/>
      <CardTrail caminho='/caminhoqa/regar' titulo='Regar' descricao='Regar é o segundo nível da trilha, nela há conteúdos considerados intermediários pela nossa consultroria. Se você já possui algum tempo estudando tecnologia, essa trilha te ajudará'/>
      <CardTrail caminho='/caminhoqa/coletar' titulo='Coletar' descricao='Coletar  é o terceiro e último nível da trilha, nela têm conteúdos mais avançados. Se você busca por assuntos mais específicos ou linguagens de programação pouco usadas, essa trilha te auxiliará'/>
    </Box>
  );
}
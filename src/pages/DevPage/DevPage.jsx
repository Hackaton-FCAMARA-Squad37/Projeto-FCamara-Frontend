import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { CardTrail } from "../../components/CardTrail/CardTrail";
import { ReturnButton } from "../../components/ReturnButton/ReturnButton";

export function DevPage() {
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
      <CardTrail
        temaId={9}
        caminho="/caminhodev/semear"
        nivel="semear"
        titulo="Semear"
        descricao="Semear é o primeiro nível da trilha, nela você vai aprender assuntos básicos que irão te preparar para os próximos níveis. Se você está iniciando seus estudos em tecnologia, essa trilha é para você"
      />
      <CardTrail
        temaId={11}
        caminho="/caminhodev/regar"
        nivel="regar"
        titulo="Regar"
        descricao="Regar é o segundo nível da trilha, nela há conteúdos considerados intermediários pela nossa consultroria. Se você já possui algum tempo estudando tecnologia, essa trilha te ajudará"
      />
      <CardTrail
        temaId={12}
        caminho="/caminhodev/coletar"
        nivel="coletar"
        titulo="Coletar"
        descricao="Coletar  é o terceiro e último nível da trilha, nela têm conteúdos mais avançados. Se você busca por assuntos mais específicos ou linguagens de programação pouco usadas, essa trilha te auxiliará"
      />
    </Box>
  );
}

import { Container, Typography, useMediaQuery } from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ReturnButton } from "../../components/ReturnButton/ReturnButton";
import { FormAdicionarConteudo } from "./FormAdicionarConteudo";

export const AdicionarConteudos = ({ autorizado }) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const { state } = useLocation();

  return ( !autorizado? <Navigate to="/"/>:
    <Container
      component="div"
      maxWidth="100%"
      sx={{
        backgroundColor: "coffee.main",
        padding: "4rem 1.5rem",
        color: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ReturnButton />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: mobile ? "1rem" : "2rem",
          marginBottom: mobile ? "2rem" : "4rem",
        }}
      >
        Adicionar Conteúdos
      </Typography>
      <FormAdicionarConteudo state={state} />
    </Container>
  );
};

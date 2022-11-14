import { Container, Typography, useMediaQuery } from "@mui/material";
import { ReturnButton } from "../../components/ReturnButton/ReturnButton";

export const AdicionarConteudos = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  return (
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
      <Typography sx={{ fontWeight: 600, fontSize: mobile ? "1rem" : "2rem" }}>
        Adicionar Conteúdos
      </Typography>
    </Container>
  );
};

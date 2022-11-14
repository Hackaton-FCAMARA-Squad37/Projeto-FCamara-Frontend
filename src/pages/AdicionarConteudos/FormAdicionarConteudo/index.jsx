import { Box, useMediaQuery } from "@mui/material";
import { BotaoGenerico } from "../../../components/BotaoGenerico";
import { InputSimples } from "../../../components/InputSimples";

export const FormAdicionarConteudo = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  return (
    <Box
      component="form"
      onSubmit={() => console.log("massa")}
      sx={{
        border: "1px solid",
        borderColor: "milkshake.main",
        borderRadius: "8px",
        padding: `${mobile ? "1.5rem 1rem" : "3.5rem 3rem"}`,
        display: "flex",
        flexDirection: "column",
        gap: mobile ? "1.5rem" : "2.5rem",
        margin: mobile ? "0" : "0 auto",
        minWidth: mobile ? "" : "500px",
      }}
    >
      <InputSimples tipo="texto" placeholder="Escreva o título" nome="Titulo" />
      <InputSimples
        tipo="texto"
        placeholder="Escreva a descrição"
        nome="Descrição"
      />
      <InputSimples
        tipo="texto"
        placeholder="Escreva a categoria"
        nome="Categoria"
      />
      <InputSimples
        tipo="select"
        placeholder="Escreva a categoria"
        nome="Formato do conteúdo"
      />
      <BotaoGenerico texto="Publicar conteúdo" />
    </Box>
  );
};

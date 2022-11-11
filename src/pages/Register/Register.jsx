import {
  Typography,
  useMediaQuery,
  Box
} from "@mui/material";
import { InputCustomized } from "../../components/InputCustomized/InputCustomized";

export const Register = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const cellphone = useMediaQuery("(max-width:480px)");

  return (
    <Box
      sx={{
        backgroundColor: "coffee.main",
        display: "flex",
        flexDirection: "column",
        paddingTop: `${mobile ? "4rem" : "9rem"}`,
        paddingBottom: `${mobile ? "4rem" : "9rem"}`,
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          color: "water.main",
          maxWidth: `${
            mobile ? (cellphone ? "80%" : "23.375rem") : "48.875rem"
          }`,
        }}
      >
        <Typography fontWeight="600" fontSize={mobile ? "1.5rem" : "2rem"}>
          Olá, faça sua conta. É gratuito
        </Typography>
        <Typography
          pt={mobile ? "0.5rem" : "2rem"}
          pb={mobile ? "2rem" : "3rem"}
        >
          Cadastre-se na Orange Evolution e acesse as trilhas de acordo com o
          seu nível de conhecimento
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "vitamin.main",
          color: "water.main",
          height: "59.5rem",
          maxWidth: `${
            mobile ? (cellphone ? "80%" : "21.375rem") : "41.875rem"
          }`,
          width: "100%",
          margin: "auto",
          padding: `${mobile ? "1.5rem 1rem 2.5rem 1rem" : "3.5rem"}`,
          borderRadius: "8px",
          border: `1px solid`,
          borderColor: "milkshake.main",
        }}
      >
        <InputCustomized tipo='email' texto='Seu e-mail*' placeholder='exemplo@email.com'/>
        <InputCustomized tipo='usuario' texto='Seu nome*' placeholder='Nome e sobrenome'/>
        <InputCustomized tipo='senha' texto='Sua senha*' placeholder='*******'/>
        <InputCustomized tipo='senha' texto='Confirmação de sua senha*' placeholder='*******'/>
      </Box>
    </Box>
  );
};

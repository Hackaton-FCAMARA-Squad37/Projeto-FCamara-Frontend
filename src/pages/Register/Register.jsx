import { Typography, useMediaQuery, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { InputCustomized } from "../../components/InputCustomized/InputCustomized";

export const Register = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const cellphone = useMediaQuery("(max-width:480px)");
  const desktop = useMediaQuery('(max-width:1024px)')

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
            mobile ? (cellphone ? "88%" : "23.375rem") : "48.875rem"
          }`,
          width: `${desktop?'100%':'80%'}`
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
          maxWidth: `${
            mobile ? (cellphone ? "80%" : "21.375rem") : "41.875rem"
          }`,
          width: "100%",
          margin: "auto",
          padding: `${mobile ? "1.5rem 1rem 2.5rem 1rem" : "3.5rem"}`,
          borderRadius: "8px",
          border: `1px solid`,
          borderColor: "milkshake.main",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <InputCustomized
          tipo="email"
          texto="Seu e-mail*"
          id="email"
          placeholder="exemplo@email.com"
        />
        <InputCustomized
          tipo="usuario"
          texto="Seu nome*"
          id="nome"
          placeholder="Nome e sobrenome"
        />
        <InputCustomized
          tipo="senha"
          texto="Sua senha*"
          id="senha"
          placeholder="*********"
        />
        <InputCustomized
          tipo="senha"
          texto="Confirmação de sua senha*"
          id="senhaConfirmada"
          placeholder="*********"
        />
        <Typography sx={{
            marginBottom: `${mobile?'2rem':'3rem'}`
        }}>
          Ao se registrar, você aceita nossa
          <a
            target="_blank"
            href="https://fcamara-images.s3.amazonaws.com/site-fcamara/politica-privacidade.pdf"
            style={{
              color: "#F8F8F8",
              marginLeft: "4px",
              marginRight: "4px"
            }}
          >
            política de privacidade
          </a>
        </Typography>
        <Button
          variant="contained"
          sx={{
            height: `${mobile ? "3rem" : "3.5rem"}`,
            color: "vitamin.main",
            borderRadius: "8px",
            marginBottom: `${mobile?'2.375rem':'3.75rem'}`
          }}
        >
          <Typography
            color="vitamin.main"
            fontWeight="600"
            sx={{ fontSize: `${mobile ? "1rem" : "1.25rem"}` }}
          >
            Cadastrar
          </Typography>
        </Button>
        <Typography textAlign='center'>
          Tem uma conta?
          <Link
            to="/login"
            style={{
              color: "#F8F8F8",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          >
            Conecte-se
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

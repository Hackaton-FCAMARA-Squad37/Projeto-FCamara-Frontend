import { Typography, useMediaQuery, Box, Button } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BotaoGenerico } from "../../components/BotaoGenerico";
import { InputCustomized } from "../../components/InputCustomized/InputCustomized";
import { useState } from "react";

export const Register = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const cellphone = useMediaQuery("(max-width:480px)");
  const desktop = useMediaQuery("(max-width:1024px)");
  const emailRef = useRef(null);
  const senhaRef = useRef(null);
  const nomeRef = useRef(null);
  const senhaConfirmadaRef = useRef(null);
  const navigate = useNavigate();
  const [cadastroSucesso, setCadastroSucesso] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    await axios
      .post("https://orange-evolution-squad37.herokuapp.com/usuarios", {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      })
      .then(() => {
        setCadastroSucesso(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        setCadastroSucesso(false);
      });
  };

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
          width: `${desktop ? "100%" : "80%"}`,
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
          flexDirection: "column",
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputCustomized
          tipo="email"
          texto="Seu e-mail"
          id="email"
          placeholder="exemplo@email.com"
          reference={emailRef}
          register={register}
          error={errors.email}
        />

        <InputCustomized
          tipo="usuario"
          texto="Seu nome"
          id="nome"
          placeholder="Nome e sobrenome"
          reference={nomeRef}
          register={register}
          error={errors.nome}
        />

        <InputCustomized
          tipo="senha"
          texto="Sua senha"
          id="senha"
          placeholder="*********"
          reference={senhaRef}
          register={register}
          error={errors.senha}
        />

        <InputCustomized
          tipo="senha"
          texto="Confirmação de sua senha"
          id="senhaConfirmada"
          placeholder="*********"
          reference={senhaConfirmadaRef}
          register={register}
          error={errors.senha}
        />

        <Typography
          sx={{
            marginBottom: `${mobile ? "2rem" : "3rem"}`,
          }}
        >
          Ao se registrar, você aceita nossa
          <a
            target="_blank"
            href="https://fcamara-images.s3.amazonaws.com/site-fcamara/politica-privacidade.pdf"
            style={{
              color: "#F8F8F8",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          >
            política de privacidade
          </a>
        </Typography>
        <BotaoGenerico texto="Cadastrar" />
        {cadastroSucesso === null ? (
          ""
        ) : cadastroSucesso ? (
          <Typography
            textAlign="center"
            sx={{
              color: "#8CD867",
              marginTop: "1rem",
              fontWeight: 600,
              fontSize: mobile ? "1rem" : "1.25rem",
            }}
          >
            Usuário cadastrado com sucesso.
          </Typography>
        ) : (
          <Typography
            textAlign="center"
            sx={{
              color: "#FF3833",
              marginTop: "1rem",
              fontWeight: 600,
              fontSize: mobile ? "1rem" : "1.25rem",
            }}
          >
            Falha ao cadastrar usuário.
          </Typography>
        )}
        <Typography textAlign="center" sx={{ marginTop: "1.5rem" }}>
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

import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { InputCustomized } from "../../components/InputCustomized/InputCustomized";
import { BotaoGenerico } from "../../components/BotaoGenerico";
import useUserState from "../../hook/useUserState";
import axios from "axios";
import { useState } from "react";

export const AtualizarUsuario = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const cellphone = useMediaQuery("(max-width:480px)");
  const emailRef = useRef(null);
  const senhaRef = useRef(null);
  const nomeRef = useRef(null);
  const senhaConfirmadaRef = useRef(null);
  const loged = useUserState();
  const [alteraçãoSalva, setAlteraçãoSalva] = useState(false);

  console.log(loged);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.put(
      `https://orange-evolution-squad37.herokuapp.com/usuarios/${loged.id}`,
      {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      }
    );

    if (!response) {
      return;
    }

    setAlteraçãoSalva(true);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "coffee.main",
        paddingTop: `${mobile ? "4rem" : "9rem"}`,
        paddingBottom: `${mobile ? "4rem" : "9rem"}`,
        alignItems: "center",
        width: "100%",
        color: "water.main",
        gap: mobile ? "2.5rem" : "4rem",
        minWidth: "100%",
      }}
    >
      <Typography fontWeight="600" fontSize={mobile ? "1.5rem" : "2rem"}>
        Editar perfil
      </Typography>
      <Box
        sx={{
          backgroundColor: "vitamin.main",
          color: "water.main",
          maxWidth: `${
            mobile ? (cellphone ? "80%" : "21.375rem") : "41.875rem"
          }`,
          width: "100%",
          margin: mobile ? "" : "auto",
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

        <BotaoGenerico texto="Salvar alterações" />
        {alteraçãoSalva ? (
          <p
            style={{
              marginTop: "1rem",
              marginLeft: "auto",
              marginRight: "auto",
              fontFamily: "Raleway, sans-serif",
              fontWeight: 600,
            }}
          >
            Alteração salva com sucesso!
          </p>
        ) : (
          ""
        )}
      </Box>
    </Container>
  );
};
